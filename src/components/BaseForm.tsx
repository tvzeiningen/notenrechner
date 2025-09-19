import { Info } from "lucide-react";
import { useState, useMemo } from "react";
import type { Time, Distance } from "../types";

export default function BaseForm({ formula, ...props }: { formula: (d: number) => number, formulaText?: string }) {
    const [performance, setPerformance] = useState<Time | Distance>(0.0);
    const formulaText = "Note = " + (props.formulaText || formula.toString().split("=>")[1]);

    const grade = useMemo(() => formula(performance), [formula, performance]);

    return (<>
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