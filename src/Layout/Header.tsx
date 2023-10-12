import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import logo from "../assets/img/UISS LOGO_VR 1.png";
import { useNavigate,  useLocation } from "react-router-dom";

export function Header() {
  const [openNav, setOpenNav] = React.useState(false);
  const [navState, setnavState] = React.useState(window.innerWidth >= 960);
  const navigate = useNavigate()
    const { pathname } = useLocation();
    const page = pathname.replace("/", "");

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 960) {
        setnavState(true);
      } else if (window.innerWidth <= 960) {
        setnavState(false);
      }
    });
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:items-center lg:gap-6 font-roboto text-white bg-black p-8">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-lg hover:bg-yellow-100 "
        onClick={() =>  navigate("/")}
      >
        <a href="#" className="flex items-center text-white">
          HOME
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-lg hover:bg-yellow-100 "

        onClick={() =>  navigate("/about")}
      >
        <a href="#" className="flex items-center text-white">
        ABOUT
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-lg hover:bg-yellow-100 "
        onClick={() =>  navigate("/projects")}
      >
        <a href="#" className="flex items-center text-white">
          PROJECTS
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-lg hover:bg-yellow-100 "
        onClick={() =>  navigate("/events")}
      >
        <a href="#" className="flex items-center text-white">
          EVENTS
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className=" bg-black flex justify-center ">
      <Navbar className="sticky  top-0 z-10 h-32  rounded-none border-0 py-4 px-8 lg:h-44 lg:px-8 lg:py-4 bg-black">
        <div className="flex items-center justify-center  font-roboto text-white ">
          {navState && (
            <div className="flex items-center gap-8 ">
              <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal text-2xl"
                onClick={() =>  navigate("/")}

              >
                <a href="#" className="flex items-center  "
                   style={{
                       color: page === "" ? "#FABD13" : "",
                   }}
                >
                  HOME
                </a>
              </Typography>
              <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal  t"
                onClick={() =>  navigate("/about")}

              >
                <a href="#" className="flex items-center text-white text-2xl"
                   style={{
                       color: page === "about" ? "#FABD13" : "",
                   }}
                >
                  ABOUT
                </a>
              </Typography>
            </div>
          )}
          <img
            className="h-20 w-44 object-cover object-center lg:h-40 lg:w-72 cursor-pointer "
            src={logo}
            alt="logo image"
            onClick={() => navigate("/")}
          />
          {navState && (
            <div className="flex items-center gap-8 ">
              <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
                onClick={() =>  navigate("/events")}

              >
                <a href="#" className="flex items-center text-white  text-2xl"
                   style={{
                       color: page === "events" ? "#FABD13" : "",
                   }}
                >
                  EVENTS
                </a>
              </Typography>
              <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
                onClick={() =>  navigate("/projects")}

              >
                <a href="#" className="flex items-center text-white  text-2xl"
                   style={{
                       color: page === "projects" ? "#FABD13" : "",
                   }}
                >
                  PROJECTS
                </a>
              </Typography>
            </div>
          )}

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>

        <MobileNav open={openNav} >{navList}</MobileNav>
      </Navbar>

    </div>
  );
}
