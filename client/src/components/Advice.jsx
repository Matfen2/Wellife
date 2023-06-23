import React, { useState } from "react";

export default function Advice() {
  const [showPoints1, setShowPoints1] = useState(false);
  const [showPoints2, setShowPoints2] = useState(false);
  const [showPoints3, setShowPoints3] = useState(false);
  const togglePoints1 = () => {
    setShowPoints1(!showPoints1);
  };

  const togglePoints2 = () => {
    setShowPoints2(!showPoints2);
  };

  const togglePoints3 = () => {
    setShowPoints3(!showPoints3);
  };

  return (
    <div>
      <div className="advice">
        <div className="containAdvice">
          <p>
            Les Astuces les plus utilisées de nos clients qui ont suivi le
            programme Wellife :
          </p>
          <div className="listAdvice">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <div className="rule">
                      <p>Faire du Sport régulièrement :</p>
                      <i
                        className={`fa-solid ${
                          showPoints1 ? "fa-circle-minus" : "fa-circle-plus"
                        }`}
                        id="btnPlus1"
                        onClick={togglePoints1}
                      ></i>
                    </div>
                    {showPoints1 && (
                      <div className="points">
                        <ul className="strongPoints">
                          <p className="strong">
                            Limite les risques de maladie cardiovasculaire
                          </p>
                          <p className="strong">Renforcer l'endormissement</p>
                          <p className="strong">Elimine le stress mental</p>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <div className="rule">
                      <p>Eviter les sucres industriels :</p>
                      <i
                        className={`fa-solid ${
                          showPoints2 ? "fa-circle-minus" : "fa-circle-plus"
                        }`}
                        id="btnPlus2"
                        onClick={togglePoints2}
                      ></i>
                    </div>
                    {showPoints2 && (
                      <div className="points">
                        <ul className="strongPoints">
                          <p className="strong">Evitez le saute d'humeur d'où le breakEnergy</p>
                          <p className="strong">
                            Evitez la prise de poids
                          </p>
                          <p className="strong">Evitez la fatigue chronique, le mal de tete</p>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <div className="rule">
                      <p>Ecoutez son corps :</p>
                      <i
                        className={`fa-solid ${
                          showPoints3 ? "fa-circle-minus" : "fa-circle-plus"
                        }`}
                        id="btnPlus3"
                        onClick={togglePoints3}
                      ></i>
                    </div>
                    {showPoints3 && (
                      <div className="points">
                        <ul className="strongPoints">
                          <p className="strong">Etre bien dans sa peau</p>
                          <p className="strong">Limite les risques de burn-out, la drépression</p>
                          <p className="strong">Faire ce qui vous plait</p>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
