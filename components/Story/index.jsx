import React from 'react';
import Swiper from 'swiper';
// import 'swiper/css/swiper.css';

function Story({ imageItems }) {


  return (
    <>
      {imageItems}
    </>
  );
}

Story.getInitialProps = async () => {
  const res = await fetch('/api/story/items');
  const imageItems = await res.json();
  console.log(imageItems.length)


  return { imageItems };
};

export default Story;
