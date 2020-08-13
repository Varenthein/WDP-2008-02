import React from 'react';
import PropTypes from 'prop-types';
import styles from './Feedback.module.scss';

class Feedback extends React.Component {
  render() {
    const { feedback } = this.props;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                {feedback.map(feedbacks => (
                  <div key={feedbacks.title} className={styles.title}>
                    {feedbacks.title}
                  </div>
                ))}
              </div>
              <div className={styles.headingEmpty}></div>

              <div className={'col-auto ' + styles.dots}>
                <ul>
                  <li>
                    <a></a>
                    <a></a>
                    <a></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.sign}>
              {feedback.map(feedbacks => (
                <div key={feedbacks.sign}>{feedbacks.sign}</div>
              ))}
            </div>
            <div className={styles.opinion}>
              {feedback.map(feedbacks => (
                <div key={feedbacks.opinion}>{feedbacks.opinion}</div>
              ))}
            </div>
            <div className={styles.clientsData}>
              <div>
                {feedback.map(feedbacks => (
                  <img
                    key={feedbacks.client_image}
                    src={feedbacks.client_image}
                    alt={'client_image'}
                    className={styles.client_image}
                  />
                ))}
              </div>
              <div className={styles.client_nameAndType}>
                <div className={styles.client_name}>
                  {feedback.map(feedbacks => (
                    <div key={feedbacks.client_name}>{feedbacks.client_name}</div>
                  ))}
                </div>
                <div className={styles.client_type}>
                  {feedback.map(feedbacks => (
                    <div key={feedbacks.client_type}>{feedbacks.client_type}</div>
                  ))}
                </div>
              </div>
            </div>
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
      sign: PropTypes.string,
      opinion: PropTypes.string,
      client_image: PropTypes.string,
      client_name: PropTypes.string,
      client_type: PropTypes.string,
    })
  ),
};

export default Feedback;
