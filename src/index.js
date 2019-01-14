import React from 'react'
import ReactDOM from 'react-dom'
require('./scss/main.scss')

const JSX = (
  <h1>Hello</h1>
)

const domContainer = document.querySelector('#like_button_container')
ReactDOM.render(JSX, domContainer)
