import { useEffect, useState } from "react";
import Button from "../Button/Button";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
const Mode = () => {
  const options = [
    {
      icon: <SunIcon />,
      text: "light",
    },
    {
      icon: <MoonIcon />,
      text: "dark",
    },
  ];
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const [theme, setTheme] = useState("sunny");

  function onWindowMatch() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }

  onWindowMatch();

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        break;
    }
  }, [theme, element]);
  return (
    <div className="flex flex-row justify-center align-center gap-12">
      {options?.map((opt) => (
        <Button
          onClick={() => setTheme(opt.text)}
          key={opt.text}
          color={`bg-neutral-100 dark:bg-gray-700 dark:text-gray-400 ${theme}`}
          padding="p-3"
        >
          {opt.icon}
        </Button>
      ))}
    </div>
  );
};
export default Mode;
