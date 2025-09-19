import { useMemo, useState } from "react";
import type { Formula, Points, TestFormulas } from "../types";
import BaseForm from "./BaseForm";
import { Mars, Venus, XCircle } from "lucide-react";

const TEAM_SIZE_EX_1 = 3;
const TEAM_SIZE_EX_2 = 6;

export default function TestsForm({ testFormulas: testFormulas }: { testFormulas: TestFormulas }) {
    const [exercise, setExercise] = useState<keyof typeof testFormulas["formulas"]>("Aufgabe 1");
    const teamSize = useMemo(() => { // TODO not sure if the usage of useMemo is a bad idea here (see toggleExercise logic).
        return exercise === "Aufgabe 1" ? TEAM_SIZE_EX_1 : TEAM_SIZE_EX_2;
    }, [exercise]);
    const [females, setFemales] = useState(Math.floor((teamSize + 1) / 2));
    const [males, setMales] = useState(Math.floor(teamSize / 2));

    const formula: Formula<Points> = useMemo(
        () => (d: Points) => testFormulas.formulas[exercise](d, females, males),
        [exercise, females, males, testFormulas.formulas]
    );

    const toggleExercise = () => {
        if (exercise === "Aufgabe 1") {
            setExercise("Aufgabe 2");
            setMales(0);
            setFemales(TEAM_SIZE_EX_2);
        } else {
            setExercise("Aufgabe 1");
            setMales(0);
            setFemales(TEAM_SIZE_EX_1);
        }
    }
    const update = (val: number, thisSetter: (v: number) => void, otherSetter: (v: number) => void) => {
        const thisVal = Math.min(val, teamSize);
        const otherVal = teamSize - thisVal;
        thisSetter(thisVal);
        otherSetter(otherVal);
    }

    const updateFemales = (val: number) => update(val, setFemales, setMales);
    const updateMales = (val: number) => update(val, setMales, setFemales);

    return (<>
        <div className="join w-full flex">
            <button onClick={toggleExercise} name="exercise-1"
                className={`btn join-item flex-1/2 ${exercise === "Aufgabe 1" ? "btn-active" : ""}`}
            >
                Aufgabe 1
            </button>
            <button onClick={toggleExercise} name="exercise-2"
                className={`btn join-item flex-1/2 ${exercise === "Aufgabe 2" ? "btn-active" : ""}`}
            >
                Aufgabe 2
            </button>
        </div>

        <div className="join">
            <label htmlFor="females" className="input join-item">
                <span className="label">
                    <Venus />
                </span>
                <input value={females} type="number" min={0} max={teamSize} step={1} name="females" id="females"
                    onChange={e => updateFemales(parseInt(e.target.value))}
                />
            </label>
            <label htmlFor="males" className="input join-item">
                <span className="label">
                    <Mars />
                </span>
                <input value={males} type="number" min={0} max={teamSize} step={1} name="males" id="males"
                    onChange={e => updateMales(parseInt(e.target.value))}
                />
            </label>
        </div>

        {(females + males !== teamSize) ?
            <div role="alert" className="alert alert-error">
                <XCircle />
                <span>In {exercise} starten (pro Durchgang) immer genau {teamSize} Personen.</span>
            </div> :
            formula && <BaseForm
                formula={formula}
                formulaText={testFormulas.formulas[exercise].toString().split("=>")[1]}
            />
        }
    </>);
}
