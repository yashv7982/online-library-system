import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const books = useSelector(state => state.books.books);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    rating: '',
    category: '',
    image: '' // NEW FIELD
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.title) tempErrors.title = "Title is required";
    if (!formData.author) tempErrors.author = "Author is required";
    if (!formData.description) tempErrors.description = "Description is required";
    if (!formData.rating || isNaN(formData.rating) || formData.rating < 0 || formData.rating > 5)
      tempErrors.rating = "Rating must be a number between 0 and 5";
    if (!formData.category) tempErrors.category = "Category is required";
    if (!formData.image) tempErrors.image = "Image URL is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const newBook = {
        ...formData,
        id: books.length ? books[books.length - 1].id + 1 : 1,
        rating: parseFloat(formData.rating)
      };
      dispatch(addBook(newBook));
      navigate('/browse');
    }
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  return (
    <div className="container">
      <h1>Add a New Book</h1>
      <form onSubmit={handleSubmit} className="add-book-form">
        <div className="form-field">
          <label>Title:</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
          {errors.title && <span className="error">{errors.title}</span>}
        </div>

        <div className="form-field">
          <label>Author:</label>
          <input type="text" name="author" value={formData.author} onChange={handleChange} />
          {errors.author && <span className="error">{errors.author}</span>}
        </div>

        <div className="form-field">
          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleChange} />
          {errors.description && <span className="error">{errors.description}</span>}
        </div>

        <div className="form-field">
          <label>Rating (0-5):</label>
          <input type="number" name="rating" value={formData.rating} onChange={handleChange} />
          {errors.rating && <span className="error">{errors.rating}</span>}
        </div>

        <div className="form-field">
          <label>Category:</label>
          <input type="text" name="category" value={formData.category} onChange={handleChange} />
          {errors.category && <span className="error">{errors.category}</span>}
        </div>

        {/* NEW IMAGE FIELD */}
        <div className="form-field">
          <label>Image URL:</label>
          <input type="text" name="image" value={formData.image} onChange={handleChange} />
          {errors.image && <span className="error">{errors.image}</span>}
        </div>

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
