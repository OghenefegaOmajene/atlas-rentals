import React from 'react'
import './Bento.css'
import fileSearch from '../../assets/images/fileSearch.png'

const Bento = () => {
  return (
    <div className='bento'>
        <div className='bento1'></div>
        <div className='bento2'>
          <div className="bentoTxt">
            <div className="bentoTxtHead">
              <img src={fileSearch} alt="" className='bentoTxtImg'/>
              <h3>Convenient search</h3>
            </div>
            
            <p>Find exactly what you need in seconds, without endless scrolling or guesswork</p>
          </div>
        </div>
        <div className='bento3'></div>
        <div className='bento4'></div>
    </div>
  )
}

export default Bento