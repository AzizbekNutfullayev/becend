const pool = require('../config/db')

exports.getBooks = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM Books');
    res.json(result.rows); // faqat .rows olish kerak
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Serverda xatolik yuz berdi" });
  }
};

