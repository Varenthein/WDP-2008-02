import Brands from './Brands';
import { connect } from 'react-redux';
import { getAll } from '../../../redux/brandsRedux';
import { getDeviceName } from '../../../redux/deviceNameRedux.js';

const mapStateToProps = state => ({
  brands: getAll(state),
  device: getDeviceName(state),
});

export default connect(mapStateToProps)(Brands);
