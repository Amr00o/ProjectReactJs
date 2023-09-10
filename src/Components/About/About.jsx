import React from 'react'
import "./About.css"

export default function About() {
  return <div className="about p-5">
  <div className="container pt-5">
    <div className="row about-text text-white">
        <div className="text text-center">
            <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>about component</h2>
            <div className='d-flex justify-content-center align-items-center mb-3'>
            <div className='line me-3 bg-white'></div>
            <i class="fa-solid fa-star"></i>
            <div className='line ms-3 bg-white'></div>
      </div>
        </div>
        <div className="col-md-6">
            <p> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </p>
        </div>
        <div className="col-md-6">
            <p> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </p>
        </div>
    </div>
    </div>
  </div>
}
