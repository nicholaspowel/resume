import React, { Component } from 'react'
import './css/App.scss'

import Header from './Header'
import Container from './Container'

class App extends Component {
  render () {
    return (
      <div id="app">
        <Header />
        <Container />
      </div>
    )
  }
}

export default App
