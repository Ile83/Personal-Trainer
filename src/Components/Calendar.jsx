import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

class Calendar extends React.Component {
   render() {
       return (
           <Calendar
               startAccessor="start"
               endAccessor="end"
           />
       )
   }
}
export default Calendar;

// Source: https://medium.com/@dhruvil_41022/how-to-make-reactjs-calendar-with-events-13bcea757525