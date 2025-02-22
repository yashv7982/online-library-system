import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {
  // Add images for your popular books (or use data from Redux if you prefer).
  // For demonstration, we’ll keep these separate.
  const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Biography', 'Mystery'];
  const popularBooks = [
    {
      id: 1,
      title: 'The Great Gatsby',
      category: 'Fiction',
      image: 'https://m.media-amazon.com/images/I/81TLiZrasVL._UF1000,1000_QL80_.jpg'
    },
    {
      id: 2,
      title: '1984',
      category: 'Sci-Fi',
      image: 'https://m.media-amazon.com/images/I/612ADI+BVlL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: 3,
      title: 'Sapiens',
      category: 'Non-Fiction',
      image: 'https://m.media-amazon.com/images/I/713jIoMO3UL.jpg'
    }
  ];

  const recentlyAdded = [
    {
      id: 3,
      title: 'The Silent Patient',
      category: 'Mystery',
      image: 'https://m.media-amazon.com/images/I/81JJPDNlxSL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: 4,
      title: 'Atomic Habits',
      category: 'Non-Fiction',
      image: 'https://m.media-amazon.com/images/I/81F90H7hnML.jpg'
    }
  ];

  const mostLiked = [
    {
      id: 5,
      title: 'Pride and Prejudice',
      category: 'Fiction',
      image: 'https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_FMjpg_UX1000_.jpg'
    },
    {
      id: 6,
      title: 'Dune',
      category: 'Sci-Fi',
      image: 'https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg'
    }
  ];

  const trending = [
    {
      id: 7,
      title: 'The Midnight Library',
      category: 'Fiction',
      image: 'https://m.media-amazon.com/images/I/81J6APjwxlL.jpg'
    },
    {
      id: 8,
      title: 'Educated',
      category: 'Non-Fiction',
      image: 'https://m.media-amazon.com/images/I/71-4MkLN5jL._AC_UF1000,1000_QL80_.jpg'
    }
  ];

  const youShouldTry = [
    {
      id: 9,
      title: 'Norwegian Wood',
      category: 'Fiction',
      image: 'https://m.media-amazon.com/images/I/81zqVhvbHbL.jpg'
    },
    {
      id: 10,
      title: 'The Alchemist',
      category: 'Fiction',
      image: 'https://m.media-amazon.com/images/I/61HAE8zahLL._AC_UF1000,1000_QL80_.jpg'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to the Online Library</h1>
          <p>Discover thousands of books, explore different categories, and add your own favorites!</p>
          <Link to="/browse" className="hero-btn">Browse Books</Link>
        </div>
      </div>

      {/* Main Container */}
      <div className="container">
        {/* Categories */}
        <h2>Book Categories</h2>
        <ul className="categories-list">
          {categories.map(category => (
            <li key={category}>
              <Link to={`/books/${category}`}>{category}</Link>
            </li>
          ))}
        </ul>

        {/* Popular Books */}
        <h2>Popular Books</h2>
        <div className="book-list-grid">
          {popularBooks.map(book => (
            <div className="book-card" key={book.id}>
              <img src={book.image} alt={book.title} />
              <div className="book-card-content">
                <h3>{book.title}</h3>
                <p>{book.category}</p>
                <Link to={`/book/${book.id}`}>View Details</Link>
              </div>
            </div>
          ))}
        </div>

        {/* Recently Added */}
        <h2>Recently Added</h2>
        <div className="book-list-grid">
          {recentlyAdded.map(book => (
            <div className="book-card" key={book.id}>
              <img src={book.image} alt={book.title} />
              <div className="book-card-content">
                <h3>{book.title}</h3>
                <p>{book.category}</p>
                <Link to={`/book/${book.id}`}>View Details</Link>
              </div>
            </div>
          ))}
        </div>

        {/* Most Liked */}
        <h2>Most Liked</h2>
        <div className="book-list-grid">
          {mostLiked.map(book => (
            <div className="book-card" key={book.id}>
              <img src={book.image} alt={book.title} />
              <div className="book-card-content">
                <h3>{book.title}</h3>
                <p>{book.category}</p>
                <Link to={`/book/${book.id}`}>View Details</Link>
              </div>
            </div>
          ))}
        </div>

        {/* Trending */}
        <h2>Trending</h2>
        <div className="book-list-grid">
          {trending.map(book => (
            <div className="book-card" key={book.id}>
              <img src={book.image} alt={book.title} />
              <div className="book-card-content">
                <h3>{book.title}</h3>
                <p>{book.category}</p>
                <Link to={`/book/${book.id}`}>View Details</Link>
              </div>
            </div>
          ))}
        </div>

        {/* You Should Try */}
        <h2>You Should Try</h2>
        <div className="book-list-grid">
          {youShouldTry.map(book => (
            <div className="book-card" key={book.id}>
              <img src={book.image} alt={book.title} />
              <div className="book-card-content">
                <h3>{book.title}</h3>
                <p>{book.category}</p>
                <Link to={`/book/${book.id}`}>View Details</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};


export default Home;