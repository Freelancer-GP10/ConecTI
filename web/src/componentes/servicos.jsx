 import "./css/servicos.css";
 import "../css/global.css";
//  import { ServicoJS } from "../js/service";

export function Servico3({ titulo, descricao, status, valor, dataInicio }){
  return (
      <>
       <div className="containerServices">
        <div className="Titulo-servico">
          <h2 className="titulo-servico-h2">{titulo}</h2>
        </div> 
          <div className="descricao-servico">
            <p className="descicaoDemanda">{descricao}</p>
          </div>

          <h3 className="valor-servico">{valor}</h3>
          <button className="option status">{status}</button>
          <button className="option opt">Finalizar</button>
          {/* <button className="option recuse">Recusar</button> */}

          <div className="time-servico">
            <p className="time-servico-p">Data de Inicio: {dataInicio}</p>
          </div>
      </div> 
      </>
  )
}