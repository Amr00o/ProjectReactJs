import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

export default function Navbar() {
  return <nav class="navbar navbar-expand-lg">
  <div class="container p-4">
  <Link class="navbar-brand fw-bolder text-uppercase fs-2" to="/">Start Framework </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active fw-bold text-uppercase p-3" aria-current="page" to="about">about</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link fw-bold text-uppercase p-3" to="portfolio">portfolio</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link fw-bold text-uppercase p-3" to="contact">contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
}

