import "../css/style.css";
import "../css/global.css";
import "../css/img.css";

// Imagens
    import imgLogo from "../assets/logo/logo-branca.png";
    import logo from "../assets/logo/logo-grande.png";

// Componentes
    import { PlaneBasic, PlanePremium, PlaneUltra } from "../componentes/cards";
    import { Footer } from "../componentes/footer";
    import { StilizationsHome } from "../componentes/stilization";
import Carousel from "../componentes/carrossel";
//import { Footer } from "../componentes/footer";

function Institucional(){
    return(
        <>
            <div className="container-home">
            <StilizationsHome />
                <div className="background-home">
                    <div className="nav-home">
                        <div className="logo-home">
                            <img src={imgLogo} alt="" />
                        </div>
                        <div className="navbar-home">
                            <ul className="ul-home">
                                <a className="a-nav" href="#about"><li>Sobre nos</li></a>
                                <a className="a-nav" href="#service"><li>Serviço</li></a>
                                <a className="a-nav" href="#plane"><li>Nossos Planos</li></a>
                                <a className="a-nav" href="#footer"><li>Contato</li></a>
                            </ul>
                        </div>
                        <a className="a_institu" href="http:/login"><button className="button-home">Entrar</button></a>
                    </div>
                    <div className="slogan-home">
                        <h1 className="h1-grande">ConecTI</h1>
                        <p className="p-slogan-home">Aquímica da conexão perfeita!</p>
                    </div>
                </div>
                <div className="slogan-marca-home">
                    <div className="logo-slogan">
                        <img src={logo} alt="" />
                    </div>
                    <p className="p-slogan-marca-home"  id="about">
                    Nós, da ConecTI, buscamos unir profissionais <br /> Freelancers à microempreendedores, <br />
                    realizando o melhor e mais perfeito match! <br /> Para assim, realizar tarefas com eficácia e <br />
                    excelência, criando assim...
                    <br /><br />
                    A química da conexão perfeita!
                    </p>
                </div>
                <div className="about-home"  id="service">
                        <Carousel />
                </div>
                <div className="plane-home"  id="plane">
                    <h1 className="h1-medio">Nossos Planos</h1>
                    <div className="card-plane-home">
                        <PlaneBasic />
                        <PlanePremium />
                        <PlaneUltra />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Institucional;