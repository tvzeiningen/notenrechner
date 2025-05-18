import { useMemo, useState } from 'react'
import type { Time, DisciplineFormula, Gender, Distance } from './types'
import formulas from './formulas'

function Discipline({ discipline }: { discipline: DisciplineFormula<any> }) {
  const [gender, setGender] = useState<Gender>("female");
  const [underground, setUnderground] = useState<string | undefined>(
    discipline.undergrounds ? Object.keys(discipline.undergrounds)[0] : undefined
  );
  const [performance, setPerformance] = useState<Time | Distance>(0.0);
  const grade = useMemo(() => {
    if (discipline.undergrounds && underground) {
      return discipline.undergrounds[underground][gender](performance);
    } else if (discipline.undergrounds) {
      return 0.0
    } else {
      return discipline.formulas[gender](performance);
    };
  }, [gender, underground, performance, discipline]);

  return (
    <>
      <label htmlFor="gender" className="select">
        <span className="label">Tu/Ti</span>
        <select name="gender" id="gender"
          onChange={e => setGender(e.target.value as Gender)}
          value={gender}>
          <option value="female">female</option>
          <option value="male">male</option>
        </select>
      </label>

      {discipline.undergrounds &&
        <label htmlFor="underground" className="select">
          <span className="label">Anlage</span>
          <select name="underground" id="underground"
            onChange={e => setUnderground(e.target.value)}
            value={underground}>
            {Object.keys(discipline.undergrounds).map(underground =>
              <option value={underground}>{underground}</option>
            )}
          </select>
        </label>
      }

      <label htmlFor="performance" className="input validator">
        <span className="label">Leistung</span>
        <input type="number" name="performance" id="performance"
          onChange={e => setPerformance(parseFloat(e.target.value))}
          min="2025-01-01" max="2025-12-31" />
      </label>

      <div className="stats shadow">
        <div className="stat">
          <div className="stat-title">Note</div>
          <div className="stat-value">{grade.toFixed(2)}</div>
        </div>
      </div>
    </>);
}

function App() {
  const [discipline, setDiscipline] = useState<keyof typeof formulas>("Kugelstossen");
  const formula = useMemo<DisciplineFormula<any>>(() => formulas[discipline], [discipline]);


  return (
    <>
      <h1>Notenrechner</h1>
      <div className="card">
        <div className="card body fieldset">
          <label htmlFor="discipline" className="select">
            <span className="label">Disziplin</span>
            <select name="discipline" id="discipline"
              onChange={e => setDiscipline(e.target.value)}
              value={discipline}>
              {Object.keys(formulas).map(discipline =>
                <option value={discipline}>{discipline}</option>
              )}
            </select>
          </label>
          <Discipline discipline={formula} />
        </div>
      </div>
    </>
  )
}

export default App
