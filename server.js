require('dotenv').config({ path: '.env.local' });
const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, phone, email, message } = req.body || {};
  if (!firstName || !email || !message) {
    return res.status(400).json({ ok: false, error: 'Missing required fields' });
  }
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    const fullName = `${firstName}${lastName ? ' ' + lastName : ''}`;
    await transporter.sendMail({
      from: `"Portfolio" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO,
      replyTo: email,
      subject: `Nouveau message de ${fullName}`,
      text: [
        `De: ${fullName}`,
        `Email: ${email}`,
        `Téléphone: ${phone || '-'}`,
        '',
        'Message:',
        message
      ].join('\n'),
    });

    res.json({ ok: true });
  } catch (e) {
    console.error('[api/contact] error:', e);
    res.status(500).json({ ok: false, error: 'Email failed' });
  }
});

app.listen(5000, () => console.log('API locale: http://localhost:5000'));
