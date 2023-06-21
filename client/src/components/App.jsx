import React from 'react'
import Nav from './Navbar'
import Show from './Show'
import Goal from './Goal'
import Begin from './Begin'
import Coach from './Coach'
import Footer from './Footer'
import Offcanvas from './Offcanvas'

export default function App() {
  return (
    <div>
        <Show />
        <Nav />
        <Goal />
        <Begin />
        <Coach />
        <Footer />
        <Offcanvas />
    </div>
  )
}
