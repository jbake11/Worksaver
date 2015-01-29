<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$dom = new DOMDocument;
$dom->loadHTML(file_get_contents('mans.html'));
foreach ($dom->getElementsByTagName('a') as $node) {
    $filename = basename($node->getAttribute("href"));

    if (stristr($filename, "#") === FALSE && !file_exists('../images/manuals/' . $filename)):
        echo 'http://www.worksaver.com/Manuals/' . $filename . ' -o ../images/manuals/' . $filename . "\n";
        shell_exec('curl http://www.worksaver.com/Manuals/' . $filename . ' -o ../images/manuals/' . $filename);
    endif;
}