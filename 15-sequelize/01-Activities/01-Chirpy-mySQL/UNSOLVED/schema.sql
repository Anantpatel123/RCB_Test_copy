DROP DATABASE IF EXISTS chirpy_db;
CREATE DATABASE chirpy_db;
USE chirpy_db;

CREATE TABLE chirps (
(
id int NOT NULL AUTO_INCREMENT,
author varchar(255) NOT NULL,
chirp varchar(255) NOT NULL,
time_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
 
);