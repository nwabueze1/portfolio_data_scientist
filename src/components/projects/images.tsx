import { FC, useRef, useState } from "react";
import classes from "./images.module.sass";
import clx from "classnames";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export const Images: FC<{ images: string[] }> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);
  const handleNext = () => {
    const size = images.length;
    const nextIndex = activeIndex + 1;

    if (nextIndex > size - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(nextIndex);
    }
  };

  const handlePrev = () => {
    if (activeIndex === 0) {
      setActiveIndex(images.length - 1);
    } else {
      setActiveIndex((prev) => prev - 1);
    }
  };

  useGSAP(
    () => {
      gsap.to(".images", {
        zIndex: (i) => (i === activeIndex ? 1 : 0),
        opacity: (i) => (i === activeIndex ? 1 : 0),
        duration: 1,
      });
    },
    {
      scope: imageRef,
      dependencies: [activeIndex],
    },
  );

  return (
    <div className={classes.container} ref={imageRef}>
      {images.map((image_src, index) => (
        <img src={image_src} alt="" key={index} className={"images"} />
      ))}
      {images.length > 1 && <>
        <button className={classes.button} onClick={handlePrev}>
          <FaChevronLeft />
        </button>
        <button className={clx(classes.button, classes.button_right)} onClick={handleNext}>
          <FaChevronRight />
        </button>
      </>}
    </div>
  );
};
