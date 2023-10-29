<?php
include("conexao.php");
	$nome=$_POST['nome'];
	$cpf=$_POST['cpf'];
	$email =$_POST['email'];
    $senha=$_POST['senha'];
	
	$sql="INSERT INTO cadastro(nome,  cpf, email, senha)
	VALUES ('$nome', '$cpf', '$email', $senha)";
	if(mysqli_query($conexao, $sql)){
		header("Location: index.html");
	}else{
		echo "Erro". mysqli_connect_error($conexao);
	}
	
	mysqli_close($conexao);
?>