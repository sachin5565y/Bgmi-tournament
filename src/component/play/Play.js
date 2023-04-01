import React from 'react'
import './play.css'
import IMG1 from '../../assets/erangel.jpg'
import IMG2 from '../../assets/sahnok.jpg'
import IMG3 from '../../assets/miramar.jpg'
import IMG4 from '../../assets/tdm.jpg'
const Play = () => {
  return (
    <section id='play'>
    <h5>You can register here</h5>
    <h2>Play</h2>
    
    <div className='container play_container'>
      <article className='play_item'>
        <div className='play_item-image'>
        <img src={IMG1} className="img-fluid" alt="..."/>
        </div>
        <h3>Erangel</h3>
        <div className='play_item-cta'>
        <a href='#regiter' className='btn'>Register</a>
        </div>
      </article>
      <article className='play_item'>
        <div className='play_item-image'>
        <img src={IMG2} className="img-fluid" alt="..."/>
        </div>
        <h3>sahnok</h3>
        <div className='play_item-cta'>
        <a href='#regiter' className='btn'>Register</a>
        </div>
      </article>
      <article className='play_item'>
        <div className='play_item-image'>
        <img src={IMG3} className="img-fluid" alt="..."/>
        </div>
        <h3>Miramar</h3>
        <div className='play_item-cta'>
        <a href='#regiter' className='btn'>Register</a>
        </div>
      </article>
      <article className='play_item'>
        <div className='play_item-image'>
        <img src={IMG4} className="img-fluid" alt="..."/>
        </div>
        <h3>TDM</h3>
        <div className='play_item-cta'>
        <a href='#regiter' className='btn'>Register</a>
        </div>
      </article>
      
     
    </div>
  </section>
  )
}

export default Play