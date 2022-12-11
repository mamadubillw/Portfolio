import React from 'react'
 
import { About, Footer, Header, Skill, Testimonials, Work } from './container'
import { Navbar } from './components';
import './App.scss';
const App = () => {

  return (
    <div className='app'>
     <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skill/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App
