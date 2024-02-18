// import React from 'react';

import {Menu} from "../componentes/menu-lateral";
import {Perfil} from "../componentes/perfil";
import { Servico3 } from "../componentes/servicos";
// import {Servico1} from "../componentes/service";

 function ServiceMicro(){
    return(
        <>
        <Menu />
        <h2 className="h2-grande-titulacao">Service</h2>
        <Perfil />

        <button className="btn-cadastrar-demanda">Cadastrar demanda</button>
        <div className="conteudo-servicos">
            <div className="alinhamento-itens-conteudo">
                <Servico3 />
            </div>
        </div>
        </>
    )
}

export default ServiceMicro;