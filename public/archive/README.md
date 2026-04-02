# `archive` folder

## Folder structure

Each subfolder in this folder should be named with the 4-digit year number (like 2025) and should have the following structure:

-   (lower division name - "Erdos")
    -   algebra
        -   problems.pdf
        -   solutions.pdf
    -   counting
        -   problems.pdf
        -   solutions.pdf
    -   fun
        -   (file1).pdf
        -   (file2).pdf
        -   ...
    -   geometry
        -   problems.pdf
        -   solutions.pdf
    -   guts
        -   problems.pdf
        -   solutions.pdf
    -   nt
        -   problems.pdf
        -   solutions.pdf
    -   team
        -   problems.pdf
        -   solutions.pdf
    -   fun
        -   problems.pdf
        -   solutions.pdf
-   (upper division name - "Weierstrass")
    -   algebra
        -   problems.pdf
        -   solutions.pdf
    -   counting
        -   problems.pdf
        -   solutions.pdf
    -   fun
        -   (file1).pdf
        -   (file2).pdf
        -   ...
    -   geometry
        -   problems.pdf
        -   solutions.pdf
    -   guts
        -   problems.pdf
        -   solutions.pdf
    -   nt
        -   problems.pdf
        -   solutions.pdf
    -   team
        -   problems.pdf
        -   solutions.pdf

## `pastTests.ts` module

For each testing year, the exported array in the `@/app/pastTests.ts` module should be updated as follows:

```js
[
    // old tests
    {
        year: "XXXX",
        divisions: [lower, upper],
        tests: ["algebra", "geometry", "counting", "nt", "team", "guts"], // some combination of these
        funRound: ["instructions", "problems", "solutions"], // the titles of the PDFs
    },
];
```

### Field descriptions

-   The `year` field must be a four-digit year, like `"2025"`.
-   The `divisions` field must contain the names of the two divisions **IN THE ORDER (lower, upper)** - `"Erdos", "Weierstrass"`, for example.
-   The `tests` field must contain some selection of `"algebra", "geometry", "counting", "nt", "team", "guts"`, depending on which tests were administered that year.
-   The `funRound` field contains an unsorted list of the PDF names for the Fun Round files; for instance, `"instructions", "problems", "solutions"` corresponds to the files `instructions.pdf`, `problems.pdf`, and `solutions.pdf`. This field may be omitted if no Fun Round was conducted in the given year.
