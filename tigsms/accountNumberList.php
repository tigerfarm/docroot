<?php
if ($argc > 1) {
    $tokenPassword = $argv[1];
} else {
    $tokenPassword = htmlspecialchars($_REQUEST['tokenpassword']);
}
if ($tokenPassword == "") {
    echo '0 -- tokenpassword must be a GET parameter.';
    return;
}
$token_password = getenv("TOKEN_PASSWORD");
if ($token_password !== $tokenPassword) {
    // echo "0" . " Environment:" . $token_password . ": Parameter:" . $tokenPassword . ":";
    echo "0 -- invalid tokenpassword";
    return;
}

require __DIR__ . '/../twilio-php-master/Twilio/autoload.php';
use Twilio\Rest\Client;
$client = new Client(getenv('ACCOUNT_SID'), getenv('AUTH_TOKEN'));
$i = 0;
$sNumbers = "";
$separator = ":";
foreach ($client->incomingPhoneNumbers->read() as $number) {
    $sNumbers = $sNumbers . $number->phoneNumber . $separator;
}
if ($sNumbers == "") {
    echo "0";
    return;
}
foreach ($client->messaging->v1->services->read() as $service) {
    $sNumbers = $sNumbers . $service->sid . $separator;
}
echo substr($sNumbers,0,strlen($sNumbers)-1);
// echo "\xA";
?>