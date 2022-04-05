<?php
function insert_taches($tache,$date,$heurdepar,$heurfin){
    //permer d'inserer
    $data=array(
        'tache'=>$tache,
        'date'=>$date,
        'heuredepar'=>$heurdepar,
        'heurefin'=>$heurfin,
    );
    array_to_json("users",$data);
}
