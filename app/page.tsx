import Heading from "@/components/Heading";
import MBMTLogo from "@/components/MBMTLogo";
import Link from "@/components/Link";

export default function Home() {
    return (
        <div className="flex flex-col gap-8 w-3/4 mx-auto flex-1 items-center justify-center">
            <MBMTLogo />

            <div className="flex flex-col gap-2">
                <Heading level={1}>
                    The Montgomery Blair Math Tournament
                </Heading>
                <div className="flex flex-col gap-1 items-center">
                    <p className="text-xl text-center">
                        A mathematics competition for middle school students in
                        the Maryland area
                    </p>
                    <p className="text-center">
                        MBMT 11 was held on March 8, 2026. See problems and
                        solutions on our <Link href="/archive">archive</Link>{" "}
                        page.
                    </p>
                </div>
            </div>

            <div className="flex gap-4 flex-col md:flex-row">
                <div>
                    <Heading level={2}>Solve problems.</Heading>
                    <p>
                        MBMT is all about math. Whether you&apos;re just a
                        beginner or a super Mathlete, you&apos;ll find
                        interesting and challenging math awaiting you at MBMT.
                        We&apos;re passionate about math, and we want to give
                        you the best competition experience possible.
                    </p>
                </div>
                <div>
                    <Heading level={2}>Work together.</Heading>
                    <p>
                        Life is better in teams. The competition is divided into
                        several rounds, during several of which you get to work
                        together with up to four other students to collaborate
                        to do math. You can help support each other and make
                        each other better competitors, as well as winning glory
                        for your school!
                    </p>
                </div>
                <div>
                    <Heading level={2}>Learn math.</Heading>{" "}
                    <p>
                        Math is everywhere! Mathematics is useful for describing
                        all sorts of things in our world, as well as all sorts
                        of things just in our brains. MBMT will help you master
                        all sorts of math skills, both for the real world and
                        for other math competitions.
                    </p>
                </div>
            </div>
        </div>
    );
}
