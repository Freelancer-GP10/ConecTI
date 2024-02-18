// import React from 'react';

import {Menu} from "../componentes/menu-lateral";
import {Perfil} from "../componentes/perfil";
import { Servico1 } from "../componentes/servicos";
// import {Servico1} from "../componentes/service";

 function Service(){
    return(
        <>
        <Menu />
        <h2 className="h2-grande-titulacao">Service</h2>
        <Perfil />
        <div className="conteudo-servicos">
            <div className="alinhamento-itens-conteudo">
                <Servico1 />
            </div>
        </div>
        </>
    )
}

export default Service;
