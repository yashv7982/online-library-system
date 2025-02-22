import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import '../App.css';

const BrowseBooks = () => {
  const { category } = useParams();
  const books = useSelector(state => state.books.books);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = books.filter(book => {
    const matchesCategory = category ? book.category === category : true;
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container">
      <h1>Browse Books</h1>
      {category && <h2>Category: {category}</h2>}

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by title or author"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="book-list-grid">
        {filteredBooks.map(book => (
          <div className="book-card" key={book.id}>
            <img src={book.image} alt={book.title} />
            <div className="book-card-content">
              <h3>{book.title}</h3>
              <p>By {book.author}</p>
              <Link to={`/book/${book.id}`}>View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseBooks;
