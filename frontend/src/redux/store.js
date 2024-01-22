import { configureStore } from '@reduxjs/toolkit'
import booksReducer from './books/reduser'

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
})

export default store
