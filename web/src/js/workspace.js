import instace from "./instance";

export function workspaceJS(){
    instace.get("/servico")
    .then((response) =>{
        console.log(response.data);
    })
    .catch((error)=>{
        console.log(error);
    })
}