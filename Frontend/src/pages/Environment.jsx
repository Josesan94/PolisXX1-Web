import React from 'react'
import { Container } from 'react-bootstrap'
import { CardsEnvironment } from '../components/cardsAxes/CardsEnvironment'
import { AXES_INFO_INVIRONMENT } from '../mocks/axesInfoInvironment'
import EnvironmentDescription from '../components/Environment/EnvironmentDescription'
import Title from '../components/title/Title';

function Environment() {
    
    return (
        <Container >
            <Title 
              type='green-1'
              placeholder='AMBIENTE'
              position='center'
              />
            <CardsEnvironment infoAxesEnvironment={AXES_INFO_INVIRONMENT}/>
            <EnvironmentDescription/>
        </Container>
    )
}

export default Environment;