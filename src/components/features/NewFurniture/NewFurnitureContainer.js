import { connect } from 'react-redux';
import NewFurniture from './NewFurniture';
import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew } from '../../../redux/productsRedux.js';
import { getDeviceName } from '../../../redux/deviceNameRedux.js';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
  deviceName: getDeviceName(state),
});

export default connect(mapStateToProps)(NewFurniture);
