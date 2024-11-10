import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Favourite from '../src/components/favoritos/favourite'
import Home from '../src/components/home/home'
import Header from '../src/Header/Header'
import MovieDetail from './components/movieDetail/movieDetail'
import Register from './components/register/register'

function App() {
  const [isRegistered, setIsRegistered] = useState(false)
  const navigate = useNavigate()

  const handleRegister = () => {
    setIsRegistered(true)
    navigate('/')
  }

  return (
    <div>
      {!isRegistered ? (
        <Register onRegister={handleRegister} />
      ) : (
        <>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Favourite' element={<Favourite />} />
            <Route path='/MovieDetail/:id' element={<MovieDetail />} />
          </Routes>
        </>
      )}
    </div>
  )
}

export default App
