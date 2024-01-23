import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { dltBook } from '../../redux/books/actionCreators'
import './BookList.css'

const BookList = () => {
  const books = useSelector((state) => state.books)
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(dltBook(id))
  }

  return (
    <div className="app-block book-list">
      <h2>BookList</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {books.map((book, i) => (
            <li key={book.id}>
              <div className="book-info">
                {++i}. {book.title} by <strong>{book.author}</strong>
              </div>
              <div className="book-actions">
                <button onClick={() => handleDelete(book.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default BookList
