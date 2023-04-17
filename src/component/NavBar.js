import { Link, useLocation } from "react-router-dom";
import { IoFlagOutline } from "react-icons/io5";
import { SiOpenaccess } from "react-icons/si";
import { BsCart2 } from "react-icons/bs";
import {
  TbBuildingWarehouse,
  TbUsers,
  TbChartLine,
  TbChartBar,
  TbBriefcase,
  TbSettings,
} from "react-icons/tb";

const NavBar = () => {
const location = useLocation();

  const Menus = [
    { title: "Dashboard", path: "/", src: <TbChartLine /> },
    { title: "Products", path: "/soon", src: <TbBuildingWarehouse /> },
    { title: "Blog", path: "/soon", src: <BsCart2 /> },
    {
      title: "Transactions",
      path: "/soon",
      src: <SiOpenaccess />,
    },
    { title: "Users", path: "/soon", src: <TbUsers /> },
    { title: "Analysis", path: "/soon", src: <TbChartBar /> },
    { title: "Reports", path: "/soon", src: <IoFlagOutline /> },
    { title: "Investment", path: "/soon", src: <TbBriefcase /> },
    { title: "Settings", path: "/soon", src: <TbSettings /> },
  ];

  return (
    <>
      <div
        className={
           "w-fit hidden sm:block relative w-80 h-screen duration-300 p-5 bg-white border-gray-200 dark:border-gray-600"}
      >
        <Link to="/">
          <span className="text-4xl font-bold  font-heleveth tracking-tight  text-sky-700 whitespace-nowrap">
            RETRO
          </span>
        </Link>

        <ul className="pt-6 gap-2 flex flex-col">
          {Menus.map((menu, index) => (
            <Link to={menu.path} key={index}>
              <li
                className={`flex items-center gap-x-3 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700
                        ${
                          location.pathname === menu.path &&
                          "bg-whitishblue text-sharpblue dark:bg-sky-200"
                        }`}
              >
                <span className="text-lg text-gray-400">{menu.src}</span>
                <span
                  className={`font-medium text-base  ${
                    location.pathname === menu.path
                      ? " text-sharpblue"
                      : "text-gray-400"
                  } origin-left duration-300 hover:block`}
                >
                  {menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavBar;
