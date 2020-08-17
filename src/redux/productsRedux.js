/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;
export const param = ({ products }) => products.price;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const getLimitedProducts = ({ products }, limit) => products.slice(0, limit);

export const sortAscByParam = ({ products }, param) =>
  products.sort((a, b) => a.price - b.price);

export const sortDescByParam = ({ products }, param) =>
  products.sort((a, b) => b.price - a.price);

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
