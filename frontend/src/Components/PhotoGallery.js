import React, { useState, useRef } from "react";
import "./PhotoGallery.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const galleryImages = [
  { id: 1, src: "https://picsum.photos/seed/library1/900/700", alt: "Students reading in the library" },
  { id: 2, src: "https://picsum.photos/seed/library2/900/700", alt: "Bookshelf and study table" },
  { id: 3, src: "https://picsum.photos/seed/library3/900/700", alt: "Library interior with warm lights" },
  { id: 4, src: "https://picsum.photos/seed/library4/900/700", alt: "Students discussing books" },
  { id: 5, src: "https://picsum.photos/seed/library5/900/700", alt: "Stacks of books closeup" },
  { id: 6, src: "https://picsum.photos/seed/library6/900/700", alt: "Reading corner with cushions" },
  { id: 7, src: "https://picsum.photos/seed/library7/900/700", alt: "Open books on a desk" },
  { id: 8, src: "https://picsum.photos/seed/library8/900/700", alt: "Group study in library" },
  { id: 9, src: "https://picsum.photos/seed/library9/900/700", alt: "Quiet study area" },
  { id: 10, src: "https://picsum.photos/seed/library10/900/700", alt: "Library corridor" },
];

const sampleBooks = [
  {
    id: 1,
    title: "Introduction to Algorithms",
    author: "Cormen, Leiserson, Rivest, Stein",
    cover: "https://picsum.photos/seed/book1/300/420",
    desc: "Comprehensive book on algorithms and data structures commonly used in computer science."
  },
  {
    id: 2,
    title: "You Don’t Know JS (ES6 & Beyond)",
    author: "Kyle Simpson",
    cover: "https://picsum.photos/seed/book2/300/420",
    desc: "In-depth guide to modern JavaScript concepts and best practices."
  },
  {
    id: 3,
    title: "Clean Code",
    author: "Robert C. Martin",
    cover: "https://picsum.photos/seed/book3/300/420",
    desc: "Best practices for writing maintainable and readable code."
  },
  {
    id: 4,
    title: "Learning React",
    author: "Alex Banks & Eve Porcello",
    cover: "https://picsum.photos/seed/book4/300/420",
    desc: "A hands-on guide to building modern web apps using React."
  },
  {
    id: 5,
    title: "MongoDB: The Definitive Guide",
    author: "Kristina Chodorow",
    cover: "https://picsum.photos/seed/book5/300/420",
    desc: "Practical guide to designing and scaling a MongoDB database."
  },
  {
    id: 6,
    title: "Power BI Cookbook",
    author: "Brett Powell",
    cover: "https://picsum.photos/seed/book6/300/420",
    desc: "Recipes for building effective dashboards and visualizations in Power BI."
  },
  {
    id: 7,
    title: "Operating System Concepts",
    author: "Silberschatz, Galvin, Gagne",
    cover: "https://picsum.photos/seed/book7/300/420",
    desc: "Core topics and concepts used in modern operating systems."
  },
  {
    id: 8,
    title: "Design Patterns: Elements of Reusable OO Software",
    author: "Gamma et al.",
    cover: "https://picsum.photos/seed/book8/300/420",
    desc: "Classic text on common software design patterns and their usage."
  }
];

export default function PhotoGallery() {
  const [showBooks, setShowBooks] = useState(false);
  const booksRef = useRef(null);

  const handleViewMore = () => {
    setShowBooks((prev) => !prev);
    // if opening, scroll to books section after state updates
    setTimeout(() => {
      if (!showBooks && booksRef.current) {
        booksRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150);
  };

  return (
    <section className="photogallery-container" aria-labelledby="photogallery-heading">
      <h2 id="photogallery-heading" className="photogallery-title">Photo Gallery</h2>

      <div className="photogallery-images" role="list">
        {galleryImages.map(img => (
          <div className="photogallery-image-wrap" key={img.id} role="listitem">
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width="100%"
              height="auto"
            />
          </div>
        ))}
      </div>

      <div className="photogallery-actions">
        <button
          onClick={handleViewMore}
          className="photogallery-button"
          aria-expanded={showBooks}
          aria-controls="book-list"
        >
          {showBooks ? "SHOW LESS" : "VIEW MORE"}
          <ArrowForwardIosIcon style={{ fontSize: 18, marginLeft: 8, transform: showBooks ? "rotate(90deg)" : "none", transition: "transform .2s" }} />
        </button>
      </div>

      <div
        id="book-list"
        ref={booksRef}
        className={`book-list ${showBooks ? "visible" : "hidden"}`}
        aria-hidden={!showBooks}
      >
        <h3 className="book-list-title">Browse Featured Books</h3>
        <div className="book-grid">
          {sampleBooks.map(book => (
            <article key={book.id} className="book-card" aria-labelledby={`book-${book.id}-title`}>
              <img className="book-cover" src={book.cover} alt={`${book.title} cover`} loading="lazy" />
              <div className="book-info">
                <h4 id={`book-${book.id}-title`} className="book-title">{book.title}</h4>
                <p className="book-author">{book.author}</p>
                <p className="book-desc">{book.desc}</p>
                <div className="book-actions">
                  <button className="btn-primary" aria-label={`View details of ${book.title}`}>View Details</button>
                  <button className="btn-outline" aria-label={`Borrow ${book.title}`}>Borrow</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
