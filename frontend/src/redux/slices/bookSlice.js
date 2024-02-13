import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { createBookWithId } from '../../utils/createBookWithId'

const initialState = []

export const fetchBook = createAsyncThunk('books/fetchBook', async () => {
  const res = await axios.get('http://localhost:4000/random-book')
  return res.data
})

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload)
    },

    dltBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload)
    },

    toggleFavorite: (state, action) => {
      state.forEach((book) => {
        if (book.id === action.payload) {
          book.isFavorite = !book.isFavorite
        }
      })
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      if (action.payload.title && action.payload.author) {
        state.push(createBookWithId(action.payload, 'API'))
      }
    })
  },
})

export const { addBook, dltBook, toggleFavorite } = bookSlice.actions

export const selectBooks = (state) => state.books

export default bookSlice.reducer
