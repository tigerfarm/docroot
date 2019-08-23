<?php   
echo '+++ Echo POST data.';
echo "\xA";
echo "+ URL: " . $argv[0] . " " . $argv[1] . " " .  "\xA";
foreach($_POST as $key=>$value){
   echo '++ ' . $key . ' => ' . $value . "\xA";
}
echo "+ End of list.\xA";

$fp = fopen('cgi/echo.txt', 'w');
fwrite($fp, '+++ Echo POST data.');
fwrite($fp, "\xA");
fwrite($fp, "+ URL: " . $argv[0] . " " . $argv[1] . " " .  "\xA" );
foreach($_POST as $key=>$value){
   fwrite($fp, '++ ' . $key . ' => ' . $value . "\xA");
}
fwrite($fp, "+ End of list.\xA");
fclose($fp);
?>