import React, { Component } from 'react'

import './css/Resume.scss'
import InfoColumn from './columns/InfoColumn'
import ContentColumn from './columns/ContentColumn'

class Resume extends Component {
  constructor (props) {
    super(props)

    const { inverse } = this.props

    this.state = {
      inverse
    }
  }

  render () {
    return (
      <div id="resume">
        <InfoColumn />
        <ContentColumn/>
      </div>
    )
  }
}

export default Resume
