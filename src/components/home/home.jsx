import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useFavorites } from '../hooks/useFavourite'
import './home.css'

function Home() {
  const [movies, setMovies] = useState([])
  const { favorites, toggleFavorite } = useFavorites()

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          'https://dragonball-api.com/api/characters'
        )
        const data = await response.json()
        setMovies(data.items)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchMovies()
  }, [])

  return (
    <section className='character-list'>
      {movies.map((movie) => (
        <article className='card' key={movie.id}>
          <div className='card-content'>
            <Link to={`/MovieDetail/${movie.id}`}>
              <h2>{movie.name}</h2>
              <img src={movie.image} alt={`Imagen de ${movie.name}`} />
            </Link>
            <button onClick={() => toggleFavorite(movie)}>
              {favorites.some((fav) => fav.id === movie.id)
                ? 'Eliminar de favoritos'
                : 'Añadir a favoritos'}
            </button>
          </div>
        </article>
      ))}
    </section>
  )
}

export default Home
