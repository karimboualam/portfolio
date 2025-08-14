const nodemailer = require("nodemailer");
const isEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(s||"").trim());

module.exports = async (req, res) => {
  try {
    if (req.method !== "POST") return res.status(405).json({ ok:false, error:"Method not allowed" });

    const body = typeof req.body === "string" ? JSON.parse(req.body) : (req.body || {});
    const { firstName, lastName, phone, email, message } = body;

    if (!firstName || !email || !message) return res.status(400).json({ ok:false, error:"Missing required fields" });
    if (!isEmail(email))        return res.status(400).json({ ok:false, error:"Invalid email" });

    const need = ["SMTP_HOST","SMTP_PORT","SMTP_USER","SMTP_PASS","SMTP_FROM","SMTP_TO"];
    const miss = need.filter(k => !process.env[k]);
    if (miss.length) {
      console.error("[api/contact] missing env:", miss);
      return res.status(500).json({ ok:false, error:`Missing env: ${miss.join(", ")}` });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT) === 465, // 465 = SSL
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    // (optionnel) vérifie la connexion SMTP
    await transporter.verify().catch(e => console.error("[api/contact] verify:", e));

    const fullName = `${firstName}${lastName ? " " + lastName : ""}`;
    const mail = {
      from: `"Portfolio" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO,
      subject: `Nouveau message de ${fullName}`,
      text: [
        `De: ${fullName}`,
        `Email: ${email}`,
        `Téléphone: ${phone || "-"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    };
    if (isEmail(email)) mail.replyTo = email;

    await transporter.sendMail(mail);
    return res.status(200).json({ ok:true });
  } catch (e) {
    console.error("[api/contact] error:", e);
    return res.status(500).json({ ok:false, error:"Email failed" });
  }
};
