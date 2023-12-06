import {useDataFetch} from "../hoooks/DataHook.ts";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {EventManagement, ProjectManagement} from "../api/Api.ts";
import { Spinner, Typography } from "@material-tailwind/react";

type ProjectType = {
    category: string;
    description: string;
    id: number;
    image: string;
    people: string[];
    title: string;
  };

const Project = () => {
    const fetcher = useDataFetch();
    const [project, setproject] = useState<ProjectType>();
    const navigate = useNavigate();
    const [isLoading, setisLoading] = useState(false);
    const params = useParams();

    const loadData = async () => {
        setisLoading(true);
        const response = await fetcher.fetchData({ url: ProjectManagement.project + `/${params.id }`});
        console.log(response);
        if (response) {
            setproject(response?.data);
            setisLoading(false);
        }
    };
    useEffect(() => {
        loadData();
    }, []);
    return(
        <div
        className={isLoading?"bg-transparent":"bg-[#FABD13]"}
        >
          <div className="mx-auto px-1 lg:px-10 md:px-8 sm:px-1">
          {isLoading ? <div className="flex justify-center"> <Spinner className="h-8 w-8"/></div>:  <div>
            <div className="p-3">
                <img src={project?.image} alt="project image" className="w-full lg:w-full md:w-4/5 sm:w-full h-[50vh] rounded-lg "  />
            </div>
             
             <div className="mt-5">
                <Typography className="text-black text-xl font-bold ">
                  Project Title:  <span className="underline">{project?.title}</span>
                </Typography>
                <Typography  className="text-black text-xl font-bold mt-1">
                  Categoty: {project?.category}
                </Typography>
                <Typography  className="text-black text-lg font-bold mt-3 mb-10">
                  {project?.description}
                 
                </Typography>
             </div>
           </div>}
          </div>

        </div>
    )
}

export default Project;
