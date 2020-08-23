export const getGallery = ({ gallery }) => gallery;

export const getSaleOff = ({ products }) => {
  return {
    id: 'saleOff',
    name: 'SALE OFF',
    products: products.filter(item => item.oldPrice),
  };
};

export const getTopRated = ({ products }) => {
  return {
    id: 'topRated',
    name: 'TOP RATED',
    products: products.filter(item => item.stars >= 4),
  };
};

export const getTopSeller = ({ products }) => {
  return {
    id: 'topSeller',
    name: 'TOP SELLER',
    products: products.filter(item => item.topSeller),
  };
};

export const getFeatured = ({ products }) => {
  return {
    id: 'featured',
    name: 'FEATURED',
    products: products.filter(item => item.featured),
  };
};

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
