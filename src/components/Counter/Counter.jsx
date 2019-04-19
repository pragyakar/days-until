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
    
    const holidayList = HolidayList;
    const today = Date.parse(new Date());
    
    const nearestDate = this.getNearestDate(holidayList, today);

    holidayList.map((item, index) => ( 
      (Date.parse(item.date) - today) === nearestDate && 
        this.setState({ 
          nextHoliday: item 
        })
      ) 
    );
    
  }

  getNearestDate(holidayList, today) {
    
    const datesList = holidayList.map((item, index) => { 
      return Date.parse(item.date) - today;
    });

    var nearest = 0;

    for (var i = 0; i < datesList.length; i++) {
      if(datesList[i] > nearest && datesList[i] > 0) {
        nearest = datesList[i];
        break;
      }
    }
    return nearest;
  }

  render() {

    const nextHolidayDate = Date.parse(this.state.nextHoliday.date);

    return ( 
        <div className="event-container">
          <p className="app-title">
            Days until next holiday 
            <br />
            <br />
           <a 
            href="https://fusemachines.com.np/" 
            className="logo" 
            target="_blank"
            rel="noopener noreferrer"
          >@fusemachines</a></p>
          <Clock nextHolidayDate={nextHolidayDate} />
          <span className="event-name">{this.state.nextHoliday.occasion}</span>
          <span className="event-date">({this.state.nextHoliday.date})</span>
          {this.state.nextHoliday.remarks &&
            <span className="event-remarks">Note: {this.state.nextHoliday.remarks}</span>
          }
        </div>
    );
  }
}

export default Counter;                         