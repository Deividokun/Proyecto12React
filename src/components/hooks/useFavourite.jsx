import { useEffect, useReducer } from 'react'

const initialState = JSON.parse(localStorage.getItem('favorites')) || []

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [...state, action.payload]
    case 'REMOVE_FAVORITE':
      return state.filter((item) => item.id !== action.payload.id)
    case 'SET_FAVORITES':
      return action.payload
    default:
      return state
  }
}

export const useFavorites = () => {
  const [favorites, dispatch] = useReducer(favoritesReducer, initialState)

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const toggleFavorite = (item) => {
    const isFavorite = favorites.some((fav) => fav.id === item.id)
    dispatch({
      type: isFavorite ? 'REMOVE_FAVORITE' : 'ADD_FAVORITE',
      payload: item
    })
  }

  return { favorites, toggleFavorite }
}
