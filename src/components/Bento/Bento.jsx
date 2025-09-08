import React from 'react'
import './Bento.css'
import fileSearch from '../../assets/images/fileSearch.png'
import eye from '../../assets/images/eye.png'
import voicePrompt from '../../assets/images/voicePrompt.png'
import graphUp from '../../assets/images/graphUp.png'
import search from '../../assets/images/search.png'
import gmail from '../../assets/images/gmail.png'
import slack from '../../assets/images/slack.png'
import notion from '../../assets/images/notion.png'

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
          <div className="bentoContents">
            <div className="bentoContent1">
              <div className="find">
                <img src={search} alt="" />
                <p>I want finding...</p>
              </div>

              <div className="platform">
                <section>
                  <img src={gmail} alt="" />
                
                  <div className="platformTxt">
                    <h3>Q2 Report</h3>
                    <p>Quarterly planning email</p>
                  </div>
                </section>

                <button>PDF</button>
              </div>

              <div className="platform">
                <section>
                  <img src={slack} alt="" />
                
                  <div className="platformTxt">
                    <h3>User Research Notes</h3>
                    <p>Interview insights</p>
                  </div>
                </section>

                <button>TXT</button>
              </div>

              <div className="platform">
                <section>
                  <img src={notion} alt="" />
                
                  <div className="platformTxt">
                    <h3>Q4 Timeline</h3>
                    <p>Project Timeline</p>
                  </div>
                </section>

                <button>ZIP</button>
              </div>
            </div>
          </div>

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