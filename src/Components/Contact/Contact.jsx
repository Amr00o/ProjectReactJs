import React from 'react'
import "./Contact.css"

export default function Contact() {
  return <div className="container">
    <div className="row">
        <div className="pro mt-5 text-center">
        <h2 className='mb-3 fs-1 fw-bolder'>CONATCT SECTION</h2>
        <div className='d-flex justify-content-center align-items-center mb-3'>
                <div className='line2 me-3'></div>
                <i class="fa-solid fa-star"></i>
                <div className='line2 ms-3'></div>
        </div>
        </div>
        <div className='w-50 p-3 mx-auto mt-5 '>
        <div className="col-md-12 ms-5">
            <input className=' form-control border-0 border-bottom py-4' type="text" placeholder="userName"/>
        </div>
        <div className="col-md-12 ms-5">
            <input className=' form-control border-0 border-bottom py-4' type="text" placeholder="userAge"/>
        </div>
        <div className="col-md-12 ms-5">
            <input className=' form-control border-0 border-bottom py-4' type="text" placeholder="userEmail"/>
        </div>
        <div className="col-md-12 ms-5">
            <input className=' form-control border-0 border-bottom py-4 ' type="text" placeholder="userPassword"/>
            
        </div>
        <button className='send mt-4 mb-4 ms-5 text-white'>Send Message</button>
        </div>
    </div>
    
  </div>
}
