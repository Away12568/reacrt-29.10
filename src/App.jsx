import React from 'react'
import "./App.scss"
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Catalog from './components/catalog/Catalog'
import Work from './components/Work/Work'
import Profile from './components/profile/Profile'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Card from './components/catalog-prof/card'
import Experience from './components/Experience/Experience'
import Present from './components/Present/Present'
import Clients from './components/Clients/Clients'
import Worlxxl from './Worlxxl/Worlxxl'



const App = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Catalog/>
      <Work/>
      <Footer/>
      <Profile/>
      <Card/>
      <About/>
      <Experience/>
      <Present/>
      <Experience/>
      <Clients/>
      <Work/>
      <Footer/>
      <Worlxxl/>
      <Footer/>
    </>
  )
}

export default App
