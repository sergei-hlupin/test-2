const { faker } = require('@faker-js/faker');
module.exports = () => {
  const { faker } = require('@faker-js/faker')
  const stocksTypes = ['discount', 'benefit', 'kits']
  const data = {
    products: [],
    reviews: [],
    shops: [],
    stocks: [],
  }

  for (let i = 1; i <= 100; i++) {
    const productPrice = faker.commerce.price({ min: 4000, max: 1000000, dec: 0 })
    data.products.push({
      id: i,
      name: faker.commerce.productName(),
      price: productPrice,
      code: faker.helpers.rangeToNumber({ min: 1000, max: 5000 }),
      quantityInStore: faker.helpers.rangeToNumber({ min: 1, max: 20 }),
      color: faker.color.rgb(),
      inStock: Boolean(faker.helpers.maybe(() => 'Hello World!', { probability: 0.7 })),
      discount: faker.commerce.price({ min: 1000, max: 3000, dec: 0 }),
      description: faker.commerce.productDescription(),
      adjective: faker.commerce.productAdjective(),
      priceHistory: [
        {
          dateTime: faker.date.between({ from: '2023-01-01T00:00:00.000Z', to: '2023-02-01T00:00:00.000Z' }),
          price: faker.commerce.price({ min: 4000, max: Number(productPrice), dec: 0 })

        },
        {
          dateTime: faker.date.between({ from: '2023-02-01T00:00:00.000Z', to: '2023-03-01T00:00:00.000Z' }),
          price: faker.commerce.price({ min: 4000, max: Number(productPrice), dec: 0 })

        },
        {
          dateTime: faker.date.between({ from: '2023-03-01T00:00:00.000Z', to: '2023-04-01T00:00:00.000Z' }),
          price: faker.commerce.price({ min: 4000, max: Number(productPrice), dec: 0 })

        },
      ],
      images: faker.helpers.multiple(() => {
        return faker.image.urlLoremFlickr({ category: 'nature' })
      }, {count: 4}),
    })

    data.reviews.push({
      id: i,
      productId: i,
      comment:  {
        pluses: faker.lorem.lines({ min: 1, max: 10 }),
        minuses: faker.lorem.lines({ min: 1, max: 10 }),
        commentText: faker.lorem.lines({ min: 1, max: 10 }),
      },
      rating: faker.helpers.rangeToNumber({ min: 1, max: 5 })
    })

    data.shops.push({
      id: i,
      name: `Shop № ${i}`,
      location: faker.location.nearbyGPSCoordinate({ origin: [55, -37] }),
      streetAddress: faker.location.streetAddress({ useFullAddress: true }),
      inOpen: Boolean(faker.helpers.maybe(() => 'Hello World!', { probability: 0.8 })),
      description: faker.lorem.lines({ min: 1, max: 1 }),
    })

    data.shops.push({
      id: i,
      productId: i,
      name: faker.lorem.lines({ min: 1, max: 2 }),
      date: faker.date.between({ from: '2023-09-01T00:00:00.000Z', to: '2023-10-01T00:00:00.000Z' }),
      type: stocksTypes[faker.helpers.rangeToNumber({ min: 0, max: stocksTypes.length - 1 })],
      image: faker.image.urlLoremFlickr({ category: 'nature' }),
      isPopular: Boolean(faker.helpers.maybe(() => 'Hello World!', { probability: 0.6 }))
    })
  }

  return data
}