/*
  - Drop db if it exists already
  - Create db if db does not exists
  - Use the db
*/
DROP DATABASE IF EXISTS google_express_FEC;
CREATE DATABASE IF NOT EXISTS google_express_FEC;
USE google_express_FEC;

CREATE TABLE product_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(13,2) NOT NULL,
  store VARCHAR(100) NOT NULL,
  free_return_days INT NOT NULL,
  sameItem_Id VARCHAR(255) NOT NULL

)