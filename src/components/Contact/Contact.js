import { Outlet } from 'react-router-dom'
import React from 'react'
import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './Contact.scss'

function Contact() {
   const [letterClass, setLetterClass] = useState('text-animate')
   const form = useRef()

   useEffect(() => {
      setTimeout(() => {
         setLetterClass('text-animate-hover')
      }, 3000)
   }, [])

   const sendEmail = (e) => {
      e.preventDefault()

      emailjs
         .sendForm(
            'service_email',
            'template_sdo8do3',
            form.current,
            'Rbm-YZ3PzAWajutRA'
         )
         .then(
            () => {
               alert('Message successfully sent!')
               window.location.reload(false)
            },
            () => {
               alert('Failed to send the message, please try again')
            }
         )
   }
   return (
      <>
         <div className="page">
            <span className="tags top-html">&lt;/html&gt;</span>
            <span className="tags top-tags">&lt;body&gt;</span>

            <div className="container contact-page">
               <div className="text-zone">
                  <h1>
                     <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                        idx={15}
                     />
                  </h1>
                  <p>
                     I'm interested in freelance opportunities - especially ambitious or large projects. However, if you have other request or question, don't hesitate to use the form below.
                  </p>
                  <div className="contact-form">
                     <form ref={form} onSubmit={sendEmail}>
                        <div className="ok">
                           <li className="half">
                              <input placeholder="Name" type="text" name="name" required />
                           </li>
                           <li className="half">
                              <input
                                 placeholder="Email"
                                 type="email"
                                 name="email"
                                 required
                              />
                           </li>
                           <li>
                              <input
                                 placeholder="Subject"
                                 type="text"
                                 name="subject"
                                 required
                              />
                           </li>
                           <li>
                              <textarea
                                 placeholder="Message"
                                 name="message"
                                 required
                              ></textarea>
                           </li>
                           <li>
                              <input type="submit" className="flat-button" value="SEND MESSAGE!" />
                           </li>
                        </div>
                     </form>
                  </div>
               </div>
               <div className='info-map'>
                  Lakshay
                  <br />
                  New Delhi,
                  <br />
                  India <br />
                  <br />
                  <span>
                     @:
                     <span> englakshaysk@gmail.com</span>
                  </span>
               </div>
               <div className="map-wrap">
                  <MapContainer center={[28.7495, 77.1184]} zoom={14.2}>
                     <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                     <Marker position={[28.7495, 77.1184]} >
                        <Popup>Lakshay lives here, come over for a cup of coffee</Popup>
                     </Marker>
                  </MapContainer>
               </div>
            </div>

            <Outlet />
            <span className="tags bottom-tags">
               &lt;/body&gt;
               <br />
               <span className="bottom-tag-html">&lt;/html&gt;</span>
            </span>
         </div>
      </>
   )
}

export default Contact