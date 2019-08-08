/*
  - Drop db if it exists already
  - Create db if db does not exists
  - Use the db
*/
DROP DATABASE IF EXISTS google_express_FEC;
CREATE DATABASE IF NOT EXISTS google_express_FEC;
USE google_express_FEC;

CREATE TABLE product_items (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(13,2) NOT NULL,
  store VARCHAR(100) NOT NULL,
  free_return_days INT NOT NULL,
  sameItem_Id VARCHAR(255) NOT NULL
);


-- psql -h ec2-18-222-255-62.us-east-2.compute.amazonaws.com -d postgres -U postgres -c "\copy product_items (id, name, price, store, free_return_days, sameItem_Id)  from 'entryData1.csv' with delimiter as ',' CSV"



