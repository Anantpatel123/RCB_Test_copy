DROP DATABASE IF EXISTS seinfeld_db;
CREATE DATABASE seinfeld_db;
USE seinfeld_db;

-- Created the table "schools" 
CREATE TABLE actors (
  id int AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  coolness_points INTEGER(10),
  attitude varchar (30),
  PRIMARY KEY(id)
);

-- Inserted a set of records into the table
INSERT INTO actors (name, coolness_points, attitude) 
VALUES ("Jerry", 10, "relaxed");
INSERT INTO actors (name, coolness_points, attitude) 
VALUES ("Ellan", 8, "calm");
INSERT INTO actors (name, coolness_points, attitude) 
VALUES ("George", 5, "stresed");
INSERT INTO actors (name, coolness_points, attitude) 
VALUES ("Kramer", 10, "relaxed");
