import type { DisciplineFormula, Distance, Time } from "./types";

const formulas: Record<string, DisciplineFormula<Time | Distance>> = {
    "80 m PS": {
        undergrounds: {
            "Kunststoff": {
                female: d => (18.6 - d) / 0.8,
                male: d => (14.2 - d) / 0.5,
            },
            "Rasen": {
                female: d => (18.9 - d) / 0.8,
                male: d => (14.5 - d) / 0.5,
            },
            "Wiese": {
                female: d => (19.2 - d) / 0.8,
                male: d => (14.8 - d) / 0.5,
            },
        }
    },
    "40 m PS Stab": {
        undergrounds: {
            "Kunststoff": {
                female: d => (13.9 - d) / 0.8,
                male: d => (13.2 - d) / 0.8,
            },
            "Rasen": {
                female: d => (14.1 - d) / 0.8,
                male: d => (13.4 - d) / 0.8,
            },
            "Wiese": {
                female: d => (14.3 - d) / 0.8,
                male: d => (13.6 - d) / 0.8,
            },
        }
    },
    "80 m": {
        undergrounds: {
            "Kunststoff": {
                female: d => (16.7 - d) / 0.6,
                male: d => (14.5 - d) / 0.5,
            },
            "Rasen": {
                female: d => (17.0 - d) / 0.6,
                male: d => (14.8 - d) / 0.5,
            },
            "Wiese": {
                female: d => (17.3 - d) / 0.6,
                male: d => (15.1 - d) / 0.5,
            },
        }
    },
    "40 m": {
        undergrounds: {
            "Kunststoff": {
                female: d => (16.7 - d) / 0.6,
                male: d => (14.5 - d) / 0.5,
            },
            "Rasen": {
                female: d => (17.0 - d) / 0.6,
                male: d => (14.8 - d) / 0.5,
            },
            "Wiese": {
                female: d => (17.3 - d) / 0.6,
                male: d => (15.1 - d) / 0.5,
            },
        }
    },
    "400 m": {
        undergrounds: {
            "Kunststoff": {
                female: d => (112.5 - d) / 5,
                male: d => (74.5 - d) / 2,
            },
            "Rasen": {
                female: d => (115 - d) / 5,
                male: d => (77 - d) / 2,
            },
            "Wiese": {
                female: d => (117.5 - d) / 5,
                male: d => (79.5 - d) / 2,
            },
        }
    },
    "800 m": {
        undergrounds: {
            "Kunststoff": {
                female: d => (254 - d) / 10,
                male: d => (206 - d) / 8,
            },
            "Rasen": {
                female: d => (262 - d) / 10,
                male: d => (212 - d) / 8,
            },
            "Wiese": {
                female: d => (270 - d) / 10,
                male: d => (218 - d) / 8,
            },
        }
    },
    "1000 m": {
        undergrounds: {
            "Kunststoff": {
                female: d => (348 - d) / 15,
                male: d => (265 - d) / 10
            },
            "Rasen": {
                female: d => (360 - d) / 15,
                male: d => (275 - d) / 10,
            },
            "Wiese": {
                female: d => (372 - d) / 15,
                male: d => (285 - d) / 10,
            },
        }
    },
    "Hochsprung": {
        undergrounds: {
            "Kunststoff": {
                female: d => (d - 0.45) * 10,
                male: d => (d - 0.8) * 10,
            },
            "Asphalt": {
                female: d => (d - 0.40) * 10,
                male: d => (d - 0.75) * 10,
            },
        }
    },
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
    "Kugelstossen 4 / 5 kg": {
        formulas: {
            female: d => d,
            male: d => (d + 0.5) / 1.5,
        },
        undergrounds: undefined,
    },
    "Schleuderball 1 / 1,5 kg": {
        "formulas": {
            female: d => (d + 2) / 4,
            male: d => (d - 11) / 4,
        },
        undergrounds: undefined,
    },
    "Speer 600 / 800 g": {
        undergrounds: {
            "Kunststoff": {
                female: d => (d + 8) / 4,
                male: d => (d + 5) / 5,
            },
            "temporär gebaut": {
                female: d => (d + 9.5) / 4,
                male: d => (d + 7) / 5,
            }
        }
    },
    "Weitwurf 300 / 500 g": {
        formulas: {
            female: d => (d + 8) / 5,
            male: d => (d - 3) / 6,
        },
        undergrounds: undefined,
    },
    "Steinstossen": {
        formulas: {
            female: d => d + 2,
            male: d => d,
        },
        undergrounds: undefined,
    },
};

export default formulas;