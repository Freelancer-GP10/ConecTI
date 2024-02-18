import React from 'react';

import { Menu } from "../componentes/menu-lateral";
import { Perfil } from "../componentes/perfil";
import { Servico2 } from "../componentes/servicos";
// import { Perfil } from "../componentes/perfil";
// import { Pesquisa } from "../componentes/pesquisa";
// import { Servico2 } from "../componentes/service";

export function Workspace(){
    return(
        <>
        <Menu />
        <h2 className="h2-grande-titulacao">Workspace</h2>
        <Perfil />
        <div className="conteudo-servicos">
            <div className="alinhamento-itens-conteudo">
            <Servico2 />
            <Servico2 />
            <Servico2 />
            <Servico2 />
            </div>
        </div>
        </>
    )
}
export default Workspace;