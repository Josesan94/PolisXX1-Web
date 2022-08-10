import { Link } from '@material-ui/core';
import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import '../stylesSwiper.css'

export const CalendarEvents = ({ lgShow, setLgShow, fullscreen, infoModal }) => {

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
            <strong>{infoModal?.title}</strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6 className="violet-3">{infoModal?.subtitle}</h6>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p>{infoModal?.text}</p>
            <img
              src={infoModal?.image}
              alt="images"
              style={{ margin: "10px", height: "300px", width: "300px" }}
            ></img>
            <Link className='w-100 ' to={infoModal?.link}>
            <Button className="btn-polis" >
                <span className='violet-3' >Ir al evento</span>
            </Button>
            </Link>
          </div>

          <div className="d-flex justify-content-center my-2">
            <Modal
              show={showCarousel}
              className="modal-carousel"
              onHide={handleCloseCarousel}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            ></Modal>
          </div>
        </Modal.Body>
      </Modal>
    );
}
