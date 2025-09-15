import { useState, useMemo } from "react";
import { Form } from "../components/Form";
import formulas from "../formulas";
import type { DisciplineFormula, Time, Distance } from "../types";

export default function AthleticsScreen() {
    const [discipline, setDiscipline] = useState<keyof typeof formulas>(Object.keys(formulas)[0]);
    const formula = useMemo<DisciplineFormula<Time | Distance>>(() => formulas[discipline], [discipline]);

    return (
        <fieldset className="fieldset card shadow-sm p-2 bg-base-100 rounded-box max-w-md h-min">
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
    );
}