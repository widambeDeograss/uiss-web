import heroimg from "../assets/img/johannes-plenio-fmTde1Fe23A-unsplash 1.png";
import overlay from "../assets/img/rgst_ovelay.png";
import rgtextoverlay from "../assets/img/heroovelayrg.png";
import aboutimg from "../assets/img/aboutimg.png";
import { Typography } from "@material-tailwind/react";
import visionimg from "../assets/img/vision.png";
import goalimg from "../assets/img/goal.png";
import AboutVisionCard from "../components/AboutVisionCard";
import valuesImages from "../assets/img/computer 1.png";
import code from "../assets/img/coding 2.png";
import CoreValuesCard from "../components/CoreValuesCard.tsx";


const VALUES = [
    {
      id: 1,
      title: "Our Vision",
      image: visionimg,
      description:
        "Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    },
    {
      id: 2,
      title: "Our Mission",
      image: goalimg,
      description:
        "Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    },
    {
      id: 3,
      title: "Our Motto",
      image: goalimg,
      description:
        "Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    },
  ];

const Specialization = [
  {
    id: 1,
    title: "Software Development",
    image: code,
    description:
        "Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
  },
  {
    id: 2,
    title: "Robotics",
    image: valuesImages,
    description:
        "Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
  },

];
const About = () => {
  return (
    <div>
      <div className="relative h-screen">
        <img
          src={heroimg}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 -top-44 h-full w-full">
          <img
            src={overlay}
            alt="image 1"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className="w-4/5 md:w-2/4 text-center -mt-64">
            <Typography
              variant="h1"
              color="white"
              className=" text-3xl md:text-4xl lg:text-5xl"
            >
              About us
            </Typography>
          </div>
        </div>
        <div className="relative -mt-48 flex justify-center">
          <img
            src={rgtextoverlay}
            alt="image 1"
            className="h-48 w-full object-cover"
          />
          <div className="absolute inset-0 -mt-[110px] mx-auto w-full md:w-[600px] lg:w-[1000px] flex justify-center">
            <Typography
              variant="h1"
              color="white"
              className="  text-sm px-10 md:text-ls lg:text-xl   "
            >
              We aspire Creativity and Innovative Spirits among the University
              students
            </Typography>
          </div>
        </div>
      </div>

      <div className="bg-[#C89300] px-20 py-10  w-full">
        <div className="flex flex-col  mt-10  justify-center gap-16 sm:flex-col lg:flex-row md:flex-row">
          <div className=" w-72 h-72 lg:w-96 lg:h-96 md:h-80 md:w-80 sm:h-64 sm:w-64 relative  shadow-md ">
            <div className="absolute -top-10 -left-10 border-b-0  bg-black  border-solid  w-full h-full"></div>
            <div className="relative z-10 text-black bg-white  w-full h-full  hover:scale-105 transition-transform duration-300  ">
              <img
                src={aboutimg}
                alt="card-image"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="w-64 lg:w-96 md:w-72 sm:w-64">
          <Typography
              variant="h1"
              color="white"
              className="  text-sm  md:text-ls lg:text-2xl  text-black  "
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 15
            00s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Typography>
          </div>
        </div>

        <div className="mt-20 bg-transparent">

        <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:justify-center sm:flex-col ">
          {VALUES.map((item) => {
            return (
              <AboutVisionCard
                description={item.description}
                image={item.image}
                title={item.title}
                id={item.id}
              />
            );
          })}
        </div>
      </div>

        <div className="mt-24">
          <Typography
              variant="small"
              className="flex justify-center mb-10 font-bold text-4xl text-black"
          >
            SPECIALIZATION
          </Typography>
          <div className="flex flex-col items-center justify-center gap-14 lg:flex-row lg:justify-center sm:flex-col  md:flex-row">
            {Specialization.map((item) => {
              return (
                  <CoreValuesCard
                      description={item.description}
                      image={item.image}
                      title={item.title}
                      id={item.id}
                  />
              );
            })}
          </div>
        </div>
      </div>


    </div>
  );
};

export default About;
