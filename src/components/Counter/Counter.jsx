import React from 'react';
import {HolidayList} from '../../constants/Holidays';
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

  componentWillMount() {
    this.checkNearestEvent();
  }
  
  checkNearestEvent() {
    const holiday = HolidayList;
    const datesList = holiday.map((item, index) => Date.parse(item.date))
    const nearestDate = Math.min.apply(null, datesList);
    holiday.map((item, index) => ( 
      Date.parse(item.date) === nearestDate && this.setState({ nextHoliday: item })) 
    );
  }

  render() {
    const nextHolidayDate = Date.parse('15 April 2019');
    console.log(this.state.nextHoliday);
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