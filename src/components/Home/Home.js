import React from 'react'
import logoName from '../../assets/images/logo-LLLL.png'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import Logo from './Logo/Logo'
import './Home.scss'
// import Particles from "react-particles-js";
// import particles from "../Home/particle";

function Home() {
   const [letterClass, setLetterClass] = useState('text-animate', 'text-animate-hover')

   const nameArray = ['a', 'k', 's', 'h', 'a', 'y,',]
   const jobArray = [
      'w',
      'e',
      'b',
      ' ',
      'd',
      'e',
      'v',
      'e',
      'l',
      'o',
      'p',
      'e',
      'r',
      '.',
   ]

   useEffect(() => {
      setTimeout(() => {
         setLetterClass('text-animate-hover')
      }, 4000)
   }, [])

   return (
     <>

       <div className="container home-page">
         <div className="text-zone">
           <h1>
             <span className={letterClass}>H</span>
             <span className={`${letterClass} _12`}>i,</span>
             <br />
             <span className={`${letterClass} _13`}>I</span>
             <span className={`${letterClass} _14`}>'m</span>
             <img src={logoName} alt="developer" />
             <AnimatedLetters
               letterClass={letterClass}
               strArray={nameArray}
               idx={15}
             />
             <br />
             <AnimatedLetters
               letterClass={letterClass}
               strArray={jobArray}
               idx={22}
             />
           </h1>
           <h2>
             Full Stack Developer / Web Designer / Student / Broke Audiophile
           </h2>
           <Link to="/contact" className="flat-button">
             CONTACT ME!
           </Link>
         </div>
       </div>
       <Logo />
     </>
   );
}

export default Home
