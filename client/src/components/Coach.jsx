import React, { useState } from 'react'
import jackTeam from '../picts/coach/jackTeam.jpg'
import jackTeamLogo from '../picts/coach/jackTeamLogo.png'
import bMoove from '../picts/coach/bMoove.png'
import bMooveLogo from '../picts/coach/bMooveLogo.jpg'
import alexandreAuffret from '../picts/coach/alexandreAuffret.png'
import alexandreAuffretLogo from '../picts/coach/alexandreAuffretLogo.png'

export default function Coach() {
  const [coach, setCoach] = useState('');

  return (
    <div>
        <div className="themCoach">
          <div className="card">
            <div className="card-body">
              <div className="containCoach">
                {coach === 0 && (
                  <div className='row'>
                    <div className="col-lg-4">
                      <img src={jackTeam} className='img-fluid w-100 coach1' alt='pictCoach'/>
                    </div>
                    <div className="col-lg-8">
                      <p className='nameCoach'>Jack's Team</p>
                      <p className='describeCoach'>" J'ai aidé des milliers de personnes à changer 
                      leur alimentation dans mes salles de sport, mes programmes en ligne et les 
                      séminaires que j'ai donné dans plusieurs pays francophones. Mes vidéos sur 
                      l'alimentation anti inflammatoire cumulent plus de 6 millions de vue sur Youtube.
                      Cette alimentation a radicalement changé ma vie et j'ai envie de vous en faire profiter vous aussi. "</p>
                      <p className='hrefCoach'><a href='https://jacksteam.systeme.io/f52a50ca-4380b981'>Lien du site : "https://jacksteam.systeme.io/f52a50ca-4380b981"</a></p>
                    </div>
                  </div>
                  )
                }
                {coach === 1 && (
                  <div className='row'>
                    <div className="col-lg-4">
                      <img src={bMoove} className='img-fluid w-100 coach2' alt='pictCoach'/>
                    </div>
                    <div className="col-lg-8">
                      <p className='nameCoach'>bMoove</p>
                      <p className='describeCoach'>" Votre source d/inspiration quotidienne pour booster votre santé,
                      et avoir une vie plus saine, pleine d/énergie et de vitalité ! "</p>
                      <p className='hrefCoach'><a href="https://www.bmoove.com">Lien du site : "https://www.bmoove.com"</a></p>
                    </div>
                  </div>
                  )
                }
                {coach === 2 && (
                  <div className='row'>
                    <div className="col-lg-4">
                      <img src={alexandreAuffret} className='img-fluid w-100 coach3' alt='pictCoach'/>
                    </div>
                    <div className="col-lg-8">
                      <p className='nameCoach'>Alex. Auffret</p>
                      <p className='describeCoach'>" Une alimentation saine et équilibrée permet de maintenir et d'améliorer sa santé, en fournissant à notre organisme tous les nutriments essentiels. Cela permet également de réduire les risques de maladies chroniques, de cancer, de maladies cardio vasculaires, de diabète... "</p>
                      <p className='hrefCoach'><a href="https://toutpourmasante.fr">Lien du site : "https://toutpourmasante.fr"</a></p>
                    </div>
                  </div>
                  )
                }
              </div>
              <div className="listCoach">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <img src={jackTeamLogo} className='img-fluid w-100 coachLogo1' onClick={() => setCoach(0)} alt='coachLogo'/>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <img src={bMooveLogo} className='img-fluid w-100 coachLogo2' onClick={() => setCoach(1)} alt='coachLogo'/>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <img src={alexandreAuffretLogo} className='img-fluid w-100 coachLogo3' onClick={() => setCoach(2)} alt='coachLogo'/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
