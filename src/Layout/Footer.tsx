import { Typography, Button } from "@material-tailwind/react";
import logo from "../assets/img/UISS LOGO_VR 1.png";
import mail from "../assets/img/mail (1) 2.png";
import call from "../assets/img/call 2.png";
import loc from "../assets/img/pin 5.png";

const SITEMAP = [
  {
    title: "Company",
    links: ["About Us", "Careers", "Our Team", "Projects"],
  },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="relative w-full font-roboto">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="mx-auto grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3 ">
          <div className="w-full">
            <Typography
              variant="small"
              className="flex justify-start mb-4 font-bold uppercase text-2xl text-[#C89300]"
            >
              STAY CONNECTED WITH US
            </Typography>
            <label htmlFor="emailid" className="flex justify-start font-roboto">
              Email
            </label>

            <input
              type="email"
              name="email"
              id="emailid"
              placeholder="Enter your Email"
              className="bg-transparent flex justify-start font-roboto p-2 border-t-0  border-r-0 border-l-0 border-b-2"
            />
            <Button className="bg-[#C89300] flex justify-start mt-4 text-base text-black rounded-lg font-roboto">
              Contact Us
            </Button>
          </div>
          <div className=" m-auto">
            <img
              className="h-20 w-20 object-cover object-center  m-auto"
              src={logo}
              alt="logo image"
            />
            <div className="flex gap-4 text-white   ">
              <Typography
                as="a"
                href="#"
                className="opacity-80 transition-opacity hover:opacity-100 text-blue-300"
              >
                <img
                  className="h-8 w-8 object-cover object-center m-auto"
                  src={loc}
                  alt="logo image"
                />
              </Typography>
              COICT,Kijitonyama
            </div>
            <div className="flex gap-4 text-white ">
              <Typography
                as="a"
                href="#"
                className="opacity-80 transition-opacity hover:opacity-100 text-blue-300"
              >
                <img
                  className="h-8 w-8 object-cover object-center m-auto"
                  src={mail}
                  alt="logo image"
                />
              </Typography>
              udsmict@gmail.com
            </div>
            <div className="flex gap-4 text-white ">
              <Typography
                as="a"
                href="#"
                className="opacity-80 transition-opacity hover:opacity-100 text-blue-300"
              >
                <img
                  className="h-8 w-8 object-cover object-center m-auto"
                  src={call}
                  alt="logo image"
                />
              </Typography>
              +255 765 345 345
            </div>
          </div>

          <div>
            <Typography
              variant="small"
              className="flex justify-start mb-4 font-bold  text-2xl text-white"
            >
              Follow us on social media
            </Typography>
            <div className="flex gap-4 text-blue-gray-900 ">
              <Typography
                as="a"
                href="#"
                className="opacity-80 transition-opacity hover:opacity-100 text-blue-300"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Typography>
              <Typography
                as="a"
                href="#"
                className="opacity-80 transition-opacity hover:opacity-100 text-red-300"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Typography>
              <Typography
                as="a"
                href="#"
                className="opacity-80 transition-opacity hover:opacity-100 text-blue-600"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Typography>
              <Typography
                as="a"
                href="https://tz.linkedin.com/company/uiss-udsm-ict-student-s-society"
                className="opacity-80 transition-opacity hover:opacity-100 text-blue-300"
              >
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <rect width="50" height="50" fill="url(#pattern0)" />
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_44_85"
                        transform="scale(0.00195312)"
                      />
                    </pattern>
                    <image
                      id="image0_44_85"
                      width="312"
                      height="212"
                      xlinkHref="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
              </Typography>
            </div>
          </div>
        </div>
        <div className="flex w-full  items-center justify-center border-t border-blue-gray-50 py-4 ">
          <Typography
            variant="small"
            className=" mb-4 text-center font-normal text-white md:mb-0"
          >
            All Rights Reserved &copy; {currentYear}{" "}
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
