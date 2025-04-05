import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { SiPlanet } from "react-icons/si";
import { BiSolidReport, BiLogOut } from "react-icons/bi";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlineFoodBank } from "react-icons/md";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { BiSolidPhoneCall } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import { FaAward } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../assets/logo.png";
import { navigations } from "../ChatBot/dummy";
const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [subjectName, setSubjectName] = useState(1);
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <div className="py-6 px-4 w-[20vw] h-screen shadow-lg">
      <ToastContainer />
      <div className="flex items-center">
        <h1 className="text-2xl text-teal-500 font-bold">Olivia</h1>
        <img src={logo} className="w-12 h-12 ml-2" />
      </div>
      <div className="mt-8">
        <div>
          {navigations.map((nav) => (
            <div
              className={`flex flex-row items-center py-4 px-2 rounded-md cursor-pointer ${
                subjectName === nav.id ? "bg-teal-100" : ""
              } `}
              key={nav.id}
              onClick={() => {
                setSubjectName(nav.id);
                navigate("/" + nav.id);
              }}
            >
              <h1
                className={`text-lg ml-2  ${
                  subjectName === nav.id
                    ? "text-teal-800 font-semibold"
                    : "text-gray-700"
                }`}
              >
                {nav.name}
              </h1>
            </div>
          ))}
        </div>
        <button onClick={() => logout()}>
          <div className="flex flex-row items-center py-4 px-2 rounded-md text-red-500">
            <BiLogOut size={25} className="text-red-500" />
            <h1 className="text-lg ml-2 text-red-500">Logout</h1>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
