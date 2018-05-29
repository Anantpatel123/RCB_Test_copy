DROP DATABASE IF EXISTS wishes_db;
CREATE DATABASE wishes_db;
USE wishes_db;

-- Create the table tasks.
CREATE TABLE wishes
(
id int NOT NULL AUTO_INCREMENT,
wish varchar(255) NOT NULL,
PRIMARY KEY (id)
);

-- Insert a set of records. (task) is a column.
INSERT INTO wishes (wish) VALUES ('Win a lotto');
INSERT INTO wishes (wish) VALUES ('work at googel.');
INSERT INTO wishes (wish) VALUES ('Go to europe.');