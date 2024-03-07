import { useState, useEffect } from 'react';
import { Menu } from "../componentes/menu-lateral";
import { Perfil } from "../componentes/perfil";
import { Servico1 } from "../componentes/servicos";
import { format, parseISO } from "date-fns";
import { ToastContainer, toast } from "react-toastify";
import instance from "../js/instance"; // Corrigindo o nome do arquivo
import '../componentes/css/serviceAnimation.css'

function Service() {
  const [servicos, setServicos] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Variável de estado para controlar o estado de carregamento

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get('servico/lista-proximos-servicos');
        const data = response.data;

        if (data && data.length > 0) {
          // Verifica se cada serviço foi aceito
          const promises = data.map(async (servico) => {
            const conexaoResponse = await instance.get('conexao/listar');
            const conexoes = conexaoResponse.data;
            const servicoComAceitacao = { ...servico, aceito: conexoes.some(conexao => conexao.servico.id === servico.id) };
            return servicoComAceitacao;
          });

          // Aguarda todas as requisições para verificar se os serviços foram aceitos
          const servicosComAceitacao = await Promise.all(promises);
          setServicos(servicosComAceitacao);
        }
        setIsLoading(false); // Quando os dados forem carregados, definimos isLoading como falso
      } catch (error) {
        console.error('Erro ao buscar dados do serviço:', error);
      }
    };

    fetchData();
  }, []);

  const handleAceitar = async (id) => {
    console.log('ID do serviço:', id);
    try {
      const response = await instance.post('conexao/aceitar-servico', { fkServico: id });
      if (response.status === 201) {
        toast.success('Demanda aceita com sucesso!');
        // Remover a demanda aceita do estado 'servicos' de forma suave
        setServicos(prevServicos => prevServicos.filter(servico => servico.id !== id));
      }
    } catch (error) {
      console.error('Erro ao aceitar demanda:', error);
      toast.error('Erro ao aceitar demanda. Por favor, tente novamente.');
    }
  };

  const formatData = (data) => {
    return format(parseISO(data), 'dd/MM/yyyy');
  };

  return (
    <>
      <Menu />
      <div className="centralizado">
        <h2 className="h2-grande-titulacao">Service</h2>
      </div>
      <Perfil />
      <div className="conteudo-servicos">
        <div className="alinhamento-itens-conteudo">
          {isLoading ? ( // Verifica se está carregando
            <div className="spinner"></div> // Mostra o círculo giratório se estiver carregando
          ) : (
            servicos.length > 0 ? (
              servicos.map((servico, index) => (
                <Servico1
                  key={index}
                  titulo={servico.nome}
                  descricao={servico.descricao}
                  status={"Ativo"}
                  valor={servico.valor}
                  dataInicio={formatData(servico.dataInicio)}
                  onAceitar={() => handleAceitar(servico.id)}
                />
              ))
            ) : (
              <div className="sem-demandas" >
                <div className="spinner"id='sem'></div>
                <p id='sem2'>Não há demandas cadastradas.</p>
              </div>
            )
          )}
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Service;
