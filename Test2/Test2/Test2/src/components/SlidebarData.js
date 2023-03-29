import React from "react";

import * as FaIcons from "react-icons/fa";
import * as RiDashboardFill from "react-icons/ri";
import * as IoIcons from "react-icons/io";
import * as AiOutlineSwap from "react-icons/ai";
import * as BsCalculator from "react-icons/bs";
import * as FaQuestionCircle from "react-icons/fa";
import * as MdFilterList from "react-icons/md";
import * as GiEarthAmerica from "react-icons/gi";
import * as FaHashtag from "react-icons/fa";
import * as MdAccountBalanceWallet from "react-icons/md"


export const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <RiDashboardFill.RiDashboardFill />,
    cName: "nav-text"
  },

  {
    title: "Calculator",
    path: "/calculator",
    icon: <BsCalculator.BsCalendar />,
    cName: "nav-text"
  },
  {
    title: "Swap",
    path: "/swap",
    icon: <AiOutlineSwap.AiOutlineSwap />,
    cName: "nav-text"
  },
  {
    title: "To Do List",
    path: "/todolist",
    icon: <MdFilterList.MdFilterList />,
    cName: "nav-text"
  },
  {
    title: "FAQ",
    path: "/faq",
    icon: <FaQuestionCircle.FaQuestionCircle />,
    cName: "nav-text"
  },
 {
  title: "LINKS",
  cName: "link",
 },

  {
    title: "Socials",
    // path: "/",
    icon: <FaHashtag.FaHashtag />,
    cName: "nav-text1"
  },
  {
    title: "Website",
    // path: "/",
    icon: <GiEarthAmerica.GiEarthAmerica />,
    cName: "nav-text1"
  },
  {
    title: "Buy Now",
    // path: "/",
    icon: <MdAccountBalanceWallet.MdAccountBalanceWallet />,
    cName: "nav-text1"
  },


];
