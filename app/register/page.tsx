import Heading from "@/components/Heading";
import Main from "@/components/Main";
import RegistrationForm from "./RegistrationForm";

export default function Page() {
    return (
        <Main>
            <Heading level={1}>Registration</Heading>
            {/* Welcome to MBMT 11, held on March 9, 2025! We highly encourage
            schools&apos; math team coaches or math resource department
            chairs to act as sponsors; however, any adult who is willing to
            supervise the team is fine. */}
            <RegistrationForm />
        </Main>
    );
}
