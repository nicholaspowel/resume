import React, { Component } from 'react'
import './css/index.scss'

// import './css/Info-inverse.scss'
import './css/Info.scss'

import Header from './Header'
import Container from './Container'

const toggleCSS = () => {}

class App extends Component {
  constructor () {
    super()

    this.state = {
      defaultCSS: './css/Info.scss',
      inverseCSS: './css/Info-inverse.scss'
    }
  }

  render () {
    return (
      <div id="app">
        <Header toggleCSS={toggleCSS}/>
        <Container />
      </div>
    )
  }
}

export default App
