CREATE DATABASE IF NOT EXISTS tododb;
USE tododb;

CREATE TABLE todos (
  id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255),
  completed VARCHAR(255),
  deadline VARCHAR(255)
);
