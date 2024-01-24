import * as a from './actionTypes'

export const addBook = (newBook) => {
  return {
    type: a.ADD_BOOK,
    payload: newBook,
  }
}

export const dltBook = (id) => {
  return {
    type: a.DLT_BOOK,
    payload: id,
  }
}

export const toggleFavorite = (id) => {
  return {
    type: a.TOGGLE_FAVORITE,
    payload: id,
  }
}