import React, { useState } from "react";
import { FaCar, FaChevronDown, FaUser, FaSearch } from "react-icons/fa";
// import Avatar from "../../assets/img/profile.jpeg";
import Email from "../../assets/img/Email.png";
import Email1 from "../../assets/img/Email1.png";
import Image from "../../assets/img/im.png";
import Zoom from "../../assets/img/zoom.svg";
import NewNotification from "../NewNotification/NewNotification";
import Avatar from "../../assets/img/Avatar.png";
import { FaLocationArrow, FaPlus } from "react-icons/fa6";
import { Filter } from "../SVGICONS/Icons";
const Notification = () => {
  const [current, setCurrent] = useState(1);
  const [notificationFlag, setNotificationFlag] = useState(false);
  const [promotionFlag, setPromotionFlag] = useState(false);
  return (
    <div className="p-7 flex flex-col bg-[#F9F9F9] min-h-[800px] font-primary">
      {current === 1 && notificationFlag && (
        <NewNotification setTrigger={setNotificationFlag}>
          <h1 className="text-xl font-semibold">Create New Notification</h1>
          <form action="" className="flex flex-col w-full gap-3">
            <label htmlFor="select" className="text-primary font-bold">
              Select Audience:
            </label>
            <div className="flex gap-3 flex-col md:flex-row">
              <div className="flex px-3 py-2 bg-gray-100 rounded-3xl border-2 border-solid border-primary gap-2 items-center justify-between flex-1">
                <FaCar />
                <span>Driver</span>
                <input type="radio" name="audience" id="driver" />
              </div>
              <div className="flex px-3 py-2 bg-gray-100 rounded-3xl border-2 border-solid border-primary gap-2 items-center justify-between flex-1">
                <FaUser />
                <span>Users</span>
                <input type="radio" name="audience" id="user" />
              </div>
              <div className="flex px-3 py-2 bg-gray-100 rounded-3xl border-2 border-solid border-primary gap-2 items-center justify-between flex-1">
                <FaUser />
                <span>Everyone</span>
                <input type="radio" name="audience" id="everyone" />
              </div>
            </div>
            <label className="flex flex-col ">
              <div className="flex justify-between items-center">
                <span className="text-primary font-bold">
                  Upload Image:(Optional)
                </span>
                <div className="bg-primary p-2 rounded-full text-white">
                  <FaPlus />
                </div>
              </div>
              <span className="text-primary font-semibold text-xs">
                Image size upto 5MB
              </span>
              <div className=" overflow-hidden rounded-md relative cursor-pointer w-[327px] h-[124px] flex items-center justify-center border border-primary border-solid mx-auto">
                <img src={Image} alt="" className="w-[55px] h-[55px] " />
                <img
                  src={Zoom}
                  alt=""
                  className="absolute bottom-1 right-1"
                  onClick={() => setShowImagePopup(true)}
                />
              </div>
            </label>
            <div className="flex items-center justify-between">
              <label className="text-primary font-bold">
                Schedule For Later
              </label>
              <input type="radio" name="schedule" id="" />
            </div>
            <label htmlFor="date" className="text-primary font-bold">
              Choose Date and Time
            </label>
            <input
              type="datetime-local"
              name="date"
              id="date"
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            />
            <label htmlFor="title" className="text-primary font-bold">
              Notification Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            />
            <label htmlFor="desc" className="text-primary font-bold">
              Notification Description
            </label>
            <textarea
              className="resize-none border rounded-md p-2 w-full h-32 focus:outline-none focus:ring-primary focus:border-primary"
              placeholder="Enter your text here"
            ></textarea>
            <div className="flex gap-6">
              <button
                className="flex-1 border-2 border-primary text-primary py-2 px-3 rounded-md  font-semibold"
                onClick={() => setTrigger(false)}
              >
                Draft
              </button>
              <button className="flex-1 bg-primary py-2 px-3 rounded-md text-white shadow-custom font-semibold">
                Schedule
              </button>
            </div>
          </form>
        </NewNotification>
      )}
      {current === 2 && promotionFlag && (
        <NewNotification setTrigger={setPromotionFlag}>
          <h1 className="text-xl font-semibold">Create New Promotion</h1>
          <form action="" className="flex flex-col w-full gap-3">
            <label htmlFor="select" className="text-primary font-bold">
              Select Audience:
            </label>
            <div className="flex gap-3 flex-col md:flex-row">
              <div className="flex px-3 py-2 bg-gray-100 rounded-3xl border-2 border-solid border-primary gap-2 items-center justify-between flex-1">
                <FaCar />
                <span>Driver</span>
                <input type="radio" name="audience" id="driver" />
              </div>
              <div className="flex px-3 py-2 bg-gray-100 rounded-3xl border-2 border-solid border-primary gap-2 items-center justify-between flex-1">
                <FaUser />
                <span>Users</span>
                <input type="radio" name="audience" id="user" />
              </div>
              <div className="flex px-3 py-2 bg-gray-100 rounded-3xl border-2 border-solid border-primary gap-2 items-center justify-between flex-1">
                <FaUser />
                <span>Everyone</span>
                <input type="radio" name="audience" id="everyone" />
              </div>
            </div>
            <label className="flex flex-col ">
              <span className="text-primary font-bold">
                Upload Image:(Optional)
              </span>
              <span className="text-primary font-semibold text-xs">
                Image size upto 5MB
              </span>
              <div className=" overflow-hidden rounded-md relative cursor-pointer w-[327px] h-[124px] flex items-center justify-center border border-primary border-solid mx-auto">
                <img src={Image} alt="" className="w-[55px] h-[55px] " />
                <img
                  src={Zoom}
                  alt=""
                  className="absolute bottom-1 right-1"
                  onClick={() => setShowImagePopup(true)}
                />
              </div>
            </label>
            <div className="flex items-center justify-between">
              <label className="text-primary font-bold">
                Schedule For Later
              </label>
              <input type="radio" name="schedule" id="" />
            </div>
            <label htmlFor="date" className="text-primary font-bold">
              Choose Date and Time
            </label>
            <input
              type="datetime-local"
              name="date"
              id="date"
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            />
            <label htmlFor="title" className="text-primary font-bold">
              Notification Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            />
            <label htmlFor="desc" className="text-primary font-bold">
              Notification Description
            </label>
            <textarea
              className="resize-none border rounded-md p-2 w-full h-32 focus:outline-none focus:ring-primary focus:border-primary"
              placeholder="Enter your text here"
            ></textarea>
            <div className="flex gap-6">
              <button
                className="flex-1 border-2 border-primary text-primary py-2 px-3 rounded-md  font-semibold"
                onClick={() => setTrigger(false)}
              >
                Draft
              </button>
              <button className="flex-1 bg-primary py-2 px-3 rounded-md text-white shadow-custom font-semibold">
                Schedule
              </button>
            </div>
          </form>
        </NewNotification>
      )}
      {current === 1 && (
        <div className="flex justify-between gap-12 flex-col md:flex-row">
          <div className="flex flex-col flex-1">
            <div className="flex gap-10">
              <h1
                onClick={() => setCurrent(1)}
                className={`text-[21px] font-[700] ${
                  current === 1
                    ? "underline-offset-[10px] decoration-primary decoration-[4px] underline"
                    : "text-[#AFAFAF]"
                } cursor-pointer`}
              >
                Notification
              </h1>
              <h1
                onClick={() => setCurrent(2)}
                className={`text-[21px] font-[700] ${
                  current === 2
                    ? " underline-offset-[10px] decoration-primary decoration-[4px] underline"
                    : "text-[#AFAFAF]"
                } cursor-pointer`}
              >
                Promotion
              </h1>
            </div>
            <div className="flex flex-col mt-4 bg-white rounded-sm p-4 gap-7">
              <div className="flex flex-col md:flex-row bg-white items-center opacity-80 shadow-custom p-3 rounded-md gap-2">
                <div className="flex flex-1 border border-1 border-gray-300 bg-white items-center opacity-80 p-3 rounded-md gap-2">
                  <FaSearch className="text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent outline-none flex-1"
                  />
                </div>
                <div className="flex gap-2 items-center">
                  <Filter />
                  Sort By:
                  <span className="text-primary">Latest</span>
                  <FaChevronDown />
                </div>
              </div>
              <div className="flex flex-col md:flex-row border border-1 border-solid border-gray-300 rounded-md p-3 justify-between gap-2">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col md:flex-row items-center gap-3">
                    <img
                      src={Avatar}
                      alt=""
                      className="w-10 h-10 rounded-full object-cover bg-center"
                    />
                    <span className="font-[500] text-[14px]">Admin.xyz</span>
                    <button className="bg-primary px-6 rounded-3xl text-white ">
                      Active
                    </button>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-around md:justify-between">
                      <h1 className="text-[18px] font-[700] font-primary">
                        Admin
                      </h1>
                      <div className="flex gap-2 items-center text-blue-400">
                        <FaCar />
                        <span>Driver</span>
                      </div>
                    </div>
                    <p className="text-center md:text-left">
                      Get 50% discount on all rides this christmas Eve
                    </p>
                    <p className="text-xs opacity-75 text-center md:text-left">
                      10 mins ago
                    </p>
                  </div>
                </div>
                <button className="bg-primary px-10 py-1 rounded-xl text-white  md:self-start self-center">
                  Delete
                </button>
              </div>
              <div className="flex flex-col md:flex-row border border-1 border-solid border-gray-300 rounded-md p-3 justify-between gap-2">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col md:flex-row items-center gap-3">
                    <img
                      src={Avatar}
                      alt=""
                      className="w-10 h-10 rounded-full object-cover bg-center"
                    />
                    <span className="font-[500] text-[14px]">Admin.xyz</span>
                    <button className="bg-white px-4 rounded-3xl text-primary border border-1 border-primary">
                      Scheduled
                    </button>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-around md:justify-between">
                      <h1 className="text-[18px] font-[700] font-primary">
                        Admin
                      </h1>
                      <div className="flex gap-2 items-center text-blue-400">
                        <FaCar />
                        <span>Driver</span>
                      </div>
                    </div>
                    <p className="text-center md:text-left">
                      Get 50% discount on all rides this christmas Eve
                    </p>
                    <p className="text-xs opacity-75 text-center md:text-left">
                      10 mins ago
                    </p>
                  </div>
                </div>
                <button className="bg-primary px-10 py-1 rounded-xl text-white  md:self-start self-center">
                  Delete
                </button>
              </div>
              <div className="flex flex-col md:flex-row border border-1 border-solid border-gray-300 rounded-md p-3 justify-between gap-2">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col md:flex-row items-center gap-3">
                    <img
                      src={Avatar}
                      alt=""
                      className="w-10 h-10 rounded-full object-cover bg-center"
                    />
                    <span className="font-[500] text-[14px]">Admin.xyz</span>
                    <button className="bg-white px-4  rounded-3xl text-primary border border-1 border-primary">
                      Scheduled
                    </button>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-around md:justify-between">
                      <h1 className="text-[18px] font-[700] font-primary">
                        Admin
                      </h1>
                      <div className="flex gap-2 items-center text-blue-400">
                        <FaCar />
                        <span>Driver</span>
                      </div>
                    </div>
                    <p className="text-center md:text-left">
                      Get 50% discount on all rides this christmas Eve
                    </p>
                    <p className="text-xs opacity-75 text-center md:text-left">
                      10 mins ago
                    </p>
                  </div>
                </div>
                <button className="bg-primary px-10 py-1 rounded-xl text-white  md:self-start self-center">
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col bg-primary rounded-md text-white py-3 px-4 relative gap-3">
              <FaLocationArrow className="absolute top-5 right-8 text-[40px] rotate-[65deg]" />
              <h1 className="text-3xl font-bold">
                Create New <br /> Notification
              </h1>
              <p>Alert your Drivers or Users Now</p>
              <button
                className="self-end text-primary bg-white px-7 py-1 rounded-md"
                onClick={() => setNotificationFlag(true)}
              >
                <FaPlus className="text-2xl" />
              </button>
            </div>
            <div className="flex justify-around items-center">
              <h1 className="text-[18px] font-[1000] underline-offset-[10px] decoration-primary decoration-[4px] underline">
                Drafts
              </h1>
              <h1 className="text-[18px] font-[1000]">Scheduled</h1>
            </div>
            <div className="flex flex-col md-1150:flex-row bg-white shadow-custom rounded-md p-3 justify-between gap-2">
              <div className="flex flex-col gap-3">
                <div className="flex flex-col md:flex-row items-center gap-3">
                  <img
                    src={Avatar}
                    alt=""
                    className="w-10 h-10 rounded-full object-cover bg-center"
                  />
                  <div className="flex flex-col">
                    <h1 className="text-base font-[600] font-primary">Admin</h1>
                    <p>60 Rides</p>
                  </div>
                  <div className="flex gap-2 items-center text-blue-400">
                    <FaCar />
                    <span>Driver</span>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-center md:text-left">
                    Get 50% discount on all rides this christmas Eve
                  </p>
                  <p className="text-xs opacity-75 text-center md:text-left">
                    10 mins ago
                  </p>
                </div>
              </div>
              <button className="bg-white px-6 py-1 rounded-md text-primary border border-1 border-primary md:self-start self-center">
                Draft
              </button>
            </div>
            <div className="flex flex-col md-1150:flex-row bg-white shadow-custom rounded-md p-3 justify-between gap-2">
              <div className="flex flex-col gap-3">
                <div className="flex flex-col md:flex-row items-center gap-3">
                  <img
                    src={Avatar}
                    alt=""
                    className="w-10 h-10 rounded-full object-cover bg-center"
                  />
                  <div className="flex flex-col">
                    <h1 className="text-base font-[600] font-primary">Admin</h1>
                    <p>60 Rides</p>
                  </div>
                  <div className="flex gap-2 items-center text-blue-400">
                    <FaCar />
                    <span>Driver</span>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-center md:text-left">
                    Get 50% discount on all rides this christmas Eve
                  </p>
                  <p className="text-xs opacity-75 text-center md:text-left">
                    10 mins ago
                  </p>
                </div>
              </div>
              <button className="bg-white px-6 py-1 rounded-md text-primary border border-1 border-primary md:self-start self-center">
                Draft
              </button>
            </div>
          </div>
        </div>
      )}
      {current === 2 && (
        <div className="flex justify-between gap-12 flex-col md:flex-row">
          <div className="flex flex-col flex-1">
            <div className="flex gap-10">
              <h1
                onClick={() => setCurrent(1)}
                className={`text-[21px] font-[700] ${
                  current === 1 ? "" : "text-[#AFAFAF]"
                } cursor-pointer`}
              >
                Notification
              </h1>
              <h1
                onClick={() => setCurrent(2)}
                className={`text-[21px] font-[700] ${
                  current === 2
                    ? " underline-offset-[10px] decoration-primary decoration-[4px] underline"
                    : "text-[#AFAFAF]"
                } cursor-pointer`}
              >
                Promotion
              </h1>
            </div>
            <div className="flex flex-col mt-4 bg-white rounded-sm p-4 gap-7">
              <div className="flex flex-col md:flex-row bg-white items-center opacity-80 shadow-custom p-3 rounded-md gap-2">
                <div className="flex flex-1 border border-1 border-gray-300 bg-white items-center opacity-80 p-3 rounded-md gap-2">
                  <FaSearch className="text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent outline-none flex-1"
                  />
                </div>
                <div className="flex gap-2 items-center">
                  <Filter />
                  Sort By:
                  <span className="text-primary">Latest</span>
                  <FaChevronDown />
                </div>
              </div>
              <div className="flex flex-col md:flex-row border border-1 border-solid border-gray-300 rounded-md p-3 justify-between gap-2">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col md:flex-row items-center gap-3">
                    <img
                      src={Avatar}
                      alt=""
                      className="w-10 h-10 rounded-full object-cover bg-center"
                    />
                    <span className="font-[500] text-[14px]">Admin.xyz</span>
                    <button className="bg-primary px-6 rounded-3xl text-white ">
                      Active
                    </button>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-around md:justify-between">
                      <h1 className="text-[18px] font-[700] font-primary">
                        Admin
                      </h1>
                      <div className="flex gap-2 items-center text-blue-400">
                        <FaCar />
                        <span>Driver</span>
                      </div>
                    </div>
                    <p className="text-center md:text-left">
                      Get 50% discount on all rides this christmas Eve
                    </p>
                    <p className="text-xs opacity-75 text-center md:text-left">
                      10 mins ago
                    </p>
                  </div>
                </div>
                <button className="bg-primary px-10 py-1 rounded-xl text-white  md:self-start self-center">
                  Delete
                </button>
              </div>
              <div className="flex flex-col md:flex-row border border-1 border-solid border-gray-300 rounded-md p-3 justify-between gap-2">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col md:flex-row items-center gap-3">
                    <img
                      src={Avatar}
                      alt=""
                      className="w-10 h-10 rounded-full object-cover bg-center"
                    />
                    <span className="font-[500] text-[14px]">Admin.xyz</span>
                    <button className="bg-white px-4  rounded-3xl text-primary border border-1 border-primary">
                      Scheduled
                    </button>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-around md:justify-between">
                      <h1 className="text-[18px] font-[700] font-primary">
                        Admin
                      </h1>
                      <div className="flex gap-2 items-center text-blue-400">
                        <FaCar />
                        <span>Driver</span>
                      </div>
                    </div>
                    <p className="text-center md:text-left">
                      Get 50% discount on all rides this christmas Eve
                    </p>
                    <p className="text-xs opacity-75 text-center md:text-left">
                      10 mins ago
                    </p>
                  </div>
                </div>
                <button className="bg-primary px-10 py-1 rounded-xl text-white  md:self-start self-center">
                  Delete
                </button>
              </div>
              <div className="flex flex-col md:flex-row border border-1 border-solid border-gray-300 rounded-md p-3 justify-between gap-2">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col md:flex-row items-center gap-3">
                    <img
                      src={Avatar}
                      alt=""
                      className="w-10 h-10 rounded-full object-cover bg-center"
                    />
                    <span className="font-[500] text-[14px]">Admin.xyz</span>
                    <button className="bg-white px-4 rounded-3xl text-primary border border-1 border-primary">
                      Scheduled
                    </button>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-around md:justify-between">
                      <h1 className="text-[18px] font-[700] font-primary">
                        Admin
                      </h1>
                      <div className="flex gap-2 items-center text-blue-400">
                        <FaCar />
                        <span>Driver</span>
                      </div>
                    </div>
                    <p className="text-center md:text-left">
                      Get 50% discount on all rides this christmas Eve
                    </p>
                    <p className="text-xs opacity-75 text-center md:text-left">
                      10 mins ago
                    </p>
                  </div>
                </div>
                <button className="bg-primary px-10 py-1 rounded-xl text-white  md:self-start self-center">
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            {/* <div className="relative">
              <img src={Email1} alt="" className="w-full" />
              <
                onClick={() => setPromotionFlag(true)}
                className="absolute bottom-5 right-10 text-3xl text-white cursor-pointer"
              />
            </div> */}
            <div className="flex flex-col bg-primary rounded-md text-white py-3 px-4 relative gap-3">
              <FaLocationArrow className="absolute top-5 right-8 text-[40px] rotate-[65deg]" />
              <h1 className="text-3xl font-bold">
                Create New <br /> Promotion
              </h1>
              <p>Reward user and drivers to get more orders</p>
              <button
                className="self-end text-primary bg-white px-7 py-1 rounded-md"
                onClick={() => setPromotionFlag(true)}
              >
                <FaPlus className="text-2xl" />
              </button>
            </div>
            <div className="flex justify-around items-center">
              <h1 className="text-[18px] font-[1000]  underline-offset-[10px] decoration-primary decoration-[4px] underline">
                Drafts
              </h1>
              <h1 className="text-[18px] font-[1000]">Scheduled</h1>
            </div>
            <div className="flex flex-col md-1150:flex-row bg-white shadow-custom rounded-md p-3 justify-between gap-2">
              <div className="flex flex-col gap-3">
                <div className="flex flex-col md:flex-row items-center gap-3">
                  <img
                    src={Avatar}
                    alt=""
                    className="w-10 h-10 rounded-full object-cover bg-center"
                  />
                  <div className="flex flex-col">
                    <h1 className="text-base font-[600] font-primary">Admin</h1>
                    <p>60 Rides</p>
                  </div>
                  <div className="flex gap-2 items-center text-blue-400">
                    <FaCar />
                    <span>Driver</span>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-center md:text-left">
                    Get 50% discount on all rides this christmas Eve
                  </p>
                  <p className="text-xs opacity-75 text-center md:text-left">
                    10 mins ago
                  </p>
                </div>
              </div>
              <button className="bg-white px-6 py-1 rounded-md text-primary border border-1 border-primary md:self-start self-center">
                Draft
              </button>
            </div>
            <div className="flex flex-col md-1150:flex-row bg-white shadow-custom rounded-md p-3 justify-between gap-2">
              <div className="flex flex-col gap-3">
                <div className="flex flex-col md:flex-row items-center gap-3">
                  <img
                    src={Avatar}
                    alt=""
                    className="w-10 h-10 rounded-full object-cover bg-center"
                  />
                  <div className="flex flex-col">
                    <h1 className="text-base font-[600] font-primary">Admin</h1>
                    <p>60 Rides</p>
                  </div>
                  <div className="flex gap-2 items-center text-blue-400">
                    <FaCar />
                    <span>Driver</span>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-center md:text-left">
                    Get 50% discount on all rides this christmas Eve
                  </p>
                  <p className="text-xs opacity-75 text-center md:text-left">
                    10 mins ago
                  </p>
                </div>
              </div>
              <button className="bg-white px-6 py-1 rounded-md text-primary border border-1 border-primary md:self-start self-center">
                Draft
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;
