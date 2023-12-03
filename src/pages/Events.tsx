import homeevent from "../assets/img/eventshm.png";
import projectOverlay from "../assets/img/projectoverlay.png";
import {Button, Input, Typography} from "@material-tailwind/react";
import React, {useEffect, useState} from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import eventImage from "../assets/img/evntImage.png";
import carrier from "../assets/img/carrier.png";
import stem from "../assets/img/stem.png";
import { EventCard } from "../components/EventCard.tsx";
import img from "../assets/img/aboutimg.png";
import {EventManagement, Gallarey} from "../api/Api.ts";
import {useDataFetch} from "../hoooks/DataHook.ts";



const images = [
  {
    id: 1,
    img: img,
  },
  {
    id: 2,
    img: img,
  },
  {
    id: 3,
    img: img,
  },
  {
    id: 4,
    img: img,
  },
  {
    id: 5,
    img: img,
  },
  {
    id: 6,
    img: img,
  },

];

const EVENTS = [
  {
    id: 1,
    title: "Encoded data",
    image: eventImage,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    location: "20th March 2023",
    date: "COICT,Sayansi",
  },
  {
    id: 2,
    title: "Career Guidance",
    image: carrier,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    location: "20th March 2023",
    date: "COICT,Sayansi",
  },
  {
    id: 3,
    title: "Stem training",
    image: stem,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    location: "20th March 2023",
    date: "COICT,Sayansi",
  },
  {
    id: 1,
    title: "Encoded data",
    image: eventImage,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    location: "20th March 2023",
    date: "COICT,Sayansi",
  },
  {
    id: 2,
    title: "Career Guidance",
    image: carrier,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    location: "20th March 2023",
    date: "COICT,Sayansi",
  },
  {
    id: 3,
    title: "Stem training",
    image: eventImage,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    location: "20th March 2023",
    date: "COICT,Sayansi",
  },
];

type EventType = {
  description: string;
  endDate: string;
  hosts: string[];
  id: number;
  image: null | string;
  name: string;
  startDate: string;
  venue: string;
};

type AlbumType = {
  album: string;
  album_id: number;
  caption: string;
  id: number;
  url: string;
  visibility: number;
};
const renderDateTime = (dateString:any) => {
  const dateTime = new Date(dateString);
  return dateTime.toLocaleDateString();
};
const Events = () => {
    const [selectedImage, setSelectedImage] = useState<any|null>(null);
  const fetch = useDataFetch();
  const [isLoading, setIsLoading] = useState(false)
  const [topEvents, setTopEvents] = useState<[EventType]>()
  const [images, setImages] = useState<[AlbumType]>()

  const loadData = async () => {
    setIsLoading(true);
    try {
      const  response = await fetch.fetchData({
        url:EventManagement.Events
      })

      const  gar_response = await fetch.fetchData({
        url:Gallarey.images
      })

      console.log(gar_response)

      const topevn = response?.data.reverse()
      setImages(gar_response?.data)
      setTopEvents(topevn?.slice(0,9))
    }
    catch (error){
      console.log(error)
    }

  }

  useEffect(() => {
    loadData()
  }, []);
  console.log(topEvents)
    const closeModal = () => {
        setSelectedImage(null);
      };


  return (
    <div>
      {" "}
      <div className="relative h-screen">
        <img
          src={homeevent}
          alt="image 1"
          className="h-[344px] w-full "
        />
        <div className="absolute inset-0 -top-64 h-full w-full">
          <img src={projectOverlay} alt="image 1" className="h-full w-full " />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className="w-4/5 md:w-2/4 text-center -mt-[400px]">
            <Typography
              variant="h1"
              color="white"
              className=" text-3xl md:text-4xl lg:text-5xl"
            >
              Events
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="mt-10 text-sm px-10 md:text-ls lg:text-xl   "
            >
              We aspire Creativity and Innovative Spirits among the University
              students
            </Typography>
          </div>
        </div>
      </div>
      <div className="bg-[#C89300]  px-2 lg:px-20 py-10 -mt-72 -z-10   w-full">
        <div className=" ">
          <Typography
            variant="small"
            className=" mb-10 font-bold text-4xl text-black uppercase"
          >
            Upcoming Events
          </Typography>
          <div className="mx-auto h-2 w-20 -mt-5  bg-black"></div>
          <Typography
            variant="small"
            className="flex justify-center mt-10 font-bold  text-xl text-white"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            <br />
            industry.
          </Typography>
        </div>
        <div>
          <div className="flex justify-between px-1 lg:px-10">
            <div className="bg-black h-10 p-2">
              <Typography
                variant="small"
                className="  font-bold  text-white "
              >
                All Events
              </Typography>
            </div>
            <div className="w-64  ">
              <Input
                  color="white"
                label="Search.."

                  style={{backgroundColor:"black"}}
                className="rounded-3xl border-0 border-t-black"
                icon={
                  <div className="flex items-center gap-2">
                    {React.createElement(MagnifyingGlassIcon, {
                      className: "w-5 h-5",
                    })}
                  </div>
                }
                crossOrigin={undefined}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-10 items-center justify-center gap-10 lg:grid-cols-3 lg:justify-center md:grid-cols-2 sm:grid-cols-1">
          {topEvents?.map((item) => {
            return (
              <EventCard
                description={item.description}
                image={item.image}
                title={item.name}
                id={item.id}
                location={item?.venue}
                date={renderDateTime(item?.startDate)}
              />
            );
          })}
        </div>
        <div className=" ">
          <Typography
            variant="small"
            className=" mb-10 font-bold text-4xl text-black uppercase mt-20"
          >
            OUR GALLERY
          </Typography>
          <div className="mx-auto h-2 w-20 -mt-5  bg-black"></div>
          <Typography
            variant="small"
            className="flex justify-center mt-10 font-bold  text-base text-white"
          >
            Get a peek at pictures taken at our events since we believe in
            making memories in life
          </Typography>

          <div className="grid grid-cols-1 gap-2 mx-auto lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-4/5 mt-10">
            {images?.map((item) => {
              return (
                <div
                  className="relative rounded-lg overflow-hidden h-64 w-64 shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
                  key={item.id}
                  onClick={() => setSelectedImage(item.url)}
                >
                  <img
                    src={item?.url}
                    alt="card-image"
                    className="object-cover h-full w-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white px-4 py-2 text-sm">
                    Image Title
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className=" ">
          <Typography
              variant="small"
              className=" mb-10 font-bold text-4xl text-black uppercase mt-20"
          >
            EVENT SPONSOR
          </Typography>
          <div className="mx-auto h-2 w-20 -mt-6  bg-black"></div>
         <div className="">
           <Typography
               variant="small"
               className="flex justify-center mt-10 font-bold  text-sm text-white"
           >
             GLorem Ipsum is simply dummy text of the printing and typesetting industry.
             <br/>
             Lorem Ipsumhas been the industry's standard dummy text ever since the 1500
           </Typography>


        <div className="flex-wrap">
          <input
              type="email"
              name="email"
              id="emailid"
              placeholder="Enter your Email"
              className="bg-transparent w-2/5  p-2 border-t-0  border-r-0 border-l-0 border-b-2"
          />
          <Button className="rounded-3xl">Contact us</Button>
        </div>
         </div>
        </div>
      </div>
     {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div className="bg-black bg-opacity-50 absolute inset-0"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <button
              className="absolute top-4 right-4 text-black hover:text-gray-800 text-3xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Selected Image"
              className="w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
