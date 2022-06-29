import React from 'react'
import { Modal } from 'react-bootstrap';
import './stylesSwiper.css'

export const EventModal = ({ lgShow, setLgShow, fullscreen, infoModal }) => {

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
                    <h6 className="sky-3">{infoModal?.footerText}</h6>
                </div>
                <div className='row row-cols-3' >
                    <a href='' onClick='' className='' >
                    <img className='img-modal' src={infoModal?.images?.img_2}/>
                    </a>
                    <a href='' onClick='' className=''>
                    <img className='img-modal' src={infoModal?.images?.img_3}/>
                    </a>
                    <a href='' onClick='' className=''>
                    <img className='img-modal'src={infoModal?.images?.img_4}/>
                    </a>
                </div>

            </Modal.Body>
        </Modal>
    )
}
