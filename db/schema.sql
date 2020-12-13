-- if the database exists already, then delete it it --
DROP DATABASE IF EXISTS burger_db;

--create the database--
CREATE DATABASE burger_db;

--use the burger database for the rest of this document--
USE burger_db;

--create the table of burgers--
--include unique id (as the primary key), the name of the burger, and an indication of whether or not the burger has been eaten--
CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(75) NOT NULL,
    devoured BOOLEAN DEFAULT false
);