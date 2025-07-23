import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id='contact'>
        <div className="section-title" Data-aos="fade-up" Data-aos-duration="1000">
          <h1>Contact Me</h1>
        </div>
        <div className="contact-icon"
          Data-aos="zoom-in-up"
          Data-aos-duration="1000"
        >
            <a href="https://github.com/ayasa-choudhary" className="items" target="_blank" rel="noopener noreferrer">
              <FaGithub className='icons'/>
            </a>
            <a href="https://www.linkedin.com/in/ayasach826/" className="items" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className='icons'/>
            </a>
            <a href="https://x.com/AyasaChoudhary" className="items" target="_blank" rel="noopener noreferrer">
              <FaTwitterSquare className='icons'/>
            </a>
            <a
              href='mailto:ayasachoudhary826@gmail.com'
              target='_blank'
              rel="noopener noreferrer"
              className='items'
            >
              <SiGmail className='icons'/>
            </a>
        </div>
      </div>
    </>
  )
}

export default Contact
