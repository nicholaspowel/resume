import React, { Component } from 'react'
import './css/index.scss'

// import './css/Info-inverse.scss'

import Header from './Header'
import Container from './Container'

class App extends Component {
  render () {
    return (
      <div id="app">
        <link rel="stylesheet" type="text/css" href='./css/Info.scss' />
        <Header />
        <Container />
      </div>
    )
  }
}

export default App
