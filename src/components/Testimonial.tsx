// Testimonial.tsx
import  { useState } from 'react';
import right from "../assets/img/right 2.png";
import left from "../assets/img/right 3.png";

interface TestimonialItem {
  id: number;
  name: string;
  message: string;
  title:String;
}

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: '~Kedyson Zacharia',
    title: ' DELOITTE',
    message: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.',
  },
  {
    id: 2,
    name: '~Dr Baraka Maiseli',
    title: ' HEAD OF DEPARTMENT,ETE',
    message: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.',
  },
  {
    id: 3,
    name: '~Ms Angela Mwemezi ',
    title: ' KPMG',
    message: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.',
  },
  {
    id: 4,
    name: 'Alice Johnson',
    title: ' DELOITTE',
    message: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.',
  },
  // Add more testimonials as needed
];

function Testimonial() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? Math.floor(testimonials.length / 3) - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === Math.floor(testimonials.length / 3) - 1 ? 0 : prev + 1));
  };

  const startIdx = currentSlide * 3;
  const endIdx = startIdx + 3;

  return (
    <div className="bg-transparent p-4">
      <div className="w-full mx-auto relative overflow-hidden">
        <div className="w-full flex justify-center items-center">
          <button className="bg-transparent hover:bg-gray-400  cursor-pointer text-gray-800 font-bold py-2 px-4 mt-96  " onClick={prevSlide}>
          <img
          src={left}
          className="h-full w-full object-cover cursor-pointer "
        />
          </button>
          <div className="px-8 py-6 rounded-lg shadow-md bg-transparent w-3/5 overflow-hidden relative md:w-full">
            <div
              className="transition-transform duration-300 ease-in-out transform translate-x-0 "
              style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
            >
              {testimonials.slice(startIdx, endIdx).map((testimonial) => (
                <div key={testimonial.id} className="mb-4 pr-2 w-full md:w-1/3 float-left">
                  <p className="text-xl text-white text-left">"{testimonial.message}"</p>
                  <p className="text-white text-2xl text-left mt-16">{testimonial.name}</p>
                  <p className="text-white text-2xl text-left ">{testimonial.title}</p>
                </div>
              ))}
            </div>
          </div>
          <button className="bg-transparent hover:bg-gray-400  cursor-pointer text-gray-800 font-bold py-2 px-4 mt-96 rounded-r" onClick={nextSlide}>
          <img
          src={right}
          className="h-full w-full object-cover cursor-pointer"
        />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
