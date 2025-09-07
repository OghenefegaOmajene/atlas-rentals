import React from 'react'
import './Bento.css'
import fileSearch from '../../assets/images/fileSearch.png'
import eye from '../../assets/images/eye.png'
import voicePrompt from '../../assets/images/voicePrompt.png'
import graphUp from '../../assets/images/graphUp.png'

const Bento = () => {
  return (
    <div className='bento'>
        <div className='bento1'>
          <div className="bentoTxt">
            <div className="bentoTxtHead">
              <img src={graphUp} alt="" className='bentoTxtImg'/>
              <h3>Actionable Data</h3>
            </div>
            
            <p>Leverage analytics to enhance worklows, boost engagement, and make informed marketing decisions</p>
          </div>
        </div>

        <div className='bento2'>
          <div className="bentoTxt">
            <div className="bentoTxtHead">
              <img src={fileSearch} alt="" className='bentoTxtImg'/>
              <h3>Convenient Search</h3>
            </div>
            
            <p>Find exactly what you need in seconds, without endless scrolling or guesswork</p>
          </div>
        </div>

        <div className='bento3'>
          <div className="bentoTxt">
            <div className="bentoTxtHead">
              <img src={voicePrompt} alt="" className='bentoTxtImg'/>
              <h3>Voice Prompts</h3>
            </div>
            
            <p>Personalise voice messages with custom prompts.</p>
          </div>
        </div>

        <div className='bento4'>
          <div className="bentoTxt">
            <div className="bentoTxtHead">
              <img src={eye} alt="" className='bentoTxtImg'/>
              <h3>See What Moves the Metrics</h3>
            </div>
            
            <p>Leverage clean, visual analytics to uncover patterns, optimize workflows, and make confident decisions that drive measurable business growth.</p>
          </div>
        </div>
    </div>
  )
}

export default Bento