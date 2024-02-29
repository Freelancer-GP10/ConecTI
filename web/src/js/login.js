import instace from "./instance";


function LoginJS() {
    sessionStorage.setItem("token", "");
    const emailinput = document.getElementById('nomeEmail').value;
    const senhainput = document.getElementById('senha').value;

    console.log(emailinput);
    console.log(senhainput);
    var dados = {
        senha: senhainput,
        email: emailinput
    }

    instace.post("/usuarios/login", dados)
        .then((response) => {
            console.log(response);
            var papel = response.data.papel;
            console.log("Login deu certo");
            console.log(response.data);
            console.log(response.token);
            console.log(response.data.token);
            sessionStorage.setItem("token", response.data.token);

            alert("Login efetuado")

            const usuarioPromise = papel.toLowerCase() == "freelancer" ? instace.get('usuarios/detalhes-usuario') : Promise.resolve(null);

            usuarioPromise.then((usuarioResponse) => {
                if (usuarioResponse && (usuarioResponse.data.nome == null || usuarioResponse.data.nome.length == 0)) {
                    window.location.href = papel.toLowerCase() == "freelancer" ? "/cadastro-freelancer" : "/cadastro-microempreendedor";
                } else {
                    window.location.href = papel.toLowerCase() == "freelancer" ? "/freelancer/workspace" : "..//microempreendedor/workspace";
                }
            }).catch((error) => {
                console.log("Erro ao buscar detalhes do usuário");
                console.log(error);
            });

        })
        .catch((error) => {
            console.log("Deu erro");
            console.log(error);
            alert("Email ou senha incorretos")
        })
}

export default LoginJS;
