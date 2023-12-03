import React, {useEffect, useState} from "react";
import projectOverlay from "../assets/img/projectoverlay.png";
import homeprj from "../assets/img/projecthome.png";
import {
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Input,
} from "@material-tailwind/react";
import eventImage from "../assets/img/evntImage.png";
import carrier from "../assets/img/carrier.png";
import stem from "../assets/img/stem.png";
import ProjectCard from "../components/ProjectCard";
import {
    MagnifyingGlassIcon,

  } from "@heroicons/react/24/solid";
import {ProjectManagement} from "../api/Api.ts";
import {useDataFetch} from "../hoooks/DataHook.ts";

const EVENTS = [
  {
    id: 1,
    title: "Smart city",
    image: eventImage,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
  },
  {
    id: 2,
    title: "Smart city",
    image: carrier,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
  },
  {
    id: 3,
    title: "Stem training",
    image: eventImage,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
  },
  {
    id: 4,
    title: "Stem training",
    image: eventImage,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
  },
  {
    id: 5,
    title: "Stem training",
    image: stem,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
  },
  {
    id: 6,
    title: "Stem training",
    image: eventImage,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
  },
];
const data = [
  {
    label: "All",
    value: "all",
    desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
  },
  {
    label: "IOT",
    value: "IOT",
    desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
  },
  {
    label: "Network",
    value: "Network",
    desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
  },
  {
    label: "Programing",
    value: "Programing",
    desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
  },
];

type ProjectType = {
  category: string;
  description: string;
  id: number;
  image: string;
  people: string[];
  title: string;
};

const Projects = () => {
  const fetch = useDataFetch();
  const [isLoading, setIsLoading] = useState(false)
  const [topEvents, setTopEvents] = useState<[ProjectType]>()

  const loadData = async () => {
    setIsLoading(true);
    try {
      const  response = await fetch.fetchData({
        url:ProjectManagement.project
      })



      console.log(response)

      const topevn = response?.data.reverse()
      setTopEvents(topevn?.slice(0,9))
    }
    catch (error){
      console.log(error)
    }

  }

  useEffect(() => {
    loadData()
  }, []);

  return (
    <div>
      <div className="relative h-screen">
        <img
          src={homeprj}
          alt="image 1"
          className="h-[350px] w-full"
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
              Projects
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
        {/* <div className="relative flex justify-center">
          <div className="absolute inset-0  mx-auto w-full md:w-[600px] lg:w-[1000px] flex justify-center">

          </div>
        </div> */}
      </div>
      <div className="bg-[#C89300]  px-2 lg:px-20 py-10 -mt-72 -z-10   w-full">
        <div className=" ">
          <Typography
            variant="small"
            className=" mb-10 font-bold text-4xl text-black "
          >
            Our Projects
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
          <div className="mt-10">
            <Tabs value="all">
              <div className="flex flex-col-reverse justify-between lg:flex-row sm:flex-col-reverse gap-3 md:flex-row">
                <TabsHeader className="">
                  {data.map(({ label, value }) => (
                      <Tab key={value} value={value} activeClassName="" className="">
                        {label}
                      </Tab>
                  ))}
                </TabsHeader>
                <div className="w-64">
                  <Input
                      label="Search.."
                      style={{ backgroundColor: 'black' }}
                      className="rounded-3xl border-0"
                      icon={
                        <div className="flex items-center gap-2">
                          {React.createElement(MagnifyingGlassIcon, { className: "w-5 h-5" })}
                        </div>
                      }
                      crossOrigin={undefined}
                  />
                </div>
              </div>
              <TabsBody>
                {data.map(({ value, desc }) => (
                    value === "all" ? (
                        <TabPanel value={value}>
                          <div className="grid grid-cols-1 mt-10 items-center justify-center gap-10 lg:grid-cols-3 lg:justify-center md:grid-cols-2 sm:grid-cols-1">
                            {topEvents?.map((item) => (
                                <ProjectCard
                                    description={item.description}
                                    image={item.image}
                                    title={item.title}
                                    id={item.id}
                                />
                            ))}
                          </div>
                        </TabPanel>
                    ) : (
                        <TabPanel value={value}>{desc}</TabPanel>
                    )
                ))}
              </TabsBody>
            </Tabs>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Projects;
