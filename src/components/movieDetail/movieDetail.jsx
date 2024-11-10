import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './movieDetail.css'

function MovieDetail() {
  const { id } = useParams()
  const [movieDetails, setMovieDetail] = useState(null)

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await fetch(
          `https://dragonball-api.com/api/characters/${id}`
        )
        const data = await response.json()
        setMovieDetail(data)
      } catch (error) {
        console.error('Error fetching details:', error)
      }
    }
    fetchMovieDetail()
  }, [id])

  return (
    <div className='movie-detail'>
      {movieDetails ? (
        <>
          <h1>{movieDetails.name}</h1>
          <img src={movieDetails.image} alt={movieDetails.name} />
          <h2>Origen:</h2>
          <p>{movieDetails.race}</p>
          <h2>Descripción:</h2>
          <p>{movieDetails.description}</p>
        </>
      ) : (
        <p>Cargando detalles...</p>
      )}
    </div>
  )
}

export default MovieDetail
