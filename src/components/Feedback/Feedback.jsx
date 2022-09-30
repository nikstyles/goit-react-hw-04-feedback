import { Component } from 'react';
import Statistics from './statistics/Statistics';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import s from './Feetback.module.css';
import Notification from './notification/Notification';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  leaveVote = propertyName => {
    this.setState(prevState => {
      const value = prevState[propertyName];
      return {
        [propertyName]: value + 1,
      };
    });
  };

  countPositiveFeedbackPercentage() {
    const result = (100 / this.countTotalFeedback()) * this.state.good;
    return Number(result.toFixed(0));
  }

  render() {
    const total = this.countTotalFeedback();

    return (
      <div className={s.feedback__card}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.leaveVote}
          />
        </Section>

        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
