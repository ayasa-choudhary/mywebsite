import React from 'react'
import experience from "./Data/experience.json"

const Experience = () => {
  return (
    <>
      <div className="container ex my-3" id='experience'>
        <div className="section-title" Data-aos="fade-up" Data-aos-duration="1000">
          <h1>Experience</h1>
        </div>
        {experience.map((Data)=>{
            return(
                <div 
                    key={Data.id} 
                    className="ex-items my-5"
                    Data-aos="zoom-in"
                    Data-aos-duration="1000"
                >
                    <div className="ex-left">
                        <img src={`/assets/${Data.imageSrc}`} alt={Data.role} />
                    </div>
                    <div className="ex-right">
                        <h2>{Data.role}</h2>
                        <h4>
                            <span style={{color: "yellowgreen"}} >
                                {Data.startDate} - {Data.endDate} {" "}
                            </span>{" "} 

                            {/* <span style={{color: "yellow"}}>{Data.location}</span>  */}
                        </h4>
                        {/* <h5 style={{color: "yellow"}}>{Data.experiences[0]}</h5>
                        <h5 style={{color: "yellow"}}>{Data.experiences[1]}</h5> */}
                    </div>
                </div>
            )
        })}
      </div>
    </>
  )
}

export default Experience
