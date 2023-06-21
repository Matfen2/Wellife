import React from 'react'

export default function Goal() {
  return (
    <div>
        <div className="goal">
            <div className="goalHead">
                <p>Le but de Wellife :</p>
                <hr></hr>
            </div>
            <div className="goalBody">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <i class="fa-sharp fa-solid fa-burger-lettuce"></i>
                        <p>Manger sainement sans se priver</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <i class="fa-solid fa-face-smile"></i>
                        <p>Connaitre le gout de la vie</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <i class="fa-solid fa-bolt"></i>
                        <p>Avoir de l'énergie sans l'effet BreakEnergy</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
