<?php
require_once 'Celebrity.php';

try {
    $connection = new PDO(
        'mysql:dbname=celebrities;host=localhost;charset=utf8', // connection string
        'root', // username
        '' // password
    );
} catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
}

$orderBy = $_GET['orderby'] ?? null;
$sortBy = $_GET['sortby'] ?? null;

$query = "SELECT `celebrities`.*
          FROM `celebrities`
          ";

if ($orderBy === 'name') {
    $query .= " ORDER BY `name`";
} elseif ($orderBy === 'wealth') {
    $query .= " ORDER BY `wealth`";
} else {
    $query .= " ORDER BY `name`";
}

if ($sortBy === 'asc') {
    $query .= " ASC";
} elseif ($sortBy === 'desc') {
    $query .= " DESC";
} else {
    $query .= " ASC";
}

// $query .= " LIMIT 10";

$statement = $connection->prepare($query);
$success = $statement->execute();
$statement->setFetchMode(PDO::FETCH_ASSOC);
header('Content-Type: application/json');
echo json_encode($statement->fetchAll());
