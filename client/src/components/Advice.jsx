import React from 'react'

export default function Advice() {
  return (
    <div>
        <div className="advice">
            <div className="containAdvice">
                <p>Les Astuces les plus utilisés de nos clients qui ont le suivi le programme Wellife :</p>
                <div className="listAdvice">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="rule">
                                        <p>Faire du Sport régulièrement :</p>
                                        <i class="fa-solid fa-circle-plus"></i>
                                    </div>
                                    <div className="points">
                                        <ul className="strongPoints">
                                            <li>Limte les risques de maladie cardiovasculaire</li>
                                            <li>Renforcer l'endormissement</li>
                                            <li>Elimine le stress mental</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="rule">
                                        <p>Eviter les sucres industrielles :</p>
                                        <i class="fa-solid fa-circle-plus"></i>
                                    </div>
                                    <div className="points">
                                        <ul className="strongPoints">
                                            <li>Limte les risques de maladie cardiovasculaire</li>
                                            <li>Renforcer l'endormissement</li>
                                            <li>Elimine le stress mental</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="rule">
                                        <p>Ecoutez plus votre corps :</p>
                                        <i class="fa-solid fa-circle-plus"></i>
                                    </div>
                                    <div className="points">
                                        <ul className="strongPoints">
                                            <li>Limte les risques de maladie cardiovasculaire</li>
                                            <li>Renforcer l'endormissement</li>
                                            <li>Elimine le stress mental</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
    </div>
  )
}
