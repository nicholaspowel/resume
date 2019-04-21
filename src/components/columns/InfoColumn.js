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
      <p>This resume is made with React.js and</p>
      <p>is deployed on Github Pages:</p>
      <p className="mt-3">davidholyko.github.io/resume</p>
    </div>
  </div>
)

export default InfoColumn
