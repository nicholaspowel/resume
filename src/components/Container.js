import React from 'react'

import './css/Container.scss'
import Resume from './Resume'
import src from '../images/background.webp'

const Container = () => (
  <div id="container">
    <img src={src} alt="" className="img"/>
    <Resume />
  </div>
)

export default Container
