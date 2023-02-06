
import fundo from '../../img/Artboard.png';
import './home.css';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

function Dashboard(){
return(
    <div className="App">
    <header className="App-header">
    <img src={fundo} alt="" />
    <div>
     <ul className="a1">
     <div className="divBusca">
    <input type="text" id="txtBusca" placeholder="Buscar..."/>
    <img src="search3.png" id="btnBusca" alt="Buscar"/>
    </div>
    </ul>
    <ul className="a2">
       <div className="a23"></div>
       <li  className="a2"><div className="home"><Icon icon="material-symbols:home-outline-rounded" width="32" height="32" hFlip={true} inline={true} /></div><Link className="link11" to="/">Dashboard</Link></li>
       <li className="a2"><div className="paciente"><Icon icon="mdi:archive-arrow-down-outline" width="32" height="32" hFlip={true} inline={true} /></div><Link className="link21" to="/Pacientes" >Pacientes</Link></li>
       <li className="a2"><div className="teste"><Icon icon="mdi:archive-arrow-down-outline" width="32" height="32" hFlip={true} inline={true} /></div><Link className="link31" to="#" >Testes</Link></li>
       <li className="a2"><div className="configs"><Icon icon="ph:gear-six-bold" /></div><Link className="link42" to="#">Configurações</Link></li>
       </ul>
     <div className="inform">
     <div className="informação gerais">
      <h1 className="gerais">Informações Gerais</h1>
      <div className="cards">
      <div id="page1" class="page">
      <i class="pageuser1"><Icon class="pageuser1" icon="mdi:user" /></i>   
      <h1 className='pacientes1'>26</h1>  
      <h1 className='ativos'>Pacientes ativos</h1>
      <div className='pontos'><h1 className='pontos1'>+30%</h1></div>
    </div>
    <div id="page2" class="page">
    <i class="ensaio"><Icon class="ensaio" icon="material-symbols:science-outline" /></i> 
    <h1 className='teste0'>306</h1>  
      <h1 className='teste1'>Testes realizados</h1>
      <div className='teste2'><h1 className='pontos1'>-10%</h1></div>   
    </div>
    <div id="page3" class="page">
   <i class="completed"><Icon class="completed" icon="fluent-mdl2:completed" /></i>   
   <h1 className='teste0'>139</h1>  
      <h1 className='teste1'>Testes concluídos</h1>
      <div className='teste3'><h1 className='pontos1'>+30%</h1></div>
    </div>
    <div id="page4" class="page">
   <i className="block"><Icon className="block" icon="ic:twotone-block" /></i> 
   <h1 className='teste0'>11</h1>  
      <h1 className='teste1'>Testes cancelados</h1>
      <div className='teste4'><h1 className='pontos1'>-3%</h1></div>  
    </div>
      </div>
      <div className="card-h">
      <h1 className="historico">Histórico de atendimentos</h1>
      <div className='card2'>

      </div>
      <h1 className="testerea">Teste mais realizado</h1>
      <div className='divteste'>
      <div className="favoe"></div>
      </div>
      </div>
      <div className="importantes">
        <h1 className="Atualizações1">Atualizações importantes</h1>
        <div className="cards1">
         
        </div>
        <div className="cards2"></div>
        <div className="cards3"></div>
      </div>
      </div>
    </div>
    </div>
   
    </header>
  </div>
);
}

export default Dashboard