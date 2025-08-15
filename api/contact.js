// /api/contact.js
const nodemailer = require("nodemailer");
const isEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(s || "").trim());

module.exports = async (req, res) => {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ ok: false, error: "Method not allowed" });
    }

    const body = typeof req.body === "string" ? JSON.parse(req.body) : (req.body || {});
    const { firstName, lastName, phone, email, message } = body;

    if (!firstName || !email || !message) {
      return res.status(400).json({ ok: false, error: "Missing required fields" });
    }
    if (!isEmail(email)) {
      return res.status(400).json({ ok: false, error: "Invalid email" });
    }

    // Vérif variables (sans afficher les valeurs)
    const need = ["SMTP_HOST","SMTP_PORT","SMTP_USER","SMTP_PASS","SMTP_FROM","SMTP_TO"];
    const miss = need.filter(k => !process.env[k]);
    if (miss.length) {
      console.error("[api/contact] missing env:", miss);
      return res.status(500).json({ ok:false, error:`Missing env: ${miss.join(", ")}` });
    }

    // Transporteur Gmail fiable sur Vercel
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,                 // SSL obligatoire sur 465
      auth: {
        type: "login",              // explicite, évite l’auto-détection
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      },
      tls: { servername: "smtp.gmail.com" } // évite SNI bizarres
    });

    // (facultatif) debug connexion SMTP dans les logs Vercel
    try { await transporter.verify(); }
    catch (e) { console.error("[api/contact] verify:", e.message || e); }

    const fullName = `${firstName}${lastName ? " " + lastName : ""}`;
    const mail = {
      from: `"Portfolio" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`, // = SMTP_USER (Gmail exige)
      to: process.env.SMTP_TO,
      subject: `Nouveau message de ${fullName}`,
      text: [
        `De: ${fullName}`,
        `Email: ${email}`,
        `Téléphone: ${phone || "-"}`,
        "",
        "Message:",
        message
      ].join("\n"),
      replyTo: email // on sait qu’il est valide grâce au regex
    };

    await transporter.sendMail(mail);
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error("[api/contact] error:", e && (e.response?.toString() || e.message) || e);
    return res.status(500).json({ ok:false, error:"Email failed" });
  }
};
