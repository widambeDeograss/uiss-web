import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import logo from "../assets/img/UISS LOGO_VR 1.png";

export function Header() {
  const [openNav, setOpenNav] = React.useState(false);
  const [navState, setnavState] = React.useState(true);

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
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 font-roboto text-white">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-lg"
      >
        <a href="#" className="flex items-center text-white">
          HOME
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-lg"
      >
        <a href="#" className="flex items-center text-white">
        ABOUT
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-lg"
      >
        <a href="#" className="flex items-center text-white">
          PROJECTS
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-lg"
      >
        <a href="#" className="flex items-center text-white">
          EVENTS
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className=" bg-black ">
      <Navbar className="sticky top-0 z-10 h-44 max-w-full rounded-none border-0 py-2 px-4 lg:px-8 lg:py-4 bg-black">
        <div className="flex items-center justify-center  font-roboto text-white ">
          {navState && (
            <div className="flex items-center gap-8 ">
              <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal text-2xl"
              >
                <a href="#" className="flex items-center  text-[#FABD13]">
                  HOME
                </a>
              </Typography>
              <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal  text-2xl"
              >
                <a href="#" className="flex items-center text-white">
                  ABOUT
                </a>
              </Typography>
            </div>
          )}
          <img
            className="h-40 w-72 object-cover object-center"
            src={logo}
            alt="logo image"
          />
          {navState && (
            <div className="flex items-center gap-8 ">
              <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
              >
                <a href="#" className="flex items-center text-white  text-2xl">
                  EVENTS
                </a>
              </Typography>
              <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
              >
                <a href="#" className="flex items-center text-white  text-2xl">
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

        <MobileNav open={openNav}>{navList}</MobileNav>
      </Navbar>
   
    </div>
  );
}
