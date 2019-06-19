<?php

  $user = "root";
  $pass = "root";
  $url = "localhost";
  $db = "db_eddylacy";

  $link = mysqli_connect($url, $user, $pass, $db, "8888");

  $emailQuery = "INSERT INTO tbl_subs (subs_email, subs_birthday) VALUES ('$_POST[email2]', 'n/a')";

  mysqli_query($link, $emailQuery);




?>

?>
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Thank You For Subscribing</title>
<link rel="stylesheet" href="css/foundation.css">
<link rel="stylesheet" href="css/thankyou.css">
</head>
<body>
    <div id="thankYouContainer" class="large-8 large-offset-2 medium-8 medium-offset-2 small-12 cell">
      <p>Thanks for subscribing to my newsletter, we promise to never send you any spam</p>
      <a href="index.html"><h2>Return To Site</h2></a>
    </div>
</body>
</html>
