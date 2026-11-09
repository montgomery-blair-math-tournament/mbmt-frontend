import "katex/dist/katex.min.css";
import katex from "katex";

export default function Math({ eq }: { eq: string }) {
    return (
        <span dangerouslySetInnerHTML={{ __html: katex.renderToString(eq) }} />
    );
}
