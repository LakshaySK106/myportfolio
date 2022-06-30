import React from 'react'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './Project.scss'
import { Outlet } from 'react-router-dom'
// import huluH from '../../assets/project/hulu-H.png'
// import huluC from '../../assets/project/hulu-C.png'
// import huluM from '../../assets/project/hulu-M.png'
// import huluMM from '../../assets/project/hulu-MM.png'
// import hulu1 from '../../assets/project/hulu-1.png'
// import hulu2 from '../../assets/project/hulu-2.png'
// import hulu3 from '../../assets/project/hulu-3.png'
import hulu4 from '../../assets/project/hulu-4.png'
// import spA from '../../assets/project/spotify-All.png'
// import spF from '../../assets/project/spotify-F.png'
import spFF from '../../assets/project/spotify-FF.png'
// import pfC from '../../assets/project/pf-C.png'
import pfC from '../../assets/project/ca.png'
// import pfH from '../../assets/project/pf-H.png'
// import dClock from '../../assets/project/dc.png'
// import dClock1 from '../../assets/project/dc1.png'
// import dClock2 from '../../assets/project/dc2.png'
import bwe from '../../assets/project/bwe.png'


function Project() {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3300)
  }, [])

  return (
    <>
      <div className="container project-page">
        <div className="page">
          <span className="tags top-html">&lt;/html&gt;</span>
          <span className="tags top-tags">&lt;body&gt;</span>

          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                idx={15}
              />
            </h1>
            <p>Being a Sophomore with Computer Science in major, I've worked on multiple projects during my course based out of development / Web Applications / Frontend / Backend. This is a fresh selection of my latest projects!
              <br />
              <br />
              <a href='https://github.com/LakshaySK106' target="_blank" rel='noreferrer' className="qView">Wanna take a quick view?</a>
            </p>
          </div>
          <div id="home-magicwall" class="fake-magicwall">

            <div className="magic-wall_item">
              <a href="https://huloo-clone.netlify.app/" target="_blank" rel="noreferrer">
                <img src={hulu4} alt="okimage" />
              </a>
            </div>


            <div className="magic-wall_item">
              <a href="https://spotify-now-playing-gold-seven.vercel.app/api/now-playing" target="_blank" rel="noreferrer">
                <img src={spFF} alt="okimage" />
              </a>
            </div>



            <div className="magic-wall_item">
              <a href="https://codes-anywhere.herokuapp.com/" target="_blank" rel="noreferrer">
                <img src={pfC} alt="okimage" />
              </a>
            </div>



            <div className="magic-wall_item">
              <a href="https://github.com/LakshaySK106/Blocking-Web-ETE" target="_blank" rel="noreferrer">
                <img src={bwe} alt="okimage" />
              </a>
            </div>

          </div>
          <Outlet />
          <span className="tags bottom-tags">
            &lt;/body&gt;
            <br />
            <span className="bottom-tag-html">&lt;/html&gt;</span>
          </span>
        </div>
      </div>
    </>
  )
}

export default Project