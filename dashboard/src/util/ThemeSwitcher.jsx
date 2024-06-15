import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useLocalStorage } from "usehooks-ts";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ThemeSwitch() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  const [enabled, setEnabled] = useState(theme == "light");

  const handleThemeChange = (enabled) => {
    setTheme(enabled ? "light" : "dark");
    setEnabled(enabled);
  };

  return (
    <Switch
      checked={enabled}
      onChange={handleThemeChange}
      className={classNames(
        enabled ? "bg-gray-400" : "bg-yellow-600",
        "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out"
      )}
    >
      <span className="sr-only">
        {enabled ? <MdDarkMode size={20}/> : <MdLightMode size={20}/>}
      </span>
    </Switch>
  );
}

export default ThemeSwitch;
