import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
// import Chay from './chay.jsx'


// for the custom components
// const anotherElement = (
//   <a href="http://google.com" target="_blank">visit google</a>
// )

// const reactElement = React.createElement(
//   'a',
//   { href: 'http://google.com', target: '_blank' },
//   'click me to visit google'
// )

createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <App/>
  </React.StrictMode>
)