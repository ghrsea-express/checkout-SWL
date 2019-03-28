/*
  - Drop db if it exists already
  - Create db if db does not exists
  - Use the db
*/
DROP DATABASE IF EXISTS product_items;
CREATE DATABASE IF NOT EXISTS product_items;
USE product_items;

CREATE TABLE items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price DECIMAL NOT NULL,
  store VARCHAR(100) NOT NULL,
  free_return_days INT NOT NULL
) 