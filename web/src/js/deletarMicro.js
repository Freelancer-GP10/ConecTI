import instace from "./instance";

export default function deletarMicro(){
    instace.delete('/empresa')
    .then(function (response) {
        console.log(response);
        alert('Conta deletada com sucesso!');
        // Redirecionar para a página de login
        window.location.href = './pages/Login';
      })      
      .catch(function (error) {
        console.log(error);
        alert('Erro ao deletar a conta!');
      });
}