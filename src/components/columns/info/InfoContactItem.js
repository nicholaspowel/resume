import React from 'react'
import gmail from '../../../images/gmail.png'
import linkedin from '../../../images/linkedin.png'
import phone from '../../../images/phone.png'
import github from '../../../images/github.png'
import portfolio from '../../../images/portfolio.png'

const images = { gmail, linkedin, phone, github, portfolio }

const InfoContactItem = ({ contact }) => (
  <div className="info-contact-item">
    <div className="d-flex">
      <img className='icon' src={images[contact.icon]}/>
      <span className="mt-auto">{contact.type}:</span>
    </div>
    <div className="d-flex">
      <span className="mt-auto">{contact.value}</span>
    </div>
  </div>
)

export default InfoContactItem
