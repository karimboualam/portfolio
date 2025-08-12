const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  let body = req.body;
  if (typeof body === "string") { try { body = JSON.parse(body); } catch (_) {} }
  const { firstName, lastName, phone, email, message } = body || {};
  if (!firstName || !email || !message) {
    return res.status(400).json({ ok: false, error: "Missing required fields" });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });

  const fullName = `${firstName}${lastName ? " " + lastName : ""}`;
  try {
    await transporter.sendMail({
      from: `"Portfolio" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO,
      replyTo: email,
      subject: `Nouveau message de ${fullName}`,
      text: [`De: ${fullName}`, `Email: ${email}`, `Téléphone: ${phone || "-"}`, "", "Message:", message].join("\n"),
    });
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error("[api/contact] error:", e);
    return res.status(500).json({ ok: false, error: "Email failed" });
  }
};
