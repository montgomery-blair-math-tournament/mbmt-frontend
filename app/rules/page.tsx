import Link from "@/components/Link";
import Math from "@/components/Math";
import RedBold from "@/components/RedBold";
import { DIVISIONS } from "@/lib/constants/settings";
import Heading from "@/components/Heading";
import Main from "@/components/Main";

export default function RulesPage() {
    const lower = DIVISIONS[0].name;
    const upper = DIVISIONS[1].name;

    return (
        <Main>
            <Heading level={1}>Official Rules</Heading>

            <p>
                <i>Last updated 07/01/2026</i>
            </p>

            <p>
                Welcome to the eleventh annual Montgomery Blair Math Tournament,
                or MBMT XI for short! MBMT is a free middle school math contest
                that seeks to inspire students&apos; interest in mathematics and
                to encourage them to explore math beyond the school curriculum.
                Contest details can be found on the{" "}
                <Link href="/info">information page</Link>.
            </p>

            <Heading level={2}>Registration</Heading>
            <ol className="list-decimal ml-4">
                <li>
                    Participants in MBMT compete in teams of 5 (with some
                    exceptions, discussed below). The math team sponsors of each
                    school or organization register individual student teams
                    through the website via the{" "}
                    <Link href="/register">registration page</Link>. There is no
                    limit to the number of full teams a school or organization
                    may send.
                </li>
                <li>
                    <RedBold>{`Upper division (${upper}) only`}</RedBold>:
                    Subject Tests are specifically limited. The goal of this
                    policy is twofold: to make the subjects more competitive and
                    balanced, and to perhaps introduce other topics of math not
                    normally found in the classroom setting.
                </li>
                <ol className="list-decimal ml-8">
                    <li>
                        Each Upper division ({upper}) team can have no more than
                        3 tests per subject.
                    </li>
                    <li>
                        Lower division ({lower}) teams can select any
                        combination of subject tests.
                    </li>
                </ol>

                <li>
                    If there are fewer than 5 students interested in
                    participating, you may register incomplete teams. For an
                    incomplete team’s Team and Guts round scores to be
                    officially considered, incomplete teams must have{" "}
                    <b>at least 3 students</b>. Teams with one or two students
                    will be merged into larger teams.
                </li>
                <li>
                    We <b>do not</b> allow mixed-school or mixed-organization
                    teams. However, we do allow organizations consisting of
                    home-school groups.
                </li>
                <li>
                    We <b>do not</b> allow elementary school students to
                    participate in MBMT.
                </li>
                <li>
                    <b>
                        Any school or organization with students in grades 6-8
                        can register and attend.
                    </b>
                </li>
            </ol>

            <Heading level={2}>Round Format</Heading>
            <ol className="list-decimal ml-4">
                <li>
                    The <b>Individual Round</b> consists of two tests, each with
                    eight questions and lasting thirty minutes. Individual Tests
                    are on two subjects among <b>Algebra</b>, <b>Geometry</b>,{" "}
                    <b>Counting and Probability</b>, and <b>Number Theory</b>.
                </li>
                <li>
                    The <b>Team Round</b> contains fifteen questions for all
                    team members to collaboratively solve in 45 minutes.
                </li>
                <li>
                    The <b>Guts Round</b> is an intense but exciting round in
                    which competing teams can see each others’ progress. It is
                    60 minutes long, is graded live, and requires each team to
                    work together on progressively harder five-problem sets.
                    Each new set is worth more points than the previous set.{" "}
                    <RedBold>
                        Different divisions will have different Guts round
                        questions
                    </RedBold>
                    . Note that there are{" "}
                    <b>no benefits of turning in the last set early</b>. There
                    are no bonus points for timing. Please also note that{" "}
                    <RedBold>
                        the weighting system for the later problems has been
                        tweaked
                    </RedBold>{" "}
                    to more accurately reflect difficulty.
                </li>
                <li>
                    The <b>Fun Round</b> is an exciting round consisting of
                    several separate mini-events, including puzzles, trivia, and
                    an estimation round. This round is purely for enjoyment and
                    winners will not receive awards (though fun swag can be won
                    during the round).
                </li>
            </ol>

            <Heading level={2}>Important Notation</Heading>
            <ol className="list-decimal ml-4">
                <li>
                    <b>Sequence notation</b>: <Math eq="a_n" /> denotes the{" "}
                    <Math eq="n" />
                    th term of a sequence, where <Math eq="n" /> is a positive
                    integer. For example, in the sequence{" "}
                    <Math eq="1, 1, 2, 3, 5, \ldots" />,{" "}
                    <Math eq="a_1=1, a_2=1, a_3=2, a_4=3" />, and so on.
                </li>
                <li>
                    <b>Factorial notation</b>: <Math eq="n!" /> refers to the
                    product of all positive integers up through <Math eq="n" />.
                    That is: <Math eq="n! = n(n-1)(n-2)…(2)(1)" />. For example,{" "}
                    <Math eq="4! = 4 \cdot 3 \cdot 2 \cdot 1 = 24" />.
                </li>
                <li>
                    <p>
                        <b>
                            Ordered <Math eq="n" />
                            -tuples
                        </b>
                        : Certain questions will ask for an answer as an ordered
                        pair, ordered triple, or ordered 6-tuple.
                    </p>
                    <ul className="list-disc ml-4">
                        <li>
                            Ordered pairs: <Math eq="(a, b)" />
                        </li>
                        <li>
                            Ordered triples: <Math eq="(a, b, c)" />
                        </li>
                        <li>
                            Ordered 6-tuples: <Math eq="(a, b, c, d, e, f)" />
                        </li>
                        <li>
                            <Math eq="a, b, c" />, etc. are numbers. Any answer
                            in the form of an ordered <Math eq="n" />
                            -tuple MUST include the parentheses and commas.
                        </li>
                    </ul>
                </li>
                <li>
                    <b>Lines in geometry</b>: if a question asks &quot;compute{" "}
                    <Math eq="AB" />
                    &quot; or states that &quot;
                    <Math eq="AB = 10" />
                    &quot;, this refers to the length of line <Math eq="AB" />{" "}
                    or the distance between the points <Math eq="A" /> and{" "}
                    <Math eq="B" />.
                </li>
            </ol>

            <Heading level={2}>Important Terminology</Heading>
            <ol className="list-decimal ml-4">
                <li>
                    A circle is <i>inscribed </i> in a shape if it touches each
                    side of the shape at one point and is inside the shape. A
                    circle that is inscribed in a triangle is called the
                    triangle&apos;s <i>incircle</i>. A circle is{" "}
                    <i>circumscribed </i>about a shape if each vertex of the
                    shape lies on the circle. A circle that is circumscribed
                    about a triangle is called the triangle&apos;s{" "}
                    <i>circumcircle</i>.
                </li>
                <li>
                    The <i>multiples</i> of a number are the positive numbers
                    that divide into it evenly. For example, the multiples of 3
                    are <Math eq="3" />, <Math eq="6" />, <Math eq="9" />,{" "}
                    <Math eq="12" />, and so on. The <i>factors</i> or{" "}
                    <i>divisors</i> of a number are the positive numbers that it
                    divides into evenly. For example, the factors of{" "}
                    <Math eq="6" /> are <Math eq="1" />, <Math eq="2" />,{" "}
                    <Math eq="3" />, and <Math eq="6" />.
                </li>
                <li>
                    If two numbers or objects are selected{" "}
                    <i>independently and at random</i>, this means that they are
                    selected at random, and that how one is selected
                    doesn&apos;t affect how the other is selected.
                </li>
                <li>
                    A <i>real number</i> is a rational number or an irrational
                    number. <Math eq="-1" />, <Math eq="2.5" />, and{" "}
                    <Math eq="\pi" /> are all real numbers. Unless you&apos;ve
                    learned about complex numbers, every number you know of is a
                    real number.
                </li>
            </ol>

            <Heading level={2}>Answering Questions</Heading>
            <ol className="list-decimal ml-4">
                <li>
                    For fractional answers whose numerator and denominator are
                    both integers, fractions should be written in simplified
                    form. We do not accept mixed fractions.
                </li>
                <li>
                    Rationalizing denominators is <b>optional</b>.
                </li>
                <li>
                    For short finite decimals, we accept both the fractional and
                    the exact decimal form.
                </li>
                <li>
                    For infinite or long finite decimals, we strongly prefer the
                    fractional form. However, bar notation for repeating
                    infinite decimals is accepted.
                </li>
                <li>
                    For questions requesting the answer in terms of variables,
                    use the variables as defined in the problem.
                </li>
                <li>
                    &quot;Divisors&quot; refers to positive integer divisors
                    unless otherwise specified.
                </li>
                <li>
                    If a question specifies an answer form, such as{" "}
                    <Math eq="a + b \sqrt{2}" />, please adhere to the specified
                    form.
                </li>
            </ol>
            <p>
                Further clarifications on terminology, notation, and acceptable
                answer forms can be found at{" "}
                <Link href="/files/Conventions.pdf">
                    the conventions document linked here
                </Link>
                .
            </p>

            <Heading level={2}>Scoring and Awards</Heading>
            <ol className="list-decimal ml-4">
                <li>
                    A student’s <b>overall individual score</b> is the weighted
                    sum of the two subject tests that they have taken. The{" "}
                    <b>top 5 individuals</b> in each division will be
                    recognized, and the <b>top 5</b> will receive medals.
                </li>
                <li>
                    Students are ranked{" "}
                    <b>individually in the four subject tests</b>. The top
                    individuals of each subject test are recognized. These
                    scores are calculated through a method that accounts for
                    test item difficulty and normalizes the scores between
                    tests.
                </li>
                <li>
                    High-placement ties will be broken using tiebreaker rounds.
                    Tiebreaker rounds will be held during the Fun Round.
                </li>
                <li>
                    The <b>team score</b> is a weighted sum of the Individual{" "}
                    Round, Team Round, and Guts Round scores. The{" "}
                    <b>top 5 teams</b> in each division will be recognized.
                </li>
                <li>
                    The highest scoring 6th grade student in the <b>{lower}</b>{" "}
                    (lower) division will receive the <b>Young Scholar Award</b>
                    .
                </li>
            </ol>
            <p>
                A more detailed guide to the scoring algorithm we use can be
                found at{" "}
                <Link href="/files/Scoring.pdf">
                    the scoring document linked here
                </Link>
                .
            </p>
        </Main>
    );
}
