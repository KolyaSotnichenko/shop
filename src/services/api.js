const products = [
  {
    id: 1,
    category: 'smartphones',
    name: 'Футболка',
    image: '/assets/1/black_front.png',
    price: '123.0',
    description: 'Описание для "Футболка черный"',
  },
  {
    id: 2,
    category: 'laptops',
    name: 'Майка',
    image: '/assets/2/yellow_front.png',
    price: '88.00',
    description: 'Описание для "Майка желтый"',
  },
  {
    id: 3,
    category: 'laptops',
    name: 'Майка',
    image: '/assets/2/black_front.png',
    price: '100.00',
    description: 'Описание для "Майка желтый"',
  },
]

export function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 250)
  })
}