import React, { useEffect, useRef } from 'react'
import pdf from "../pdf/Ayesha-Choudhary.pdf"
import hero from './Data/hero.json'
import Typed from 'typed.js';


class TypedReactDemo extends React.Component {
  componentDidMount() {
  	// If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    const { strings } = this.props;
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
    	strings: strings,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
  	// Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

  render() {
    return (

          <span style={{ whiteSpace: 'pre', }}
            ref={(el) => { this.el = el; }}
          />
    );
  }
}

const Home = () => {

  return (
    <>
      <div className="container home" id='home'> 
        <div className="left" data-aos="fade-up-right" data-aos-duration="1200" data-aos-delay="100" data-aos-easing="ease-in-out">
        <TypedReactDemo
    strings={[
              "Welcome to my profile", 
        "My Name is <i>Ayesha Choudhary</i>", 
        "I'm Full Stack Developer",

    ]}
  />
            <div className="resume-download" style={{ margin: '20px' }} data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
              <a 
                href={pdf} 
                download="resume.pdf" 
                className="btn btn-outline-warning"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </div>
        </div>
        <div className="right">
            <div className="img" data-aos="fade-up-left"
            data-aos-duration="1200" data-aos-delay="100" data-aos-easing="ease-in-out">
                <img src={`/assets/${hero.imgSrc}`} alt="Ayesha Choudhary - Full Stack Developer" />
            </div>
        </div>
      </div>
    </>
  )
}

export default Home
