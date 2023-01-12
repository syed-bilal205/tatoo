import React from "react";
import { galleryData } from "../public/data/data";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";


const Gallery = () => {

  const { images } = galleryData;

  return (
    <>
      <section className="bg-[#F9F9F9] section  px-6 pb-4 md:px-16">
        <div className="mx-auto container">
          <h2 className="text-6xl font-semibold py-8">
            CHECK MY <br /> GALLERY:
          </h2>
        </div>
        <div className="grid gap-2 grid-cols-3 py-4 ">
          {images.map((item, index) => (
            <Image alt="images" className="cursor-pointer" key={index} src={item.original} />
          ))}
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
