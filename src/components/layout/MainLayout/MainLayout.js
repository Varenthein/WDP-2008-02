import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export function get_window_width() {
  let window_width = document.documentElement.clientWidth;
  console.log('window_width: ', window_width);
  return window_width;
}
window.addEventListener('resize', get_window_width);

export function handleTest() {
  console.log('test: ');
}

export function handleWidth(window_width) {
  this.props.addWindowWidth(window_width);
}

const MainLayout = ({ children, deviceName, addWindowWidth }) => (
  <div onClick={() => addWindowWidth(get_window_width())}>
    <Header />
    {children}
    <Footer />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
  addWindowWidth: PropTypes.func,
  deviceName: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      mode: PropTypes.string,
    })
  ),
};

export default MainLayout;
