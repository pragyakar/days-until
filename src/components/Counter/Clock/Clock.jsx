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
      <div className="clock-container">
        <div className="cd-box"> 
          <span className="cd-digits">{this.addZero(days)}</span>
          <br />
          <span className="cd-label">days</span>
        </div>
        <div className="cd-box"> 
          <span className="cd-digits">{this.addZero(hours)}</span>
          <br />
          <span className="cd-label">hours</span>
        </div>
        <div className="cd-box"> 
          <span className="cd-digits">{this.addZero(minutes)}</span>
          <br />
          <span className="cd-label">minutes</span>
        </div>
        <div className="cd-box"> 
          <span className="cd-digits">{this.addZero(seconds)}</span>
          <br />
          <span className="cd-label">seconds</span>
        </div>
      </div>
    )
  }
}

export default Clock;