import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Carousels from '../carousels/Carousels';
import './stylesSwiper.css'

export const WebinarModal = ({ lgShow, setLgShow, fullscreen, infoModal }) => {

    const [showCarousel, setShowCarousel] = useState(false);

    const handleCloseCarousel = () => setShowCarousel(false);
    const handleShowCarousel = () => setShowCarousel(true);

    return (
        <Modal
            size="lg"
            show={lgShow}
            fullscreen={fullscreen}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg" className="sky-2">
                    <strong>
                        {infoModal?.title}   {`(${infoModal?.date})`}
                    </strong>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6 className="violet-3">
                    {infoModal?.subtitle}
                </h6>
                <div>
                    <p>
                        {infoModal?.texts?.text_1}
                    </p>
                    <p>
                        {infoModal?.texts?.text_2}
                    </p>
                    <p>
                        {infoModal?.texts?.text_3}
                    </p>
                </div>
                <div>
                    {infoModal?.link_1 ?
                        <>
                            <h6 className="sky-3">
                                {infoModal?.footerText}
                                <Link to={infoModal?.link_1}>{infoModal?.link_1}</Link>
                            </h6>
                        </>
                        :
                        <h6 className="sky-3">
                            {infoModal?.footerText}
                        </h6>
                    }
                    {infoModal?.link_2 ?
                        <>
                            Material disponible: <Link to={infoModal?.link_2}>{infoModal?.link_2}</Link>
                        </>
                        : ''
                    }
                </div>
                <div className='row row-cols-4'>
                    {/* <img className='img-modal' src={infoModal?.images?.img_2} />
                    <img className='img-modal' src={infoModal?.images?.img_3} />
                <img className='img-modal' src={infoModal?.images?.img_4} />*/}
                    <Button onClick={handleShowCarousel}>Ver Imagenes</Button>
                    <Modal show={showCarousel} onHide={handleCloseCarousel}
                          size="lg"
                          aria-labelledby="contained-modal-title-vcenter"
                          centered>
                            <Carousels/>
                    </Modal>
                </div>

            </Modal.Body>
        </Modal>
    )
}
