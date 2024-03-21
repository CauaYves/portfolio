"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./experiences.module.css";
import ExperienceCard from "./card";
import { xp } from "./experiences.array";
import Arrow from "./arrowLeft";

export default function Experiences() {
  const sliderRef = useRef<Slider>(null);
  const handleNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnFocus: true,
    autoplay: true,
    autoplaySpeed: 10000,
    nextArrow: (
      <Arrow src="/arrow-right.svg" onClick={handleNextSlide} side="rigth" />
    ),
    prevArrow: (
      <Arrow src="/arrow-left.svg" onClick={handlePrevSlide} side="left" />
    ),
  };

  return (
    <div className={styles.experienceWrapper}>
      <div className={styles.experience}>
        <h2>Experiência</h2>
        <Slider {...settings}>
          {xp.map((x) => {
            return (
              <ExperienceCard
                key={x.id}
                id={x.id}
                title={x.title}
                company={x.company}
                startDate={x.startDate}
                endDate={x.endDate}
                currentXpTime={x.currentXpTime}
                description={x.description}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
