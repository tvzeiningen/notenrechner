import { useState, useMemo, useEffect } from "react";
import type { DisciplineFormula, Gender, Time, Distance, Formula } from "../types";
import { Mars, Venus } from "lucide-react";
import BaseForm from "./BaseForm";

export function AthleticsForm({ discipline }: { discipline: DisciplineFormula<Time | Distance> }) {
  const [gender, setGender] = useState<Gender>("female");
  const [underground, setUnderground] = useState<string | undefined>(
    discipline.undergrounds ? Object.keys(discipline.undergrounds)[0] : undefined
  );

  useEffect(() => {
    const availableUndergrounds = discipline.undergrounds ? Object.keys(discipline.undergrounds) : [];
    setUnderground(availableUndergrounds[0]);
  }, [discipline]);

  // formula lookup
  const formula: Formula<Distance | Time> | undefined = useMemo(() => {
    if (discipline.undergrounds) { // formulas with undergrounds
      if (underground && discipline.undergrounds[underground]) {
        return discipline.undergrounds[underground][gender];
      }
    } else { // formulas without different undergrounds
      return discipline.formulas[gender];
    }
  }, [gender, underground, discipline]);

  const toggleGender = () => gender === "female" ? setGender("male") : setGender("female");

  return (<>
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

    {formula && <BaseForm formula={formula} />}
  </>);
}