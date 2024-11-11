import React from "react"
import TestimonialApi from "./TestimonialApi"

const Slide = ({ id, image, post, date, desc, valueIndex, index }) => {
  let position = "nextSlide"
  if (valueIndex === index) {
    position = "activeSlide"
  }
  if (valueIndex === index - 1 || (index === 0 && valueIndex === TestimonialApi.length - 1)) {
    position = "lastSlide"
  }

  return (
    <>
      <article className={`d_flex ${position}`} key={id}>
        {/*<div className='box d_flex' className={position} key={id}>*/}
        <div className='left box_shodow'>
          <div className='img'>
            <img src={image} alt='' width={550} height={400} />
          </div>
        </div>

        <div className='right'>
          <div className='icon'>
            <div className='quote'>
              <i class='fal fa-quote-right'></i>
            </div>
          </div>

          <div className='content box_shodow mtop'>
            <h1>{post}</h1>
            <h3>{date}</h3>
            <p>{desc}</p>
          </div>
        </div>
      </article>
    </>
  )
}

export default Slide