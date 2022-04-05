<?php
function json_to_array(string $key):array{
    $data=file_get_contents();
  
    return $data[$key];
    }

function array_to_json(string $key,array $data){
    $tab=json_to_array();
    $tab[$key][]=$data;

    
    file_put_contents($data);
}