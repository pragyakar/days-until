import React from 'react';

class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0, 
      minutes: 0,
      seconds: 0
    }
  }

  componentWillMount() {
    this.timeDifference(this.props.nextHolidayDate);
  }

  componentDidMount() {
    setInterval(() => (
      this.timeDifference(this.props.nextHolidayDate)
    ), 1000);
  }
  
  timeDifference(nextDate) {
    const timeDifference = nextDate - Date.parse(new Date()); 
    this.setState({
      days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(timeDifference / (1000 * 60 * 60) % 24), 
      minutes: Math.floor((timeDifference / 1000 / 60) % 60),
      seconds: Math.floor((timeDifference / 1000) % 60)
    });
  }
  
  addZero(number) {
    return number < 10 ? '0' + number : number;
  }

  render() {

    const { days, hours, minutes, seconds} = this.state;

    return(
      <div className="clock">
        <div className="countdown-days"> {this.addZero(days)} days</div>
        <div className="countdown-hours"> {this.addZero(hours)} hours</div>
        <div className="countdown-minutes"> {this.addZero(minutes)} minutes</div>
        <div className="countdown-seconds"> {this.addZero(seconds)} seconds</div>
      </div>
    )
  }
}

export default Clock;