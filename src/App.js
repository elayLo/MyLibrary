import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import LibraryContext from './context/LibraryContext';
import BooksList from './components/BooksList';
import AddBook from './components/AddBook';

function App() {
  const [books, setBooks] = useState(
    () => {
      const localData = localStorage.getItem('books')
      return localData ? JSON.parse(localData) : []
    }
  ) 
  const addBook = (book) => {
    setBooks(old => [...old, book])
  }
  const deleteBook = (bookId) => {
    setBooks(books.filter(book => book.id !== bookId))
  }

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  }, [books])
  return (
    <LibraryContext.Provider value={{
      books: books,
      addBook: addBook,
      deleteBook: deleteBook
    }}>
      <div className="App">
        <Navbar />
        <AddBook/>
        <BooksList/>
      </div>
    </LibraryContext.Provider>

  );
}

export default App;
