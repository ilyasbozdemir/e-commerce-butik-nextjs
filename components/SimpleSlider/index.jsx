import React from "react";
import dynamic from 'next/dynamic';
import { Box} from "@chakra-ui/react";
import ImageItem from "./ImageItem";
import { sliderImages } from '../../mocks/sliderImages'

const Slider = dynamic(
  () => import('react-slick'),
  {
    ssr: false,
    loading: () => {
      <>
        loading
      </>
    }
  }
);
function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <Slider
        slidesToShow={6}
        lazyLoad={true}
        initialSlide={2}
        infinite={true}
        arrows={true}
        {...settings}
      >
        {sliderImages.map((image, index) => {
          return (
            <Box as={"span"} key={index} cursor={"pointer"}>
              <ImageItem {...image} />
            </Box>
          );
        })}
      </Slider>
    </>
  )
}

export default SimpleSlider 