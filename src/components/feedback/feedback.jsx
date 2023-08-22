import React, { useState } from 'react';
import Section from '../section/Section';
import FeedbackOptions from '../feedbackOptions/FeedbackOptions';
import Statistics from '../statistics/Statistics';
import Notification from '../notification/Notification';
import styles from '../../css/index.module.css';

function FeedbackApp() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const countAllFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback;
    const allFeedback = countAllFeedback();
    return allFeedback === 0 ? 0 : Math.round((good / allFeedback) * 100);
  };

  const { good, neutral, bad } = feedback;
  const allFeedback = countAllFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  const options = Object.keys(feedback);

  return (
    <div className={styles.container}>
      <Section className={styles.text} title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleFeedback} />
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

export default FeedbackApp;
