import React from 'react'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './About.scss'
import { Outlet, Link } from 'react-router-dom'

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
               <p>I'm a Full Stack Web Developer, Competitive Programmer and an undergrad at Delhi Technological University located in New Delhi, India. I've a serious passion for problem solving, UI effects, animations and creating intuitive, dynamic user experiences.
                  <br />
                  <br />
                  Well-organised, self-motivated and creative person with high attention to detail. Travel freak, fan of English lit, FSOG and FSD soundtracks, and love various physical pursuits against the run of play with excercise control in all things.
                  <br />
                  <br />
                  Interested in open code contributions and working on ambitious projects with positive people.
                  <Link to="/contact" className='reach'>
                  Reach out to me!
                  </Link>
               </p>
               <div className="myCv">
                     <div className='rtext'>My Resume</div>
                  <div className='okay'><a href="https://drive.google.com/file/d/1fHKgJ1wfQEkTLtRT3oMHFmemGbXnRBaM/view?usp=share_link" target="__blank">CLICK HERE TO VIEW PDF</a></div>
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
   )
}

export default About
