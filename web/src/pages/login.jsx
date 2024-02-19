import "../css/login.css"
import "../css/global.css";
import fundologin from "../assets/backgroundTec.png";
import logopreta from "../assets/logo/logo.png";

import LoginJS from "../js/login";

function Login(){
    return(
        <section>
        {/* Imagem */}
        <img className="fundologin" src={fundologin} alt="ConecTI" />
        
        {/* Formulario */}
        
        <div className="container2">
        
          <a href="./"><img className="logopreta" src={logopreta} alt="ConecTI" /></a>
        
          <div className="form2">
        
            <h1>Faça seu Login!</h1>
            <h2>Não possui cadastro? <a href="/cadastro">Cadastre-se</a></h2>
        
            <div className="infor">
                <form className="informations">
                  <input type="text" id="nomeEmail" placeholder="Email" />
                  <input type="password" id="senha" placeholder="Senha" />
                </form>
        
                {/* <h2>Deseja manter logado? <input type="checkbox" id="myCheckbox" className="checkbox" /></h2> */}
                <button className="btn-padrao" id="button" onClick={LoginJS}>Login</button>
            </div>
                    
          </div>
        </div>
      </section>
    )
}
export default Login;