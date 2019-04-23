<!doctype html>
<html>
  <head>
    <title>Add news</title>
  </head>

  <body>
    <h2>Add</h2>
    <form action="handleFormSubmit.php" method="post">
      <label>Title: </label><input type="text" name="title"><br>
      <label>Text: </label><input type="text" name="text"><br>
      <input type="submit">
    </form>

    <h2>Remove (one by one)</h2>
    <?php
    $connection = require('initDb.php');
    $sql = "SELECT id, title, text FROM news";
    $news = $connection->query($sql);

    if ($news->num_rows > 0) {
      while ($row = $news->fetch_assoc()) {
        echo "
          <form action='removeNews.php' method='post'>
            Remove article " . $row["id"] . " with title " . $row["title"] . "
            <input type='hidden' name='id' value='" . $row["id"] . "'>
            <input type='submit'>
          </form>
        ";
      }
    } else {
      echo "No news";
    }
    ?>

    <a href="/news-app/">Go to main page</a>
  </body>
</html>