CREATE DATABASE inventario;

USE invetario;

CREATE DATABASE (
    idInven INTEGER NOT NULL PRIMARY KEY AUTO_INCREMET,
    title VARCHAR(30),
    element VARCHAR(45),
    dataCreate TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);