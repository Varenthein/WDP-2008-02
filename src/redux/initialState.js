const initialState = {
  deviceName: '',
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  feedbacks: [
    {
      title: 'Client feedback',
      sign: '"',
      opinion:
        'Some text here Some text here  Some text here Some text here Some text here Some text here Some text here Some text here Some text here Some text here Some text here Some text here Some text here Some text here Some text here Some text here',
      client_image: '/images/john-smith.jpg',
      client_name: 'John Smith',
      client_type: 'Furniture client',
    },
  ],
  brands: [
    {
      id: 'brand-1',
      index: 0,
      brandLogoImage: '/images/brands-logo/brand-logo-1.jpg',
    },
    {
      id: 'brand-2',
      index: 1,
      brandLogoImage: '/images/brands-logo/brand-logo-2.jpg',
    },
    {
      id: 'brand-3',
      index: 2,
      brandLogoImage: '/images/brands-logo/brand-logo-3.jpg',
    },
    {
      id: 'brand-4',
      index: 3,
      brandLogoImage: '/images/brands-logo/brand-logo-4.jpg',
    },
    {
      id: 'brand-5',
      index: 4,
      brandLogoImage: '/images/brands-logo/brand-logo-5.jpg',
    },
    {
      id: 'brand-6',
      index: 5,
      brandLogoImage: '/images/brands-logo/brand-logo-6.jpg',
    },
    {
      id: 'brand-7',
      index: 6,
      brandLogoImage: '/images/brands-logo/brand-logo-6.jpg',
    },
    {
      id: 'brand-8',
      index: 7,
      brandLogoImage: '/images/brands-logo/brand-logo-6.jpg',
    },
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      image: '/images/furniture/furniture-1.jpeg',
      category: 'bed',
      price: 80,
      stars: 2,
      promo: 'sale',
      hotDeals: 'HOT DEALS',
      newFurniture: true,
      compare: false,
      favorite: true,
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      image: '/images/furniture/furniture-2.jpeg',
      category: 'bed',
      price: 10,
      oldPrice: 50,
      stars: 4,
      promo: 'sale',
      hotDeals: 'HOT DEALS',
      newFurniture: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      image: '/images/furniture/furniture-3.jpeg',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      hotDeals: 'HOT DEALS',
      newFurniture: true,
      compare: true,
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      image: '/images/furniture/furniture-4.jpeg',
      category: 'bed',
      price: 30,
      oldPrice: 50,
      stars: 4,
      promo: 'sale',
      hotDeals: 'HOT DEALS',
      newFurniture: true,
      compare: true,
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      image: '/images/furniture/furniture-5.jpeg',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      hotDeals: 'HOT DEALS',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      image: '/images/furniture/furniture-6.jpeg',
      category: 'bed',
      price: 30,
      stars: 4,
      promo: 'sale',
      hotDeals: 'HOT DEALS',
      newFurniture: true,
      topSeller: true,
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      image: '/images/furniture/furniture-7.jpeg',
      category: 'bed',
      price: 30,
      oldPrice: 50,
      stars: 2,
      promo: 'sale',
      hotDeals: 'HOT DEALS',
      newFurniture: true,
      topSeller: true,
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      image: '/images/furniture/furniture-8.jpeg',
      category: 'bed',
      price: 30,
      stars: 5,
      promo: 'sale',
      hotDeals: 'HOT DEALS',
      newFurniture: true,
      topSeller: true,
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      image: '/images/furniture/furniture-9.jpeg',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      hotDeals: 'HOT DEALS',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      image: '/images/furniture/furniture-10.jpeg',
      category: 'bed',
      price: 30,
      stars: 5,
      promo: 'sale',
      hotDeals: 'HOT DEALS',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      image: '/images/furniture/furniture-11.jpeg',
      category: 'bed',
      price: 30,
      oldPrice: 50,
      stars: 2,
      promo: 'sale',
      hotDeals: 'HOT DEALS',
      newFurniture: true,
      topSeller: true,
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      image: '/images/furniture/furniture-12.jpeg',
      category: 'bed',
      price: 30,
      oldPrice: 50,
      stars: 5,
      promo: 'sale',
      hotDeals: 'HOT DEALS',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      image: '/images/furniture/furniture-1.jpeg',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      hotDeals: 'HOT DEALS',
      newFurniture: true,
      topSeller: true,
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      image: '/images/furniture/furniture-2.jpeg',
      category: 'bed',
      price: 30,
      stars: 4,
      promo: 'sale',
      hotDeals: 'HOT DEALS',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      image: '/images/furniture/furniture-3.jpeg',
      category: 'bed',
      price: 30,
      oldPrice: 50,
      stars: 2,
      promo: 'sale',
      hotDeals: 'HOT DEALS',
      newFurniture: true,
      topSeller: true,
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      image: '/images/furniture/furniture-4.jpeg',
      category: 'bed',
      price: 30,
      oldPrice: 50,
      stars: 4,
      promo: 'sale',
      hotDeals: 'HOT DEALS',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      image: '/images/furniture/furniture-5.jpeg',
      category: 'bed',
      price: 30,
      oldPrice: 50,
      stars: 2,
      promo: 'sale',
      hotDeals: 'HOT DEALS',
      newFurniture: true,
      topSeller: true,
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      image: '/images/furniture/furniture-6.jpeg',
      category: 'bed',
      price: 30,
      oldPrice: 50,
      stars: 5,
      promo: 'sale',
      hotDeals: 'HOT DEALS',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      image: '/images/furniture/furniture-7.jpeg',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      hotDeals: 'HOT DEALS',
      newFurniture: true,
      topSeller: true,
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      image: '/images/furniture/furniture-8.jpeg',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      hotDeals: 'HOT DEALS',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      image: '/images/furniture/furniture-9.jpeg',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      hotDeals: 'HOT DEALS',
      newFurniture: true,
      topSeller: true,
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      image: '/images/furniture/furniture-10.jpeg',
      category: 'bed',
      price: 30,
      oldPrice: 50,
      stars: 2,
      promo: 'sale',
      hotDeals: 'HOT DEALS',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      image: '/images/furniture/furniture-11.jpeg',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      hotDeals: 'HOT DEALS',
      newFurniture: true,
      topSeller: true,
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      image: '/images/furniture/furniture-12.jpeg',
      category: 'bed',
      price: 30,
      oldPrice: 50,
      stars: 2,
      promo: 'sale',
      hotDeals: 'HOT DEALS',
      newFurniture: true,
      topSeller: true,
    },
  ],
  cart: {
    products: [],
  },
  gallery: [
    {
      id: 'featured',
      name: 'FEATURED',
    },
    {
      id: 'topSeller',
      name: 'TOP SELLER',
    },
    {
      id: 'saleOff',
      name: 'SALE OFF',
    },
    {
      id: 'topRated',
      name: 'TOP RATED',
    },
  ],
};

export default initialState;
