'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faUser,
  faBell,
  faVideo,
  faMicrophone,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import NavItem from "@/components/dashboard/Nav/NavItem";
import NavList from "@/components/dashboard/Nav/NavList";
import styles from "./Navigation.module.css";
import NavBar from "@/components/dashboard/Nav/NavBar";
import { useState } from "react";

interface SettingsProps {
  onChange: (setting: string) => void;
}

export default function Navigation({ onChange }: SettingsProps) {
 const [settings, setSettings] = useState([
  {
    icon: faPen,
    label: "General",
    isActive: true,
  },
  {
    icon: faUser,
    label: "Account",
    isActive: false,
  },
  {
    icon: faBell,
    label: "Notification",
    isActive: false,
  },
  {
    icon: faMicrophone,
    label: "Audio",
    isActive: false,
  },
  {
    icon: faVideo,
    label: "Video",
    isActive: false,
  },
  {
    icon: faCog,
    label: "Privacy",
    isActive: false,
  }
]);

  const changeSetting = (setting: typeof settings[0]) => {
    setSettings((prevSettings) =>
      prevSettings.map((prevSetting) => {
        if (prevSetting.label === setting.label) {
          return {
            ...prevSetting,
            isActive: true,
          };
        }
        return {
          ...prevSetting,
          isActive: false,
        };
      })
    );
    onChange(setting.label);
  };

  return (
    <NavBar>
      <div className={styles.header}>
        <h2>Settings</h2>
      </div>
      <NavList>
        {settings.map((setting, index) => (
          <NavItem key={index}>
            <button className={`btn
                ${styles.settingsButton}
                ${setting.isActive ? styles.settingsButtonActive : ""}
              `}
              onClick={() => changeSetting(setting)}
            >
              <FontAwesomeIcon icon={setting.icon} className={styles.settingsIcon} />
              <span className={styles.settingsLable}>
                {setting.label}
              </span>
            </button>
          </NavItem>
        ))}
      </NavList>
    </NavBar>
  );
}