import React from 'react';
// import {HolidayList} from '../../constants/Holidays';
import Clock from './Clock/Clock';

class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: '',
      nextHoliday: {
        id: '',
        occasion: '',
        date: '',
        remarks: ''
      }
    }
  }

  render() {
    const nextHolidayDate = Date.parse('August 15, 2019');
    
    return ( 
        <div className="event-container">
          <Clock nextHolidayDate={nextHolidayDate} />
          {/* <p className="event-name">Days until '{this.state.nextHoliday.occasion}'</p> */}
          {/* <p className="event-date">{this.state.nextHoliday.date}</p> */}
        </div>
    );
  }
}


export default Counter;                         