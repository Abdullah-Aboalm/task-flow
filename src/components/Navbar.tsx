import { themeStore } from "../store";
import { PiMoonLight, PiSunLight } from "react-icons/pi";
import darkLogo from "../assets/darkLogo.png";
import lightLogo from "../assets/LightLogo.png";

const Navbar = () => {
  const { theme, toggleTheme } = themeStore();
  return (
    <header className="p-4 shadow bg-white text-dark-gray dark:bg-dark-gray dark:text-white">
      <nav className="flex bg-transparent items-center justify-between">
        <img src={theme === "dark" ? lightLogo : darkLogo} alt="logo" />
        <button className="cursor-pointer" onClick={toggleTheme}>
          {theme === "dark" ? (
            <PiSunLight size={20} />
          ) : (
            <PiMoonLight size={20} />
          )}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
