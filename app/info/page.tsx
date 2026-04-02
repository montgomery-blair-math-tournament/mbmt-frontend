import Main from "@/components/Main";
import { DIVISIONS } from "@/lib/constants/settings";
import Link from "@/components/Link";
import Heading from "@/components/Heading";

export default function InfoPage() {
    const lower = DIVISIONS[0].name;
    return (
        <Main>
            <Heading level={1}>Contest Information</Heading>
            <p>
                <i>Last updated 02/15/2026</i>
            </p>

            <p>
                MBMT is a free middle school math competition that seeks to
                excite students’ interests in mathematics and in pursuing
                mathematics beyond the school curriculum. We are pleased to
                announce that, for the 2026 year, the Montgomery Blair Math Team
                is hosting the 11th Montgomery Blair Math Tournament (MBMT 11)
                on March 8th, 2026!
            </p>

            <Heading level={2}>Registration</Heading>
            <p>
                Registration will open on <b>Wednesday, December 17th, 2025</b>.
                We would like all math team sponsors to register their teams by{" "}
                <b>Saturday, February 7th, 2026</b>. This will help us estimate
                the number of teams participating and assist us with logistics.
                Please note that if you don’t register by this date, you may not
                receive our free swag. To register, visit{" "}
                <Link href="/register">the registration page here</Link>. For
                more details on registration, see our{" "}
                <Link href="/rules">rules page</Link>.
            </p>

            <Heading level={2}>Logistics</Heading>
            <p>
                MBMT 11 will occur at Montgomery Blair High School on Sunday,
                March 8th, 2026 from 11:00 am - 5:00 pm. Our address is{" "}
                <Link href="https://goo.gl/maps/QUudw1ir4JPsHSL98">
                    51 University Blvd E, Silver Spring, MD 20901
                </Link>
                . Please arrive on the University Boulevard side of the school.
                Thanks to the generosity of the{" "}
                <Link href="https://www.montgomeryschoolsmd.org/departments/food-and-nutrition/">
                    MCPS Division of Food & Nutrition Services
                </Link>
                , <b>free</b> lunch will be provided to all competitors and
                coaches. Coaches and participants are encouraged to bring snacks
                for their teams.
            </p>

            <Heading level={2}>Contest</Heading>
            <p>
                MBMT consists of four rounds: Individual Round, Team Round, Guts
                Round, and Fun Round. Both the Abel (lower) and Jacobi (upper)
                divisions will take Individual Subject Tests (of which students
                take two subjects among Algebra, Geometry, Counting and
                Probability, and Number Theory). Each Individual Subject Test
                consists of eight questions and lasts thirty minutes.
            </p>
            <p>
                The Team Round has fifteen questions for all team members to
                collaboratively solve in forty-five minutes. The Guts Round is
                an hour-long round that is graded live and requires team members
                to work together on progressively harder five-problem sets, each
                of which is worth more points than the previous set. The Fun
                Round is an exciting round consisting of several separate
                mini-events, including puzzles, trivia, and an estimation round.
            </p>
            <p>
                After hosting the tournament for several years, we have worked
                hard to calibrate the accessibility and difficulty of problems
                in both divisions. Our guiding philosophy is that every
                participant in MBMT should find the rounds approachable yet
                challenging.
            </p>
            <p>
                Individual and team winners in each division will receive medals
                or trophies! Team scores are calculated using Team and Guts
                Round scores, combined with a weighted average of individual
                scores, and teams with the highest scores in each division win.
                The individual awards are for high-scoring individuals overall
                and in each subject test. There are also additional awards for
                high performance on the Guts Round. Finally, we will also
                recognize the highest-scoring 6th-grade student in the {lower}{" "}
                Division.
            </p>

            <Heading level={2}>Schedule</Heading>
            <table className="border-collapse w-fit text-sm sm:text-base">
                <tbody>
                    <tr>
                        <td className="px-2 py-1 align-top border-r text-right">
                            11:00 AM - 12:00 PM
                        </td>
                        <td className="px-2 py-1 align-top border-l text-left">
                            Registration + Lunch
                        </td>
                    </tr>
                    <tr>
                        <td className="px-2 py-1 align-top border-r text-right">
                            12:15 - 12:45 PM
                        </td>
                        <td className="px-2 py-1 align-top border-l text-left">
                            Subject Test #1
                        </td>
                    </tr>
                    <tr>
                        <td className="px-2 py-1 align-top border-r text-right">
                            12:55 - 1:25 PM
                        </td>
                        <td className="px-2 py-1 align-top border-l text-left">
                            Subject Test #2
                        </td>
                    </tr>
                    <tr>
                        <td className="px-2 py-1 align-top border-r text-right">
                            1:25 - 1:40 PM
                        </td>
                        <td className="px-2 py-1 align-top border-l text-left">
                            Break
                        </td>
                    </tr>
                    <tr>
                        <td className="px-2 py-1 align-top border-r text-right">
                            1:45 - 2:30 PM
                        </td>
                        <td className="px-2 py-1 align-top border-l text-left">
                            Team Round
                        </td>
                    </tr>
                    <tr>
                        <td className="px-2 py-1 align-top border-r text-right">
                            2:40 - 3:40 PM
                        </td>
                        <td className="px-2 py-1 align-top border-l text-left">
                            Guts Round
                        </td>
                    </tr>
                    <tr>
                        <td className="px-2 py-1 align-top border-r text-right">
                            3:40 - 4:20 PM
                        </td>
                        <td className="px-2 py-1 align-top border-l text-left">
                            Fun Round + Tiebreakers
                        </td>
                    </tr>
                    <tr>
                        <td className="px-2 py-1 align-top border-r text-right">
                            4:30 - 5:00 PM
                        </td>
                        <td className="px-2 py-1 align-top border-l text-left">
                            Awards Ceremony
                        </td>
                    </tr>
                </tbody>
            </table>

            <Heading level={2}>Contact</Heading>
            <p>
                If you have any questions, please contact the Montgomery Blair
                math team captains at{" "}
                <Link href="mailto:mbhs.math.team@gmail.com">
                    mbhs.math.team@gmail.com
                </Link>
                , or our coach, Jeremy Schwartz, at{" "}
                <Link href="mailto:Jeremy_R_Schwartz@mcpsmd.org">
                    Jeremy_R_Schwartz@mcpsmd.org
                </Link>
                . We look forward to seeing you and your Mathletes at this
                year&apos;s MBMT!
            </p>
        </Main>
    );
}
