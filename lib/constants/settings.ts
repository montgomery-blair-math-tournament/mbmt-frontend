interface Division {
    name: string;
    prefix: string;
}

export const CURRENT_YEAR: number = 2025;

export const DIVISIONS: Record<number, Division> = {
    0: {
        name: "Abel",
        prefix: "A",
    },
    1: {
        name: "Jacobi",
        prefix: "J",
    },
};

export const REGISTRATION_FORM_LINK: string =
    "https://docs.google.com/forms/d/e/1FAIpQLSfXBDg700tBiwaJcIGGP5cS6liuRKGYhmoq2HqiCyrCE1Owhw/viewform";

export const REPO_LINK: string =
    "https://github.com/montgomery-blair-math-tournament/mbmt-rewrite";
