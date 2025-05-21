const pool = require('../config/db')


exports.addBook = async (req, res) => {
  const { book_id, title, author_name, genre, published_year, available, img } = req.body;

  if (!book_id || !title || !author_name) {
    return res.status(400).json({ message: "book_id, title va author_name majburiy" });
  }

  try {
    // Avval shu book_id bilan kitob bor-yo'qligini tekshiramiz
    const checkQuery = 'SELECT * FROM Books WHERE book_id = $1';
    const result = await pool.query(checkQuery, [book_id]);

    if (result.rows.length > 0) {
      return res.status(400).json({ message: `Book ID ${book_id} bilan kitob allaqachon mavjud.` });
    }

    const insertQuery = `
      INSERT INTO Books (book_id, title, author_name, genre, published_year, available, img)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
    `;

    await pool.query(insertQuery, [book_id, title, author_name, genre, published_year, available, img]);

    res.status(201).json({ book_id, title, author_name, genre, published_year, available, img });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Serverda xatolik yuz berdi" });
  }
};
