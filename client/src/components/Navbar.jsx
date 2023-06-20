import React from 'react'
import WellifeLogo from '../picts/wellifeLogo.png'

export default function Navbar() {
  return (
    <div>
        <div className="presentSite">
            <div className="navbar navbar-expand-lg">
                <div className="navbar-brand">
                    <img src={WellifeLogo} className='img-fluid w-100' alt='wellifeLogo'/>
                </div>
                <button type='button' id='btnBars' data-bs-toggle="offcanvas" data-bs-target="#wellCanvas"><i class="fa-solid fa-bars"></i></button> 
                <ul className="navbar-nav">
                    <li className="nav-item"><a href="" className="nav-link">PROGRAMMES</a></li>
                    <li className="nav-item"><a href="" className="nav-link">RECETTES</a></li>
                    <li className="nav-item"><a href="" className="nav-link">ASTUCES</a></li>
                    <form>
                        <label for="search"></label>
                        <input type='text' name='search' placeholder='Cherchez' required />
                        <button type='submit' id='btnSearch'><i class="fa-solid fa-magnifying-glass"></i></button>
                    </form>
                </ul>
            </div>
        </div>
    </div>
  )
}
