const nodemailer = require("nodemailer");

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

    // Vérif env (évite les 500 silencieux)
    const required = ["SMTP_HOST","SMTP_PORT","SMTP_USER","SMTP_PASS","SMTP_FROM","SMTP_TO"];
    const missing = required.filter(k => !process.env[k]);
    if (missing.length) {
      console.error("[api/contact] missing env:", missing);
      return res.status(500).json({ ok:false, error:`Missing env: ${missing.join(", ")}` });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT) === 465, // 465 = SSL
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    const fullName = `${firstName}${lastName ? " " + lastName : ""}`;
    await transporter.sendMail({
      from: `"Portfolio" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO,
      replyTo: email,
      subject: `Nouveau message de ${fullName}`,
      text: [
        `De: ${fullName}`,
        `Email: ${email}`,
        `Téléphone: ${phone || "-"}`,
        "",
        "Message:",
        message
      ].join("\n"),
    });

    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error("[api/contact] error:", e);
    return res.status(500).json({ ok:false, error: String(e && e.message || e) });
  }
};
