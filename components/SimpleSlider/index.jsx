import React from "react";
import Image from "next/Image";

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function SimpleSlider() {
  const [images, setImages] = React.useState([]);

  React.useEffect(() => {
    const fetchImages = async () => {
      const images = [];
      for (let i = 0; i < 5; i++) {
        const url = `https://picsum.photos/1920/514?random=${i}`;
        images.push({ src: url, legend: 'image_' + i });
      }
      setImages(images);
    };

    fetchImages();
  }, []);

  const settings = {
    showStatus: false,
    showArrows: true,
    infiniteLoop: true,
    showThumbs: false,
    autoPlay: true,
    interval: 3000,
    transitionTime: 1000
  };

  return (
    <>
      <Carousel id={'carousel'}  {...settings}>
        {images.map((image, index) => (
          <>
            <Image
              key={index}
              src={image.src}
              alt={image.legend}

              width={1920}
              height={514}
            />
            <p className="legend">{image.legend}</p>
          </>
        ))}
      </Carousel >
    </>
  );
}


export default SimpleSlider;
