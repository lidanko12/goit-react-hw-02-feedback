
import './App.css';
import React, { Component } from 'react';
import Section from './Sections';
import Notification from './Notifications';
import FeedbackOptions from './Feedback';
import Statistics from './Statistics';

export default class App extends Component {
  state = {
    good: 0,
    bad: 0,
    neutral: 0,
  };

  increment = value => () => {
    this.setState(prevState => ({
      [value]: prevState[value] + 1,
    }));
  };
  render() {
    const { good, bad, neutral } = this.state;
    const totalFeedback = good + bad + neutral;
    const positiveFeedbackPercentage = Math.round((good / totalFeedback) * 100);
    const options = Object.keys(this.state);
    return (
      <div>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.increment}
          ></FeedbackOptions>
        </Section>

        {totalFeedback > 0 ? (
          <Section title={'Statistics'}>
            <Statistics
              good={good}
              bad={bad}
              neutral={neutral}
              total={totalFeedback}
              positivePercentage={positiveFeedbackPercentage}
            ></Statistics>
          </Section>
        ) : (
          <Notification message={'No feedback given'} />
        )}
      </div>
    );
  }
}