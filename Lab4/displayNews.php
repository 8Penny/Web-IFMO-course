<?php

function displayNews($connection) {
  $sql = "SELECT id, title, text FROM news";
  $news = $connection->query($sql);

  if ($news->num_rows > 0) {
    while ($row = $news->fetch_assoc()) {
      echo "
          <article>
            <h4>" . $row["title"] . "</h4>
            <p>" . $row["text"] . "</p>
          </article>
        ";
    }
  } else {
    echo "0 results";
  }
}
