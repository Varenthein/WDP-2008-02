import { connect } from 'react-redux';
import MainLayout from './MainLayout';
import { getDeviceName, addWindowWidth } from '../../../redux/deviceNameRedux.js';

const mapStateToProps = state => ({
  deviceName: getDeviceName(state),
});

const mapDispatchToProps = dispatch => ({
  addWindowWidth: window_width => dispatch(addWindowWidth(window_width)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
