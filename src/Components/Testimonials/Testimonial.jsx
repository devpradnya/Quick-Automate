import React, { useEffect } from "react";
import Particles from "../Particles";
import "./Testimonials.css";
import { TestimonialsData } from "./Testimonials";

export default function Testimonail(){

  // eslint-disable-next-line no-unused-vars
  let Interval;
  const time = 3000;
  const autoplay = true

  function changeTesti(){
    const testimonialsContainer = document.querySelector('.testimonial__container');
    const testimonials = document.querySelector('.testimonials');
    testimonialsContainer.scrollLeft += testimonials.offsetWidth + 30;
    if(Math.floor(testimonialsContainer.scrollWidth - testimonialsContainer.scrollLeft) <=
    testimonialsContainer.offsetWidth
    ){
      testimonialsContainer.scrollLeft = 0;
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function autoChange(){
    Interval = setInterval (changeTesti , time );
  }

  useEffect(()=>{
    if(autoplay){
      autoChange();
    }
  }, [autoplay, autoChange])
  
return(
  <section className="testi">
          <h3 className="heading">Happy Customers</h3>
          <div className="testimonial__container">
          {TestimonialsData.map((item, i) => {
             return(
              <div className="testimonials" key={item.id}>
              <img className="testi__image" src={item.image} alt="" />
              <p className="testi__desc">{item.description}</p>
              <h4 className="testi__name"> {item.name}</h4>
              <p className="testi__desg">{item.desgination}</p>
              </div>
             )
          })}
          </div>
         
          <Particles id="tsparticles" />
          </section>
    )
};
