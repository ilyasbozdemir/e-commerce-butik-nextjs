import React from "react";
import Image from "next/Image";
import dynamic from "next/dynamic";
import { Box } from "@chakra-ui/react";

const Slider = dynamic(
  () => import('react-slick'),
  {
    ssr: false,
    loading: () => (
      <Box w="full" h="300px" position="relative">
        loading
      </Box>
    )
  }
)


function SimpleSlider() {
  const [images, setImages] = React.useState([]);

  React.useEffect(() => {
    const fetchImages = async () => {
      const images = [];
      for (let i = 0; i < 5; i++) {
        const url = `https://picsum.photos/1920/514?random=${i}`;
        images.push(url);
      }
      setImages(images);
    };

    fetchImages();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box borderRadius={25}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            width={1920}
            height={514}
            draggable={false}
          />
        ))}
      </Slider>
    </Box>
  );
}

const DynamicSimpleSlider = dynamic(() => Promise.all(
  [import('slick-carousel/slick/slick.css'),
  import('slick-carousel/slick/slick-theme.css')])
  .then(() => SimpleSlider), {
  ssr: false,
});

export default DynamicSimpleSlider;
