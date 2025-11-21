import React, { useState } from "react";
import "./Allbooks.css";

const featuredBooks = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self-Improvement",
    cover: "https://covers.openlibrary.org/b/id/14453263-L.jpg",
  },
  {
    id: 2,
    title: "Wings of Fire",
    author: "A. P. J. Abdul Kalam",
    category: "Autobiography",
    cover: "https://covers.openlibrary.org/b/id/8406786-L.jpg",
  },
  {
    id: 3,
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Programming",
    cover: "https://covers.openlibrary.org/b/id/9611882-L.jpg",
  },
  {
    id: 4,
    title: "The Alchemist",
    author: "Paulo Coelho",
    category: "Fiction",
    cover: "https://covers.openlibrary.org/b/id/8231856-L.jpg",
  }
];

const allBooks = [
  ...featuredBooks,
  {
    id: 5,
    title: "Deep Work",
    author: "Cal Newport",
    category: "Productivity",
    cover: "https://covers.openlibrary.org/b/id/11153222-L.jpg",
  },
  {
    id: 6,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    category: "History",
    cover: "https://covers.openlibrary.org/b/id/10590339-L.jpg",
  },
  {
    id: 7,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    category: "Finance",
    cover: "https://covers.openlibrary.org/b/id/12917472-L.jpg",
  },
  {
    id: 8,
    title: "You Don’t Know JS",
    author: "Kyle Simpson",
    category: "Programming",
    cover: "https://covers.openlibrary.org/b/id/10403156-L.jpg",
  },
];

export default function Allbooks() {
  const [selected, setSelected] = useState(null);

  const openModal = (book) => setSelected(book);
  const closeModal = () => setSelected(null);

  const viewBook = (title, author) => {
    const q = encodeURIComponent(`${title} ${author} book`);
    window.open(`https://www.google.com/search?q=${q}`, "_blank");
  };

  return (
    <div className="books-bg">

      {/* SECTION 1 – Featured */}
      <section className="section-block">
        <h1 className="section-title">Explore Popular Books</h1>
        <div className="books-grid">
          {featuredBooks.map((book) => (
            <div key={book.id} className="book-box" onClick={() => openModal(book)}>
              <img src={book.cover} className="book-image" alt="" />
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">By {book.author}</p>
              <span className="book-category">{book.category}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION GAP */}
      <div className="section-gap"></div>

      {/* SECTION 2 – All Books */}
      <section className="section-block">
        <h1 className="section-title">All Books</h1>

        <div className="books-grid">
          {allBooks.map((book) => (
            <div key={book.id} className="book-box" onClick={() => openModal(book)}>
              <img src={book.cover} className="book-image" alt="" />
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">By {book.author}</p>
              <span className="book-category">{book.category}</span>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {selected && (
        <div className="modal-overlay">
          <div className="modal-box">
            <button className="close-btn" onClick={closeModal}>×</button>

            <div className="modal-flex">
              <img src={selected.cover} className="modal-image" alt="" />

              <div className="modal-details">
                <h2>{selected.title}</h2>
                <p className="modal-author">By {selected.author}</p>
                <p className="modal-category">{selected.category}</p>

                <button className="modal-btn" onClick={() => viewBook(selected.title, selected.author)}>
                  View / Access Book
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
