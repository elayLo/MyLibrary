import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import LibraryContext from './context/LibraryContext';
import BooksList from './components/BooksList';
import AddBook from './components/AddBook';
import './main.sass'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [books, setBooks] = useState(
    () => {
      const localData = localStorage.getItem('books')
      return localData ? JSON.parse(localData) : []
    }
  ) 
  const addBook = ({name, author}) => {
    const id = uuidv4(); 
    const book = {id, name, author}
    setBooks(old => [book, ...old])
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
