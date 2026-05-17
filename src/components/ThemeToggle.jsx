import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <div
      onClick={toggleTheme}
      className={`  z-50 p-2 cursor-pointer 
                    ${
                      isDarkMode ? "justify-start" : "justify-end"
                    } w-[60px] h-[32px] ${
        isDarkMode ? "bg-blue-950" : "bg-blue-200"
      } rounded-3xl flex items-center transition-all`}
    >
      <button
        className={cn(
          " p-1 cursor-pointer bg-amber-50 z-50 rounded-full transition-all duration-300",
          "focus:outlin-hidden"
        )}
      >
        {isDarkMode ? (
          <Sun className="h-4 w-4 text-yellow-300" />
        ) : (
          <Moon className="h-4 w-4 text-blue-900" />
        )}
      </button>
    </div>
  );
};
