import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import '../App.css'; // Import your CSS (if you use a single global file)

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = useSelector(state =>
    state.books.books.find(b => b.id === parseInt(id))
  );

  if (!book) {
    return (
      <div className="container">
        <h2>Book not found!</h2>
        <Link to="/browse">Back to Browse</Link>
      </div>
    );
  }

  return (
    <div className="book-details-container">
      <div className="book-details-card">
        <img 
          src={book.image} 
          alt={book.title} 
          className="book-details-image"
        />
        <div className="book-details-info">
          <h1>{book.title}</h1>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Description:</strong> {book.description}</p>
          <p><strong>Rating:</strong> {book.rating}</p>
          <button onClick={() => navigate(-1)}>Back to Browse</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
