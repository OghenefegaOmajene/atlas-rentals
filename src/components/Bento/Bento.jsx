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
import wave from '../../assets/images/wave.png'
import mic from '../../assets/images/mic.png'
import pills from '../../assets/images/pills.png'
import textFormatter from '../../assets/images/textFormatter.png'
import promptSelect from '../../assets/images/promptSelect.png'
import waveGraph from '../../assets/images/waveGraph.png'
import { IoChevronDown, IoClose, IoCheckmark } from "react-icons/io5";
import { FiMaximize2 } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";

const Bento = () => {
  return (
    <div className='bento'>
        <div className='bento1'>

          <div className="bento4Content">
            <div className='bento1head'>
              <h3>Balance</h3>
              <p>
                <FaCheck className='facheck'/>
                <span>On track</span>
              </p>
            </div>

            <div className="bento1tabs">
              <div className="bento1tab">
                <div className="bento1tableft">
                  <p>Saves</p>
                  <h3>43.50%</h3>
                </div>

                <div className="bento1tabright">
                  <button className='greenBtn'>+2.45%</button>
                </div>
              </div>

              <div className="bento1tab">
                <div className="bento1tableft">
                  <p>Balance</p>
                  <h3>$52.422</h3>
                </div>

                <div className="bento1tabright">
                  <button className='redBtn'>-4.75%</button>
                </div>
              </div>

              <div className="bento1tab">
                <div className="bento1tableft">
                  <p>Spending</p>
                  <h3>$1236</h3>
                </div>

                <div className="bento1tabright">
                  <button className='purpleBtn'>-3.2%</button>
                </div>
              </div>
            </div>

            <img src={waveGraph} alt="" className='waveGraph'/>
          </div>

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
          <div className="bento3Content">
            <img src={wave} alt="" className='wave'/>
            <img src={mic} alt="" className='mic'/>
            <img src={pills} alt="" className='pills'/> 
          </div>

          <div className="bentoTxt">
            <div className="bentoTxtHead">
              <img src={voicePrompt} alt="" className='bentoTxtImg'/>
              <h3>Voice Prompts</h3>
            </div>
            
            <p>Personalise voice messages with custom prompts.</p>
          </div>
        </div>

        <div className='bento4'>
          <div className="bento4Content">
            <div className="bento4chat">
              <div className="bento4chattop">
                <img src={textFormatter} alt="" className='textFormatter'/>
                <div className="bento4chatleft">
                  <button># Announcements <IoChevronDown/></button>
                  <span>/ Create thread</span>
                </div>

                <div className="bento4chatright">
                  <FiMaximize2/>
                  <IoClose/>
                </div>
              </div>

              <div className="bento4chatbottom">
                <img src={promptSelect} alt="" className='promptSelect'/>
                <section>
                  <p>New release: custom filters & views</p>
                  <span>Today we are launching a new feature for all accounts |</span>
                </section>

                <div>
                  <button>Create thread</button>
                </div>
              </div>

            </div>
          </div>

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