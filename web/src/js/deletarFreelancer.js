import instace from "./instance";

export default function deletarFreelancer(){
    instace.put('/freelancer/deletar')
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
