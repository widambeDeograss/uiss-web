import { useState, useEffect } from "react";
// import right from "../assets/img/right 2.png";
// import left from "../assets/img/right 3.png";
// @ts-ignore
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// @ts-ignore
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface TestimonialItem {
  id: number;
  name: string;
  message: string;
  title: string;
}

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: "~Kedyson Zacharia",
    title: " DELOITTE",
    message:
      "UISS is a home for creativity and innovation. Being a homie, I was able to fully utilize my potentials by leading other passionate colleagues, collaborating impacting the society, and even creating a much more favourable environment for others to learn, creatr and innovate. In fact, UISS connects people, Students, stakeholders, and technology practitioners together.",
  },
  {
    id: 2,
    name: "~Dr Baraka Maiseli",
    title: " HEAD OF DEPARTMENT,ETE",
    message:
      "UISS has generated competent students capable of delivering ICT solutions to address practical socio-economic challenges that grab national attention.",
  },
  {
    id: 3,
    name: "~Ms Angela Mwemezi ",
    title: " KPMG",
    message:
      "It was my immense fortune to be a part of UISS, huge respect and love to the leaders and society members for their devotion in creating an impact in the ICT space especially at the University. But above all, the society advisor, Dr. Baraka Maiseli, he is an inspiration and great mentor.",
  },
  {
    id: 4,
    name: "Alice Johnson",
    title: " DELOITTE",
    message:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.",
  },
  // Add more testimonials as needed
];

function Testimonial() {
  const [slidePerpage, setslidePerpage] = useState(
    window.innerWidth >= 860 ? 3 : 1
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 861) {
        setslidePerpage(3);
      } else if (window.innerWidth <= 860) {
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
      onSwiper={(swiper: any) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.id} className="flex justify-center p-10">
          <div className="">
            <div className="text-xl text-white text-left w-64 text-justify">
              "{testimonial.message}"
            </div>
            <div className="text-white text-2xl text-left mt-6">
              {testimonial.name}
            </div>
            <div className="text-white text-2xl text-left">
              {testimonial.title}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Testimonial;
