DROP DATABASE IF EXISTS pop_QuizDB;

CREATE DATABASE pop_QuizDB;

USE pop_QuizDB;

CREATE TABLE customers (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NULL,
  address VARCHAR(45) NOT NULL,
  zipcode INT (45) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO customers (name, address, zipcode)
VALUES ("Anant", "123 abc st", "12345");

INSERT INTO customers (name, address, zipcode)
VALUES ("Sam", "12 John st", "10001");

INSERT INTO customers (name, address, zipcode)
VALUES ("Anant", "50 peter's ave", "10578");