import { useState, useMemo } from "react";
import { AthleticsForm } from "../components/AthleticsForm";
import athleticsFormulas from "../formulas/athletics";
import type { DisciplineFormula, Time, Distance } from "../types";

export default function AthleticsScreen() {
    const [discipline, setDiscipline] = useState<keyof typeof athleticsFormulas>(Object.keys(athleticsFormulas)[0]);
    const formula = useMemo<DisciplineFormula<Time | Distance>>(() => athleticsFormulas[discipline], [discipline]);

    return (
        <fieldset className="fieldset card shadow-sm p-2 bg-base-100 rounded-box max-w-md h-min">
            <label htmlFor="discipline" className="select w-full">
                <span className="label">Disziplin</span>
                <select name="discipline" id="discipline"
                    onChange={e => setDiscipline(e.target.value)}
                    value={discipline}>
                    {Object.keys(athleticsFormulas).map(discipline =>
                        <option key={discipline} value={discipline}>{discipline}</option>
                    )}
                </select>
            </label>
            <AthleticsForm discipline={formula} />
        </fieldset>
    );
}