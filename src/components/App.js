import React, { Component } from 'react'
import './css/index.scss'

// import './css/Info-inverse.scss'

import Header from './Header'
import Container from './Container'

class App extends Component {
  constructor () {
    super()

    this.state = {
      inverse: false
    }
  }

  toggleInverse = () => this.setState({ inverse: !this.state.inverse })

  render () {
    const { inverse } = this.state

    return (
      <div id="app">
        <link rel="stylesheet" type="text/css" href='./css/Info.scss' />
        <Header toggleInverse={this.toggleInverse}/>
        <Container inverse={inverse}/>
      </div>
    )
  }
}

export default App
