// import logoimg from "../assets/logo.png";
import "../css/global.css";
import "../css/escolha.css";


export function Chose() {

  return (
    <>
      <div className="background">
      <a href="./">

        <img src="./" alt="" className="img-logo" />
        </a>

        <div className='texto_cadastro'>

        <span> Como você deseja <br />se registrar?</span>


          <div className="div-buttons">
            <a href="/cadastro-previo-freelancer"><button className="btn-padrao">Freelancer</button></a>
            <a href="/cadastro-previo-empresa"><button className="btn-padrao">Microempreendedor</button></a>
          </div>


        </div>
        <div className="quadrado4"></div>
        <div className="quadrado3"></div>
        <div className="quadrado1"></div>
        <div className="quadrado2"></div>
        <div className='circulo_azul2'></div>
      </div>

    </>
  );
}