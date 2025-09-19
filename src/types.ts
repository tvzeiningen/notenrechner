export type Gender = "female" | "male";

/** Time in seconds */
export type Time = number;
/** Distance in cm */
export type Distance = number;
export type Points = number;
/** Performance */
type Perf = Time | Distance | Points;

export type Formula<T extends Perf> = (p: T) => number;
type Formulas<T extends Perf> = {
    "female": Formula<T>,
    "male": Formula<T>,
}

export type DisciplineFormula<T extends Perf> = {
    formulas: Formulas<T>,
    undergrounds: undefined,
} | {
    undergrounds: {
        [underground: string]: Formulas<T>
    }
};

export type TestFormulas = {
    formulas: {
        "Aufgabe 1": (d: Points, F: number, M: number) => number;
        "Aufgabe 2": (d: Points, F: number, M: number) => number;
    }
};
