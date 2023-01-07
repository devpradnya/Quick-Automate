import React from "react";
import { FaCompactDisc, FaAccusoft } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import {
  MdSettingsVoice,
  MdPeopleAlt,
  MdOutlineAttachMoney,
  MdSignalWifi0Bar,
  MdSchedule,
} from "react-icons/md";

export const FeaturesData = [
  {
    id: 1,
    icon: <FaCompactDisc />,
    feature: "RETROFIT & COMPACT",
    describe:
      "They’re so small, they disappear behind any switchboard hasslefree.",
  },
  {
    id: 2,
    icon: <AiOutlineGlobal />,
    feature: "GLOBAL ACCESSIBILITY",
    describe:
      "Access your smart devices from anywhere over 2G/3G/4G networks or any local Wi-Fi connection.",
  },
  {
    id: 3,
    icon: <MdSettingsVoice />,
    feature: "VOICE ASSISTANT COMPATIBLE",
    describe:
      "Compatible with voice assistants like Amazon Alexa, Google Home and Google Assistant.",
  },
  {
    id: 4,
    icon: <MdPeopleAlt />,
    feature: "MULTIPLE USERS SUPPORT",
    describe:
      "Get a best discounted price according to your requirement/Package",
  },
  {
    id: 5,
    icon: <MdOutlineAttachMoney />,
    feature: "NO EXTRA COST ON HUB",
    describe:
      "No extra hub/controller, works seamlessly on your existing Wi-Fi router.",
  },
  {
    id: 6,
    icon: <MdSignalWifi0Bar />,
    feature: "WORKS LOCALLY W/O INTERNET",
    describe:
      "It works locally without interruption even when your internet is down.",
  },
  {
    id: 7,
    icon: <MdSchedule />,
    feature: "SCHEDULING",
    describe:
      "Automate specific tasks to be performed at a desired time, date, duration or on a loop.",
  },
  {
    id: 8,
    icon: <FaAccusoft />,
    feature: "GROUPING AND SCENES",
    describe:
      "Group multiple smart devices and also have preset scenes to trigger them simultaneously.",
  },
];
