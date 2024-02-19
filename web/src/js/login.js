import instace from "./instance";

function LoginJS(){
    sessionStorage.setItem("token","")
    const emailinput = document.getElementById('nomeEmail').value;
    const senhainput = document.getElementById('senha').value;

    console.log(emailinput);
    console.log(senhainput);
    var dados =
    {
        senha:senhainput,
        email:emailinput
    }
   
    instace.post("/usuarios/login",dados)
    .then((response)=>{
        console.log(response);
       var papel = response.data.papel; 
        console.log("Login deu certo");
        console.log(response.data);
        console.log(response.token);
        console.log(response.data.token);
        sessionStorage.setItem("token",response.data.token);

        alert("Login efetuado")
        if(papel=="freelancer".toLowerCase()){
            window.location.href = "../freelancer/workspace";
        }else if(papel=="empresa".toLowerCase()){
            window.location.href = "../microempreendedor/workspaceMicro";
        }
        
        
    })
    .catch((error)=>{
        console.log("Deu erro");
        console.log(error);
        alert("Email ou senha incorretos")
    })
}

export default LoginJS;