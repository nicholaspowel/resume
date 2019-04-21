import React from 'react'
import gmail from '../../../images/gmail.png'
import linkedin from '../../../images/linkedin.png'
import phone from '../../../images/phone.png'
import github from '../../../images/github.png'
import portfolio from '../../../images/portfolio.png'

const images = { gmail, linkedin, phone, github, portfolio }

const InfoContactItem = ({ contact }) => (
  <div className="info-contact-item">
    <div>
      <img className='icon' src={images[contact.icon]}/>
      <span className="align-text-top">{contact.type}:</span>
    </div>
    <div>
      <span className="align-text-top">{contact.value}</span>
    </div>
  </div>
)

export default InfoContactItem
