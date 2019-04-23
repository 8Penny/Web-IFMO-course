<?php
$connection = require('initDb.php');
require('displayNews.php');

displayNews($connection);

$connection->close();
