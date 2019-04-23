<!doctype html>
<html>
<head><title>Handling form submission</title></head>
<body>
<?php

$connection = require("initDb.php");

$title = $_POST["title"];
$text = $_POST["text"];

if (!$title or !$text) {
  die("Please fill form fields");
}

$sql = "
  INSERT INTO news (title, text) VALUES ('$title', '$text')
";

if (!$connection->query($sql)) {
  die("Unexpected error");
}
?>

<a href="/news-app/">Go to main page</a>
<a href="/news-app/addNews.php">Add one more news or remove some</a>
</body>
</html>