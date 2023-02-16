import React from 'react'
import ReactDOM from 'react-dom/client'

//Componentes
import Home from './pages/Home'

//Styles
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
