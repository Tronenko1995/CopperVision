<?php
require $_SERVER["DOCUMENT_ROOT"].'/classes/queryhandler.php';
$action = $_POST['action'];
$entityid = $_POST['id'];

$qurey = new queryHandler();
if($action == 'getregion') {
    $list = $qurey->getRegions();
    echo $list;
} elseif($action == 'getcity') {
    $list = $qurey->getCities($entityid);
    echo $list;
} elseif($action == 'getobject') {
    $list = $qurey->getObjects($entityid);
    echo $list;
}elseif($action == 'getrefobject') {
    $list = $qurey->getRefObject($entityid);
    echo $list;
} elseif ($action == 'submitform'){
    $data = $_POST['formdata'];
    $responce = $qurey->saveFormData($data);
}
?>