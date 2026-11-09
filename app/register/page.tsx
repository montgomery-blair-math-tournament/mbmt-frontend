import Heading from "@/components/Heading";
import Link from "@/components/Link";
import Main from "@/components/Main";

export default function Page() {
    return (
        <Main>
            <Heading level={1}>Registration</Heading>
            <p>
                Welcome to MBMT 12, held on March 7th, 2027! We highly encourage
                schools&apos; math team coaches or math resource department
                chairs to act as sponsors; however, any adult who is willing to
                supervise the team is fine. The registration form for the
                upcoming competition can be found below or at{" "}
                <Link
                    href={process.env.REGISTRATION_FORM_LINK!}
                    target="_blank"
                >
                    this link
                </Link>
                .
            </p>
            <iframe
                src={process.env.REGISTRATION_FORM_EMBED_LINK}
                height={800}
                className="border-0 m-0 overflow-hidden"
            >
                Loading…
            </iframe>
        </Main>
    );
}
