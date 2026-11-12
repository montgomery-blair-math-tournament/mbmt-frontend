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

export const REGISTRATION_FORM_LINK: string =
    "https://docs.google.com/forms/d/e/1FAIpQLSfXBDg700tBiwaJcIGGP5cS6liuRKGYhmoq2HqiCyrCE1Owhw/viewform";

export const REPO_LINK: string =
    "https://github.com/montgomery-blair-math-tournament/mbmt-frontend";
