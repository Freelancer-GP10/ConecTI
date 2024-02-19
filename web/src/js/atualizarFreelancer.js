import instace from "./instance";

export default function atualizarDados() {  
    var name = document.getElementById('in_name').value;
    var cpf = document.getElementById('in_cpf').value;
    var telefone = document.getElementById('in_phone').value;
    var area = document.getElementById('id_area').value
    var email = document.getElementById('in_email').value;
    var sobrenome = document.getElementById('in_sobrenome').value;
    var linguagemDominio = document.getElementById('in_linguagem').value;
    var ramo = document.getElementById('in_areaAtuacao').value;
  
  
    instace.put('/freelancer',{
      nome: name,
      sobrenome:sobrenome,
      email:email,
      cpf:cpf,
      dominio:linguagemDominio,
      areaAtuacao:area,
      ramo:ramo,
      telefone:telefone
    })
    .then(function (response) {
        console.log(response);
        if (response.headers['update-email'] === 'true') {
          // Redirecionar para a página de login
          window.location.href = './pages/Login';
        } else {
          alert('Dados atualizados com sucesso!');
        }
      })      
      .catch(function (error) {
        console.log(error);
        alert('Erro ao atualizar os dados!');
      });
  }


