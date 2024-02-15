import instace from "./instance";

export default function atualizarMicro(){
    var nome = document.getElementById('in_nameempresa').value;
    var cnpj = document.getElementById('in_cnpj').value;
    var email = document.getElementById('in_emailMicro').value;
    var telefone = document.getElementById('in_phonemicro').value;
    var ramo = document.getElementById('in_ramos').value;
    var senha= document.getElementById('in_senhaMicro').value

    instace.put('/empresa',{
        nome:nome,
        cnpj:cnpj,
        email:email,
        telefone:telefone,
        ramo:ramo,
        senha:senha
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