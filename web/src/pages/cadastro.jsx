import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../css/global.css";
import "../css/img.css";
import "../css/cadastro.css";
import imgLogo from "../assets/logo/logo.png"
import { cadastrarFree ,cadastroFree2} from '../js/cadastro';
import { cadastroMicro1 } from '../js/cadastro';
// import { cadastroFree, cadastroFree2, cadastroMicro1, cadastroMicroFinal} from "../js/cadastro";


export function CadastroMicro(){
    return(
        <>
        {/* <div className="backGradient"></div> */}
        
        <section>
            <div className="container">
                {/* <a href="./"><img className="img-Logo-cadastro" src={imgLogo} alt="ConecTI" /></a> */}

                    {/* <img src={imgLogo} alt="" /> */}
                    <div className="img-logo-cadastro">
                    <a href="./"> <img src={imgLogo} alt="ConecTI" /></a>
                    </div>
    
                   <div className="form">
                       <h2 className="h2-grande-titulo">Faça <br></br>seu registro!</h2>
    
                       <p className="p-14-azul">Já possui Cadastro? <a className="a-14-azul" href="./Login">Login</a></p>
    
                       <form className="form-cadastro-free" action="">
                           <input className="input-cadastro" type="text" id="emailMicro" placeholder="E-mail" />
                           <input className="input-cadastro" type="password" id="senhaMicro" placeholder="Crie uma senha" />
                           <input className="input-cadastro" type="password" id="senhaMicro2" placeholder="Confirmar Senha" />
                       </form>
    
                       <button className="btn-padrao" id="button" onClick={cadastroMicro1} >Cadastrar</button>
                   </div>
            </div>
    
               <div className="img-cadastro"></div>
               <ToastContainer />
        </section>
        </>
    )
}

