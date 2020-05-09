import React, { useState, useContext } from 'react'
import LibraryContext from './../context/LibraryContext';

export default function AddBook() {
    const context = useContext(LibraryContext)
    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')
    const onSubmit = () => {
        if(name && author) {
            context.addBook({ name, author })
        } else {
            return null
        }
        setName('')
        setAuthor('')
    }
    return (
        <LibraryContext.Consumer>
            {(context) => (
                <div className="add-book">
                    <form onSubmit={onSubmit}>
                        <div>
                            <div>
                                <label htmlFor="">Book</label>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Book's name" />
                            </div>
                            <div>
                                <label htmlFor="">Author</label>
                                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Book's author" />
                            </div>
                        </div>
                        <button type="submit" onClick={(e) => {e.preventDefault(); onSubmit()}}>Add book</button>
                    </form>

                </div>
            )}
        </LibraryContext.Consumer>
    )
}
