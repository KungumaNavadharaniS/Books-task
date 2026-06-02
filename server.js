const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

let books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear"
  }
];

app.get("/", (req, res) => {
  res.send("Book API Running Successfully");
});

app.get("/books", (req, res) => {
  res.json(books);
});

app.post("/books", (req, res) => {
  const { title, author } = req.body;

  const newBook = {
    id: books.length + 1,
    title,
    author
  };

  books.push(newBook);

  res.status(201).json(newBook);
});

app.put("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const book = books.find(b => b.id === id);

  if (!book) {
    return res.status(404).json({
      message: "Book not found"
    });
  }

  book.title = req.body.title;
  book.author = req.body.author;

  res.json(book);
});

app.delete("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);

  books = books.filter(b => b.id !== id);

  res.json({
    message: "Book deleted successfully"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});