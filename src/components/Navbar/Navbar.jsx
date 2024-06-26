import React from "react";
import NotificationBell from "../../assets/icons/notification.png";
import Chat from "../../assets/icons/chat.png";
import Bonus from "../../assets/icons/bonus.png";
import Setting from "../../assets/icons/setting.png";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../../assets/img/Logo copy.png";
import hamburgeIcon from "../../assets/img/hamburgermenu.png";
import profile from "../../assets/img/profile.jpeg";
import state from "../../proxyState/store";
import auth from "../../proxyState/auth";
import hamBurger from "../../assets/icons/arrowleft.svg";
import { useSnapshot } from "valtio";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Notification2, Notifications, ThemeMode } from "../SVGICONS/Icons";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { GoSignOut } from "react-icons/go";
import { CiMenuKebab } from "react-icons/ci";

const Navbar = ({ showSideBare }) => {
  const authCtx = useSnapshot(auth);
  const [showSideBar, setShowSideBar] = useState(false);

  const widgets = [
    {
      dotCounter: 2,
      counterColor: "#EA7A9A",
      icon: Chat,
    },
    // {
    //   dotCounter: 3,
    //   counterColor: "#3E4954",
    //   icon: Bonus,
    // },
    {
      dotCounter: "!",
      counterColor: "#FF6D4D",
      icon: Setting,
    },
  ];
  // const mobiwidgets = [
  //   {
  //     dotCounter: 1,
  //     counterColor: "#EA7A9A",
  //     icon: NotificationBell,
  //   },

  //   {
  //     dotCounter: 3,
  //     counterColor: "#3E4954",
  //     icon: Bonus,
  //   },
  // ];
  const [showUserModal, setShowUserModal] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const windowWidth = `${window.screen.width}px`; // Get the width of the window screen

  const styleWidth = `w-[${windowWidth}]`; // Construct Tailwind CSS class for width
  console.log(showSideBar);
  return (
    <div
      className={`fixed top-0 w-[100vw] ${
        showSideBare ? "lg:w-[83vw]" : "lg:w-[94vw]"
      }  z-[10] bg-white`}
    >
      <nav className="flex   p-4   rounded-md shadow-md justify-between items-center  lg:grid lg:grid-cols-[4fr_1fr]">
        <div className="lg:hidden">
          <div className="flex items-center">
            <div className="mr-2">
              <img className="w-12" src={logo} alt={"logo"} />
            </div>
            <div
              className="-mt-8"
              onClick={() => {
                state.mobileSidebar = !state.mobileSidebar;
                setShowSideBar(!showSideBar);
              }}
            >
              <div
                className={` px-3 flex  rounded-full  justify-center translate-y-4`}
              >
                <img
                  src={hamBurger}
                  alt={"hamburger-Icn"}
                  className={`${showSideBar ? "rotate-0 " : "rotate-180"}`}
                />
                <img
                  src={hamBurger}
                  alt={"hamburger-Icn"}
                  className={`${showSideBar ? "rotate-0 " : "rotate-180"}`}
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:flex justify-between items-center">
          <div className="lg:flex items-center ml-2 hidden  w-full">
            <h2
              className={`font-[600] text-[#00261C] text-2xl mr-12 font-primary`}
            >
              Hello Admin
            </h2>

            <div className="relative">
              <div
                className=" cursor-pointer shadow-md p-5 rounded-md"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <Notification2 color="#000" size="30" />
              </div>

              {showNotifications && (
                <div className=" top-20 -left-20 absolute   bg-white shadow-2xl p-3 px-4 rounded-md w-[300px] md:w-[450px]  z-[200] h-[300px] overflow-y-auto ">
                  <h1 className="text-xl font-semibold text-center mb-3">
                    Notification
                  </h1>
                  <div className="flex items-center justify-between gap-7 text-justify">
                    <div className="flex flex-col">
                      <div className="flex gap-2">
                        <img
                          src={profile}
                          alt=""
                          className="w-12 rounded-full h-12 object-contain"
                        />
                        <span className="text-gray-500">
                          <span className="text-black font-semibold">
                            David Astol ,
                          </span>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Sapiente fugiat, aperiam quam in culpa at.
                        </span>
                      </div>
                      <div className="block ml-14 text-gray-300">Just Now</div>
                    </div>
                    <div className="block">
                      <CiMenuKebab className="text-2xl" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-7 text-justify">
                    <div className="flex flex-col">
                      <div className="flex gap-2">
                        <img
                          src={profile}
                          alt=""
                          className="w-12 rounded-full h-12 object-contain"
                        />
                        <span className="text-gray-500">
                          <span className="text-black font-semibold">
                            David Astol ,
                          </span>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Sapiente fugiat, aperiam quam in culpa at.
                        </span>
                      </div>
                      <div className="block ml-14 text-gray-300">Just Now</div>
                    </div>
                    <div className="block">
                      <CiMenuKebab className="text-2xl" />
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center ml-4 space-x-2 bg-white p-4 rounded-lg shadow-md ">
              <div className="flex space-x-4 items-center ">
                <img
                  src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
                  alt="usa-flag"
                  className=" rounded-full w-8 h-8"
                />
                <div className=" font-medium">US</div>
              </div>
              <div>
                <IoIosArrowDown className=" text-gray-500 font-semibold text-lg" />
              </div>
              <div></div>
            </div>
          </div>

          <div></div>
        </div>
        <div className="flex justify-end ">
          {/* <div className="sm:hidden flex mr-4">
            {mobiwidgets.map((widget, index) => {
              return (
                <div key={index} className="lg:ml-8 mx-2 ">
                  <img src={widget.icon} alt={"widgets"} />
                </div>
              );
            })}
          </div> */}
          <div className="lg:hidden hidden sm:flex mr-4">
            {widgets.map((widget, index) => {
              return (
                <div key={index} className="lg:ml-8 mx-2 ">
                  <img src={widget.icon} alt={"widgets"} />
                </div>
              );
            })}
          </div>
          <div className="mx-4 mt-1">
            <ThemeMode color="#000000" size={30} />
          </div>
          <div
            onClick={() => {
              setShowUserModal(!showUserModal);
            }}
            className=" cursor-pointer flex"
          >
            <div className="flex space-x-2 items-center">
              <div className=" font-primary font-semibold text-[#00261C]">
                Alex Hales
              </div>
              <img
                src={authCtx.user.image ? authCtx.user.image : profile}
                alt="user-img"
                className=" aspect-square w-8 h-8 lg:w-10 lg:h-10 rounded-full object-cover object-center"
              />
            </div>
            <div className="hidden lg:block "></div>
            <div className="relative font-primary">
              <div
                id="userDropDown"
                className={`z-[200] -left-[8.5rem] sm:-left-[11rem] top-12 md:top-14  absolute bg-white rounded-lg   border-[1px] border-gray-300 w-36 sm:w-44 md:w-42 ${
                  showUserModal ? "" : "hidden"
                }`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 "
                  aria-labelledby="dropdownUserAvatarButton"
                >
                  <li
                    className="flex space-x-2 items-center ml-4"
                    onClick={() => {
                      setShowUserModal(!showUserModal);
                    }}
                  >
                    <div>
                      <FaRegCircleUser className="text-2xl hover:text-primary" />
                    </div>
                    <Link
                      to="/settings"
                      className=" px-4 py-2  hover:text-buttonPrimary text-[#00261C] text-[12px]"
                    >
                      Profile
                    </Link>
                  </li>
                  <li
                    className="flex space-x-2 items-center ml-4"
                    onClick={() => {
                      setShowUserModal(!showUserModal);
                    }}
                  >
                    <div>
                      <MdOutlineFileDownload className="text-2xl hover:text-primary" />
                    </div>
                    <Link
                      to="/"
                      className=" px-4 py-2  hover:text-buttonPrimary text-[#00261C] text-[12px]"
                    >
                      Download Stats
                    </Link>
                  </li>
                  <li
                    className="flex space-x-2 items-center ml-4"
                    onClick={() => {
                      setShowUserModal(!showUserModal);
                    }}
                  >
                    <div>
                      <GoSignOut className="text-2xl hover:text-primary" />
                    </div>
                    <Link
                      to="/"
                      className=" px-4 py-2  hover:text-buttonPrimary text-[#00261C] text-[12px]"
                    >
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
