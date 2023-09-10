import React from 'react';
import "./Portfolio.css"

export default function Portfolio() {
    return <div className="container mb-5">
        <div className="row g-3 text-center">
            <div className="pro mt-5">
                <h2 className='mb-3 fs-1 fw-bolder'>PORTFOLIO COMPONENT</h2>
                <div className='d-flex justify-content-center align-items-center mb-3'>
                <div className='line2 me-3'></div>
                <i class="fa-solid fa-star"></i>
                <div className='line2 ms-3'></div>
        </div>
            </div>
            <div className="col-md-4">
                <div className='sec position-relative rounded-3 overflow-hidden'>
                <img src="https://routeegy.github.io/startFramework/assets/images/poert1.png" className='w-100' alt="" />
                <div className="layer position-absolute w-100 h-100 d-flex justify-content-center align-items-center">
                    <i className='text-white fa-solid fa-plus fa-6x'></i>
                </div>
                </div>
            </div>
            <div className="col-md-4">
            <div className='sec position-relative rounded-3 overflow-hidden'>
                <img src="https://routeegy.github.io/startFramework/assets/images/port2.png" className='w-100' alt="" />
                <div className="layer position-absolute w-100 h-100 d-flex justify-content-center align-items-center">
                    <i className='text-white fa-solid fa-plus fa-6x'></i>
                </div>
                </div>
            </div>
            <div className="col-md-4">
            <div className='sec position-relative rounded-3 overflow-hidden'>
                <img src="https://routeegy.github.io/startFramework/assets/images/port3.png" className='w-100' alt="" />
                <div className="layer position-absolute w-100 h-100 d-flex justify-content-center align-items-center">
                    <i className='text-white fa-solid fa-plus fa-6x'></i>
                </div>
            </div>
            </div>
            <div className="col-md-4">
            <div className='sec position-relative rounded-3 overflow-hidden'>
                <img src="https://routeegy.github.io/startFramework/assets/images/poert1.png" className='w-100' alt="" />
                <div className="layer position-absolute w-100 h-100 d-flex justify-content-center align-items-center">
                    <i className='text-white fa-solid fa-plus fa-6x'></i>
                </div>
            </div>
            </div>
            <div className="col-md-4">
            <div className='sec position-relative rounded-3 overflow-hidden'>
                <img src="https://routeegy.github.io/startFramework/assets/images/port2.png" className='w-100' alt="" />
                <div className="layer position-absolute w-100 h-100 d-flex justify-content-center align-items-center">
                    <i className='text-white fa-solid fa-plus fa-6x'></i>
                </div>
            </div>
            </div>
            <div className="col-md-4">
            <div className='sec position-relative rounded-3 overflow-hidden'>
                <img src="https://routeegy.github.io/startFramework/assets/images/port3.png" className='w-100' alt="" />
                <div className="layer position-absolute w-100 h-100 d-flex justify-content-center align-items-center">
                    <i className='text-white fa-solid fa-plus fa-6x'></i>
                </div>
            </div>
            </div>
        </div>
    </div>;
}
