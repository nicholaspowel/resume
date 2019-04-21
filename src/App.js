import React, { Component } from 'react'
import './App.scss'

import Header from './header/Header'
import Content from './content/Content'


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