export function CadastroMicro2(){
    return(
        <>
        <div className="backGradient"></div>
            
            <section>
                {/* Imagem */}
                <div className="img-cadastro-micro"></div>

                {/* Formulario */}

                <div className="container">

                <div className="img-logo-cadastro-esquerdo">
                    <a href="./"> <img src={imgLogo} alt="ConecTI" /></a>
                </div>


                    <div className="form">

                    <a href="cadastro-previo-empresa" className="a2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" color="#204A7B" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                    </svg>
                    </a>

                        <form className="formMicro" action="">
                            <input className="input-cadastro-metade" type="text" id="nomeEmpresa" placeholder="Nome da Empresa" />
                            <input className="input-cadastro-metade" type="text" id="cnpj" placeholder="CNPJ" />
                            <input className="input-cadastro-metade" type="text" id="ramo" placeholder="Ramo" />
                            <input className="input-cadastro-metade" type="text" id="cep" placeholder="CEP" />
                            <input className="input-cadastro-metade" type="text" id="telefone" placeholder="Telefone" />
                        </form>

                        <button className="btn-padrao" id="button" type="button" /*onClick={cadastroMicroFinal}*/>Finalizar cadastro</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export function CadastroFree(){
    return (
        <>
        {/* <div className="backGradient"></div> */}
        
        <section>
            <div className="container">
                {/* <a href="./"><img className="img-Logo-cadastro" src={imgLogo} alt="ConecTI" /></a> */}

                    {/* <img src={imgLogo} alt="" /> */}
                    <div className="img-logo-cadastro">
                    <a href="./"> <img src={imgLogo} alt="ConecTI" /></a>
                    </div>
    
                   <div className="form">
                       <h2 className="h2-grande-titulo">Faça <br></br>seu registro!</h2>
    
                       <p className="p-14-azul">Já possui Cadastro? <a className="a-14-azul" href="./Login">Login</a></p>
    
                       <form className="form-cadastro-free" action="">
                           <input className="input-cadastro" type="text" id="emailFree" placeholder="E-mail" />
                           <input className="input-cadastro" type="password" id="senhaFree" placeholder="Crie uma senha" />
                           <input className="input-cadastro" type="password" id="senhaFree2" placeholder="Confirmar Senha" />
                       </form>
    
                       <button className="btn-padrao" id="button" onClick={cadastrarFree}>Cadastrar</button>
                   </div>
            </div>
    
               <div className="img-cadastro"></div>
        </section>
        
        </>
    )
}
export function CadastroFree2(){
    return(
        <>
        <div className="backGradient2"></div>
            
            <section>              
                {/* Formulario */}

                <div className="container">

                    {/* <a href="./main"><img className="imgLogo" src={imgLogo} alt="ConecTI" /></a> */}
                    <div className="img-logo-cadastro">
                    <a href="./"> <img src={imgLogo} alt="ConecTI" /></a>
                    </div>


                    <div className="form">

                    <a href="/cadastro-previo-freelancer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" color="#204A7B" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                    </svg>
                    </a>

                        <form className="formFre2" action="">
                        <input className="inputNome input-cadastro-metade" type="text" id="nome" placeholder="Nome" />
                           <input className="inputNome input-cadastro-metade" type="text" id="sobrenome" placeholder="Sobrenome" />
                            <input className="inputInfo2 input-cadastro-metade" type="text" id="cpf" placeholder="CPF" />
                            <input className="inputInfo2 input-cadastro-metade" type="text" id="telefoneFree" placeholder="Telefone" />
                            {/* <input type="select" id="areaAtuacao" placeholder="Area de Atuação" /> */}
                            <select className="select-cadastro" name="Area de Atuação" placeholder="Area de Atuação" id="areaAtuacao">
                                <option value="">Area de Atuação</option>
                                <option value="">Área de Atuação</option>
                                <option value="frontEnd">Front-end</option>
                                <option value="backEnd">Back-end</option>
                                <option value="fullStack">Full-stack</option>
                                <option value="devOps">DevOps</option>
                                <option value="mobile">Desenvolvimento Mobile</option>
                                <option value="web">Desenvolvimento Web</option>
                                <option value="cloud">Computação em Nuvem</option>
                                <option value="seguranca">Segurança da Informação</option>
                                <option value="IA">Inteligência Artificial</option>
                                <option value="jogos">Desenvolvimento de Jogos</option>
                                <option value="blockchain">Blockchain</option>
                                <option value="iot">Internet das Coisas (IoT)</option>
                                <option value="bigData">Big Data</option>
                                <option value="machineLearning">Aprendizado de Máquina (Machine Learning)</option>
                                <option value="dataScience">Ciência de Dados (Data Science)</option>
                            </select>
                            
                            <select className="select-cadastro" name="linguagemDeProgramacao" id="linguagemDominio">
                                <option value="">Linguagem de Programação</option>
                                <option value="javascript">JavaScript</option>
                                <option value="python">Python</option>
                                <option value="java">Java</option>
                                <option value="cSharp">C#</option>
                                <option value="php">PHP</option>
                                <option value="ruby">Ruby</option>
                                <option value="swift">Swift</option>
                                <option value="kotlin">Kotlin</option>
                                <option value="typescript">TypeScript</option>
                                <option value="go">Go</option>
                                <option value="scala">Scala</option>
                                <option value="rust">Rust</option>
                                <option value="r">R</option>
                                <option value="sql">SQL</option>
                                <option value="htmlCss">HTML/CSS</option>
                            </select>

                            <select className="select-cadastro" name="formacaoDesenvolvimento" id="formacao">
                                <option value="">Formação na Área de Desenvolvimento</option>
                                <option value="graduacaoCienciaComputacao">Graduação em Ciência da Computação</option>
                                <option value="graduacaoEngenhariaSoftware">Graduação em Engenharia de Software</option>
                                <option value="graduacaoSistemasInformacao">Graduação em Sistemas de Informação</option>
                                <option value="graduacaoTecnologiaInformacao">Graduação em Tecnologia da Informação</option>
                                <option value="graduacaoOutraArea">Graduação em outra área com especialização em desenvolvimento</option>
                                <option value="posGraduacaoEngenhariaSoftware">Pós-graduação em Engenharia de Software</option>
                                <option value="posGraduacaoSistemasInformacao">Pós-graduação em Sistemas de Informação</option>
                                <option value="posGraduacaoOutraArea">Pós-graduação em outra área com especialização em desenvolvimento</option>
                                <option value="cursosOnline">Cursos Online de Desenvolvimento</option>
                                <option value="bootcamps">Bootcamps de Desenvolvimento</option>
                                <option value="certificacoes">Certificações em Desenvolvimento de Software</option>
                                <option value="autodidata">Autodidata</option>
                            </select>

                        </form>

                        <button className="btn-padrao" id="button" onClick={cadastroFree2}>Finalizar Cadastro</button>
                    </div>
                </div>

                {/* imagem */}

                <div className="img-cadastro-freelancer"></div>
                <ToastContainer />
            </section>
        </>
    )
}