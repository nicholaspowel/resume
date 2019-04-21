import React from 'react'
import '../css/Content.scss'
import ContentSummary from './content/ContentSummary'
import ContentProjects from './content/ContentProjects'
import ContentWorkHistory from './content/ContentWorkHistory'
import ContentEducation from './content/ContentEducation'

const ContentColumn = () => (
  <div id="content-column">
    <ContentSummary />
    <ContentProjects />
    <ContentWorkHistory />
    <ContentEducation />
  </div>
)

export default ContentColumn
