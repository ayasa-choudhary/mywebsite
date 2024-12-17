import React, { useEffect, useRef } from 'react'
import pdf from "../pdf/AResume.pdf"
import hero from './Data/hero.json'
import Typed from 'typed.js';

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {

    const options = {
      strings:["welcome to my Profile", "My Name is Ayesha Choudhaary", "I'm full stack Developer"],
      typeSpeed: 50,
      backSpeed:50,
      loop: true
    };
    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id='home'> 
        <div className="left" Data-aos="fade-up-right" Data-aos-duration="1000">
            <h1 ref={typedRef}></h1>
            <a href={pdf} download="resume.pdf" className="btn btn-outline-warning">Download Resume</a>
        </div>
        <div className="right">
            <div className="img" Data-aos="fade-up-left"
            Data-aos-duration="1000">
                <img src={`/assets/${hero.imgSrc}`} alt="hero" />
            </div>
            
        </div>
      </div>
    </>
  )
}

export default Home