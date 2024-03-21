import React from 'react'
import ReactDOM from 'react-dom/client'
// // import App from './App.jsx'
// import { Workspace } from './pages/workspace.jsx'
// import Service from './pages/service.jsx'
// import { PerfilF } from './pages/Perfil.jsx'
// import PerfilMicro from './pages/PerfilMicroEmpreendedor.jsx'
// import ServiceMicro from './pages/serviceMicro.jsx'
// import CadastrarDemanda from './pages/CadastroDemanda.jsx'
// import Login from './pages/login.jsx'
// import { Perfil } from './componentes/perfil.jsx'
// import { CadastroFree } from './pages/cadastro.jsx'


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <ServiceMicro />
//   </React.StrictMode>
// )

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//import CadastrarDemanda from './pages/CadastroDemanda.jsx';
//===================CONFIGURANDO ROUTER======================//
// import App from './App.jsx';
import Institucional from "./pages/conecti.jsx";
import Contato from "./pages/contato.jsx";
import Choose from "./pages/escolha.jsx";
import Login from "./pages/login.jsx";
import Pay from "./pages/pay.jsx";
import Service from "./pages/service.jsx";
import Workspace from "./pages/workspace.jsx";
import { CadastroMicro, CadastroMicro2, CadastroFree, CadastroFree2 } from './pages/cadastro.jsx';
import EscolhaCadastro from './pages/escolha.jsx';
import ServiceMicroo from './pages/serviceMicro.jsx';
import { WorkspaceMicro } from './pages/workspaceMicro.jsx';
// import Chat from './pages/Chat.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Institucional />,
  },
  {
    path: "/cadastro-previo-microempreendedor",
    element: <CadastroMicro />,
  },
  {
    path: "/cadastro-microempreendedor",
    element: <CadastroMicro2 />,
  },
  {
    path: "/cadastro-previo-freelancer",
    element: <CadastroFree />,
  },
  {
    path: "/cadastro-freelancer",
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
    path: "/freelancer/service",
    element: <Service />,
  },
  {
    path: "/microempreendedor/service",
    element: <ServiceMicroo />
  },
  {
    path: "/freelancer/workspace",
    element: <Workspace />,
  },
  {
    path: "/microempreendedor/workspace",
    element: <WorkspaceMicro />,
  },
  {
    path: "/escolha",
    element: <EscolhaCadastro />,
  },
  // {
  //   path: "/chat",
  //   element: <Chat />,
  // },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </React.StrictMode>
);
