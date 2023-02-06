

export default{
    enviar: async(nome, text,testes, tentativas1, tentativas2, tentativas3) =>{
        let dados = { 
            nome, 
            text,
            testes,
            tentativas1, 
            tentativas2, 
            tentativas3
        }
        let requisitar = {
            method: 'POST',
           headers: { 'Content-Type' : 'application/json'},
           body: JSON.stringify(dados)
        }
   
    const response = await fetch('http://localhost/formulario/index.php');
    const data = await response.json();
    return data.msg;
    
}
}