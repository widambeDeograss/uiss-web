import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  type data = {
    id:number,
    title:String,
    image:any,
    description:any,
    location:String,
    date:String
}

  export function EventCard(data:data) {
    return (
      <Card className="max-w-[24rem] overflow-hidden">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <img
            src={data.image}
            alt="ui/ux review check"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray">
            {data.title}
          </Typography>
          <Typography variant="lead" color="gray" className="mt-3 font-normal">
            Because it&apos;s about motivating the doers. Because I&apos;m here to
            follow my dreams and inspire others.
          </Typography>
          <Typography variant="h6" color="blue-gray" className="mt-3">
            Date: {data.date}
          </Typography>
          <Typography variant="h6" color="blue-gray">
           Location: {data.location}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
      </Card>
    );
  }