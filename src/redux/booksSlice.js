import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      description: 'A classic novel set in the Jazz Age.',
      rating: 4.5,
      category: 'Fiction',
      image: 'https://m.media-amazon.com/images/I/81TLiZrasVL._UF1000,1000_QL80_.jpg'
    },
    {
      id: 2,
      title: '1984',
      author: 'George Orwell',
      description: 'Dystopian novel about a totalitarian regime.',
      rating: 4.7,
      category: 'Sci-Fi',
      image: 'https://m.media-amazon.com/images/I/612ADI+BVlL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: 3,
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      description: 'A brief history of humankind.',
      rating: 4.8,
      category: 'Non-Fiction',
      image: 'https://m.media-amazon.com/images/I/713jIoMO3UL.jpg'
    },
    {
      id: 4,
      title: 'The Silent Patient',
      author: 'Alex Michaelides',
      description: 'A psychological thriller about a woman’s act of violence against her husband.',
      rating: 4.2,
      category: 'Mystery',
      image: 'https://m.media-amazon.com/images/I/81JJPDNlxSL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: 5,
      title: 'Atomic Habits',
      author: 'James Clear',
      description: 'A guide to building good habits and breaking bad ones.',
      rating: 4.8,
      category: 'Non-Fiction',
      image: 'https://m.media-amazon.com/images/I/81F90H7hnML.jpg'
    },
    {
      id: 6,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      description: 'A classic romance novel set in the Regency era.',
      rating: 4.6,
      category: 'Fiction',
      image: 'https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_FMjpg_UX1000_.jpg'
    },
    {
      id: 7,
      title: 'Dune',
      author: 'Frank Herbert',
      description: 'A science fiction epic set on a desert planet.',
      rating: 4.7,
      category: 'Sci-Fi',
      image: 'https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg'
    },
    {
      id: 8,
      title: 'The Midnight Library',
      author: 'Matt Haig',
      description: 'A novel about the infinite possibilities of life choices.',
      rating: 4.5,
      category: 'Fiction',
      image: 'https://m.media-amazon.com/images/I/81J6APjwxlL.jpg'
    },
    {
      id: 9,
      title: 'Educated',
      author: 'Tara Westover',
      description: 'A memoir about a woman who grows up in a strict and abusive household in rural Idaho.',
      rating: 4.7,
      category: 'Non-Fiction',
      image: 'https://m.media-amazon.com/images/I/71-4MkLN5jL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: 10,
      title: 'Norwegian Wood',
      author: 'Haruki Murakami',
      description: 'A poignant story of loss and burgeoning love in 1960s Japan.',
      rating: 4.3,
      category: 'Fiction',
      image: 'https://m.media-amazon.com/images/I/81zqVhvbHbL.jpg'
    },
    {
      id: 11,
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      description: 'A philosophical story about a shepherd’s journey to the pyramids of Egypt.',
      rating: 4.2,
      category: 'Fiction',
      image: 'https://m.media-amazon.com/images/I/61HAE8zahLL._AC_UF1000,1000_QL80_.jpg'
    }
  ]
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    }
  }
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
