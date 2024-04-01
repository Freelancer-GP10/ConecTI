// import Workspace from "./pages/workspace"

// function App() {

//   return (
//     <>

//   {/* <Route path="/freelancer/workspace" component={FreelancerWorkspace} /> */}

//     </>
//   )
// }

// export default App

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Substitua pelo caminho correto para a sua página de login
import Institucional from './pages/conecti.jsx';
import Login from "./pages/login.jsx";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Institucional} />
        <Route path="/login" component={Login} />
        {/* Adicione outras rotas aqui, se necessário */}
      </Switch>
    </Router>
  );
}

export default App;



