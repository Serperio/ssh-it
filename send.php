<?
error_reporting(0);
$nombre = $_POST['Nombre'];
$correo_electronico= $_POST['Correo'];
$mensaje=$_POST['mensaje'];
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por " . $nombre . " \r\n";
$mensaje .= "Su e-mail es: " . $mensaje . " \r\n";

$para = 'pablo.betancourt@usm.cl';
$asunto = 'Pagina web';

mail($para, $asunto, utf8_decode($mensaje), $header);

echo 'mensaje enviado correctamente';

?>