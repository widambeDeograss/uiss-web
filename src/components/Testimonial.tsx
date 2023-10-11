import "@splidejs/splide/dist/css/splide.min.css";
import { useState } from "react";
// import right from "../assets/img/right 2.png";
// import left from "../assets/img/right 3.png";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide"; 
import "@splidejs/splide/dist/css/themes/splide-default.min.css"; // Import Splide styles

interface TestimonialItem {
  id: number;
  name: string;
  message: string;
  title: String;
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
      " UISS has generated competent students capable of delivering ICT solutions to address practical socio-economic challenges that grab national attention.",
  },
  {
    id: 3,
    name: "~Ms Angela Mwemezi ",
    title: " KPMG",
    message:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.",
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
  // @ts-ignore
  const [currentSlide, setCurrentSlide] = useState<number>(0)

  // const slidesPerPage = {
  //   lg: 3,
  //   md: 2,
  //   sm: 1,
  // };

  const options = {
    type: 'loop', // Use "loop" type for infinite looping
    perPage: 1,
    gap: '1rem',
    rewind: true, // Enable rewind to loop infinitely
    pagination: true,
    arrows: {
      prev: "<button class='splide__arrow splide__arrow--prev'> <img src={left} className='h-full w-full object-cover cursor-pointer'alt='Previous'/></button>",
      next: "<button class='splide__arrow splide__arrow--prev'> <img  src={right} className='h-full w-full object-cover cursor-pointer'alt='Previous'/></button>",
    },
    autoplay: true,
    interval: 3000,
    pauseOnHover: true, // Pause autoplay on hover

    breakpoints: {
      640: {
        perPage: 1,
        gap: '0.5rem',
        autoplay: true,
        interval: 3000,
      },
      768: {
        perPage: 2,
        gap: '1rem',
        autoplay: true,
        interval: 3000,
      },
      1024: {
        perPage: 3,
        gap: '1rem',
        autoplay: true,
        interval: 3000,
      },
      1280: {
        perPage: 3,
        gap: '1rem',
        autoplay: true,
        interval: 3000,
      },
      1536: {
        perPage: 3,
        gap: '1rem',
        autoplay: true,
        interval: 3000,
      },
      1920: {
        perPage: 3,
        gap: '1rem',
        autoplay: true,
        interval: 3000,
      },
    },
  }

  return (
    <div className='bg-transparent  w-full'>
      <div className='w-full relative '>
        <div className='w-full  '>
          <Splide
            options={options}
            onMoved={(splide: any) => setCurrentSlide(splide.index)}
          >
            {testimonials.map((testimonial) => (
              <SplideSlide key={testimonial.id}>
                <div className='text-xl text-white text-left w-60'>
                  "{testimonial.message}"
                </div>
                <div className='text-white text-2xl text-left mt-6'>
                  {testimonial.name}
                </div>
                <div className='text-white text-2xl text-left'>
                  {testimonial.title}
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  )
}

export default Testimonial;
