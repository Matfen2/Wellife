import React from 'react'
import Nav from './Navbar'
import Show from './Show'
import Goal from './Goal'
import Advice from './Advice'
import Footer from './Footer'
import Offcanvas from './Offcanvas'

export default function App() {
  return (
    <div>
        <Show />
        <Nav />
        <Goal />
        <Advice />
        <Footer />
        <Offcanvas />
    </div>
  )
}
