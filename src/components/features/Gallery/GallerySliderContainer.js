import { connect } from 'react-redux';

import GallerySlider from './GallerySlider';

import {
  getSaleOff,
  getTopRated,
  getTopSeller,
  getFeatured,
} from '../../../redux/galleryRedux.js';

const mapStateToProps = state => ({
  galleryCategory: [
    getFeatured(state),
    getTopSeller(state),
    getSaleOff(state),
    getTopRated(state),
  ],
});

export default connect(mapStateToProps)(GallerySlider);
