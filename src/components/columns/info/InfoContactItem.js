import React from 'react'
import '../../css/Info.scss'

const InfoContactItem = ({ contact }) => (
  <div className="info-contact-item">
    <span className="">{contact.type}:</span>
    <span className="">{contact.value}</span>
  </div>
)

export default InfoContactItem
