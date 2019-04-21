import React from 'react'
import '../css/Info.scss'
import InfoHeader from './info/InfoHeader'
import InfoContact from './info/InfoContact'
import InfoLanguages from './info/InfoLanguages'
import InfoSkills from './info/InfoSkills'
import InfoTechnologies from './info/InfoTechnologies'
import InfoInterests from './info/InfoInterests'

const InfoColumn = () => (
  <div id="info-column">
    <InfoHeader />
    <InfoContact />
    <InfoLanguages />
    <InfoSkills />
    <InfoTechnologies />
    <InfoInterests />

    <div className="info-item mt-auto pb-5 d-flex flex-column">
      <p>This resume is hosted on github pages:</p>
      <p>davidholyko.github.io/resume</p>
    </div>
  </div>
)

export default InfoColumn
