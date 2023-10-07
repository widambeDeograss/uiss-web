import { Typography } from "@material-tailwind/react";
import udsmlg from "../assets/img/udsmlg.png";
import udsmHero from "../assets/img/WhatsApp Image 2023-03-13 at 11.27 1.png";
import overlay from "../assets/img/Rectangle 42.png";
import WelcomeCard from "../components/WelcomeCard";
import bgCRS from "../assets/img/pngwing 1.png";
import coca from "../assets/img/logo-coca-cola.png";
import oppo from "../assets/img/logo-oppo.png";
import paypal from "../assets/img/logo-paypal.png";
import redstore from "../assets/img/redstr.png";
import godrey from "../assets/img/logo-godrej.png";
import valuesImages from "../assets/img/computer 1.png"
import CoreValuesCard from "../components/CoreValuesCard";
import eventImage from "../assets/img/evntImage.png"
import { EventCard } from "../components/EventCard";
import stem from "../assets/img/stem.png";
import carrier from "../assets/img/carrier.png"

const VALUES = [
    {
     id:1,
     title:"Creativity",
     image:valuesImages,
     description:"Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
    },
    {
        id:2,
     title:"Innovation",
     image:valuesImages,
     description:"Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
    },
    {
        id:3,
     title:"Integrity",
     image:valuesImages,
     description:"Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
    },
]

const EVENTS = [
    {
     id:1,
     title:"Encoded data",
     image:eventImage,
     description:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
     location:"20th March 2023",
     date:"COICT,Sayansi"
    },
    {
        id:2,
     title:"Career Guidance",
     image:carrier,
     description:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
     location:"20th March 2023",
     date:"COICT,Sayansi"
    },
    {
        id:3,
     title:"Stem training",
     image:stem,
     description:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
     location:"20th March 2023",
     date:"COICT,Sayansi"
    },
]

function Home() {
  return (
    <div>
      <div className="relative h-full w-full -top-10">
        <img
          src={udsmHero}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 h-full w-full ">
          <img
            src={overlay}
            alt="image 1"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 grid h-full w-full place-items-center ">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Welcome UISS
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              <img
                className="h-30 w-30 object-cover object-center  m-auto"
                src={udsmlg}
                alt="logo image"
              />
            </Typography>
            <Typography variant="lead" color="white" className="mb-12 text-4xl">
              Join a Student Community that Fuels Creativity and Drives
              Innovation
            </Typography>
          </div>
        </div>
      </div>
      <div className="absolute  mt-6  h-full w-full">
        <img
          src={bgCRS}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className=" -mt-56 h-[500px]  w-full flex justify-center ">
        <WelcomeCard />
      </div>
      <div className="mt-20">
        <Typography
          variant="small"
          className="flex justify-center mb-4 font-bold  text-4xl text-white"
        >
          Our Partners
        </Typography>
        <div className="flex justify-center gap-14 text-blue-gray-900  ">
          <Typography
            as="a"
            href="#"
            className="opacity-80 transition-opacity hover:opacity-100 text-blue-300"
          >
            <img
              src={redstore}
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </Typography>
          <Typography
            as="a"
            href="#"
            className="opacity-80 transition-opacity hover:opacity-100 text-blue-300"
          >
            <img
              src={coca}
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </Typography>
          <Typography
            as="a"
            href="#"
            className="opacity-80 transition-opacity hover:opacity-100 text-blue-300"
          >
            <img
              src={godrey}
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </Typography>
          <Typography
            as="a"
            href="#"
            className="opacity-80 transition-opacity hover:opacity-100 text-blue-300"
          >
            <img
              src={paypal}
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </Typography>
          <Typography
            as="a"
            href="#"
            className="opacity-80 transition-opacity hover:opacity-100 text-blue-300"
          >
            <img
              src={oppo}
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </Typography>
        </div>
      </div>
      <div className="mt-24">
        <Typography
          variant="small"
          className="flex justify-center mb-10 font-bold  text-4xl text-white"
        >
          OUR CORE VALUES
        </Typography>
       <div className="flex justify-center gap-14 ">
       {VALUES.map((item) => {
            return(
                <CoreValuesCard description={item.description} image={item.image} title={item.title} id={item.id}/>
            )
        })}
       </div>
        </div>
        <div className="mt-24">
        <Typography
          variant="small"
          className="flex justify-center mb-10 font-bold  text-4xl text-white"
        >
          Events
        </Typography>
        <Typography
          variant="small"
          className="flex justify-center mb-10 font-bold  text-xl text-[#FABD13]"
        >
          We aspire Creativity and innovative spirits among 
          the university students
        </Typography>
       <div className="flex justify-center gap-14 ">
       {EVENTS.map((item) => {
            return(
                <EventCard description={item.description} image={item.image}
                 title={item.title} id={item.id} location={item.location} date={item.date}/>
            )
        })}
       </div>
        </div>
    </div>
  );
}

export default Home;
