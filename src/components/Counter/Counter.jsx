import React from 'react';
import Clock from './Clock/Clock';
import { HolidayList } from '../../constants/Holidays';

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
    const nearestDate = this.getNearestDate(holiday);

    holiday.map((item, index) => ( 
      Date.parse(item.date) === nearestDate && 
        this.setState({ 
          nextHoliday: item 
        })
      ) 
    );
    
  }

  getNearestDate(holidayList) {

    const datesList = holidayList.map((item, index) => { 
      return Date.parse(item.date);
    });

    return Math.min.apply(null, datesList);
  }

  render() {

    const nextHolidayDate = Date.parse(this.state.nextHoliday.date);

    console.log(this.state.nextHoliday);
    return ( 
        <div className="event-container">
          <Clock nextHolidayDate={nextHolidayDate} />
          <p className="event-name">Days until '{this.state.nextHoliday.occasion}'</p>
          <p className="event-date">{this.state.nextHoliday.date}</p>
        </div>
    );
  }
}


export default Counter;                         