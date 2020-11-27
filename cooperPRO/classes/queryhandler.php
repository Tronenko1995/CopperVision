<?php

class queryHandler {

    private $mysqli;

    function __construct() {
        $host = 'localhost'; // адрес сервера
        $database = 'u1216121_default'; // имя базы данных
        $user = 'u1216121_default'; // имя пользователя
        $password = '4hrIVvA!'; // пароль

        $this->mysqli = new mysqli($host, $user, $password, $database);
        //echo '<pre>'.print_r($data, true).'</pre>';

        /* Проверить соединение */

        if ($this->mysqli->connect_errno) {
            printf("Соединение не удалось: %s\n", $this->mysqli->connect_error);
            exit();
        }

        /* изменение набора символов на utf8 */
        if (!$this->mysqli->set_charset("utf8")) {
            printf("Ошибка при загрузке набора символов utf8: %s\n", $this->mysqli->error);
            exit();
        }
    }

    public function getRegions() {
        $regions = array();
        $sqlList = "SELECT DISTINCT `region` FROM `optics` ORDER BY `region` ASC";
        $list = $this->mysqli->query($sqlList);
        if($list->num_rows > 0) {
            while ($row = $list->fetch_assoc()) {
                $regions[] = array('name' => $row['region'], 'value' => $row['region']);
            }
        }
        echo json_encode($regions);
    }


    public function getCities($region) {
        $cities = array();
        $sqlList = "SELECT DISTINCT `city` FROM `optics` WHERE `region` = '". $region ."' ORDER BY `region` ASC";
        $list = $this->mysqli->query($sqlList);
        if($list->num_rows > 0) {
            while ($row = $list->fetch_assoc()) {
                $cities[] = array('name' => $row['city'], 'value' => $row['city']);
            }
        }
        echo json_encode($cities);
    }

    public function getObjects($city) {
        $objects = array();
        $sqlList = "SELECT `name`, `address`, `id` FROM `optics` WHERE `city` = '". $city ."' ORDER BY `name` ASC";
        $list = $this->mysqli->query($sqlList);
        if($list->num_rows > 0) {
            while ($row = $list->fetch_assoc()) {
                $objects[] = array('name' => $row['name'].' '.$row['address'], 'value' =>  $row['id']);
            }
        }
        echo json_encode($objects);
    }

    public function getRefObject($id) {
        $objects['obj'] = 'данные отсутствуют';
        $objects['value'] = '';
        $sqlList = "SELECT `name`, `address`, `city` FROM `optics` WHERE `id` = '". $id ."'";
        $res = $this->mysqli->query($sqlList);
        if($res->num_rows > 0) {
            if ($row = $res->fetch_assoc()) {
                $objects['obj'] = $row['name'];
                if($row['address']) {
                    $objects['obj'] .= ', '.$row['address'];
                }
                if($row['city']) {
                    $objects['obj'] .= ', '.$row['city'];
                }
                $objects['value'] = $id;
            }
        }
        echo json_encode($objects);
    }

    public function saveFormData($data) {
        $values = array();
        $error = array();
        $syserror = array();
        $result['success'] = false;
        parse_str($data, $values);
        if(empty($values['refobject']) && empty($values['bject'])) {
            $error[] = 'bject';
        }
        if(empty($values['grade'])) {
            $error[] = 'grade';
        }
        if(empty($values['quality'])) {
            $error[] = 'quality';
        }
        if($values['quality'] == 3 && empty(trim($values['quality-text']))) {
            $error[] = 'quality-text';
        }
        if(count($error) == 0) {
            if(!empty($values['bject'])) {
                $id = $values['bject'];
            } else {
                $id = $values['refobject'];
            }

            $sqlList = "SELECT `region`, `city`, `name` FROM `optics` WHERE `id` = '". $id ."'";
            $res = $this->mysqli->query($sqlList);
            if($res->num_rows > 0) {
               if($row = $res->fetch_assoc()) {
                   if($values['quality'] == 1) {
                       $quality = 'Качество коммуникации';
                   } else if ($values['quality'] == 2) {
                       $quality = 'Скорость обслуживания';
                   } else if ($values['quality'] == 3) {
                       $quality = $values['quality-text'];
                   }

                   $sqlResult = "
                        INSERT INTO `results` (`answerdate`, `id` , `region`, `city`, `object`, `grade`, `quality`)
                        VALUES (
                                NOW(), '" .$id."', '" .$row['region']."', '" .$row['city']."',
                                '" .$row['name']."', '" .$values['grade']."', '" .$quality."'
                            )";
                   $updated = $this->mysqli->query($sqlResult);
                   if($updated) {
                       $result['success'] = true;
                   } else {
                       $syserror[] = 'Ошибка сохранения результата';
                   }
               } else {
                   $syserror[] = 'Ошибка получения данных об объетке';
               }
            } else {
                $error[] = 'bject';
            }
        }
        $result['error'] = $error;
        $result['syserror'] = $syserror;
        echo json_encode($result);
    }
}
?>