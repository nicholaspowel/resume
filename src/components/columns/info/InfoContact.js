import React from 'react'
import '../../css/Info.scss'
import InfoContactItem from './InfoContactItem'

const InfoContact = () => {
  const contacts = [
    {
      type: 'Gmail',
      value: 'david.holy.ko'
    },
    {
      type: 'Github',
      value: 'davidholyko'
    },
    {
      type: 'LinkedIn',
      value: 'davidhko1'
    },
    {
      type: 'Portfolio',
      value: 'davidholyko.github.io'
    },
    {
      type: 'Phone',
      value: '617-842-1015'
    }
  ]

  return (
    <div>
      <h3 className="info-category-header">Contact Info</h3>
      {contacts.map((contact, index) => <InfoContactItem key={index} contact={contact}/>)}
    </div>
  )
}

export default InfoContact
