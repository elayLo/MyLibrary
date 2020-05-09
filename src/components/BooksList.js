import React, { useContext } from 'react'
import LibraryContext from './../context/LibraryContext';


export default function BooksList() {
    return (
        <LibraryContext.Consumer>
            {(context) => (
                <div>
                    {
                        context.books.map(book => (
                            <div key={book.id}>
                                <p>{book.name}</p>
                                <p>{book.author}</p>
                                <button onClick={() => context.deleteBook(book.id)}>Delete</button>
                            </div>
                        ))
                    }
                </div>
            )}
        </LibraryContext.Consumer>

    )
}
