// import React from 'react';

import {Menu} from "../componentes/menu-lateral";
import {Perfil} from "../componentes/perfil";
import { Servico1 } from "../componentes/servicos";
import { useState, useEffect } from 'react';
import instace from '../js/instance';
import { format, parseISO } from "date-fns";

 function Service(){
    const [servicos, setServicos] =  useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await instace.get('servico/lista-proximos-servicos');
            const data = response.data;
    
            if (data && data.length > 0) {
              setServicos(data);
            }
          } catch (error) {
            console.error('Erro ao buscar dados do serviço:', error);
          }
        };
    
        fetchData(); // Chame a função assíncrona aqui

        
      }, []);

      const formatData = (data) => {
        return format(parseISO(data), 'dd/MM/yyyy'); // Formato desejado: dd/MM/yyyy
      };
    return(
        <>
        <Menu />
        <h2 className="h2-grande-titulacao">Service</h2>
        <Perfil />
        <div className="conteudo-servicos">
            <div className="alinhamento-itens-conteudo">
                {servicos.map((servico, index) => (
                    <Servico1
                        key={index}
                        titulo={servico.nome}
                        descricao={servico.descricao}
                        status={"Ativo"}
                        valor={servico.valor}
                        dataInicio={formatData(servico.dataInicio)}
                    />
                ))}
            </div>
        </div>
        </>
    )
}

export default Service;
