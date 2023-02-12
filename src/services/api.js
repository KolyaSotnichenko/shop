const products = [
  {
    id: 1,
    category: 'smartphones',
    name: 'Iphone 14 Pro Max',
    image: '/assets/1/iphone.jpeg',
    price: '123.0',
    description: 'Описание для "Iphone 14 Pro Max"',
  },
  {
    id: 2,
    category: 'laptops',
    name: 'Macbook Air M1',
    image: '/assets/2/macbook.jpeg',
    price: '88.00',
    description: 'Описание для "Macbook Air M1"',
  },
  {
    id: 3,
    category: 'tablets',
    name: 'Ipad 10.2"',
    image: '/assets/3/ipad.jpeg',
    price: '100.00',
    description: 'Описание для "Ipad 10.2""',
  },
]

export function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 250)
  })
}