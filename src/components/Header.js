import React from 'react'

import './css/Header.scss'

const Header = () => (
  <div id="header">
    <button className="btn btn-success print" onClick={print}>
      <h4>Print or Save as PDF</h4>
    </button>
    <button className="btn btn-primary portfolio">
      <a href="https://davidholyko.github.io" target="_blank" rel="noopener noreferrer">
        <h4 className="portfolio-link">View Portfolio</h4>
      </a>
    </button>
  </div>
)

export default Header
