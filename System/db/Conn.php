<?php

namespace System\Database;

use \PDO;
use \PDOException;

final class Conn
{
  const HOST = 'localhost';
  const DATABASE = 'DELIVERY';
  const USER = 'root';
  const PASSWORD = '';
  const CHARSET = 'utf8mb4';
  const OPTIONS = [
    PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8",
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ,
    PDO::ATTR_CASE => PDO::CASE_NATURAL
  ];


  public static $conn;

  public static function getInstance()
  {
    if (empty(self::$conn)) {
      try {
        self::$conn = new PDO(
          "mysql:host=" . self::HOST . "; dbname=" . self::DATABASE . "; CHARSET=" . self::CHARSET . "",
          self::USER,
          self::PASSWORD,
          self::OPTIONS
        );
      } catch (PDOException $error) {
        echo $error->getMessage();
      }
      return self::$conn;
    }
  }

  private function __construct()
  {
  }
  private function __clone()
  {
  }
}
