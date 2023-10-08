import {
  PiNumberCircleOneBold,
  PiNumberCircleTwoBold,
  PiNumberCircleThreeBold,
  PiNumberCircleFourBold,
  PiNumberCircleEightBold,
} from "react-icons/pi";

export const items = [
  {
    name: "lancelot",
    type: "burger",
    specs: [
      {
        id: "1",
        serving: "simple",
        price: "2400",
        icon: PiNumberCircleOneBold,
      },
      { id: "2", serving: "doble", price: "2800", icon: PiNumberCircleTwoBold },
      {
        id: "3",
        serving: "triple",
        price: "3100",
        icon: PiNumberCircleThreeBold,
      },
    ],
  },
  {
    name: "bomba",
    type: "pizza",
    specs: [
      {
        id: "4",
        serving: "4 porciones",
        price: "5400",
        icon: PiNumberCircleFourBold,
      },
      {
        id: "5",
        serving: "8 porciones",
        price: "7000",
        icon: PiNumberCircleEightBold,
      },
    ],
  },
  {
    name: "cerveza",
    type: "cebidas",
    specs: [
      { id: "6", serving: "474cc", price: "1200" },
      { id: "7", serving: "720cc", price: "1700" },
      { id: "8", serving: "1000cc", price: "2300" },
    ],
  },
  {
    name: "cheddar",
    type: "aderezo",
    specs: [{ id: "9", serving: "potecito", price: "600" }],
  },
  {
    name: "epika",
    type: "burger",
    specs: [
      {
        id: "10",
        serving: "simple",
        price: "600",
        icon: PiNumberCircleOneBold,
      },
    ],
  },
];
