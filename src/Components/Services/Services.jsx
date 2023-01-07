import React from "react";
import { useEffect } from "react";
import "./services.css";
import { ServicesData } from "./servicesdata";

export default function Services() {
  const slideTime = 2000;
  let SlideInterval;
  let autoplay = true;

  function slideRight() {
    const services = document.querySelector(".services");
    const iconBox = document.querySelector(".iconbox");
    services.scrollLeft += iconBox.offsetWidth + 65;
    if (
      Math.floor(services.scrollWidth - services.scrollLeft) <=
      services.offsetWidth
    ) {
      services.scrollLeft = 0;
    }
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function autoSlide() {
    SlideInterval = setInterval(slideRight, slideTime);
  }
  function Pause() {
    clearInterval(SlideInterval);
  }
  useEffect(() => {
    if (autoplay) {
      autoSlide();
    }
    return () => clearInterval(SlideInterval);
  }, [autoSlide, SlideInterval, autoplay]);

  return (
    <section
      id="services"
      className="services"
      onMouseOver={() => Pause()}
      onMouseLeave={() => autoSlide()}
    >
      {ServicesData.map((item) => {
        return (
          <div className="iconbox" key={item.id}>
            <img className="services__icon" src={item.icon} alt="" />
            <h4 className="services__name">{item.name}</h4>
          </div>
        );
      })}
    </section>
  );
}
