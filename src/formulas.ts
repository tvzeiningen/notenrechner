import type { DisciplineFormula } from "./types";

const formulas: Record<string, DisciplineFormula<any>> = {
    "Weitsprung": {
        undergrounds: {
            "Kunststoff": {
                female: d => (d - 0.8) / 0.4,
                male: d => (d - 1.2) / 0.5,
            },
            "temporär gebaut": {
                female: d => (d - 0.7) / 0.4,
                male: d => (d - 1.1) / 0.5,
            },
        }
    },
    "Kugelstossen": {
        formulas: {
            female: d => d,
            male: d => (d + 0.5) / 1.5,
        },
        undergrounds: undefined,
    }
};

export default formulas;