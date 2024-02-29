import { Menu2 } from "../componentes/menu-lateral";
import { Perfil } from "../componentes/perfil";
import { Servico2 } from "../componentes/servicos";
import { useState, useEffect } from "react";
import instance from "../js/instance";
import { format, parseISO } from "date-fns";
import "../css/semDemandas.css";


export function WorkspaceMicro() {
  const [servicos, setServicos] = useState([]);
  const [avisoDemandaVazia, setAvisoDemandaVazia] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get("servico/lista-proximos-servicos");
        const data = response.data;

        if (data && data.length > 0) {
          setServicos(data);
          setAvisoDemandaVazia(false); // Esconde o aviso se há demandas
        } else {
          setServicos([]);
          setAvisoDemandaVazia(true); // Mostra o aviso se não há demandas
        }
      } catch (error) {
        console.error("Erro ao buscar dados do serviço:", error);
      }
    };

    fetchData(); // Chame a função assíncrona aqui
  }, []);

  const formatData = (data) => {
    return format(parseISO(data), "dd/MM/yyyy"); // Formato desejado: dd/MM/yyyy
  };

  return (
    <>
      <Menu2 />
      <h2 className="h2-grande-titulacao">Workspace</h2>
      <Perfil />
      <div className="conteudo-servicos">
        {avisoDemandaVazia && (
          <div className="aviso-demanda-vazia">
            <h2>Nenhuma demanda cadastrada no momento.</h2>
          </div>
        )}
        {!avisoDemandaVazia && (
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
        )}
      </div>
    </>
  );
}
