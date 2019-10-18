<?php
//
// http://php.net/manual/en/timezones.php
//
$theTimeZone = "America/Los_Angeles";
date_default_timezone_set($theTimeZone);
$now = new DateTime('now');
// echo "\xA+ now->format   : ". $now->format('Y:m:d:H:i:s');
echo $now->format('Y:m:d:H:i:s') . "\xA";
