import React from 'react'

export default function Footer() {
  return (
    <div>
        <div className="footer">
            <div className="socialMedia">
                <a href="#" class="fa fa-facebook"></a>
                <a href="#" class="fa fa-twitter"></a>
                <a href="#" class="fa fa-instagram"></a>
            </div>
            <p className='copyrigth'>© Wellife 2023</p>
            <button type='button' id='btnContact' data-bs-toggle="modal" data-bs-target="#contactCoach">CONTACT</button>
        </div>
    </div>
  )
}
