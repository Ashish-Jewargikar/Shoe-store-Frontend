import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { BiArrowBack } from "react-icons/Bi";
import Image from "next/image";

const HeroBanner = () => {
    return (
        <div className="relative text-white text-[20px] w-full max-w-[1200px]  mx-auto">
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showIndicators={false}
                showStatus={false}
                renderArrowPrev={(clickHandler, hasPrev) => (
                    <div
                        onClick={clickHandler}
                        className="absolute right-[30px] md:right-[50px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[30px] mr-4 my-2
                         bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                    >
                        <BiArrowBack className="text-sm md:text-lg" />
                    </div>
                )}
                renderArrowNext={(clickHandler, hasNext) => (
                    <div
                        onClick={clickHandler}
                        className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[30px] mr-2 my-2 bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                    >
                        <BiArrowBack className="rotate-180 text-sm md:text-lg" />
                    </div>
                )}
            >
            <div >
            <Image
              src="/slide-1.png"
              alt="Slide 1"
              className="aspect-w-16 aspect-h-10 md:aspect-w-auto md:aspect-h-auto object-cover"
              width={1920} // Adjust the width and height according to your image dimensions
              height={1200}
            />
            <div className="m-2 px-2 md:px-4 py-2 md:py-3 font-oswald bg-white absolute bottom-0 left-0 text-black/90 text-sm md:text-lg uppercase font-medium cursor-pointer hover:opacity-90">
              Shop now
            </div>
          </div>

          <div >
          <Image
            src="/slide-2.png"
            alt="Slide 2"
            className="aspect-w-16 aspect-h-10 md:aspect-w-auto md:aspect-h-auto object-cover"
            width={1920} // Adjust the width and height according to your image dimensions
            height={1200}
          />
          <div className="m-2 px-2 md:px-4 py-2 md:py-3 font-oswald bg-white absolute bottom-0 left-0 text-black/90 text-sm md:text-lg uppercase font-medium cursor-pointer hover:opacity-90">
            Shop now
          </div>
        </div>

        <div >
        <Image
          src="/slide-3.png"
          alt="Slide 3"
          className="aspect-w-16 aspect-h-10 md:aspect-w-auto md:aspect-h-auto object-cover"
          width={1920} // Adjust the width and height according to your image dimensions
          height={1200}
        />
        <div className="m-2 px-2 md:px-4 py-2 md:py-3 font-oswald bg-white absolute bottom-0 left-0 text-black/90 text-sm md:text-lg uppercase font-medium cursor-pointer hover:opacity-90">
          Shop now
        </div>
      </div>
            </Carousel>
        </div>
    );
};

export default HeroBanner;