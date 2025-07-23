import React from 'react'

const AboutMe = () => {
  return (
    <>
      <div className="container about-me" id='about'>
        <div className="section-title" Data-aos="fade-up" Data-aos-duration="1000">
          <h2>About Me</h2>
        </div>
        <br></br>
        <div className="about-content" Data-aos="fade-up" Data-aos-duration="1000">
          <p>
            Hello! I'm Ayesha Choudhary, a passionate Full Stack Developer with a love for creating 
            efficient, user-friendly web applications. I enjoy tackling complex problems and turning 
            them into simple, beautiful solutions.
          </p>
          <p>
            With expertise in frontend technologies, I strive to build seamless
            experiences that make a positive impact. I'm constantly learning and exploring new 
            technologies to enhance my skills.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, reading tech blogs, 
            or contributing to open-source projects. I believe in continuous learning and growth, 
            both professionally and personally.
          </p>
            <div className="detail-item">
              <strong>Interests:</strong> Web Development, UI/UX Design, Open Source
            </div>
          <br></br>

          </div>
        </div>
    </>
  )
}

export default AboutMe