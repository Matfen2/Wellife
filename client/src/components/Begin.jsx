import React from 'react'
import foodDiet from '../picts/platDiet.png'

export default function Begin() {
  return (
    <div>
        <div className="begin">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4">
                    <p className='beginDiet'>Commencez votre régime anti-<br></br>inflammatoire dès maintenant</p>
                    <button type='button' id='btnBegin'><a href='../src/Guide AAI.pdf' download>COMMENCER <i class="fa-solid fa-download"></i></a></button>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-8">
                    <img src={foodDiet} className='img-fluid w-100' alt='pictDietFood'/>
                </div>
            </div>
        </div>
    </div>
  )
}
