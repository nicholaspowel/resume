import React, { Component } from 'react'
import './css/App.scss'

import Header from './Header'
import Content from './Content'

class App extends Component {
  render () {
    return (
      <div id="app">
        <Header />
        <Content />
      </div>
    )
  }
}

export default App
