import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import instace from '../js/instance';
import { Link, useNavigate } from 'react-router-dom';

import '../css/login.css';
import '../css/global.css';
import fundologin from '../assets/backgroundTec.png';
import logopreta from '../assets/logo/logo.png';

function Login() {
  console.log("aaaaKIOGIN");
  const navigate = useNavigate();
  const goToHome = () =>{
    navigate('/')
  }
  const goToChooseCadastro = () =>{
    navigate('/escolha')
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailinput = document.getElementById('nomeEmail').value;
    const senhainput = document.getElementById('senha').value;

    console.log(emailinput);
    console.log(senhainput);
    const dados = {
      senha: senhainput,
      email: emailinput,
    };

    try {
      const response = await instace.post('/usuarios/login', dados);
      console.log(response);
      const papel = response.data.papel;
      console.log('Login deu certo');
      console.log(response.data);
      console.log(response.token);
      console.log(response.data.token);
      sessionStorage.setItem('token', response.data.token);

      // Exibe a mensagem de sucesso com tempo de fechamento automático de 2 segundos
      toast.success('Login efetuado', { autoClose: 2000 });

      // Aguarda 2 segundos para garantir a visibilidade da mensagem antes de redirecionar
      setTimeout(() => {
        const usuarioPromise =
          papel.toLowerCase() === 'freelancer'
            ? instace.get('usuarios/detalhes-usuario')
            : Promise.resolve(null);

        usuarioPromise
          .then((usuarioResponse) => {
            if (
              usuarioResponse &&
              (usuarioResponse.data.nome == null ||
                usuarioResponse.data.nome.length == 0)
            ) {
              navigate(
                papel.toLowerCase() === 'freelancer'
                  ? '/cadastro-freelancer'
                  : '/cadastro-microempreendedor'
              );
            } else {
              navigate(
                papel.toLowerCase() === 'freelancer'
                  ? '/freelancer/workspace'
                  : '/microempreendedor/workspace'
              );
            }
          })
          .catch((error) => {
            console.log('Erro ao buscar detalhes do usuário');
            console.log(error);
          });
      }, 2000);
    } catch (error) {
      console.log('Deu erro');
      console.log(error);
      toast.error('Email ou senha incorretos');
    }
  };

  return (
    <section>
      {/* Imagem */}
      <img className="fundologin" src={fundologin} alt="ConecTI" />

      {/* Formulario */}

      <div className="container2">
          <img className="logopreta" src={logopreta} alt="ConecTI" onClick={goToHome} />

        <div className="form2">
          <h1 className='h1-login'>Faça seu Login!</h1>
          <h2 className='h2-login'>
            Não possui cadastro? <Link className='a-login' onClick={goToChooseCadastro}>Cadastre-se</Link>
          </h2>

          <div className="infor">
            <form className="informations" onSubmit={handleSubmit}>
              <input type="text" id="nomeEmail" placeholder="Email" />
              <input type="password" id="senha" placeholder="Senha" />
              {/* <h2>Deseja manter logado? <input type="checkbox" id="myCheckbox" className="checkbox" /></h2> */}

              <button className="btn-padrao" id="button" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}

export default Login;
