import type { TestFormulas } from "../types";

const testsFormulas: Record<string, TestFormulas> = {
    "Allround": {
        formulas: {
            "Aufgabe 1": (d, F, M) => ((F * (d + 71) / 16.2) + (M * (d + 33) / 16.2)) / (F + M),
            "Aufgabe 2": (d, F, M) => ((F * (d - 46) / 10.6) + (M * (d - 75) / 10.9)) / (F + M),
        }
    },
    "Unihockey": {
        formulas: {
            "Aufgabe 1": (d, F, M) => ((F * (d - 12) / 6.2) + (M * (d - 20) / 7.5)) / (F + M),
            "Aufgabe 2": (d, F, M) => ((F * (d - 18) / 13.8) + (M * (d - 7) / 19.1)) / (F + M),
        }
    }
}

export default testsFormulas;
