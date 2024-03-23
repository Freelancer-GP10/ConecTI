import "../css/perfil.css";
import "../css/global.css";
import { Menu } from "../componentes/menu-lateral";
import editicon from "../assets/edit.png"
import instace from "../js/instance";
import  { useState, useEffect } from 'react';
import deletarFreelancer from "../js/deletarFreelancer";
import atualizarDados from "../js/atualizarFreelancer";
import baixarPortifolio from "../js/portifolioFreelancer";

export function PerfilF() {
  console.log("PERFILFREELANCER");
    const [userData, setUserData] = useState({ nome: '', email: '' });
    useEffect(() => {
      const fetchData = async () => {
        console.log("FETCHDATA");
        try {
          // Aqui você faz a requisição para obter os detalhes do freelancer
          const response = await instace.get('usuarios/detalhes-usuario');
          setUserData(response.data);
        } catch (error) {
          console.error('Erro ao obter detalhes do microempreendedor:', error);
        }
      };
  
      fetchData();
    }, []);

    const [selectedFile, setSelectedFile] = useState(null);
    const [git, setGit] = useState('git');

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const handleGitChange = (e) => {
    setGit("git");
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert('Selecione um arquivo antes de fazer upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('git', git);

    instace.post('/portifolio/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      console.log('Resposta do servidor:', response);
      alert('Arquivo enviado com sucesso!');
    })
    .catch(error => {
      console.error('Erro ao enviar arquivo:', error);
      alert('Erro ao enviar arquivo. Por favor, tente novamente.');
    });
  };
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
                <h3 className="h2-subtitulo2">******************</h3>
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
              <p>Olá Freelancer, Seu Portifólio?</p>

              Guardamos seu portifólio para que possamos realizar<br />
              análises e indicar onde deve ser melhorado!<br />

              <p>Você pode realizar a atualização dele ou até mesmo<br />
                baixar o seu portifólio que temos guardado! </p>


              <div className="btn-att-baixar">
                <input className="btns-embaixo-upload" type="file" accept=".zip" onChange={handleFileChange}/>
                <button className="btns-embaixo" id="btn-att-baixar" onClick={handleUpload} disabled={!selectedFile}>Atualizar</button>
                <button className="btns-embaixo" id="btn-baixar" onClick={baixarPortifolio}> Baixar</button>
              </div>

            </div>
          </div>
        </div>


        <div className="main-perfil__direita">
          <div className="direita">

            <form action="" className="direita-form">
              Dados Pessoais
              <div className="row">

                <div className="div-input">

                  <input className="ipt-perfil" type="text" placeholder='Nome' id='in_name' />
                  <input className="ipt-perfil" type="text" placeholder='Sobrenome' id="in_sobrenome"/>
                </div>
                <div className="div-input row">
                  <input className="ipt-perfil" type="text" placeholder='CPF' id='in_cpf' />
                  <input className="ipt-perfil" type="text" placeholder='Telefone' id='in_phone' />
                </div>

                <div className="div-input">
                <input className="ipt-perfil" type="email" placeholder='E-mail' id="in_email"/>
                </div>
              </div>



              <div className="dropdown-container">
                <select id="id_area">
                  <option value="">-- Área de atuação --</option>
                  <option value="ai-engineer">AI Engineer</option>
                  <option value="agile-coach">Agile Coach</option>
                  <option value="android">Android Developer</option>
                  <option value="automation-engineer">Automation Engineer</option>
                  <option value="back-end">Back-end Developer</option>
                  <option value="bi-analyst">Business Intelligence Analyst</option>
                  <option value="cloud-engineer">Cloud Engineer</option>
                  <option value="cybersecurity-analyst">Cybersecurity Analyst</option>
                  <option value="data-analyst">Data Analyst</option>
                  <option value="data-scientist">Data Scientist</option>
                  <option value="devops-engineer">DevOps Engineer</option>
                  <option value="flutter">Flutter Developer</option>
                  <option value="front-end">Front-end Developer</option>
                  <option value="full-stack">Full-stack Developer</option>
                  <option value="infosec-engineer">Information Security Engineer</option>
                  <option value="interaction-designer">Interaction Designer</option>
                  <option value="ios">iOS Developer</option>
                  <option value="machine-learning-engineer">Machine Learning Engineer</option>
                  <option value="network-engineer">Network Engineer</option>
                  <option value="product-designer">Product Designer</option>
                  <option value="project-manager">Project Manager</option>
                  <option value="react-native">React Native Developer</option>
                  <option value="robotics-engineer">Robotics Engineer</option>
                  <option value="scrum-master">Scrum Master</option>
                  <option value="sys-admin">Systems Administrator</option>
                  <option value="ux-ui-designer">UX/UI Designer</option>
                  <option value="visual-designer">Visual Designer</option>
                  <option value="web-design">Web Designer</option>
                </select>

              </div>

              <div className="dropdown-container">
                <select id="in_linguagem">
                  <option value="">-- Selecione uma ou mais linguagens e/ou ferramentas --</option>
                  <option value="ansible">Ansible</option>
                  <option value="aws">AWS</option>
                  <option value="csharp">C#</option>
                  <option value="cplusplus">C++</option>
                  <option value="cobol">Cobol</option>
                  <option value="css">CSS</option>
                  <option value="docker">Docker</option>
                  <option value="git">Git</option>
                  <option value="html">HTML</option>
                  <option value="java">Java</option>
                  <option value="javascript">JavaScript</option>
                  <option value="jenkins">Jenkins</option>
                  <option value="kubernetes">Kubernetes</option>
                  <option value="php">PHP</option>
                  <option value="python">Python</option>
                  <option value="ruby">Ruby</option>
                  <option value="swift">Swift</option>
                </select>
              </div>



              <div className="dropdown-container">
                <select id="in_areaAtuacao">
                  <option value="">-- Área de formação --</option>
                  <option value="ads">Análise e Desenvolvimento de Sistemas</option>
                  <option value="cco">Ciência da Computação</option>
                  <option value="sis">Sistemas da Informação</option>
                  <option value="egs">Engenharia de Software</option>
                  <option value="rcsi">Redes de Computadores e Segurança da Informação</option>
                  <option value="ia">Inteligência Artificial e Ciência de Dados</option>
                </select>
              </div>


          
              <div className="div-forms">

              <button className="btns-embaixo" id="btn-salvar"onClick={atualizarDados}>Salvar</button>
                  <button className="btns-embaixo" id="btn-excluir" onClick={deletarFreelancer}>Excluir</button>

              </div>

            </form>
          </div>
        </div>


      </div>
   


    </>
  )
}
