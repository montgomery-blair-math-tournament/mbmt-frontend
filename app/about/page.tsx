import Main from "@/components/Main";
import Heading from "@/components/Heading";
import Image from "next/image";
import sponsorList from "@/lib/constants/sponsorList";
import Link from "@/components/Link";
import { writers, staff } from "@/lib/constants/people";
import { REPO_LINK } from "@/lib/constants/settings";

const getShuffledStaff = () => [...staff].sort(() => Math.random() - 0.5);
const getShuffledWriters = () => [...writers].sort(() => Math.random() - 0.5);

export const dynamic = "force-dynamic";

export default function AboutPage() {
    const shuffledStaff = getShuffledStaff();
    const shuffledWriters = getShuffledWriters();

    return (
        <Main>
            <Heading level={1}>About Us</Heading>

            <p>
                MBMT is proudly organized and executed entirely by students from
                the Montgomery Blair High School Math Team.
            </p>

            <Heading level={2}>Contest Organizers</Heading>
            <ul className="text-center text-xl grid sm:grid-cols-3 grid-cols-1 gap-2">
                {shuffledStaff.map((person, i) => (
                    <li key={i}>{person}</li>
                ))}
            </ul>

            <Heading level={2}>Problem Writers</Heading>
            <p>
                We&apos;re very thankful to our problem writers, without whom we
                wouldn&apos;t have a contest:
            </p>
            <ul className="lg:columns-5 md:columns-4 sm:columns-3 columns-2 md:text-md text-sm text-center">
                {shuffledWriters.map((person, i) => (
                    <li key={i}>{person}</li>
                ))}
            </ul>

            <Heading level={2}>Website</Heading>
            <p>
                This website was developed by Alex Zhao &apos;26 (Github:
                @zeyuanzhao) and Kiran Oliver &apos;28 (Github: @penguen01). A
                large portion of the content on these webpages was written by
                Noah Singer &apos;18 (Github: @singerng) and Noah Kim &apos;18
                (Github: @noahbkim). Both this website and the grading server
                are hosted on servers at Montgomery Blair High School. The code
                is available on <Link href={REPO_LINK}>GitHub</Link>.
            </p>

            <Heading level={2}>Sponsors</Heading>
            <p>
                MBMT is sponsored by the following organizations:{" "}
                {sponsorList
                    .map(({ name }) => name + ", ")
                    .toSpliced(
                        -1,
                        1,
                        "and " + sponsorList[sponsorList.length - 1].name,
                    )}
                .
            </p>
            <div className="flex flex-wrap justify-around gap-2 items-center bg-white border border-gray-200 py-4">
                {sponsorList.map(({ name, image, link, width }) => (
                    <Link
                        key={name}
                        href={link}
                        className="h-fit bg-white"
                        target="_blank"
                    >
                        <Image src={image} alt={`${name} logo`} width={width} />
                    </Link>
                ))}
            </div>
        </Main>
    );
}
