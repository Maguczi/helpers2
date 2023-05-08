<?php

$name = "index";
if (!empty($_REQUEST['url'])) {
    $name = ltrim($_REQUEST['url'], "/");
}

@$content = file_get_contents($name . ".html");

if ($content !== false) {
    echo $content;
} else {
    echo file_get_contents("404.html");
}