import React,{useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const EventsCalendar = () => {
    const [value, onChange] = useState(new Date());
  return (
    <div>
        <Calendar onChange={onChange} showWeekNumbers value={value}/>
    </div>
  )
}

export default EventsCalendar;