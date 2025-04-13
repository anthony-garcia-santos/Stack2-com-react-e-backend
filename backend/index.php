<?php
header('Content-Type: application/json');

$data = [
  "mensagem" => "Funcionou, React! 😎",
  "hora" => date("H:i:s"),
];

echo json_encode($data);

?>
