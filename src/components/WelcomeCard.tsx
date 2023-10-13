import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import wlcmpic from  "../assets/img/Baraka_Maiseli.png"
import overlay from "../assets/img/Rectangle 5.png"

const WelcomeCard = () => {
  return (
    <Card className="w-full max-w-[78rem]  lg:flex-row md:flex-row sm:flex:col rounded-none p-4 lg:p-8">
      <CardHeader
        shadow={false}
        floated={true}
        className="m-0 lg:w-2/5  lg:h-full md:h-full h-2/5 shrink-0 rounded-none"
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
          className="h-[600px] w-full object-cover"
        />
      </CardHeader>
      <CardBody className="border-4 p-5 lg:p-10 ">
        <Typography
          variant="h4"
          color="blue-gray"
          className="mb-3 bg-[#FABD13] p-1 lg:p-2 rounded-xl text-lg lg:text-2xl font-bold "
        >
          Welcome note from our advisor
        </Typography>
        <Typography color="gray" className="mb-8 font-normal text-left text-xs lg:text-base">
            Dear beloved UISS members and stakeholder,
            <br/>
            I feel honored and privileged to welcome you all to the University of Dar es Salaam ICT Students’ Society (UISS). You are the most important and pivotal person to the prosperity of our society. The philosophy of UISS seats at the very core of her members and stakeholders, recognizing them as central entities in the realization of the society’s vision and mission.
            <br/>
            UISS has, for years, been harnessing the potential of ICT students from higher learning institutions to address real-world societal challenges. Our pride dwells on seeing humanity advanced through creative and innovative technologies. In this platform, we introduce various activities that UISS undertakes in the areas of ICT. The platform ensures that you receive regular updates from us, and that you connect with UISS in varied capacities to achieve your goals. We remain bold to serve you to the best of our ability, noting that service and significance defines existence and sustainability of UISS.
            <br/>
            Let us join our efforts together in nurturing and empowering youths from ICT fields. Your engagement with UISS will facilitate preparation of this enegertic group to address practical socio-economic challenges using emerging technologies. Our hearts are always open to receive opinions and comments for advancing the society.
            <br/>
            Karibuni sana!
        </Typography>
        {/*<a href="#" className="inline-block">*/}
        {/*  <Button variant="text" className="flex items-center gap-2">*/}
        {/*    Learn More*/}
        {/*    <svg*/}
        {/*      xmlns="http://www.w3.org/2000/svg"*/}
        {/*      fill="none"*/}
        {/*      viewBox="0 0 24 24"*/}
        {/*      stroke="currentColor"*/}
        {/*      strokeWidth={2}*/}
        {/*      className="h-4 w-4"*/}
        {/*    >*/}
        {/*      <path*/}
        {/*        strokeLinecap="round"*/}
        {/*        strokeLinejoin="round"*/}
        {/*        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"*/}
        {/*      />*/}
        {/*    </svg>*/}
        {/*  </Button>*/}
        {/*</a>*/}
      </CardBody>
    </Card>
  );
};

export default WelcomeCard;
