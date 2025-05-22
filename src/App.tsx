import { useMemo, useState } from 'react'
import type { DisciplineFormula } from './types'
import formulas from './formulas'
import { Form } from './components/Form';

function App() {
  const [discipline, setDiscipline] = useState<keyof typeof formulas>("Kugelstossen");
  const formula = useMemo<DisciplineFormula<any>>(() => formulas[discipline], [discipline]);


  return (
    <div className="min-h-screen bg-linear-65 from-blue-100 to-blue-300 flex flex-col justify-between">
      <div className="navbar bg-base-100 shadow-sm">
        <a className="btn btn-ghost text-xl">Notenrechner</a>
      </div>
      <main className="p-4 flex justify-center w-full">
        <fieldset className="fieldset card shadow-sm p-2 bg-base-100 rounded-box max-w-md">
          <label htmlFor="discipline" className="select w-full">
            <span className="label">Disziplin</span>
            <select name="discipline" id="discipline"
              onChange={e => setDiscipline(e.target.value)}
              value={discipline}>
              {Object.keys(formulas).map(discipline =>
                <option value={discipline}>{discipline}</option>
              )}
            </select>
          </label>
          <Form discipline={formula} />
        </fieldset>
      </main>
      <footer className="footer footer-horizontal footer-center text-base-content p-4">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">TV Zeiningen</a>
          <a className="link link-hover">About</a>
          <a className="link link-hover">GitHub</a>
        </nav>
      </footer>
    </div>
  )
}

export default App
