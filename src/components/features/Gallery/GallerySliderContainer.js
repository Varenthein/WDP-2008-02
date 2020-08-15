import { connect } from 'react-redux';

import GallerySlider from './GallerySlider';

import {
  getAll,
  getGallery,
  getSaleOff,
  getTopRated,
  getFeatured,
  getTopSeller,
} from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  products: getAll(state),
  gallery: getGallery(state),
  //saleOff: getSaleOff(state),
  //topRated: getTopRated(state),
  //featured: getFeatured(state),
  //topSeller: getTopSeller(state),
});

export default connect(mapStateToProps)(GallerySlider);
