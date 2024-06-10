import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// JSX expression
const greeting = <h1>"Welcome, please enjoy your visit."</h1>

// Using React to create element
const msg1 = React.createElement('h2', null, 'It\'s a very simple app.')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {greeting} {/* displatying the jsx expression */}
    {msg1} {/* displatying the React expression */}

  </React.StrictMode>,
)
