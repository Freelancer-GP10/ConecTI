// import React from 'react';

import logoimg from "../assets/logo/logo.png";
import "../css/global.css";
import "../css/escolha.css";
import { useNavigate } from "react-router-dom";


 function EscolhaCadastro() {
  const navigate = useNavigate();
  const goToCadastroFreelancer = () =>{
    navigate('/cadastro-previo-freelancer')
  }
  const goToCadastroEmpresa = () =>{
    navigate('/cadastro-previo-microempreendedor')
  }
  const goToHome = () =>{
    navigate('/')
  }

  return (
    <>
    <div className="background-escolha">
          <img src={logoimg} alt="" className="img-logo" onClick={goToHome}/>
   

        <div className='texto_cadastro'>

        <span className="span-choose"> Como você deseja <br />se registrar?</span>


          <div className="div-choose-butons">
            <button className="btn-padrao btn-choose-1" onClick={goToCadastroFreelancer}>Freelancer</button>
            <button className="btn-padrao btn-choose-1" onClick={goToCadastroEmpresa}>Microempreendedor</button>
          </div>


        </div>
        </div>

    </>
  );
}
export default EscolhaCadastro;