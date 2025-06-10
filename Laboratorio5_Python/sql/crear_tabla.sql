CREATE DATABASE IF NOT EXISTS laboratorio5;
USE laboratorio5;

CREATE TABLE IF NOT EXISTS Estudiantes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    edad INT,
    ciudad VARCHAR(50)
);
