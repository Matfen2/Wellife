import React from 'react'
import Nav from './Navbar'
import Show from './Show'
import Goal from './Goal'
import Begin from './Begin'
import Advice from './Advice'
import Footer from './Footer'
import Contact from './Contact'
import Offcanvas from './Offcanvas'

export default function App() {
  return (
    <div>
        <Show />
        <Nav />
        <Goal />
        <Begin />
        <Advice />
        <Footer />
        <Contact />
        <Offcanvas />
    </div>
  )
}
