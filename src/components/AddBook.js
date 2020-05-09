import React, { useState } from 'react'
import LibraryContext from './../context/LibraryContext';
import { v4 as uuidv4 } from 'uuid';

export default function AddBook() {
    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')
    const uuid = uuidv4()
    return (
        <LibraryContext.Consumer>
            {(context) => (
                <div>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                    <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}/>
                    <button onClick={() => context.addBook({uuid, name, author})}>Add book</button>
                </div>
            )}
        </LibraryContext.Consumer>
    )
}
