import HomeFillIcon from "../assets/navbuttons/home_fill.svg?react";
import HomeIcon from "../assets/navbuttons/home_outline.svg?react";
import StatisticsFillIcon from "../assets/navbuttons/statistics_fill.svg?react";
import StatisticsIcon from "../assets/navbuttons/statistics_outline.svg?react";
import SettingsFillIcon from "../assets/navbuttons/settings_fill.svg?react";
import SettingsIcon from "../assets/navbuttons/settings_outline.svg?react";
export const HOME_BUTTON = {
  color: "bg-white",
  hover: "hover:bg-gray-1",
  activeIcon: HomeFillIcon,
  icon: HomeIcon,
  path: "/",
};

export const STATISTICS_BUTTON = {
  color: "bg-white",
  hover: "hover:bg-gray-1",
  activeIcon: StatisticsFillIcon,
  icon: StatisticsIcon,
  path: "/statistics",
};

export const SETTINGS_BUTTON = {
  color: "bg-white",
  hover: "hover:bg-gray-1",
  activeIcon: SettingsFillIcon,
  icon: SettingsIcon,
  path: "/settings",
};
