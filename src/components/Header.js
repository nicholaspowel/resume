import React from 'react'
// import pdf from 'resume_pdfs/David_Ko_Software_Engineer.pdf'

const Header = () => (
  <div id="header">
    <button className="btn btn-success">
      <a
        href="https://drive.google.com/file/d/1jyOkkFysBHi3nC6TbB5u236a2xy6y_nO/view"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h4 className="btn-link-text">Download PDF</h4>
      </a>
    </button>
    <button className="btn btn-primary">
      <a
        href="https://davidholyko.github.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h4 className="btn-link-text">View Portfolio</h4>
      </a>
    </button>
  </div>
)

export default Header
