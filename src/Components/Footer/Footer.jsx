import React from 'react';
import "./Footer.css";

export default function Footer() {
  return  <footer className=''>
  <div className="information text-center">
    <div className="container">
        <div className="row text-center p-5 text-white">
            <div className="col-md-4">
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4">
                <h3>AROUND THE WEB</h3>
                <div className="ico">
                <i class="icons fa-brands fa-facebook mx-1"></i>
                <i class="icons fa-brands fa-twitter mx-1"></i>
                <i class="icons fa-brands fa-linkedin mx-1"></i>
                <i class="icons fa-solid fa-globe mx-1"></i>
                </div>
            </div>
            <div className="col-md-4">
                <h3>ABOUT FREELANCER</h3>
                <p> Freelance is a free to use, licensed Bootstrap theme created by Route </p>
            </div>
        </div>
    </div>
  </div>

  <div className='copy text-center p-3 text-white'>
    <p>Copyright © Your Website 2021</p>
    </div>

  </footer>
}
