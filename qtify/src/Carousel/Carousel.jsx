import React from "react";
import { useState, useEffect} from "react";
import style from "./Carousel.module.css"
import Card from "../Card/Card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import 'swiper/css';
import { useSwiper} from "swiper/react";
import { ReactComponent as LeftArrow } from "../assets/left.svg";
import { ReactComponent as RightArrow } from "../assets/right.svg";


function CarouselLeftNavigation() {

    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);
  
  
    swiper.on("slideChange", function () {
      setIsBeginning(swiper.isBeginning);
    });
  
    return (
      <div className={style.leftNavigation}>
        {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()} />}
      </div>
    );
}

function CarouselRightNavigation() {

    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isEnd);
  
    swiper.on("slideChange", function () {
      setIsEnd(swiper.isEnd);
    });
  
    return (
      <div className={style.rightNavigation}>
        {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
      </div>
    );
}

const Controls = ({ data }) => {
    const swiper = useSwiper();
  
    useEffect(() => {
      swiper.slideTo(0);
    }, [data]);
  
    return <></>;
  };

function Carousel({data}){

    //console.log(data);

    return (
        <div className={style.wrapper}>
          <Swiper
            style={{ padding: "0px 20px" }}
            initialSlide={0}
            modules={[Navigation]}
            navigation ={true}
            pagination={{clickable: true}}
            slidesPerView={7}
            spaceBetween={40}
            allowTouchMove
          >
            <Controls data={data} />
            <div>
              <CarouselLeftNavigation />
              <CarouselRightNavigation />
            </div>

            {data.map((ele) => (
              <SwiperSlide>
                <Card data={ele} />
              </SwiperSlide>
            ))}

          </Swiper>
            
        </div>
      );
}

export default Carousel