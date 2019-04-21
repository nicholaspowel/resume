import React from 'react'
import '../../css/Info.scss'

const InfoLanguagesItem = ({ language }) => (
  <div className="info-item">
    <i className={language.icon + ' icon'}></i>
    <span className="">{language.value}</span>
  </div>
)

export default InfoLanguagesItem
