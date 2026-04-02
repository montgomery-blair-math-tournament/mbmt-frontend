import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
export default function Math({ eq, raw }: { eq: string; raw?: boolean }) {
    if (raw) {
        return <Latex>{eq}</Latex>;
    } else {
        return <Latex>{`$${eq}$`}</Latex>;
    }
}
