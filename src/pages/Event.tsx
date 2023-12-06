import { useDataFetch } from "../hoooks/DataHook.ts";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EventManagement } from "../api/Api.ts";
import { Spinner, Typography } from "@material-tailwind/react"

type EventType = {
  description: string;
  endDate: string;
  hosts: string[];
  id: number;
  image: any;
  name: string;
  startDate: string;
  venue: string;

};
const renderDateTime = (dateString:any) => {
    const dateTime = new Date(dateString);
    return dateTime.toLocaleDateString();
  };

const Event = () => {
  const fetcher = useDataFetch();
  const [event, setEvent] = useState<EventType>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();

  const loadData = async () => {
    setIsLoading(true);
    const response = await fetcher.fetchData({
      url: EventManagement.Events + `/${params.id}`,
    });
    console.log(response);
    if (response) {
      setEvent(response?.data);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [params.id]);

  return (
    <div className={isLoading ? "bg-transparent" : "bg-[#FABD13] min-h-screen"}>
      <div className="mx-auto px-4 lg:px-10 md:px-8 sm:px-4">
        {isLoading ? (
          <div className="flex justify-center items-center h-screen">
            <Spinner className="h-8 w-8" />
          </div>
        ) : (
 <div>
            <div className="p-3">
              <img
                src={event?.image}
                alt="event image"
                className="w-full h-[50vh] object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="mt-5">
              <Typography className="text-black text-3xl font-bold mb-2">
                {event?.name}
              </Typography>
              {/* <Typography className="text-gray-600 text-lg mb-4">
                {event?.category}
              </Typography> */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Typography className="text-black text-lg mb-2">
                    <span className="font-bold">Start Date:</span> {renderDateTime(event?.startDate)}
                  </Typography>
                  <Typography className="text-black text-lg mb-2">
                    <span className="font-bold">End Date:</span> {renderDateTime(event?.endDate)}
                  </Typography>
                </div>
                <div>
                  <Typography className="text-black text-lg mb-2">
                    <span className="font-bold">Venue:</span> {event?.venue}
                  </Typography>
                  <Typography className="text-black text-lg mb-2">
                    <span className="font-bold">Hosts:</span> {event?.hosts.join(", ")}
                  </Typography>
                </div>
              </div>
              <Typography className="text-black text-lg mb-2">
                <span className="font-bold"></span> {event?.description}
              </Typography>
              {/* Add other fields as needed */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Event;
