import Main from "@/components/Main";
import pastTests, { PastTest } from "@/lib/constants/pastTests";
import Link from "@/components/Link";
import Heading from "@/components/Heading";

export default function ArchivePage() {
    return (
        <Main>
            <Heading level={1}>Test Archive</Heading>
            <p>
                Here we&apos;re keeping all of past year&apos;s problems and
                solutions, as well as contest results. Some years might be
                missing a round since we haven&apos;t done every round every
                year. In each year, the more difficult division is listed
                second.
            </p>

            <div className="overflow-x-scroll w-full">
                <table className="border-collapse w-full border-0">
                    {/* header */}
                    <thead>
                        <tr className="font-bold select-none bg-theme/50 dark:bg-theme/90">
                            <td className="p-2">Year</td>
                            <td className="p-2">Division</td>
                            <td className="p-2">Algebra</td>
                            <td className="p-2">Geometry</td>
                            <td className="p-2">Counting</td>
                            <td className="p-2">Number Theory</td>
                            <td className="p-2">Team</td>
                            <td className="p-2">Guts</td>
                            <td className="p-2">Fun</td>
                        </tr>
                    </thead>

                    {/* per-year rows */}
                    {pastTests.map((p) => (
                        <tbody
                            key={p.year}
                            className="odd:bg-gray-200 bg-gray-100 dark:odd:bg-gray-800 dark:bg-gray-900 dark:hover:bg-theme/50 odd:dark:hover:bg-theme/50 hover:bg-theme/20 odd:hover:bg-theme/20 transition-colors"
                        >
                            <tr>
                                <td
                                    className="p-2 align-top"
                                    rowSpan={p.divisions.length}
                                >
                                    {p.year}
                                </td>
                                <TableRow p={p} index={0} />
                                <td
                                    className="p-2 align-top"
                                    rowSpan={p.divisions.length}
                                >
                                    {p.funRound ? <FunRoundLink p={p} /> : "-"}
                                </td>
                            </tr>
                            {p.divisions.length == 2 && (
                                <tr>
                                    <TableRow p={p} index={1} />
                                </tr>
                            )}
                        </tbody>
                    ))}
                </table>
            </div>
        </Main>
    );
}

function TableRow({ p, index }: { p: PastTest; index: number }) {
    const tests: string[] = [
        "algebra",
        "geometry",
        "counting",
        "nt",
        "team",
        "guts",
    ];

    const divisionName: string = p.divisions[index].toLowerCase();

    const testElements = tests.map((testName) => (
        <td key={`${p.year}/${divisionName}/${testName}`} className="p-2">
            {p.tests.includes(testName) ? (
                <div>
                    <Link
                        href={`archive/${p.year}/${divisionName}/${testName}/problems.pdf`}
                        target="_blank"
                    >
                        Problems
                    </Link>
                    <br />
                    <Link
                        href={`archive/${p.year}/${divisionName}/${testName}/solutions.pdf`}
                        target="_blank"
                    >
                        Solutions
                    </Link>
                </div>
            ) : (
                "-"
            )}
        </td>
    ));

    return (
        <>
            <td className="align-top p-2">{firstLetterCaps(divisionName)}</td>
            {testElements}
        </>
    );
}

function FunRoundLink({ p }: { p: PastTest }) {
    if (p.funRound == null) {
        return <div></div>;
    }

    return (
        <div>
            {p.funRound!.map((pdf) => (
                <div key={`${p.year}/fun/${pdf}`}>
                    <Link
                        href={`/archive/${p.year}/fun/${pdf}.pdf`}
                        target="_blank"
                    >
                        {firstLetterCaps(pdf)}
                    </Link>
                    <br />
                </div>
            ))}
        </div>
    );
}

function firstLetterCaps(s: string): string {
    if (s.length === 0) {
        return s;
    }

    return `${s.charAt(0).toUpperCase() + s.substring(1).toLowerCase()}`;
}
