import { useMemo, useState } from "react";
import type { TestFormulas } from "../types";
import TestsForm from "../components/TestsForm";
import testsFormulas from "../formulas/tests";

export default function Tests() {
    const [test, setTest] = useState<keyof typeof testsFormulas>(Object.keys(testsFormulas)[0]);
    const formulas = useMemo<TestFormulas>(() => testsFormulas[test], [test]);

    return (
        <fieldset className="fieldset card shadow-sm p-2 bg-base-100 rounded-box max-w-md h-min">
            <label htmlFor="test" className="select w-full">
                <span className="label">Fachtest</span>
                <select name="test" id="test"
                    onChange={e => setTest(e.target.value)}
                    value={test}>
                    {Object.keys(testsFormulas).map(discipline =>
                        <option key={discipline} value={discipline}>{discipline}</option>
                    )}
                </select>
            </label>

            <TestsForm testFormulas={formulas} />
        </fieldset>
    );
}