import instace from "./instance";

export function FiltroPorNome(){
    const nomeServico = document.getElementById('nome').value;

    var dados = 
    {
        nome:nomeServico
    }
    instace.get("/servico/filtro",dados)
    .then((Response)=>{
        console.log(Response.data);
    })
    .catch((error)=>{
        console.log(error);
    })
}


export function FiltroPorTipo(){
    const tipoServico = document.getElementById('tipo').value;

    var dados = 
    {
        tipo:tipoServico
    }
    instace.get("/servico/filtro/tipo",dados)
    .then((Response)=>{
        console.log(Response.data);
    })
    .catch((error)=>{
        console.log(error);
    })
}

export function FiltroPorStatus(){
    const statusServico = document.getElementById('status').value;

    var dados = 
    {
        status:statusServico
    }
    instace.get("/servico/filtro/status",dados)
    .then((Response)=>{
        console.log(Response.data);
    })
    .catch((error)=>{
        console.log(error);
    })
}

export function Buscar(){
    const buscaServico = document.getElementById('busca').value;

    var dados = 
    {
        busca:buscaServico
    }
    instace.get("/servico/filtro/busca",dados)
    .then((Response)=>{
        console.log(Response.data);
    })
    .catch((error)=>{
        console.log(error);
    })
}