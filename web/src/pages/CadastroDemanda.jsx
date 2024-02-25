import { Menu } from '../componentes/menu-lateral'
import "../css/global.css";
import "../css/cadastroServico.css";
import cadastrarServico from '../js/cadastroService';
 export default function CadastrarDemanda() {
  return (

    <>
    <Menu />
    
    <h2 className="h2-grande-titulacao">Cadastrar demanda</h2>

    <button className='btn-voltar'>Voltar</button>

      <div className='corpo-cadastrar-demanda'>
        <div className='principal'>
          <div className='caixa_formulario'>
            <div className='linha_inicio'>
              <input className='nome-cadastro-demanda' type="text" placeholder='Nome do serviço' id="nome" />
              <p className='p-cadastro-demanda'>Data de Inicio:</p>
              
              <input className='data-cadastro-demanda' type="date" placeholder='Data de início' name="" id="dataInicio" />
            </div>

            <div className="select-cadastro-demanda">
              <select id="tipo"  >
                <option value="">Tipo de serviço</option>
                <option value="desenvolvimentoWeb">Desenvolvimento Web</option>
                <option value="desenvolvimentoMobile">Desenvolvimento Mobile</option>
                <option value="designUXUI">Design UX/UI</option>
                <option value="segurancaDaInformacao">Segurança da Informação</option>
                <option value="suporteTecnico">Suporte Técnico</option>
                <option value="analiseDados">Análise de Dados</option>
                <option value="cloudComputing">Cloud Computing</option>
                <option value="inteligenciaArtificial">Inteligência Artificial</option>
                <option value="realidadeVirtual">Realidade Virtual</option>
                <option value="internetDasCoisas">Internet das Coisas (IoT)</option>
                <option value="desenvolvimentoJogos">Desenvolvimento de Jogos</option>
                <option value="blockchain">Blockchain</option>
                <option value="automacao">Automação de Processos</option>
                <option value="ciberseguranca">Cibersegurança</option>
                <option value="analytics">Analytics</option>
              </select>
            </div>


            <div className='descicao-cadastro-demanda'>
              <textarea name="" id="descricao" cols="30" rows="10" placeholder='Descrição'></textarea>
            </div>

            <div className='linha_final'>

              <input className="ipt-vlor-cadastro-demanda" type="text" id='valor' placeholder='Valor' />
              <p className='p-cadastro-demanda'>Data final</p>
              <input className="ipt-data-cadastro-demanda" type="date" id='prazo' placeholder='Prazo' />
            </div>


          </div>

          <button className='btn-padrao-cadastro' onClick={cadastrarServico}>Cadastrar serviço</button>
        
        </div>
          <div className='quadradros'>

          <div className="quadrado4"></div>
                    <div className="quadrado3"></div>
                    <div className="quadrado1"></div>
                    <div className="quadrado2"></div>
          </div>
        

      </div>
    </>

  )
}


