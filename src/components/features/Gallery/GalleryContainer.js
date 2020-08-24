import { connect } from 'react-redux';

import Gallery from './Gallery';

import { getAll } from '../../../redux/productsRedux.js';
import { getDeviceName } from '../../../redux/deviceNameRedux.js';

const mapStateToProps = state => ({
  products: getAll(state),
  device: getDeviceName(state),
});

export default connect(mapStateToProps)(Gallery);
