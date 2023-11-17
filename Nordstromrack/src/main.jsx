import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import HomeContextProvider from './Context/HomeContext.jsx'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <HomeContextProvider>
    <App />
  </HomeContextProvider>
  </BrowserRouter>
)
