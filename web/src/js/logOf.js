function logOff(){
    sessionStorage.removeItem('token');
    window.location.href = '/';
    console.log("Usuário deslogou!");
}

export default logOff;