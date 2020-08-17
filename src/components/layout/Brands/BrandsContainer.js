import Brands from './Brands';
import { connect } from 'react-redux';
import { getAll } from '../../../redux/brandsRedux';
import { getDevice } from '../../../redux/deviceRedux.js';

const mapStateToProps = state => ({
  brands: getAll(state),
  device: getDevice(state),
});

export default connect(mapStateToProps)(Brands);
