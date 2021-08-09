CREATE DATABASE IF NOT EXISTS tododb;
USE tododb;

CREATE TABLE todos (
  id int(10) unsigned PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title VARCHAR(255),
  completed BOOLEAN,
  deadline datetime,
  created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
);
