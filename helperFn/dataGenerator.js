const faker = require('faker');

exports.Generator = () => {

  const entry = {}

  entry.itemID = faker.finance.account()

  entry.name = faker.commerce.productName()

  entry.price = faker.commerce.price()

  entry.store = faker.company.companyName()

  entry.returnDays = faker.random.number()

  return entry
}