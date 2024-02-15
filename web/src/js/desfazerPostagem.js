import instace from "./instance";

export default function desfazerPostagem(){
    instace.post("/servico/desfazer-postagem")
    .then((resposta)=>{
        console.log(resposta);
        alert("Postagem desfeita com sucesso!");
    }).catch((err)=>{
        console.log(err);
        alert("Erro ao desfazer postagem!");
    })
}