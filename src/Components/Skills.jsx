import React from 'react'
import skills from "./Data/skills.json"

const Skills = () => {
  return (
    <>
    <div className="container skills" id='skills'>
        <h1>Skills</h1>
        <div className="items">
            {skills.map((Data) => (
                <>
                 <div className="item" key={Data.id}
                 Data-aos="flip-left"
                 Data-aos-duration="1000"
                 >
                    <img src={`/assets/${Data.imageSrc}`} alt="" />
                    <h3>{Data.title}</h3>
                 </div>
                </>
            ))}
        </div>
    </div>
    </>
  )
}

export default Skills