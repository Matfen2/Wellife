import React from 'react'
import Nav from './Navbar'
import Show from './Show'
import Goal from './Goal'
import Begin from './Begin'
import Coach from './Coach'
import Advice from './Advice'
import Offcanvas from './Offcanvas'

export default function App() {
  return (
    <div>
        <Show />
        <Nav />
        <Goal />
        <Begin />
        <Coach />
        <Advice />
        <Offcanvas />
    </div>
  )
}
