import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className="container nav-bar"
            Data-aos="fade-down"
            Data-aos-duration="1000"
            >
                <div className="left nav_items"> Portfolio</div>
                <div className="right">
                    <a href="#home" className="nav_items">Home</a>
                    <a href="#about" className="nav_items">About Me</a>
                    <a href="#experience" className="nav_items">Experience</a>
                    <a href="#skills" className="nav_items">Skills</a>
                    <a href="#projects" className="nav_items">Project</a>
                    <a href="#contact" className="nav_items">Contact</a>
                </div>
            </div>
        </>
    )
}

export default Navbar
