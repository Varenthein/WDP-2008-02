import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export function get_window_width() {
  let window_width = document.documentElement.clientWidth;
  return window_width;
}

class MainLayout extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    addWindowWidth: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.props.addWindowWidth(get_window_width()); //when I start the app.
    window.addEventListener('resize', () =>
      this.props.addWindowWidth(get_window_width())
    ); //when I resize the app`s window.
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
}

export default MainLayout;
