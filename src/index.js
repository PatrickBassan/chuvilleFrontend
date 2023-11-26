import React from 'react'
import ReactDOM from 'react-dom/client'
import ConsultPage from './ConsultPage.js'
import ManagerPage from './ManagerPage.js'
import reportWebVitals from './reportWebVitals'
import './styles/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ConsultPage />
    {/* <ManagerPage /> */}
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
