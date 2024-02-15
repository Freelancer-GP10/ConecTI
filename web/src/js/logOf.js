function logOff(){
    sessionStorage.removeItem('token');
    window.location.href = '/login';
    console.log("Usuário deslogou!");
}

export default logOff;