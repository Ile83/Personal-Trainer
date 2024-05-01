import React from "react";
import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import dayjs from 'dayjs'
import 'react-big-calendar/lib/css/react-big-calendar.css'




const localizer = dayjsLocalizer(dayjs)

const events = ["test", "2024-04-04", "2024-04-05"] // This is just a test data, you can add your own data
//console.log(events);

const MyCalendar = (props) => (
  <div>
    <Calendar 
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 800, width: 800}}
    />
  </div>
)
export default MyCalendar;

// Source: https://medium.com/@dhruvil_41022/how-to-make-reactjs-calendar-with-events-13bcea757525
// Source:  https://www.npmjs.com/package/react-big-calendar?activeTab=readme

//Dokumentaatio on puutteellista, en saa kalenteria toimimaan. En tiedä miten saan tapahtumat näkymään kalenterissa. En saa edes demodataa näkymään
//Tuli valittua huono komponentti. Varmaan Slack kanavalla saisi apuja, mutta en ole vielä liittynyt sinne.
