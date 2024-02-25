
import { Menu2 } from "../componentes/menu-lateral";
import { Perfil } from "../componentes/perfil";
import { Servico2 } from "../componentes/servicos";
import { useState, useEffect } from 'react';
import instace from '../js/instance';
import { format, parseISO } from "date-fns";
// import { Perfil } from "../componentes/perfil";
// import { Pesquisa } from "../componentes/pesquisa";
// import { Servico2 } from "../componentes/service";

export function WorkspaceMicro(){
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
        <Menu2 />
        <h2 className="h2-grande-titulacao">Workspace</h2>
        <Perfil />
        <div className="conteudo-servicos">
            <div className="alinhamento-itens-conteudo">
            {servicos.map((servico, index) => (
                    <Servico2
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