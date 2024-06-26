import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../assets//home/01.jpg";
import img2 from "../../../assets//home/02.jpg";
import img3 from "../../../assets//home/03.png";
import img4 from "../../../assets//home/04.jpg";
import img5 from "../../../assets//home/05.png";
import img6 from "../../../assets//home/06.png";
const Banner = () => {
  return (
    <Carousel className="rounded-3xl border-2 border-red-400">
      <div>
        <img className="rounded-3xl" src={img1} />
      </div>
      <div>
        <img className="rounded-3xl" src={img2} />
      </div>
      <div>
        <img className="rounded-3xl" src={img3} />
      </div>
      <div>
        <img className="rounded-3xl" src={img4} />
      </div>
      <div>
        <img className="rounded-3xl" src={img5} />
      </div>
      <div>
        <img className="rounded-3xl" src={img6} />
      </div>
    </Carousel>
  );
};

export default Banner;
