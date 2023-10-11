import { useState, useEffect } from 'react';
import right from "../assets/img/right 2.png";
import left from "../assets/img/right 3.png";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


interface TestimonialItem {
  id: number;
  name: string;
  message: string;
  title: String;
}

 
 
  function Testimonial() {
   const [slidePerpage, setslidePerpage] = useState(3);

   useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 960) {
        setslidePerpage(3);
      } else if (window.innerWidth <= 960) {
        setslidePerpage(1);
      }
    });
  }, []);
      
    return (
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={slidePerpage}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
         {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id} className='flex justify-center p-10' >
                  <div className=''>
                  <div className="text-xl text-white text-left w-64">"{testimonial.message}"</div>
                  <div className="text-white text-2xl text-left mt-6">{testimonial.name}</div>
                  <div className="text-white text-2xl text-left">{testimonial.title}</div>
                  </div>
                </SwiperSlide>
              ))}
    </Swiper>
    );
  }
  
  
  export default Testimonial;
  
