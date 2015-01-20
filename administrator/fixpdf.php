<?php

$db = mysql_connect("localhost", "worksaver", "isshit67");
mysql_select_db('worksaver', $db);
$db2 = mysql_connect("localhost", "worksaver", "isshit67");
mysql_select_db('worksaver', $db2);

$select = "SELECT * from c35su_content";

$result = mysql_query($select);

while ($row = mysql_fetch_array($result)):


    $find = array(
        "templates/worksaver/literature/",
        "templates/worksaver/manuals/"
    );

    $replace = array(
        "images/literature/",
        "images/manuals/"
    );

    $full = str_replace($find, $replace, $row['fulltext']);
    $intro = str_replace($find, $replace, $row['introtext']);

    $update = "UPDATE c35su_content SET `introtext` = '" . $intro . "', `fulltext` = '" . $full . "' WHERE `id` = " . $row['id'] . " LIMIT 1";
//    mysql_query($update, $db2);

endwhile;
