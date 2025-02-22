# Online Library System

A web-based online library system built with Vite, React, React Router, and Redux. This project allows users to browse books by category, view detailed information for each book, add new books, and enjoy a dynamic home page with multiple book sections.

## Features

- **Home Page**
  - **Hero Section:** A welcoming banner with a call-to-action button to browse books.
  - **Book Categories:** Clickable categories that filter books.
  - **Multiple Book Sections:** Displays books under sections such as:
    - Popular Books
    - Recently Added
    - Most Liked
    - Trending
    - You Should Try

- **Browse Books**
  - Filter books by category using dynamic routing.
  - Search functionality to filter books by title or author.
  - Each book is displayed as a card with an image, title, and a link to view details.

- **Book Details**
  - Detailed view of the selected book, including its image, title, author, description, and rating.
  - A "Back to Browse" button for easy navigation.

- **Add Book**
  - A form to add a new book, complete with form validation.
  - State management using Redux to update the book list.
  - Upon submission, the user is redirected to the Browse Books page where the new book is visible.

- **404 Page**
  - A fallback page for undefined routes, with a link back to the Home page.

- **Navigation**
  - A stylish navbar featuring a gradient background, a clickable logo that redirects to the Home page, and links to other pages.

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/online-library-system.git
cd online-library-system


### 2. Install Dependencies
```bash
npm install


### 2. Start the Development Server
```bash
npm run dev



