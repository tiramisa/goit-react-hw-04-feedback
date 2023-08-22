import React, { Component } from 'react';
import Section from '../section/Section';
import FeedbackOptions from '../feedbackOptions/FeedbackOptions';
import Statistics from '../statistics/Statistics';
import Notification from '../notification/Notification';
import styles from '../../css/index.module.css';

class FeedbackApp extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = (feedbackType) => {
    this.setState((prevState) => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  countAllFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const allFeedback = this.countAllFeedback();
    return allFeedback === 0 ? 0 : Math.round((good / allFeedback) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const allFeedback = this.countAllFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);

    return (
      <div className={styles.container}>
        <Section className={styles.text} title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={this.handleFeedback} />
        </Section>
        
        {allFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section className={styles.title} title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={allFeedback}
              positivePercentage={positivePercentage}
            />
          </Section>
        )}
      </div>
    );
  }
}

export default FeedbackApp;




