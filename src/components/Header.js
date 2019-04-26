import React from 'react'
// import pdf from 'resume_pdfs/David_Ko_Software_Engineer.pdf'

const Header = () => (
  <div id="header">
    <button className="btn btn-success download">
      <a href="https://drive.google.com/open?id=1r3NZ9NWDL-KIOzwNFutuRQOsmLDy3JQ_" target="_blank" rel="noopener noreferrer">
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
