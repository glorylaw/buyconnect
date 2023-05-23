import React, { useState } from "react";
import {
  Arrow,
  Button,
  Desc,
  Image,
  ImgContainer,
  InfoContainer,
  Slide,
  SliderContainer,
  SliderWrapper,
  Title,
} from "../styled_components/styles";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { sliderItems } from "../data";


const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <SliderContainer>
      <Arrow
        direction="left"
        style={{ borderRadius: "50px", height: "50px" }}
        onClick={() => {
          handleClick("left");
        }}
      >
        <BsFillArrowLeftCircleFill />
      </Arrow>
      <SliderWrapper slideIndex={slideIndex}>
        {sliderItems.map((item, index) => (
          <Slide key={index} bg={item.bg}>
            <ImgContainer>
              <Image src={item.img} style={{objectFit: "cover"}} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </SliderWrapper>
      <Arrow
        direction="right"
        style={{ borderRadius: "50px", height: "50px" }}
        onClick={() => {
          handleClick("right");
        }}
      >
        <BsFillArrowRightCircleFill />
      </Arrow>
    </SliderContainer>
  );
};

export default Slider;
