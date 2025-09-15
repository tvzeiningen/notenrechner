import { useEffect, useMemo, useState } from 'react'
import { TopAppBar } from './components/NavBar';
import Router, { useRoute } from './screens/Router';
import Dock from './components/Dock';

function App() {
  const getInitialTheme = () => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored;
    // system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };
  const [theme, setTheme] = useState(getInitialTheme());
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const background = useMemo(() => theme === "light"
    ? "from-blue-100 to-blue-300"
    : "from-blue-900 to-blue-950",
    [theme]);
  const { route } = useRoute();

  return (
      <div className={`h-dvh bg-linear-65 flex flex-col ${background}`}>
        <TopAppBar initTheme={getInitialTheme()} onToggleTheme={() => setTheme(theme === "light" ? "dark" : "light")} />

        <main className="p-4 flex-1 flex flex-col items-center overflow-hidden">
          <Router route={route} />
        </main>
        
        <Dock />
      </div>
  )
}

export default App
