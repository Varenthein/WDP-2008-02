import React from 'react';
import PropTypes from 'prop-types';
import styles from './Feedback.module.scss';

class Feedback extends React.Component {
  render() {
    const { feedback } = this.props;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='col'>
            <div className={styles.title}>{feedback[0].title}</div>
          </div>
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      opinion: PropTypes.string,
      client_name: PropTypes.string,
      client_type: PropTypes.string,
    })
  ),
};

export default Feedback;
