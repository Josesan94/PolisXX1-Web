import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion/dist/framer-motion';
import { AXES_INFO_YOUNG_ABOUT_FINANCIAMIENTO_ITEMS, AXES_INFO_YOUNG_ABOUT_ITEMS } from '../../mocks/axesInfoInvironment';
import { INFO_CARDS_YOUNG_US } from '../../mocks/cardsInfoUsMock';
import ItemAxes2 from '../itemAxes/ItemAxes2';
import CardUs from '../aboutUs/CardUs/CardYoungTeam';
import Title from '../title/Title';
import './description.css'
import YoungsterTeam from '../youngsters/YoungsterTeam';
import KeyboardReturnTwoTone from '@material-ui/icons/KeyboardReturnTwoTone';



export const AboutYoungDescription = () => {

    const { ref, inView } = useInView();
    const animationLeft = useAnimation();

    useEffect(() => {

        if (inView) {
            animationLeft.start({
                x: 0,
                transition: {
                    type: "spring",
                    duration: 1,
                    bounce: 0.3
                }
            })
        }
        if (!inView) {
            animationLeft.start({ x: '-100vw' })
        }
    }, [animationLeft, inView])

    const [titlePosition, setTitlePosition] = useState(window.innerWidth);

    return (

        <Container >
            <div className=' go-back my-5 text-description'>
                <Link style={{color:"#662581"}} to="/youngsters"><KeyboardReturnTwoTone fontSize="large"/></Link>
            </div>
            <div>
                <motion.div
                    initial={{ x: '100vw' }}
                    animate={{ x: 0 }}
                    transition={{ type: "spring", delay: 0.5 }}
                >
                    <Title
                        type='sky-1'
                        placeholder='¿ QUE ES JÓVENES XXI ?'
                        position='center'
                    />
                </motion.div>
                <motion.p className='text-description my-5 justify-content-center '
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1.5, stiffness: 5 }}
                >Polis XXI es una asociación civil cuyo propósito es proponer implementar acciones tendientes al desarrollo sostenible y la garantización de derechos.
                    <br />
                    <br />
                    Los valores que guían nuestros proyectos son: SOSTENIBILIDAD, EQUIDAD, DIÁLOGO, INTEGRACIÓN, DESARROLLO, TRANSPARENCIA, PROFESIONALISMO Y VOCACIÓN PÚBLICA. Tenemos un enfoque integral, inclusivo e intersectorial.
                    <br />
                    <br />
                    Nuestro campo de acción se basa en la articulación de iniciativas con el sector público y sus instituciones; como así también con los sectores productivos y de la sociedad civil que demuestran compromiso social y que comparten nuestros valores.
                </motion.p>
            </div>
            <div id='queHacemos'>
                <div>
                    <motion.div
                        initial={{ x: '100vw' }}
                        animate={{ x: 0 }}
                        transition={{ type: "spring", delay: 0.5 }}
                    >
                        <Title
                            type='violet-2'
                            placeholder='¿ Qué hacemos ?'
                            position={titlePosition <= 500 ? 'center' : 'start'}
                        />
                    </motion.div>
                    <motion.p className='text-description  my-4 '
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1.5, stiffness: 5 }}
                    >
                        El equipo de Polis XXI se compone por jóvenes profesionales. Adoptamos una modalidad de trabajo orientada a reunir ideas y proyectos según ejes de acción y campo de aplicación. Sobre esta base, actualmente nos encontramos desarrollando proyectos en los siguientes ejes:
                        <motion.div
                            className='my-5'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1.5, stiffness: 5 }}
                        >
                            {AXES_INFO_YOUNG_ABOUT_ITEMS.map((info_items, i) => { return <ItemAxes2 infoItems={info_items} key={i} /> })}
                        </motion.div>
                    </motion.p>
                </div>
                <div id="rol" >
                    <motion.div
                        initial={{ x: '100vw' }}
                        animate={{ x: 0 }}
                        transition={{ type: "spring", delay: 0.5 }}
                    >
                        <Title
                            type='violet-2'
                            placeholder='Nuestro rol'
                            position={titlePosition <= 500 ? 'center' : 'start'}
                        />
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1.5, stiffness: 5 }}
                        className='text-description  my-4 justify-content-center '
                    >
                        A nivel institucional nuestro rol se concentra en tres aspectos. El primero de ellos es mediante la conformación de equipos profesionales para abordar cada temática particular que es presentada en la Asociación Civil. Estos equipos interdisciplinarios, coordinados desde Polis XXI, interpretan y operativizan todas las ideas que finalmente se formalizan en proyectos.
                        <br />
                        <br />
                        El segundo rol que asume nuestra institución, entonces, es el de articular los medios necesarios para que estos proyectos con diversos intereses socio-comunitarios sean adoptados por diferentes tipos de instituciones con capacidad de toma de decisiones y financiamiento.
                        <br />
                        <br />
                        En tercer lugar, Polis XXI ofrece acompañamiento, evaluación y asesoramiento permanente sobre los proyectos que se concreten como políticas y/o programas.
                    </motion.p>
                </div>
                <div id="financiamiento" ref={ref}>
                    <motion.div
                        animate={animationLeft}
                    >
                        <Title
                            type='sky-2'
                            placeholder='Financiamiento'
                            position='start'
                        />
                    </motion.div>
                    <motion.p className='text-description  my-4 justify-content-center '
                        animate={animationLeft} >
                        Somos una institución cuyo propósito es favorecer la integración, el desarrollo sustentable, y el bienestar de la sociedad y el fortalecimiento de los lazos comunitarios. Para alcanzar dichos objetivos, nuestros equipos profesionales no tienen un fin de lucro más allá del necesario para sostener su tarea cotidiana en pos de elaborar y ejecutar los proyectos.
                        <br />
                        <br />
                        Las fuentes de financiamiento de nuestra institución son abiertas, trasparentes y aplicadas a fines específicos. Los fondos administrados por Polis XXI actualmente provienen de:
                        <motion.div
                            className='mt-3 mb-5'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1.5, stiffness: 5 }}
                        >
                            {AXES_INFO_YOUNG_ABOUT_FINANCIAMIENTO_ITEMS.map((info_items, i) => { return <ItemAxes2 infoItems={info_items} key={i} /> })}
                        </motion.div>
                        <strong className='text-description'>
                            Nuestra Asociación Civil invita a colaborar a aquellas personas e instituciones que quieran realizar un aporte económico en pos de sostener la labor de nuestros equipos en las acciones socio-comunitarias que desarrollamos como institución.
                            <br />
                            <Link to="/participate">Sumate a nuestra lista de colaboradores</Link>
                        </strong>
                    </motion.p>
                </div>
            </div>
            {/* <div>
                  <a href="../assets/files/ProyectoJóvenesXXI-dic2020.pdf" download="ProyectoJóvenesXXI-dic2020.pdf">Proyecto Jóvenes XXI 2020</a>
            </div> */}
            <Container className='my-5'>
                <YoungsterTeam infoCardsYoungUs={INFO_CARDS_YOUNG_US}/>
            </Container>
        </Container>
    )
}
