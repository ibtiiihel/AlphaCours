import React from 'react'
import './Acceuil.css'
import Navbar from '../cmponents/Navbar'
import Footer from '../cmponents/Footer'
import Annonce from '../cmponents/Annonce'

const Acceuil = () => {
  return (
    <div>
        <Navbar/>
        <Annonce/>
        <div className='body'>

        </div>
        <Footer/>
    </div>
  )
}

export default Acceuil