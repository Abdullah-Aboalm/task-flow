import { themeStore } from "../store";
import { PiMoonLight, PiSunLight } from "react-icons/pi";

const Navbar = () => {
  const { theme, toggleTheme } = themeStore();
  return (
    <header className="p-4 shadow bg-white text-dark-gray dark:bg-dark-gray dark:text-white">
      <nav className="flex bg-transparent items-center justify-between">
        <img
          src={`/src/assets/${
            theme === "dark" ? "lightLogo.png" : "darkLogo.png"
          }`}
          alt="logo"
        />
        <button onClick={toggleTheme}>
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
