import { connect } from 'react-redux';

import GallerySlider from './GallerySlider';
import {
  getSaleOff,
  getTopRated,
  getTopSeller,
  getFeatured,
} from '../../../redux/galleryRedux.js';
import { getDeviceName } from '../../../redux/deviceNameRedux.js';

const mapStateToProps = state => ({
  galleryCategory: [
    getFeatured(state),
    getTopSeller(state),
    getSaleOff(state),
    getTopRated(state),
  ],
  device: getDeviceName(state),
});

export default connect(mapStateToProps)(GallerySlider);
