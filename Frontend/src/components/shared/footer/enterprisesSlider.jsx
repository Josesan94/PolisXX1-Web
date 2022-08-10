import React from 'react'
import './slider.css'
import {SliderEnterprises} from '../../../mocks/sliderEnterprises'

const EnterprisesSlider = () => {
  return (
    <div className='slider'>
        <div className='slide-track'>
            {SliderEnterprises?.map((slide) => {
                return (
                    <div key={slide.id} className="slide">
                    <img src={slide.image} alt="slide-img"></img>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default EnterprisesSlider;