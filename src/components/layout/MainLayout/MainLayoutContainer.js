import { connect } from 'react-redux';
import MainLayout from './MainLayout';
import { getAll, addWindowWidth } from '../../../redux/mainLayoutRedux.js';

const mapStateToProps = state => ({
  deviceName: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  addWindowWidth: window_width => dispatch(addWindowWidth(spy(window_width))),
});

export function spy(gggggg) {
  console.log('Container: ', gggggg);
  return gggggg;
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
