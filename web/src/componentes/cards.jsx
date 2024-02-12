import "./css/cards.css";
// import "./css/global.css";

// export function CardWokspace(){
//     return(
//         <>
//             {/* <div className="card-padrao">
//                 <h3 className="h3-card-titulo">Workspace</h3>
//                 <p className="p-card-subTitulo">O Workpspace é o nosso ambiente de <br />
//                     trabalho integrado onde você pode <br />
//                     visualizar, organizar, e saber o progresso <br />
//                     de cada serviço seu.</p>
//             </div> */}

//             <h2>Hello</h2>
//         </>
//     )
// }

export function CardWorkspace(){
    return(
        <>
            <div className="card-padrao">
                <h3 className="h3-card-home">Workspace</h3>
                <p className="p-card-home">O Workpspace é o nosso ambiente de 
                        trabalho integrado onde você pode 
                        visualizar, organizar, e saber o progresso
                        de cada serviço seu.</p>
            </div>
        </>
    )
}

export function CardService(){
    return(
        <>
            <div className="card-padrao-segundo">
                <h3 className="h3-card-home-segundo">Service</h3>
                <p className="p-card-home-segundo">Em nossa página de services, nossos
                    clientes podem tanto cadastrar um 
                    serviço, como aceitar um serviço!</p>
            </div>
        </>
    )
}

export function CardPay(){
    return(
        <>
            <div className="card-padrao-segundo">
                <h3 className="h3-card-home-segundo">Pay</h3>
                <p className="p-card-home-segundo">Nossa página de pagamento, e o local
                    onde garantimos a segurança aos 
                    nossos clientes na hora de pagar ou até
                    mesmo receber por um serviço realizado!</p>
            </div>
        </>
    )
}

// Cards dos planos

export function PlaneBasic(){
    return(
        <>
            <div className="card-padrao-plano">
                <h3 className="h3-card-plane">Basic</h3>
                <div className="p-card">
                <p className="p-card-plane">Acesso ao workspace, services e pay</p>
                <p className="p-card-plane">2 Avaliações mensais de portifolio</p>
                <p className="p-card-plane">Avaliação mais rápida de portifólio</p>
                <p className="p-card-plane">Prioridade na indicação para empresas / microempreendedores</p>
                <p className="p-card-plane">Acesso a um email com cursos da alura</p>
                </div>
            </div>
        </>
    )
}

export function PlanePremium(){
    return(
        <>
            <div className="card-padrao-plano">
            <h3 className="h3-card-plane">Premium</h3>
                <div className="p-card">
                    <p className="p-card-plane">Acesso ao workspace, services e pay</p>
                    <p className="p-card-plane">2 Avaliações mensais de portifolio</p>
                    <p className="p-card-plane">Avaliação mais rápida de portifólio</p>
                    <p className="p-card-plane">Prioridade na indicação para empresas / microempreendedores</p>
                    <p className="p-card-plane">Acesso a um email com cursos da alura</p>
                </div>
            </div>
        </>
    )
}

export function PlaneUltra(){
    return(
        <>
            <div className="card-padrao-plano">
            <h3 className="h3-card-plane">Ultra</h3>
                <div className="p-card">
                    <p className="p-card-plane">Acesso ao workspace, services e pay</p>
                    <p className="p-card-plane">2 Avaliações mensais de portifolio</p>
                    <p className="p-card-plane">Avaliação mais rápida de portifólio</p>
                    <p className="p-card-plane">Prioridade na indicação para empresas / microempreendedores</p>
                    <p className="p-card-plane">Acesso a um email com cursos da alura</p>
                </div>
            </div>
        </>
    )
}