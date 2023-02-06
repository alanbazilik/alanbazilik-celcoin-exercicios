
import { Icon } from '@iconify/react';
import fundo from  '../../img/Artboard.png';
import './patient.css';
import { Link } from 'react-router-dom';



function patient(){
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
       <div className="a231"></div>
       <li  className="a2"><div className="home1"><Icon icon="material-symbols:home-outline-rounded" width="32" height="32" hFlip={true} inline={true} /></div><Link className="link1" to="/">Dashboard</Link></li>
       <li className="a2"><div className="paciente1"><Icon icon="mdi:archive-arrow-down-outline" width="32" height="32" hFlip={true} inline={true} /></div><Link className="link2" to="/Pacientes" >Pacientes</Link></li>
       <li className="a2"><div className="teste1"><Icon icon="mdi:archive-arrow-down-outline" width="32" height="32" hFlip={true} inline={true} /></div><Link className="link3" to="#" >Testes</Link></li>
       <li className="a2"><div className="configs1"><Icon icon="ph:gear-six-bold" /></div><Link className="link4" to="#">Configurações</Link></li>
       </ul>
     <div className="inform">
     <div className="informação gerais">
      <h1 className="atualização">Atualizações  de pacientes </h1>
      <div className='atualizar'></div>
      <h1 className="Todos">Todos os pacientes </h1>
      <div className="todos">
      <label for="listras" className="listras">Lista de Pacientes ({38})</label><input className="buscatodos" type="text" onkeyup="busca()"></input><h1 className='inputs'><div className='seachr'><Icon  icon="ic:baseline-search" /></div>Buscar paciente...</h1>
      <div className='config2'><Link className="link5" to="/formulario">...</Link></div>
      <div></div>
      </div>
      </div>
    </div>
    </div>
    </header>
  </div>
);
}

export default patient