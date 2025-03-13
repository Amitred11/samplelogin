<?php
require '../vendor/autoload.php'; // Autoload MongoDB library

use MongoDB\Client;

// Connect to MongoDB
try {
    $mongoClient = new Client("mongodb://localhost:27017");
    $Login = $mongoClient->Login; // Database name: 'tasktracker'
} catch (Exception $e) {
    die("Error connecting to MongoDB: " . $e->getMessage());
}
?>