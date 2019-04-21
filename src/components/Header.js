import React from 'react'

import './css/Header.scss'

const Header = ({ toggleCSS }) => (
  <div id="header">
    <button className="btn btn-success print" onClick={print}>
      <h4 className="m-0">Print or Save as PDF</h4>
    </button>
    <button className="btn btn-info toggle-css" onClick={toggleCSS}>
      <h4 className="m-0">Toggle CSS</h4>
    </button>
    <button className="btn btn-portfolio">
      <a href="https://davidholyko.github.io" target="_blank" rel="noopener noreferrer">
        <h4 className="portfolio-link m-0">View Portfolio</h4>
      </a>
    </button>
  </div>
)

export default Header
