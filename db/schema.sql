DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(25) NULL DEFAULT 'Plain Jane',
    devoured BOOLEAN DEFAULT "false"
);
