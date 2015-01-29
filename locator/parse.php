<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$files = array();

$dom = new DOMDocument;
$dom->loadHTML(file_get_contents('../../locator/mans.html'));
foreach ($dom->getElementsByTagName('a') as $node) {
    $filename = basename($node->getAttribute("href"));
    $filename = str_replace("%20", " ", $filename);

    if (stristr($filename, "#") === FALSE && stristr($node->getAttribute("href"), "literature") === FALSE && !file_exists('./' . $filename)):

        if (in_array($filename, $files))
            continue;

        $files[] = $filename;

        $ch = curl_init();
        $source = "http://www.worksaver.com/Manuals/" . $filename;
        echo $source . "\n";

        $header = array(
            'User-Agent: Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12',
            'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            'Accept-Language: en-us,en;q=0.5',
            'Accept-Encoding: gzip,deflate',
            'Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7',
            'Keep-Alive: 115',
            'Connection: keep-alive',
        );



        curl_setopt($ch, CURLOPT_URL, urlencode($source));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_BINARYTRANSFER, true);
        curl_setopt($ch, CURLOPT_COOKIEFILE, 'cookies.txt');
        curl_setopt($ch, CURLOPT_COOKIEJAR, 'cookies.txt');
        curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
        $data = curl_exec($ch);
        curl_close($ch);



        $destination = $filename;
        $file = fopen($destination, "w+");
        fputs($file, $data);
        fclose($file);


        sleep(1);
    endif;
}