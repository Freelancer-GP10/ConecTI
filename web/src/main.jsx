import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Login } from './pages/login.jsx'
import { Workspace } from './pages/workspace.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Workspace />
  </React.StrictMode>,
)
