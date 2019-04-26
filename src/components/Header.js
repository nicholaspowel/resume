import React from 'react'

import './css/Header.scss'

const Header = () => (
  <div id="header">
    <button className="btn btn-success download">
      <a href="../resume_pdfs/David_Ko_Software_Engineer.pdf" download>
        <h4 className="m-0">Download PDF</h4>
      </a>
    </button>
    <button className="btn btn-portfolio">
      <a href="https://davidholyko.github.io" target="_blank" rel="noopener noreferrer">
        <h4 className="portfolio-link m-0">View Portfolio</h4>
      </a>
    </button>
  </div>
)

export default Header
