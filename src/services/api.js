const products = [
  {
    id: 1,
    name: 'Футболка',
    colors: [
      {
        id: 1,
        name: 'черный',
        images: ['/assets/1/black_front.png', '/assets/1/black_back.png'],
        price: '123.00',
        description: 'Описание для "Футболка черный"',
        sizes: [1, 2, 3],
      },
      {
        id: 2,
        name: 'белый',
        images: ['/assets/1/white_front.png', '/assets/1/white_back.png'],
        price: '125.00',
        description: 'Описание для "Футболка белый"',
        sizes: [1, 2, 3, 4, 5],
      },
      {
        id: 3,
        name: 'серый',
        images: ['/assets/1/gray_front.png', '/assets/1/gray_back.png'],
        price: '120.00',
        description: 'Описание для "Футболка серый"',
        sizes: [],
      },
    ],
  },

  {
    id: 2,
    name: 'Майка',
    colors: [
      {
        id: 1,
        name: 'желтый',
        images: ['/assets/2/yellow_front.png', '/assets/2/yellow_back.png'],
        price: '88.00',
        description: 'Описание для "Майка желтый"',
        sizes: [1, 2, 3, 4, 5],
      },
      {
        id: 2,
        name: 'синий',
        images: ['/assets/2/blue_front.png', '/assets/2/blue_back.png'],
        price: '89.00',
        description: 'Описание для "Майка синий"',
        sizes: [2],
      },
      {
        id: 3,
        name: 'черный',
        images: ['/assets/2/black_front.png', '/assets/2/black_back.png'],
        price: '90.00',
        description: 'Описание для "Майка черный"',
        sizes: [],
      },
    ],
  },
]

export function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 250)
  })
}