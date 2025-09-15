import { useState, useMemo, useEffect } from "react";
import type { DisciplineFormula, Gender, Time, Distance } from "../types";
import { Info, Mars, Venus } from "lucide-react";

export function Form({ discipline }: { discipline: DisciplineFormula<Time | Distance> }) {
  const [gender, setGender] = useState<Gender>("female");
  const [underground, setUnderground] = useState<string | undefined>(
    discipline.undergrounds ? Object.keys(discipline.undergrounds)[0] : undefined
  );
  const [performance, setPerformance] = useState<Time | Distance>(0.0);

  useEffect(() => {
    const availableUndergrounds = discipline.undergrounds ? Object.keys(discipline.undergrounds) : [];
    setUnderground(availableUndergrounds[0]);
  }, [discipline]);
  const grade = useMemo(() => {
    if (discipline.undergrounds) {
      if (underground && discipline.undergrounds[underground]) {
        return discipline.undergrounds[underground][gender](performance);
      } else if (discipline.undergrounds) {
        return 0.0;
      }
    } else {
      return discipline.formulas[gender](performance);
    }
  }, [gender, underground, performance, discipline]);

  const formulaText = useMemo(() => {
    let f = "";
    if (discipline.undergrounds) {
      if (underground && discipline.undergrounds[underground]) {
        f = discipline.undergrounds[underground][gender].toString();
      } else if (discipline.undergrounds) {
        return undefined;
      }
    } else {
      f =  discipline.formulas[gender].toString();
    }
    f = f.split("=>")[1];
    return `Note = ${f}`;
  }, [gender, underground, discipline])

  const toggleGender = () => gender === "female" ? setGender("male") : setGender("female");

  return (
    <>
      <div className="join w-full flex">
        <button onClick={toggleGender} name="female"
          className={`btn join-item flex-1/2 ${gender === "female" ? "btn-active" : ""}`}
        >
          <Venus /> Turnerin
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
              <option key={underground} value={underground}>{underground}</option>
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
          <div className=" flex flex-row justify-end gap-1">
            <div className="tooltip tooltip-left" data-tip={formulaText}>
              <Info size={16} />
            </div>
            <div className="stat-title text-right">Note</div>
          </div>
          <div className="stat-value">{grade?.toFixed(2) ?? ""}</div>
        </div>
      </div>
    </>);
}