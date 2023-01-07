import React from "react";
import { AiOutlineWifi, AiOutlineSetting } from "react-icons/ai";
import { BsLayers } from "react-icons/bs";

export const KeyFeaturesData = [
  {
    id: 1,
    icon: <AiOutlineWifi  size={55} />,
    feature: "Wireless ",
    description:
      "Quick Automate Switch Controllers require no additional hardware to connect to Wi-Fi and can be controlled using voice and apps from anywhere.",
  },
  {
    id: 2,
    icon: <AiOutlineSetting size={55} />,
    feature: "Easy to install ",
    description:
      "Ergonomic design allows installation behind the switchboard keeping your existing switches operational.",
  },
  {
    id: 3,
    icon: <BsLayers size={55} />,
    feature: "Compact Design",
    description:
      "With a thickness of just 15mm, these powerful devices come are engineered to have the maximum possible compatibility.",
  },
];
