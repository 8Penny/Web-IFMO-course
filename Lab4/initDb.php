<?php
$servername = "127.0.0.1";
$username = "polina";
$password = "pol";
$database_name = "test";
$table_name = "news";

$connection = new mysqli($servername, $username, $password, $database_name);

if ($connection->connect_error) {
  die("Connection failed: " . $connection->connect_error);
}

$sql = "
    CREATE TABLE IF NOT EXISTS $table_name (
      id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(30) NOT NULL,
      text VARCHAR(30) NOT NULL
    )
  ";

if (!$connection->query($sql)) {
  echo $connection->error;
  die("Cannot create table $table_name");
}

return $connection;