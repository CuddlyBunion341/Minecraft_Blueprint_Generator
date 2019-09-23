<?php
  $handle=opendir("js/");

  while (($file = readdir($handle))!==false) {
    echo '<script type="text/javascript" src="$file"></script>';
      }

  closedir($handle);
  $handletwo=opendir("js/json");

  while (($file = readdir($handletwo))!==false) {
    echo '<script type="text/javascript" src="$file"></script>';
      }

  closedir($handletwo);
?>
