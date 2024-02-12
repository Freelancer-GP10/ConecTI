import Institucional from "./pages/conecti.jsx";
import Contato from "./pages/contato.jsx";
import { Choose } from "./pages/escolha.jsx";
import { Login } from "./pages/login.jsx";
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
      <Contato />
    </>
  )
}

export default App
