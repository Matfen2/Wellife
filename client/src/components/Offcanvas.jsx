import React from 'react'

export default function Offcanvas() {
  return (
    <div>
        <div className="offcanvas offcanvas-end" id='wellCanvas'>
            <div className="offcanvas-body">
                <button type='button' id='btnCloseMoove' data-bs-dismiss="offcanvas"><i class="fa-solid fa-xmark"></i></button>
                <div className="containNav">
                    <div className="navbar-nav">
                        <li className='nav-item'><a href='#' className='nav-link'>PROGRAMMES</a></li>
                        <li className='nav-item'><a href='#' className='nav-link'>RECETTES</a></li>
                        <li className='nav-item'><a href='#' className='nav-link'>ASTUCES</a></li>
                        <form>
                            <label for="search"></label>
                            <input type='text' name='search' placeholder='Cherchez' required />
                            <button type='submit' id='btnSearch'><i class="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}