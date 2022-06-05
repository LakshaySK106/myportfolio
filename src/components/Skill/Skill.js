import React from 'react'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './Skill.scss'
import { Outlet } from 'react-router-dom'

function Skill() {
   const [letterClass, setLetterClass] = useState('text-animate')

   useEffect(() => {
      setTimeout(() => {
         setLetterClass('text-animate-hover')
      }, 4000)
   }, [])
   return (
      <div className="container skill-page">
         <div className="page">
            <span className="tags top-html">&lt;/html&gt;</span>
            <span className="tags top-tags">&lt;body&gt;</span>

            <div className="text-zone">
               <h1>
                  <AnimatedLetters
                     letterClass={letterClass}
                     strArray={['S', 'k', 'i', 'l', 'l', 's', ' ', '&']}
                     idx={15}
                  />
                  <br />
                  <AnimatedLetters
                     letterClass={letterClass}
                     strArray={['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
                     idx={22}
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

export default Skill 