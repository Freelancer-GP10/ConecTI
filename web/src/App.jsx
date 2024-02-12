import { Menu } from "./componentes/menu-lateral.jsx";
import { CadastroFree, CadastroFree2, CadastroMicro, CadastroMicro2 } from "./pages/cadastro.jsx";
import Institucional from "./pages/conecti.jsx";
import Contato from "./pages/contato.jsx";
import { Choose } from "./pages/escolha.jsx";
import { Login } from "./pages/login.jsx";
import { Pay } from "./pages/pay.jsx";
import { Service } from "./pages/service.jsx";
import { Workspace } from "./pages/workspace.jsx";
// import {createBrowserRouter, RouterProvider} from "react-router-dom"


// const navegation = createBrowserRouter(
//   [
//     {
//       path: "/",
//       element: <Institucional />,
//     },
//   ]
// )

function App() {

  return (
    <>
      {/* <RouterProvider router={navegation}/> */}
      <Pay />
    </>
  )
}

export default App
