import instace from "./instance";

function cadastrarServico(){
    const nomeService = document.getElementById('nome').value;
    const dataService = document.getElementById('dataInicio').value;
    const tipoService = document.getElementById('tipo').value;
    const descicaoService = document.getElementById('descricao').value;
    const valorService = document.getElementById('valor').value;
    const prazoService = document.getElementById('prazo').value;

    if(nomeService == "" || dataService == "" || tipoService == "" || descicaoService == "" || valorService == "" || prazoService == ""){
        alert("Preencha todos os campos para cadastrar a demanda!")
    }else{
        var dados = 
        {
            nome:nomeService,
            descricao:descicaoService,
            valor:valorService,
            prazo:prazoService,
            dataInicio:dataService
        }

        console.log(dados);
        instace.post("/servico",dados)
        .then((response)=>{
            console.log("demanda cadastrada");
            console.log(response.data);

            alert("Demanda cadastrada com sucesso");
        })
        .catch((error)=>{
            console.log(error);
            alert("Não foi possivel cadastrar a demanda!, tente novamente.")
        })
    }
}

export default cadastrarServico;