import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export function TopAppBar({ onToggleTheme, ...props }: { onToggleTheme: () => void, initTheme: string }) {
    const [checked, setChecked] = useState(props.initTheme === "dark");
    const toggleTheme = () => {
        onToggleTheme();
        setChecked(!checked);
    }

    return (
        <div className="navbar flex justify-between items-center w-full px-4">
            <span className="flex-1"></span>
            <h1 className="text-2xl font-bold">Turnfest Notenrechner</h1>
            <span className="flex-1 flex justify-end ">
                <label className="toggle text-base-content">
                    <input type="checkbox" onChange={toggleTheme}
                        checked={checked}
                        value="synthwave" className="theme-controller" />
                    <Sun size={16} aria-label="sun" />
                    <Moon size={16} aria-label="moon" />
                </label>
            </span>
        </div>
    );
}