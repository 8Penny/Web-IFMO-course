<!DOCTYPE html>
<html>
  <head>
    <title>news app</title>

    <style>
      h4, p {
        margin: 0;
      }
      article {
        border-bottom: 1px solid gray;
      }
    </style>
  </head>

  <body>
    <h1>News</h1>
    <?php require('app.php'); ?>

    <a href="/news-app/addNews">Admin page</a>
  </body>
</html>
