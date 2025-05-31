import { useEffect, useMemo, useState } from 'react'
import type { DisciplineFormula, Distance, Time } from './types'
import formulas from './formulas'
import { Form } from './components/Form';
import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';

function App() {
  const [discipline, setDiscipline] = useState<keyof typeof formulas>(Object.keys(formulas)[0]);
  const formula = useMemo<DisciplineFormula<Time | Distance>>(() => formulas[discipline], [discipline]);
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

  return (
    <div className={`min-h-screen bg-linear-65 flex flex-col justify-between ${background}`}>
      <NavBar initTheme={getInitialTheme()} onToggleTheme={() => setTheme(theme === "light" ? "dark" : "light")} />
      <main className="p-4 flex justify-center w-full">
        <fieldset className="fieldset card shadow-sm p-2 bg-base-100 rounded-box max-w-md">
          <label htmlFor="discipline" className="select w-full">
            <span className="label">Disziplin</span>
            <select name="discipline" id="discipline"
              onChange={e => setDiscipline(e.target.value)}
              value={discipline}>
              {Object.keys(formulas).map(discipline =>
                <option key={discipline} value={discipline}>{discipline}</option>
              )}
            </select>
          </label>
          <Form discipline={formula} />
        </fieldset>
      </main>
      <Footer />
    </div>
  )
}

export default App
