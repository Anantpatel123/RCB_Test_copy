DROP DATABASE IF EXISTS top_songsDB;

CREATE DATABASE top_songsDB;

USE top_songsDB;

CREATE TABLE Top1000 (
 rank INT NOT NULL,
 artist VARCHAR(128),
 song VARCHAR(128),
 year  INT,
 raw_score DECIMAL(10, 4),
 usa_score DECIMAL(10, 4),
 uk_score DECIMAL(10, 4),
 wu_score DECIMAL(10, 4),
 row_score DECIMAL(10, 4),
 PRIMARY KEY(RANK)
);

SELECT * FROM top5000;
