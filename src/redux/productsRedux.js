/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const getGallery = ({ gallery }) => gallery;

export const getSaleOff = ({ products }) => products.filter(item => item.oldPrice);

export const getTopRated = ({ products }) => products.filter(item => item.stars >= 4);

export const getTopSeller = ({ gallery }) => gallery.topSeller;

//export const getFeatured = ({ gallery }) => gallery.featured;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
