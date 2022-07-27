
import React,{useEffect,useInView} from 'react'
import { Card, Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import { motion, useAnimation } from 'framer-motion/dist/framer-motion';
import Title from '../title/Title';
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import './stylesSwiper.css'


SwiperCore.use([Pagination]);

const YoungsterTeam = ({infoCardsYoungUs}) => {


    
  return (
    <div>
      <div className="mb-5">
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", delay: 0.5 }}
        >
          <Title
            type="sky-1"
            placeholder="Nuestro Equipo"
            position="center"
          />
        </motion.div>
      </div>
      <Swiper
        slidesPerView={4}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        className="mySwiper"
      >
        {infoCardsYoungUs.map((card, id) => (
          <SwiperSlide key={id} card={card} className=" mt-5">
            <div className="mx-3">
              <Card className="d-flex flex-column align-items-center slider-item">
                <div className="mt-3">
                  <Card.Img className="img-young" variant="top" src={card.img} />
                </div>
                <Card.Body>
                  <ListGroup variant="flush">
                    <ListGroupItem>
                      <Card.Title className="descripcion mt-1 text-center">
                        {card.name}
                      </Card.Title>
                    </ListGroupItem>
                    <ListGroup.Item>{card.title}</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default YoungsterTeam;