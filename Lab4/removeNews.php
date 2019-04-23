<!doctype html>
<html>
<head><title>Handling form submission</title></head>
<body>
<?php

$connection = require("initDb.php");

$id = $_POST["id"];

$sql = "
  DELETE FROM news WHERE id = $id
";

if (!$connection->query($sql)) {
  die("Unexpected error");
}
?>

<a href="/news-app/">Go to main page</a>
<a href="/news-app/addNews.php">Add one more news or remove some</a>
</body>
</html>