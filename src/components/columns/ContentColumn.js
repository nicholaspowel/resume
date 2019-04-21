import React from 'react'
import '../css/Content.scss'
import ContentSummary from './content/ContentSummary'
import ContentProjects from './content/ContentProjects'

const ContentColumn = () => (
  <div id="content-column">
    <ContentSummary />
    <ContentProjects />
  </div>
)

export default ContentColumn
