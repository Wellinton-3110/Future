import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import VideoPlayer from "./VideoPlayer";
import SliderImg from "../img/SliderImg.jpg";
import "keen-slider/keen-slider.min.css";
import "../css/style.css";

export function BodySlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <div className="navigation-wrapper">
        <div
          ref={sliderRef}
          className="keen-slider absolute left-0 w-[100vw] h-[94vh] bg-white"
        >
          <div className="keen-slider__slide number-slide1 absolute left-0">
            <div className="bg-white w-[86%] h-[80%] absolute left-[7vw]">
              <img
                src={SliderImg}
                alt="Slider Imagem"
                className="w-[100%] h-[100%]"
              />
            </div>
          </div>
          <div className="keen-slider__slide number-slide2">
            <div className="w-[86%] h-[80%] absolute left-[7vw]">
              <VideoPlayer />
            </div>
          </div>
        </div>
      </div>

      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </>
  );
}

function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
