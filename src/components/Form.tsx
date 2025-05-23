import { useState, useMemo, useEffect } from "react";
import type { DisciplineFormula, Gender, Time, Distance } from "../types";
import { Mars, Venus } from "lucide-react";

export function Form({ discipline }: { discipline: DisciplineFormula<any> }) {
  const [gender, setGender] = useState<Gender>("female");
  const [underground, setUnderground] = useState<string | undefined>(
    discipline.undergrounds ? Object.keys(discipline.undergrounds)[0] : undefined
  );
  const [performance, setPerformance] = useState<Time | Distance>(0.0);
  useEffect(() => setUnderground( // TODO this does not feel right... what's best practice here?
    discipline.undergrounds ? Object.keys(discipline.undergrounds)[0] : undefined
  ),
    [discipline.undergrounds]
  )
  const grade = useMemo(() => {
    if (discipline.undergrounds && underground) {
      return discipline.undergrounds[underground][gender](performance);
    } else if (discipline.undergrounds) {
      return 0.0
    } else {
      return discipline.formulas[gender](performance);
    };
  }, [gender, underground, performance, discipline]);

  const toggleGender = () => gender === "female" ? setGender("male") : setGender("female");

  return (
    <>
      <div className="join w-full flex">
        <button onClick={toggleGender} name="female"
          className={`btn join-item flex-1/2 ${gender === "female" ? "btn-active" : ""}`}
        >
          <Venus /> Turnerinn
        </button>
        <button onClick={toggleGender} name="male"
          className={`btn join-item flex-1/2 ${gender === "male" ? "btn-active" : ""}`}
        >
          <Mars /> Turner
        </button>
      </div>

      {discipline.undergrounds &&
        <label htmlFor="underground" className="select w-full">
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

      <label htmlFor="performance" className="input w-full">
        <span className="label">Leistung</span>
        <input type="number" name="performance" id="performance"
          onChange={e => setPerformance(parseFloat(e.target.value))}
        />
      </label>

      <div className="stats justify-end">
        <div className="stat">
          <div className="stat-title text-right">Note</div>
          <div className="stat-value">{grade.toFixed(2)}</div>
        </div>
      </div>
    </>);
}