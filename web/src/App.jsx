import Institucional from "./pages/conecti.jsx";
// import {createBrowserRouter, RouterProvider} from "react-router-dom"
// import Login from "./pages/login.jsx";
import { Login } from "./pages/login";
import {Chose} from "./pages/escolha.jsx";

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
      <Chose />
    </>
  )
}

export default App
