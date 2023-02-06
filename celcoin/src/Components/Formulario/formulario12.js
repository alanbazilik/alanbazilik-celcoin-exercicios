
import { Icon } from '@iconify/react';
import './forms.css';
import { Link } from 'react-router-dom';
import { Alert, Container } from '@mui/material';
import { FormControl } from '@mui/material';
import Api from '../../Api/Api';


function formulario12(){
    const handlerEnviar = async (e) => {
        e.preventDefault();
        alert(await (Api.enviar(e.target.nome.value,e.target.text.value,e.target.testes.value,e.target.tentativas1.value,e.target.tentativas2.value,e.target.tentativas3.value)));
    }
return(
    <div className="App1">
    <header className="App-header1">
    <div className="forms" Container maxWidth="xs">
    <FormControl>
        <form onSubmit={handlerEnviar}>
        <label className="label1">Nome:</label>
        <input  name="nome"  className="nome1"type="text" placeholder="Digitar seu nome" id="nome"></input>
        <label className="label2">Terminou teste de aviso:</label>
        <textarea name="text" placeholder="Digitar como foi teste" id="text"></textarea>
        <label className="Tentativas">Tentativas:</label>         
        <input type="checkbox" name="testes"></input>
        <select>  
  <option name="tentativas1" id="tentativas1" value={"1"}>Testes realizados</option>
  <option name="tentativas2" id="tentativas2" value={"2"}>Testes cancelados</option>
  <option name="tentativas3" id="tentativas3" value={"3"}>Testes pendentes</option>
</select>
       
 
        
        <button type="submit" className="formteste">enviar</button>
        </form>
    </FormControl>
    </div>
    </header>
    </div>
);
}

export default formulario12