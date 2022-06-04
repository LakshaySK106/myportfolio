import React from 'react'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './About.scss'
import { Outlet } from 'react-router-dom'

function About() {
   const [letterClass, setLetterClass] = useState('text-animate')

   useEffect(() => {
      setTimeout(() => {
         setLetterClass('text-animate-hover')
      }, 3300)
   }, [])
   return (
      <div className="container about-page">
         <div className="page">
            <span className="tags top-html">&lt;/html&gt;</span>
            <span className="tags top-tags">&lt;body&gt;</span>

            <div className="text-zone">
               <h1>
                  <AnimatedLetters
                     letterClass={letterClass}
                     strArray={['M', 'y', ',', ' ', 'M', 'y', 's', 'e', 'l', 'f', ' ', '&', ' ', 'I']}
                     idx={15}
                  />
               </h1>
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, dolores, sequi quia maxime, amet voluptatum excepturi cumque ut mollitia commodi ea enim dolorum asperiores adipisci obcaecati ipsum vitae veritatis nihil ab iure suscipit blanditiis corrupti!
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illum officiis mollitia dolor!
               </p>
            </div>
            <Outlet />
            <span className="tags bottom-tags">
               &lt;/body&gt;
               <br />
               <span className="bottom-tag-html">&lt;/html&gt;</span>
            </span>
         </div>
      </div>
   )
}

export default About