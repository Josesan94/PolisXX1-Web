import { AiFillBank } from "react-icons/ai";
import { GiThreeFriends } from "react-icons/gi";
import { IconEnvironment } from "../assets/iconEnvironment";


export const CARDS_INFO = [
    {
        id: 1,
        title: 'JÓVENES',
        icon: <GiThreeFriends />,
        link: '/youngsters',
        background: 'polis-color-lightblue',
        width: 'medium',
        text: 'Conocé nuestra historia, webinars, eventos y agenda.'
    },
    {
        id: 2,
        title: 'FORTALECIMIENTO INSTITUCIONAL',
        icon: <AiFillBank />,
        link: '/institutions',
        background: 'polis-color-violet',
        description: 'Conoce nuestra formacion institucional y academica',
        width: 'small',
        text: 'Trasparencia y rendición de cuentas, observatorio legislativo y vial.'
    },
    {
        id: 3,
        title: 'AMBIENTE',
        icon: <IconEnvironment />,
        link: '/environment',
        background: 'polis-color-green',
        description: 'Nuestro entorno laboral',
        width: 'medium',
        text: 'Sumate a los proyectos, capacitaciones y aprovechá los recursos.'
    },
]
