<?php

$username="root";
$password="";
$database="test";

mysql_connect(localhost,$username,$password);
@mysql_select_db($database) or die( "Unable to select database");
$query="SELECT * FROM entregas";
$result=mysql_query($query);

$num=mysql_numrows($result);

mysql_close();

echo "<b>
<center>Database Output</center>
</b>
<br>
<br>";
$i=0;

while ($i < $num) {
    $idEntrega=mysql_result($result,$i,"idEntrega");
    $idPedido=mysql_result($result,$i,"idPedido");
    $idCliente=mysql_result($result,$i,"idCliente");
    $nomeRecebedor=mysql_result($result,$i,"nomeRecebedor");
    $cpfRecebedor=mysql_result($result,$i,"cpfRecebedor");
    echo "<b>
    $idEntrega $idPedido</b>
    <br>
    $idCliente<br>
    $nomeRecebedor<br>
    $cpfRecebedor<hr>
    <br>";
    
    $i++;
}

?>