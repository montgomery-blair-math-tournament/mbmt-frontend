import Heading from "@/components/Heading";
import Link from "@/components/Link";
import Main from "@/components/Main";
import { REGISTRATION_FORM_LINK } from "@/lib/constants/settings";

export default function Page() {
    return (
        <Main>
            <Heading level={1}>Registration</Heading>
            <p>
                Welcome to MBMT 11, held on March 9, 2025! We highly encourage
                schools&apos; math team coaches or math resource department
                chairs to act as sponsors; however, any adult who is willing to
                supervise the team is fine.
                <br />
                Register below, or{" "}
                <Link href={REGISTRATION_FORM_LINK} target="_blank">
                    open in a new tab
                </Link>
                :
            </p>
            <div className="flex flex-1 justify-center">
                <iframe
                    src={`${REGISTRATION_FORM_LINK}?embedded=true`}
                    className="flex-1 bg-white"
                    title="Registration form"
                    loading="lazy"
                    allowFullScreen
                />
            </div>
        </Main>
    );
}
