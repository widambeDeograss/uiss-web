import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import wlcmpic from "../assets/img/IMG-20230120-WA0065.png";
import overlay from "../assets/img/Rectangle 5.png"

const WelcomeCard = () => {
  return (
    <Card className="w-full max-w-[78rem] flex-row rounded-none p-8">
      <CardHeader
        shadow={false}
        floated={true}
        className="m-0 w-2/5 shrink-0 rounded-none"
      >
         <div className="absolute inset-0 h-full ">
         <img
          src={overlay}
          alt="card-image"
          className="h-full w-full object-cover"
        />
         </div>
        <img
          src={wlcmpic}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="border-4 p-10 ">
        <Typography
          variant="h4"
          color="blue-gray"
          className="mb-3 bg-[#FABD13] p-2 rounded-xl text-2xl font-bold "
        >
          Welcome note from our advisor
        </Typography>
        <Typography color="gray" className="mb-8 font-normal text-left text-3xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 15 00s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Typography>
        <a href="#" className="inline-block">
          <Button variant="text" className="flex items-center gap-2">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardBody>
    </Card>
  );
};

export default WelcomeCard;
