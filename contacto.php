<?php
   	$nombre = $_POST['name'];
	$email = $_POST['email'];
	$telefono = $_POST['telefono'];
	$mensaje = $_POST['descripcion'];
	$bcc =  "Bcc: clemenshemmerling@gmail.com. "\r\n";
	$cuerpomensaje = "Nombre: ".$nombre."\n"."E-Mail: ".$email."\n"."Telefono: ".$telefono."\n"."Mensaje: "."\n".$mensaje."\n\n\nURL: http://http://www.pinceladasnocturnas.com/";
	mail("clemenshemmerling@gmail.com, clemenshemmerling@outlook.com", "Pinceladas Nocturnas ",$cuerpomensaje, 'From:'. $email . "\r\n".$bcc);
	header('refresh:2; url=index.html');
?>



<center><h3>Gracias por escribirnos. Le enviaremos una respuesta a la brevedad posible</h3></center> 