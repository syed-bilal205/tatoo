import React, { useState } from "react";
// import {PhotoAlbum} from 'react-photo-album'
// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";
import { galleryData } from "../public/data/data";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";

// const slides = galleryData.images.map(({ original, width, height }) => ({
//   src: original,
//   width,
//   height,
// }));

const Gallery = () => {
  // const [index, setIndex] = useState(-1);

  const { images } = galleryData;

  return (
    <>
      <section className="bg-[#F9F9F9] section relative mt-[40px] px-6 py-4 md:px-16">
        <div className="mx-auto container">
          <h2 className="text-6xl font-semibold py-8">
            CHECK MY <br /> GALLERY:
          </h2>
        </div>
        <div className="grid gap-2 grid-cols-3 py-4 ">
          {/* <PhotoAlbum
                layout='rows'
                photos={galleryPics}
                onClick={(event,photo,index) => setIndex(index)}
            />  */}
          {images.map((item, index) => (
            <Image className="cursor-pointer" key={index} src={item.original} />
          ))}
{/* 
          {
            <Lightbox
              slides={slides.original}
              styles={{ container: { backgroundColor: "rgba(0,0,0,.9)" } }}
              open={index >= 0}
              index={index}
              close={() => setIndex(-1)}
            />
          } */}
        </div>
        <div className="flex items-center justify-center">
          <button className="border bg-black text-white border-white px-3 py-3 flex items-center gap-1">
            Read More <AiOutlineArrowRight size={20} />
          </button>
        </div>
      </section>
    </>
  );
};

export default Gallery;
