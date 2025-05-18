export type Gender = "female" | "male";

export interface Time {
    minutes: number,
    seconds: number,
    millis: number,
}
export type Distance = number;
/** Performance */
type Perf = Time | Distance;

type Formula<T extends Perf> = (p: T) => number;
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