module.exports = (req, res) => {
  res.json({ ok: true, now: Date.now() });
};
