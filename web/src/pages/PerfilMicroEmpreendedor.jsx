import "../css/perfil.css";
import "../css/global.css";
import instace from "../js/instance";
import atualizarMicro from "../js/atualizarEmpresa";
import React, { useState, useEffect } from 'react';
import { Menu } from "../componentes/menu-lateral";
import editicon from "../assets/edit.png"
import deletarFreelancer from "../js/deletarFreelancer";

export default function PerfilMicro() {
    console.log("PERFILMICRO");
    const [userData, setUserData] = useState({ nome: '', email: '' });
    useEffect(() => {
      const fetchData = async () => {
        console.log("FETCHDATA");
        try {
          // Aqui você faz a requisição para obter os detalhes do freelancer
          const response = await instace.get('usuarios/detalhes-micro');
          setUserData(response.data);
        } catch (error) {
          console.error('Erro ao obter detalhes do microempreendedor:', error);
        }
      };
  
      fetchData();
    }, []);
    
   
    return (
      <>
        <Menu />
  
  
  
        <div className="main-perfil">
  
          <div className="div-esquerda">
  
            <a href="" className="perfil-voltar">{'< Voltar'}</a>
  
            <div className="card-perfil">
              <div className="perfil-cima">
                <div className="perfil-info">
                  <h2 className="h2-subtitulo2">{userData.nome}</h2>
                  <h3 className="h2-subtitulo2">{userData.email}</h3>
                </div>
  
                <div className="div-embaixo-left">
                  <h2 className="h2-subtitulo2">Senha</h2>
                  <h3 className="h2-subtitulo2">*************</h3>
                </div>
  
              </div>
  
              {/* ÍCONE DO PERFIL */}
              <svg className="perfil-icon" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 63 64" fill="none">
                <path d="M31.5 0.5C14.0988 0.5 0 14.5988 0 32C0 49.4012 14.0988 63.5 31.5 63.5C48.9012 63.5 63 49.4012 63 32C63 14.5988 48.9012 0.5 31.5 0.5ZM31.5 12.6935C37.673 12.6935 42.6774 17.698 42.6774 23.871C42.6774 30.044 37.673 35.0484 31.5 35.0484C25.327 35.0484 20.3226 30.044 20.3226 23.871C20.3226 17.698 25.327 12.6935 31.5 12.6935ZM31.5 56.3871C24.0442 56.3871 17.3631 53.0085 12.8921 47.7246C15.28 43.2282 19.9542 40.129 25.4032 40.129C25.7081 40.129 26.0129 40.1798 26.305 40.2687C27.9563 40.8022 29.6837 41.1452 31.5 41.1452C33.3163 41.1452 35.0564 40.8022 36.695 40.2687C36.9871 40.1798 37.2919 40.129 37.5968 40.129C43.0458 40.129 47.72 43.2282 50.1079 47.7246C45.6369 53.0085 38.9558 56.3871 31.5 56.3871Z" fill="url(#paint0_linear_604_1180)" />
                <defs>
                  <linearGradient id="paint0_linear_604_1180" x1="8.13451" y1="8.48479" x2="48.5908" y2="63.3137" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#B5B4B4" />
                    <stop offset="1" stop-color="#50FAAB" />
                  </linearGradient>
                </defs>
              </svg>
  
  
              <div className="perfil-embaixo">
                <div className="div-btn">
  
                  <button className="button-editar btn-alinhar" id="btn-editar"><img src={editicon} alt="icone de edição" /> Editar</button>
                </div>
              </div>
            </div>
  
  
            <div className="perfil-embaixo">
              <div className="perfil-texto">
                <p>Olá empresário!</p>
  
                Seus pagamentos são nossa prioridade quando o <br />
                assunto é segurança!<br />
  
                <p>Você pode tanto atualizar as formas de pagamento<br />
                  que você utiliza quanto baixar o relatório de todos os <br />
                  seus pagamentos!</p>
  
  
                <div className="btn-att-baixar-micro">
  
                  <button className="btns-embaixo" id="btn-att-baixar" >Atualizar</button>
                  <button className="btns-embaixo" id="btn-baixar"> Baixar</button>
                </div>
  
              </div>
            </div>
          </div>
  
  
          <div className="main-perfil__direita">
            <div className="direita">
  
              <div action="" className="direita-form">
                Dados Privados da Empresa
                <div className="row">
  
                  <div className="div-input">
  
                    <input className="ipt-perfil ipt-perfil-micro " type="text" placeholder='Nome empresa' id='in_nameempresa' />
  
                    <input className="ipt-perfil ipt-perfil-micro" type="text" placeholder='CNPJ' id='in_cnpj' />
                  </div>
                  <div className="div-input row">
  
                    <input className="ipt-perfil ipt-perfil-micro" type="text" placeholder='Telefone' id='in_phonemicro' />
                  </div>
  
                  <div className="div-input">
                    <input className="ipt-perfil ipt-perfil-micro" type="email" placeholder='E-mail' id="in_emailMicro" />
                    <input className="ipt-perfil ipt-perfil-micro" type="email" placeholder='Senha' id="in_senhaMicro" />
                  </div>
                </div>
  
  
                <select className="select-perfil-micro" id="in_ramos" name="ramos">
                  <option value="">-- Selecione um ramo--</option>
                  <option value="restaurantes">Restaurantes e Cafeterias</option>
                  <option value="vestuario">Lojas de Vestuário e Acessórios</option>
                  <option value="beleza">Salões de Beleza e Estética</option>
                  <option value="academias">Academias e Centros de Fitness</option>
                  <option value="farmacias">Farmácias e Drogarias</option>
                  <option value="eletronicos">Lojas de Eletrônicos e Tecnologia</option>
                  <option value="supermercados">Supermercados e Mercearias</option>
                  <option value="livrarias">Livrarias e Papelarias</option>
                  <option value="petshops">Pet Shops</option>
                  <option value="decoracao">Lojas de Decoração e Utilidades Domésticas</option>
                  <option value="assistencia">Serviços de Assistência Técnica</option>
                  <option value="cursos">Escolas e Cursos Livres</option>
                  <option value="delivery">Serviços de Delivery e Logística</option>
                </select>
  
  
                <div className="div-forms">
  
                  <button className="btns-embaixo" id="btn-salvar"onClick={atualizarMicro}>Salvar</button>
                  <button className="btns-embaixo" id="btn-excluir" onClick={deletarFreelancer}>Excluir</button>
  
                </div>
  
              </div>
            </div>
          </div>
  
  
        </div>
  
  
  
      </>
    )
  }
  
  