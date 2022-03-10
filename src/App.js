import React, { Component } from 'react';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Notification from './components/Notification/Notification';


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeaveFeedback=(e)=>{
    const name=e.target.name
    this.setState((prevState)=>({
      [name]:prevState[name]+1
      }))
  }

  countTotalFeedback = () => { 
    const { good, neutral, bad } = this.state
    const totalCount = good + neutral + bad
    return totalCount
  }

  countPositiveFeedbackPercentage = () => { 
    const count=Math.round((this.state.good/this.countTotalFeedback())*100)
    const countCheck=isNaN(count)?"0":count
    return countCheck
  }


  render() {
    const options=Object.keys(this.state)

    return (
      <div>
        <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback}/>
        </Section>
        
        {this.countTotalFeedback()===0
        ?<Notification message="No feedback given"/>
        :<Section title="Statistics">
        <Statistics
         good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePrecentage={this.countPositiveFeedbackPercentage()}/>
        </Section>}
      </div>
    )

  }
}

export default App;
