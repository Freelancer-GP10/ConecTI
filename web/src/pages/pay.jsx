import React from 'react';

import {Menu} from "../componentes/menu-lateral";
import { Perfil } from "../componentes/perfil";
// import {Perfil} from "../componentes/perfil";
// import {Pesquisa} from "../componentes/pesquisa";

export function Pay(){
    return(
        <>
            <Menu />
                <h2 className="h2-grande-titulacao">Pay</h2>
                    <Perfil />
        </>
    )
}
export default Pay;