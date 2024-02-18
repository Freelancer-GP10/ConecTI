// import React from 'react'
// import ReactDOM from 'react-dom/client'
// // import App from './App.jsx'
// import { Workspace } from './pages/workspace.jsx'
// import Service from './pages/service.jsx'


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Service />
//   </React.StrictMode>
// )

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


//===================CONFIGURANDO ROUTER======================//
import App from './App.jsx';
import Institucional from "./pages/conecti.jsx";
import Contato from "./pages/contato.jsx";
import Choose from "./pages/escolha.jsx";
import Login from "./pages/login.jsx";
import Pay from "./pages/pay.jsx";
import Service from "./pages/service.jsx";
import Workspace from "./pages/workspace.jsx";

import { CadastroMicro, CadastroMicro2, CadastroFree, CadastroFree2 } from './pages/cadastro.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Institucional />,
  },
  {
    path: "/cadastro-micro",
    element: <CadastroMicro />,
  },
  {
    path: "/cadastro-micro2",
    element: <CadastroMicro2 />,
  },
  {
    path: "/cadastro-free",
    element: <CadastroFree />,
  },
  {
    path: "/cadastro-free2",
    element: <CadastroFree2 />,
  },
  {
    path: "/contato",
    element: <Contato />,
  },
  {
    path: "/escolha",
    element: <Choose />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/pay",
    element: <Pay />,
  },
  {
    path: "/service",
    element: <Service />,
  },
  {
    path: "/workspace",
    element: <Workspace />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
    <Workspace />
  </React.StrictMode>
);
