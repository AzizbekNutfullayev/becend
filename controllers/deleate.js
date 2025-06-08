const pool = require('../config/db');

exports.delate = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query("DELETE FROM books WHERE book_id = $1 RETURNING *", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Kitob topilmadi' });
    }

    res.status(200).json({ message: 'Kitob muvaffaqiyatli o‘chirildi' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Serverda xatolik yuz berdi" });
  }
};
