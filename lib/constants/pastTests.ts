const pastTests = [
    {
        year: "2025",
        tests: ["algebra", "geometry", "counting", "nt", "team", "guts"],
        divisions: ["Erdos", "Weierstrass"],
    },
    {
        year: "2024",
        divisions: ["Brahmagupta", "Godel"],
        tests: ["algebra", "geometry", "counting", "nt", "team", "guts"],
    },
    {
        year: "2023",
        divisions: ["Bernoulli", "Germain"],
        tests: ["algebra", "geometry", "counting", "nt", "team", "guts"],
    },
    {
        year: "2022",
        divisions: ["Dedekind", "Zermelo"],
        tests: ["algebra", "geometry", "counting", "nt", "team", "guts"],
        funRound: ["instructions", "problems", "solutions"],
    },
    {
        year: "2020",
        divisions: ["Online"],
        tests: ["team"],
    },
    {
        year: "2019",
        divisions: ["Descartes", "Leibniz"],
        tests: ["algebra", "geometry", "counting", "nt", "team", "guts"],
        funRound: ["introduction", "problems"],
    },
    {
        year: "2018",
        divisions: ["Cantor", "Gauss"],
        tests: ["algebra", "geometry", "counting", "nt", "team", "guts"],
    },
    {
        year: "2017",
        divisions: ["Ramanujan", "Pascal"],
        tests: ["algebra", "geometry", "counting", "nt", "team", "guts"],
    },
    // skipping pre-2017 tests
];

export default pastTests;
export type PastTest = {
    year: string; // string denoting the test year (4-digit year)
    divisions: string[]; // string[] with the two divisions [lower, upper]
    tests: string[]; // string[] with a list of the tests for the given test year
    funRound?: string[]; // string[] with a list of the PDF names for the funRound problems
};
