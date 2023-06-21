import React from 'react'


export default function Show() {
  return (
    <div>
        <div className="present">
            <div className="contain">
              <div className="row">
                <div className="col-lg-8">
                  
                </div>
                <div className="col-lg-4">
                  <p className='updateLife'>Améliorer votre santé avec une alimentation saine et énergétique.</p>
                  <p className='moreEnergy'>Vous voulez améliorer votre vie, faire ce que vous avez envie de faire en ayant plein d'énergie.</p>
                  <div className="listProfil">
                    <form action='/inscribe' method='POST'>
                      <label for='name'></label>
                      <input type='text' name='name' placeholder='Votre Nom' required />

                      <label for='email'></label>
                      <input type='email' name='eamil' placeholder='Votre E-mail' required />
                    </form>
                    <button type='submit' id='btnSend'>ENVOYER</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}
