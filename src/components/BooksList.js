import React, { useContext } from 'react'
import LibraryContext from './../context/LibraryContext';


export default function BooksList() {
    return (
        <LibraryContext.Consumer>
            {(context) => (
                <div className="books">
                    <div className="books__title">
                        <p>Your books</p>
                    </div>
                    {
                        context.books.map(book => (
                            <div key={book.id} className="books__child">
                                <div>
                                    <p>Book's name:</p>
                                    <p>{book.name}</p>
                                </div>
                                <div>
                                    <p>Book's author:</p>
                                    <p>{book.author}</p>
                                </div>
                                <button onClick={() => context.deleteBook(book.id)}>Delete</button>
                            </div>
                        ))
                    }
                </div>
            )}
        </LibraryContext.Consumer>

    )
}
