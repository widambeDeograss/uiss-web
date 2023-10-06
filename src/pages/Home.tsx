import { Typography, Button } from "@material-tailwind/react"
import udsmlg from "../assets/img/udsmlg.png";
import udsmHero from "../assets/img/WhatsApp Image 2023-03-13 at 11.27 1.png";
import overlay from "../assets/img/Rectangle 42.png";
import WelcomeCard from "../components/WelcomeCard";

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
            <Typography
              variant="lead"
              color="white"
              className="mb-12 text-4xl"
            >
            Join a Student Community that Fuels Creativity and Drives Innovation
            </Typography>
      
          </div>
        </div>

      </div>
      <div className=" -mt-56 h-[500px]  w-full flex justify-center ">
        <WelcomeCard />
      </div>
    </div>
  )
}

export default Home