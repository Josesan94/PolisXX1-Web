import React,{useState,useMemo, useEffect, useInView} from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion/dist/framer-motion';
import {Calendar, dateFnsLocalizer} from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDate';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Es from 'date-fns/locale/es'
import DatePicker from 'react-datepicker';
import { EventModal } from './EventModal';
import { Container } from 'react-bootstrap';
import Title from '../title/Title';
import './stylesSwiper.css'

require('globalize/lib/cultures/globalize.culture.es')



const lang = {
  es: {
    week: 'Semana',
    work_week: 'Semana de trabajo',
    day: 'Día',
    month: 'Mes',
    previous: 'Atrás',
    next: 'Después',
    today: 'Hoy',
    agenda: 'El Diario',
    showMore: (total) => `+${total} más`,
  }
}

const locales = {
  'es': Es,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

const events = [
  {
    id:"1",
    title:" Evento 1",
    allDay:true,
    date:"",
    start: new Date(2022,6,10),
    end: new Date(2022,6,10),
    texts: {
      text_1:
        "Texto 1",
        text_2:"Texto 2"
      },
    footerText:
      "",
    image_main: "",
    links: {
    },
    images: [
    ],
    },
  {
    id:"2",
    title:" Evento 2",
    start: new Date(2022,6,10),
    end: new Date(2022,6,10),
    texts: {
      text_1:
        "Texto 1",
        text_2:"Texto 2"
    },
    footerText:
      "",
    image_main: "",
    links: {
    },
    images: [
    ],
  }
]

const EventsCalendar = () => {
  const [culture, setCulture] = useState('es')
  const [evShow, setEvShow] = useState(false);
  const [eventModal, setEventModal] = useState({});
  const [fullscreen, setFullscreen] = useState(true);
  const [showEvent, setShowEvent] = useState(false)
  const [allEvents,setAllEvents] = useState(events)
  const [rightToLeft, setRightToLeft] = useState(false)


  const openEvent = (e) => {
    const object = events.find(obj => obj.id === e.id)
    setShowEvent(!showEvent)
    setEventModal(object)
    setFullscreen('md-down');
    setEvShow(true)
    // events.forEach((event) => {
    //   if(e.id === event.id) {
    //     return (
    //       alert(event.title,1)
    //       )
    //   }
    //   else return;
    // })
  }


  const { defaultDate, messages } = useMemo(
    () => ({
      messages: lang[culture],
    }),
    [culture]
  )

  return (
    <Container>
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", delay: 0.5 }}
      >
        <div className=" go-back my-5 text-description">
          <Link style={{ color: "#662581" }} to="/youngsters">
            Volver a Jóvenes
          </Link>
        </div>
        <Title
          type="sky-1"
          placeholder="JÓVENES XXI: CALENDARIO DE ACTIVIDADES Y EVENTOS"
          position="center"
        />
        <motion.p
          className="text-description mx-5 my-4 justify-content-center "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5, stiffness: 5 }}
        >
          Acá podés ver todos los eventos de los que participamos e inscribirte
          a nuestros webinar.
        </motion.p>
        <Calendar
          culture={culture}
          localizer={localizer}
          events={allEvents}
          startAccessor="start"
          endAccessor="end"
          messages={messages}
          style={{ height: 500, margin: "50px" }}
          onDoubleClickEvent={openEvent}
        />
        <EventModal
          lgShow={evShow}
          setLgShow={setEvShow}
          fullscreen={fullscreen}
          infoModal={eventModal}
        />
        <div></div>
        <div>
          <p className=" mx-5 text-description my-5">
            Si te interesa participar de la Comunidad Jóvenes XXI y recibir
            todas las novedades, inscribite completando{" "}
            <strong>
              {" "}
              <a href="https://forms.gle/ZAk8MXMh4yySFhkFA">este formulario.</a>
            </strong>
            <br />
            <br />
            Al realizar tu inscripción recibirás un email de bienvenida con
            indicaciones.
          </p>
        </div>
      </motion.div>
    </Container>
  );
}

export default EventsCalendar;