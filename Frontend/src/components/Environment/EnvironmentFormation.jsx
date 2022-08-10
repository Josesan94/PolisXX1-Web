import React from 'react'
import {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {motion, useAnimation} from 'framer-motion/dist/framer-motion';
import {useInView} from 'react-intersection-observer';
import { Container } from 'react-bootstrap';
import Title from '../title/Title';
import { AXES_INFO_INVIRONMENT_FORMATION } from '../../mocks/axesInfoInvironment';
import KeyboardReturnTwoTone from '@material-ui/icons/KeyboardReturnTwoTone';

const EnvironmentFormation = () => {

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
      <div className=' go-back my-5 text-description'>
                <Link style={{color:"#662581"}} to="/environment"><KeyboardReturnTwoTone fontSize="large"/></Link>
            </div>
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", delay: 0.5 }}
        >
          <Title
            type="green-1"
            placeholder="FORMACIÓN"
            position="center"
          />
        </motion.div>

        {AXES_INFO_INVIRONMENT_FORMATION.map((formation) => {
            return (
                <div key ={formation.id} >
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", delay: 0.5 }}
        >
          <Title
            type="green-2"
            placeholder={formation.title}
            position="start"
          />
        </motion.div>
        <motion.p
          className="text-description my-4 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5, stiffness: 5 }}
        >
          {formation.text1}
        </motion.p>
        <br/>
        <motion.p
          className="text-description my-4 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5, stiffness: 5 }}
        >
          {formation.text2}
        </motion.p>
      </div>
            )
        })}
        
    </Container>
  )
}

export default EnvironmentFormation;