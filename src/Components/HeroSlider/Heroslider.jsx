import React from "react";
import { HeroData } from "./Herosliderdata";
import "./Heroslider.css";
import { useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoPlay = "true";
  let SlideInterval;
  const time = 5000;

  function nextSlide() {
    const updateSlide =
      currentSlide === HeroData.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(updateSlide);
  }
  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function autoSlider() {
    SlideInterval = setInterval(nextSlide, time);
  }
  useEffect(() => {
    if (autoPlay) {
      autoSlider();
    }
    return () => clearTimeout(SlideInterval);
  }, [autoSlider, SlideInterval]);
  return (
    <section className="heroslider" id="home">
      <div className="logo">
        <h3 className="logo__heading"><strong>Quick</strong>Automate</h3>
      </div>
      <div className="left">
        <button className="nav__button">
          <FaChevronLeft />
        </button>
      </div>
      <div className="right" onClick={() => nextSlide()}>
        <button className="nav__button">
          <FaChevronRight />
        </button>
      </div>
      {HeroData.map((item, i) => {
        return (
          <div
            className={
              i === currentSlide ? "heroslides heroslidesactive" : "heroslides"
            }
            key={item.id}
          >
            <div className="heroslide__container"   style={{backgroundImage : `url(${item.image})` }}>
              <div className="overlay"></div>
              <div className="heroslidesdesc">
                <h1>{item.Heading}</h1>
                <p className="descprition">{item.description}</p>
                <button>{item.button}</button>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
