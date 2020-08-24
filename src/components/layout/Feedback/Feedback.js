import React from 'react';
import PropTypes from 'prop-types';
import styles from './Feedback.module.scss';
import Swipeable from '../../common/Swipeable/Swipeable';

class Feedback extends React.Component {
  state = {
    activePage: 0,
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage, manualPageChange: true });
  }

  handleRightAction = () => {
    const { activePage, manualPageChange } = this.state;
    if (manualPageChange) {
      this.setState({ manualPageChange: false });
    } else if (activePage > 0) {
      this.setState({ activePage: activePage - 1 });
    }
  };

  handleLeftAction = () => {
    const { activePage, manualPageChange } = this.state;
    if (manualPageChange) {
      this.setState({ manualPageChange: false });
    } else {
      this.setState({ activePage: activePage + 1 });
    }
  };
  render() {
    const { feedbacks } = this.props;
    const { activePage } = this.state;
    const dots = [];
    for (let i = 0; i < feedbacks.length; i++) {
      dots.push(
        <li>
          <a
            href='/#'
            onClick={event => {
              event.preventDefault();
              return this.handlePageChange(i);
            }}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>Client feedback</h3>
              </div>
              <div className={styles.headingEmpty}></div>

              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <Swipeable
            activePage={this.state.activePage}
            rightAction={this.handleRightAction}
            leftAction={this.handleLeftAction}
          >
            {feedbacks.map(feedback => (
              <div key={feedback.id} className={styles.content}>
                <div className={styles.sign}>
                  <div key={feedback.sign}>{feedback.sign}</div>
                </div>
                <div className={styles.opinion}>
                  <div key={feedback.opinion}>{feedback.opinion}</div>
                </div>
                <div className={styles.clientsData}>
                  <div>
                    <img
                      key={feedback.client_image}
                      src={feedback.client_image}
                      alt={'client_image'}
                      className={styles.client_image}
                    />
                  </div>
                </div>
                <div className={styles.client_nameAndType}>
                  <div className={styles.client_name}>
                    <div key={feedback.client_name}>{feedback.client_name}</div>
                  </div>
                </div>
                <div className={styles.client_type}>
                  <div key={feedback.client_type}>{feedback.client_type}</div>
                </div>
              </div>
            ))}
          </Swipeable>
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  feedbacks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      sign: PropTypes.string,
      opinion: PropTypes.string,
      client_image: PropTypes.string,
      client_name: PropTypes.string,
      client_type: PropTypes.string,
    })
  ),
};

export default Feedback;
