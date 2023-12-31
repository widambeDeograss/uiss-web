import rghero from "../assets/img/college-students-different-ethnicities-cramming 1.png";
import rgtextoverlay from "../assets/img/projectoverlay.png";
import {
  Typography,
  Input,
  Radio,
  Button,
  Checkbox,
  Select,
  Option,
} from "@material-tailwind/react";

const Registration = () => {
  return (
    <div>
      <div className="relative h-screen">
        <img
          src={rghero}
          alt="image 1"
          className="h-[345px] w-full object-right-top"
        />
        <div className="absolute inset-0 -top-64 h-full w-full">
          <img src={rgtextoverlay} alt="image 1" className="h-full w-full " />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className="w-4/5 md:w-2/4 text-center  -mt-64">
            <Typography
              variant="h1"
              color="white"
              className=" text-3xl md:text-4xl lg:text-5xl"
            >
              Registration Form
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="mt-10  text-xs px-10 md:text-ls lg:text-xl   "
            >
              Dear Student, thank you for your interest in our Society. Please
              complete the information in this form to help the Society analyze
              your request and make an informed decision. Kindly note that the
              information you provide will solely be used for analysis by the
              Society, and will not be used for matters unrelated to the
              Society.
            </Typography>
          </div>
        </div>
      </div>

      <div className="bg-[#C89300] px-10 lg:px-32 py-10  w-full -mt-72 -z-10">
        <form action="" className="w-full lg:w- justify-start">
          <div className="grid gap-3 mb-6 lg:grid-cols-2 w-full">
            <div>
              {" "}
              <label
                htmlFor="email"
                className="text-left text-black flex justify-start mb-1 mt-10 "
              >
                Full Name
              </label>
              <Input
                type="text"
                name="name"
                label="..."
                id="fullName"
                className="h-14 border-white border-[2.5px] "
                crossOrigin={undefined}
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-left text-black flex justify-start mb-1 mt-10 "
              >
                Student’s Registration Number
              </label>
              <Input
                type="text"
                name="reg"
                label="..."
                id="fullName"
                className="h-14 border-white border-[2.5px] "
                crossOrigin={undefined}
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-left text-black flex justify-start mb-1  "
              >
                Email
              </label>
              <Input
                type="text"
                name="email"
                label="..."
                id="fullName"
                className="h-14 border-white border-[2.5px] "
                crossOrigin={undefined}
                required
              />
            </div>
            <div>
              {" "}
              <label
                htmlFor="email"
                className="text-left text-black flex justify-start mb-1  "
              >
                Phone number
              </label>
              <Input
                type="text"
                name="phone"
                label="..."
                id="fullName"
                className="h-14 border-white border-[2.5px] "
                crossOrigin={undefined}
                required
              />
            </div>

            <div className="">
              <label
                htmlFor="email"
                className="text-left text-black flex justify-start mb-1  "
              >
                College /School
              </label>
              <Select label="College">
                <Option defaultChecked>COICT</Option>
                <Option>COET</Option>
                <Option>Other:</Option>
              </Select>
            </div>
            <div className="">
              <label
                htmlFor="email"
                className="text-left text-black flex justify-start mb-1  "
              >
                Department
              </label>
              <Select label="department">
                <Option defaultChecked>
                  Department of Electronics and Telecommunications Engineering
                </Option>
                <Option>Department of Computer Science and Engineering</Option>
                <Option>Other:</Option>
              </Select>
            </div>
            <div className="">
              <label
                htmlFor=""
                className="text-left text-black flex justify-start mb-1  "
              >
                Program of Study <span className="text-red-900">*</span>
              </label>
              <Select label="Program">
                <Option defaultChecked>
                  Bsc Telecommunications Engineering
                </Option>
                <Option>
                  Bsc Computer Engineering and Information Technology
                </Option>
                <Option>Bsc Electronics Engineering</Option>
                <Option>Bsc Electronics Science and Communication</Option>
                <Option>Bsc Business Information Technology</Option>
                <Option>Bsc Computer Science</Option>
                <Option>Other:</Option>
              </Select>
            </div>
            <div className="">
              <label
                htmlFor=""
                className="text-left text-black flex justify-start mb-1  "
              >
                Year of Study <span className="text-red-900">*</span>
              </label>
              <Select label="year">
                <Option defaultChecked>1</Option>
                <Option>2</Option>
                <Option>3</Option>
                <Option>4</Option>
                <Option>4</Option>
              </Select>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-10">
            <label
              htmlFor=""
              className="text-left text-black flex justify-start mb-1  "
            >
              Which Are of ICT are you Interested? *{" "}
              <span className="text-red-900">*</span>
            </label>
            <Checkbox
              label={
                <Typography
                  color="blue-gray"
                  className="font-medium flex text-xs lg:text-lg"
                >
                  Database Design and Implementation
                </Typography>
              }
              crossOrigin={undefined}
            />
            <Checkbox
              label={
                <Typography
                  color="blue-gray"
                  className="font-medium flex text-xs lg:text-lg"
                >
                  Networking
                </Typography>
              }
              crossOrigin={undefined}
            />
            <Checkbox
              label={
                <Typography
                  color="blue-gray"
                  className="font-medium flex text-xs lg:text-lg"
                >
                  Software Development
                </Typography>
              }
              crossOrigin={undefined}
            />
            <Checkbox
              label={
                <Typography
                  color="blue-gray"
                  className="font-medium flex text-xs lg:text-lg"
                >
                  CyberSecurity
                </Typography>
              }
              crossOrigin={undefined}
            />
            <Checkbox
              label={
                <Typography
                  color="blue-gray"
                  className="font-medium flex text-xs lg:text-lg"
                >
                  Internet of Things
                </Typography>
              }
              crossOrigin={undefined}
            />
            <Checkbox
              label={
                <Typography
                  color="blue-gray"
                  className="font-medium flex text-xs lg:text-lg"
                >
                  Machine Learning
                </Typography>
              }
              crossOrigin={undefined}
            />
            <Checkbox
              label={
                <Typography
                  color="blue-gray"
                  className="font-medium flex text-xs lg:text-lg"
                >
                  Artificial Intelligence
                </Typography>
              }
              crossOrigin={undefined}
            />
            <Checkbox
              label={
                <Typography
                  color="blue-gray"
                  className="font-medium flex text-xs lg:text-lg"
                >
                  Embedded Electronics
                </Typography>
              }
              crossOrigin={undefined}
            />

            <div className="flex flex-wrap">
              <Checkbox
                id="terms-react"
                label={
                  <Typography
                    color="blue-gray"
                    className="font-medium flex  mr-2"
                  >
                    Other:
                  </Typography>
                }
                crossOrigin={undefined}
              />
              <input
                type="text"
                id="password"
                className="border-0 border-b-[1px] focus:border-0 w- bg-transparent text-gray-900 text-sm   block w-1/2 p-2.5      "
                placeholder=""
                name="other"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor=""
              className="text-left text-black flex justify-start mt-10 "
            >
              <span className="font-bold">
                Where did you start doing/learn the area mentioned above?
              </span>
            </label>
            <label
              htmlFor=""
              className="text-left text-black flex justify-start mb-1  "
            >
              (This will help us know your current scope based on your skill(s)){" "}
              <span className="text-red-900">*</span>
            </label>
            <input
              type="text"
              id="password"
              className="border-0 border-b-[1px] focus:border-0 w- bg-transparent text-gray-900 text-sm   block w-1/2 p-2.5      "
              placeholder=""
              name="other"
            />
          </div>

          <Button
            className="mt-10  text-[#C89300] p-5 w-32 rounded-3xl hover:scale-105 transition-transform "
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
