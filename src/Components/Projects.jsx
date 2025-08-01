import React from 'react'
import project from "./Data/projects.json";

const Projects = () => {
  return (
    <>
      <div className="container projects my-3" id="projects">
        <div className="section-title" data-aos="fade-up" data-aos-duration="1000">
          <h1>Projects</h1>
        </div>
        <div className="row d-flex justify-content-center">
          {project.map((Data, index) => (
              <div
                key={Data.key}
                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
              >
                <div
                  className="card bg-dark text-light h-100"
                  style={{
                    border: "1px solid yellow",
                    boxShadow: "var(--box-shadow)",
                  }}
                  data-aos={index % 3 === 0 ? "flip-left" : index % 3 === 1 ? "flip-right" : "zoom-in"}
                  data-aos-duration="1000"
                  data-aos-delay={100 * (index % 4)}
                  data-aos-easing="ease-in-out"
                >
                  <div className="img-container">
                    <img
                      src={Data.imageSrc}
                      className="card-img-top"
                      alt={Data.title}
                    />
                  </div>
                  <div className="card-body text-center d-flex flex-column">
                    <h5 className="card-title">{Data.title}</h5>
                    <div className="project-content">
                      <p className="card-text flex-grow-1">{Data.description}</p>
                      <div className="project-explanation">
                        <p>{Data.explanation}</p>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <a href={Data.source} className="btn btn-warning" target="_blank" rel="noopener noreferrer">
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects
