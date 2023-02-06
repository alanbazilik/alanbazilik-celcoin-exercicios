<?php
function respota($codigo, $ok , $msg){
    header("Access-Control-Allow-Origin:*");
    header("Access-Control-Allow-Headers:*");
    header("Content-type: application/json");
    http_response_code($codigo);
    echo (json_encode([
        'ok' => $ok,
        'msg' => $msg
    ]));

    die;
}

if($_SERVER['REQUEST_METHOD']!="OPTIONS")
    respota(200, true,'');

if($_SERVER['REQUEST_METHOD']!="POST")
respota(400,false, "Metodo Invalido");    

$conexao = new PDO('mysql:host=localhost;dbname=formus', 'root', '');

$body = file_get_contents('php://input');

if(!$body)
    respota(400,false, "corpo da requisição não encotrado");
$body = json_decode($body);

$body->nome = filter_var($body->nome, FILTER_SANITIZE_STRING); 
$body->text = filter_var($body->text, FILTER_SANITIZE_STRING);
$bool -> teste = filter_var ($value, FILTER_VALIDATE_BOOLEAN);
$body->tentativas1 = filter_var($body->tentativas1, FILTER_SANITIZE_STRING);
$body->tentativas2 = filter_var($body->tentativas2, FILTER_SANITIZE_STRING);
$body->tentativas3 = filter_var($body->tentativas3, FILTER_SANITIZE_STRING);

if(!$body->nome || !$body->text  || !$body->teste || !$body->tentativas1 || !$body->tentativas2 || !$body->tentativas3 )
respota(400,false, "Dados Inválidos");

$stm = $conexao->prepare('INSERT INTO froms(nome,text,teste,tentativas1,tentativas2,tentativas3) VALUES (:nome,:text,:teste,:tentativas1,:tentativas2,:tentativas3)');
$stm->bindParam('nome', $body->nome);
$stm->bindParam('text', $body->text);
$stm->bindParam('teste', $body->teste);
$stm->bindParam('tentativas1', $body->tentativas1);
$stm->bindParam('tentativas2', $body->tentativas2);
$stm->bindParam('tentativas3', $body->tentativas3);
$stm->execute();
respota(400,true, "Messagem Salva com sucesso");
