// import React from 'react';

import logoimg from "../assets/logo/logo.png";
import "../css/global.css";
import "../css/escolha.css";


 function EscolhaCadastro() {

  return (
    <>
        <a href="./">
          <img src={logoimg} alt="" className="img-logo" />
        </a>

        <div className='texto_cadastro'>

        <span className="span-choose"> Como você deseja <br />se registrar?</span>


          <div className="div-choose-butons">
            <a href="/cadastro-previo-freelancer"><button className="btn-padrao btn-choose-1">Freelancer</button></a>
            <a href="/cadastro-previo-microempreendedor"><button className="btn-padrao btn-choose-1">Microempreendedor</button></a>
          </div>


        </div>

    </>
  );
}
export default EscolhaCadastro;