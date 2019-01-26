DROP DATABASE IF EXISTS beers_db;
CREATE DATABASE beers_db;
USE beers_db;

-- CREATE TABLE beers (
--     id INT NOT NULL AUTO_INCREMENT,
--     beer_name VARCHAR(256) NOT NULL,
--     ABV DECIMAL(3,1) NOT NULL,
--     country VARCHAR(256) NOT NULL,
--     brewery VARCHAR(256) NOT NULL,
--     flavor VARCHAR(256),
--     image_link VARCHAR(256),
--     PRIMARY KEY (id)
-- );

-- CREATE TABLE ratings (
--     beer_id INT NOT NULL,
--     user_id VARCHAR(256) NOT NULL,
--     rating DECIMAL (2, 1)
-- );

-- CREATE TABLE users (
--     user_id INT NOT NULL,
--     username VARCHAR(256) NOT NULL,
--     password VARCHAR(256) NOT NULL
-- );