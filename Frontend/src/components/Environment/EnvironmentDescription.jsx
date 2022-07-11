import React from 'react'
import {useEffect} from 'react';
import {motion, useAnimation} from 'framer-motion/dist/framer-motion';
import {useInView} from 'react-intersection-observer';
import { Container } from 'react-bootstrap';
import Title from '../title/Title';
import ItemAxes from '../itemAxes/ItemAxes';
import { AXES_INFO_INVIRONMENT_PROJECTS } from '../../mocks/axesInfoInvironment';
import '../description/description.css'




    
    

const EnvironmentDescription = () => {

    const {ref, inView} = useInView();
    const animationLeft = useAnimation();

    useEffect(() => {    
        if(inView){
            animationLeft.start ({
                x:0,
                transition: {
                    type:"spring",
                    duration:1,
                    bounce:0.3
                }
            })

        }
        if(!inView){ 
            animationLeft.start({x:'-100vw'})
        }
    },[animationLeft, inView])



  return (
    <Container>
      <div>
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", delay: 0.5 }}
        >
          <Title
            type="green-2"
            placeholder="¿Por qué un Eje de Ambiente?"
            position="start"
          />
        </motion.div>
        <motion.p
          className="text-description my-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5, stiffness: 5 }}
        >
          La gestión de nuestras ciudades encuentra un doble desafío: lograr
          crecimiento económico que permita generar empleo, oportunidades y una
          mejor calidad de vida para todas y todos, a la vez que alcanzar la
          sostenibilidad en la generación y uso de los recursos y en el cuidado
          del ambiente. Los Proyectos que se articulan bajo este eje responden a
          un diagnóstico técnico que devela la urgencia de dar una respuesta
          articulada entre todos los actores del tejido social para mitigar el
          cambio climático y sus efectos nocivos en el ambiente y, en
          consecuencia, de mejorar la calidad de vida de las personas y la supervivencia de
          la vida en el planeta. Polis XXI propone un abordaje multidimensional
          que busca apoyar el desarrollo de <i>biomunicipios </i>fortalecidos en la
          gestión de sus residuos y su disposición final por soluciones
          sostenibles a nivel económico y ambiental.
        </motion.p>
      </div>
      <div>
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", delay: 0.5 }}
        >
          <Title type="green-2" placeholder="Objetivos" position="start" />
        </motion.div>
        <motion.p
          className="text-description my-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5, stiffness: 5 }}
        >
          Entre sus áreas de <strong>investigación</strong>, Polis XXI cuenta con
          un eje especializado en el diseño y desarrollo de programas de
          resiliencia ambiental y políticas públicas sustentables. Nuestros{" "}
          <strong>objetivos</strong> son (1) la mitigación del cambio climático
          y los efectos nocivos sobre el ambiente, la salud y la calidad de vida
          de las poblaciones de la producción contaminante y la disposición
          final de residuos en basurales a cielo abierto, (2) la generación de
          trabajo formal en el marco de la economía circular sustentable, y (3)
          la capacitación y formación de profesionales que tengan un efecto
          multiplicador y aceleren la transición verde con justicia social.
        </motion.p>
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", delay: 0.5 }}
        >
          <Title
            type="green-2"
            placeholder="Enfoque de Soluciones Basadas en la Naturaleza"
            position="start"
          />
        </motion.div>
        <motion.p
          className="text-description my-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5, stiffness: 5 }}
        >
          Nuestro trabajo se apoya en el concepto de 
          <strong> soluciones basadas en la naturaleza </strong>(“SbN”), un
          enfoque que entiende que el bienestar humano no puede escindirse de la
          calidad del ambiente en que se desarrolla; de esta forma, las SbN
          refieren al conjunto de acciones o políticas que aprovechan el
          potencial de la naturaleza apoyándose en los ecosistemas y los
          servicios que estos proveen para abordar algunos de nuestros desafíos
          sociales más urgentes: como la amenaza de la disponibilidad del agua,
          el creciente riesgo de desastres naturales o el cambio climático.
          <br/>
          <br/>
          <strong>Los Enfoques de SbN</strong> pueden ser utilizados en
          combinación con otros tipos de intervenciones. Por ejemplo, los
          desafíos en seguridad alimentaria pueden ser resueltos de mejor forma
          si se combinan SbN (como los sistemas agro-forestales o la
          restauración de humedales), con soluciones más convencionales (como
          mejorar la distribución y acceso a alimentos, o políticas de comercio
          que apoyan a productores locales).
          <br/>
          <br/>
           Estos enfoques pueden generar
          múltiples beneficios para la población y la biodiversidad, y al mismo
          tiempo representan una medida confiable para fortalecer la resiliencia
          frente al cambio climático.
        </motion.p>
      </div>
    </Container>
  );
}

export default EnvironmentDescription;