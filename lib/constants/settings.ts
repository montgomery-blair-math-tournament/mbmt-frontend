interface Division {
    name: string;
    prefix: string;
}

export const DIVISIONS: Record<string, Division> = {
    lower: {
        name: "Stokes",
        prefix: "S",
    },
    upper: {
        name: "Eratosthenes",
        prefix: "E",
    },
};

export const REPO_LINK: string =
    "https://github.com/montgomery-blair-math-tournament/mbmt-frontend";
