import React from 'react'
import { Container } from 'react-bootstrap'
import CardFounders from '../components/aboutUs/CardUs/CardFounders'
import AboutUsDescription from '../components/description/AboutUsDescription'
import HeaderPages from '../components/headerPages/HeaderPages'
import { INFO_CARDS_FOUNDERS_US } from '../mocks/cardsInfoUsMock'

function AboutUs() {

    return (
        <div>
            <HeaderPages />
            <AboutUsDescription />
            <Container className='my-5'>
                <CardFounders infoCardsFoundersUs={INFO_CARDS_FOUNDERS_US} />
            </Container>
        </div>
    )
};

export default AboutUs;
