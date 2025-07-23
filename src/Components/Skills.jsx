import React from 'react'
import skills from "./Data/skills.json"

const Skills = () => {
  return (
    <>
      <div className="container skills" id='skills'>
        <div className="section-title" Data-aos="fade-up" Data-aos-duration="1000">
          <h1>Skills</h1>
        </div>
        <div className="items">
          {skills.map((Data) => (
            <div 
              className="item" 
              key={Data.id}
              Data-aos="flip-left"
              Data-aos-duration="1000"
            >
              <img src={`/assets/${Data.imageSrc}`} alt={Data.title} />
              <h3>{Data.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Skills
