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

    console.log('checkNearestDate', nearestDate);

    holidayList.map((item, index) => ( 
      (Date.parse(item.date) - today) === nearestDate && 
        this.setState({ 
          nextHoliday: item 
        }, () => {
          document.title = 'Days until ' + this.state.nextHoliday.occasion;
        })
      ) 
    );
    
  }

  getNearestDate(holidayList, today) {
    const datesList = holidayList.map((item, index) => { 
      // console.log('getNearestDate', Date.parse(item .date) - today);
      return Date.parse(item.date) - today;
    });
    // console.log('nearest', Math.min.apply(null, datesList));
    // return Math.min.apply(null, datesList);

    var nearest = 0;
    for (var i = 0; i < datesList.length; i++) {
      if(datesList[i] > nearest && datesList[i] > 0) {
        nearest = datesList[i];
        break;
      }
    }
    console.log('nearest wala', nearest);
    return nearest;
  }

  render() {

    const nextHolidayDate = Date.parse(this.state.nextHoliday.date);
    console.log('prop from', nextHolidayDate);
    return ( 
        <div className="event-container">
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