import Image from 'next/image';
import React from 'react';
import dummyImg from '../../../public/dummy-image.jpg';

const page = () => {
  console.log(dummyImg);
  return (
    <div>
      Hi
      {/* <Image src={dummyImg} width={900} height={600} alt="dummy" /> */}
      <Image src={'https://dummyimage.com/600x400/000/fff'} width={150} height={100} alt="dummy" />
      {/* <img src={dummyImg.src} /> */}
    </div>
  );
};

export function generateMetadata() {
  return {
    title: 'Images page',
    description: 'This is the image page',
  };
}

export default page;
