import { StaticImageData } from "next/image";

import AwesomeMathImage from "@/public/images/amsp.png";
import AOPSImage from "@/public/images/aopslogo.png";
import JaneStreetImage from "@/public/images/jane-street.png";
import JumpTradingImage from "@/public/images/jump.png";
import MagnetImage from "@/public/images/magnet.jpg";
import MCPSFoodImage from "@/public/images/mcpsfood.png";
import WolframImage from "@/public/images/wolfram.png";
import CitadelImage from "@/public/images/citadel.png";
import HRTImage from "@/public/images/hrt.png";
import LiveImage from "@/public/images/live.png";

const sponsorList: {
    name: string;
    image: StaticImageData;
    link: string;
    width: number;
}[] = [
    {
        name: "Montgomery Blair Magnet Foundation",
        image: MagnetImage,
        link: "http://www.mbhsmagnet.org/",
        width: 200,
    },
    {
        name: "HRT",
        image: HRTImage,
        link: "https://www.hudsonrivertrading.com/",
        width: 600,
    },
    {
        name: "Jump Trading",
        image: JumpTradingImage,
        link: "https://jumptrading.com/",
        width: 300,
    },
    {
        name: "Art of Problem Solving",
        image: AOPSImage,
        link: "https://artofproblemsolving.com/",
        width: 300,
    },
    {
        name: "Wolfram Mathematica",
        image: WolframImage,
        link: "https://www.wolfram.com/",
        width: 300,
    },
    {
        name: "Jane Street",
        image: JaneStreetImage,
        link: "https://janestreet.com/",
        width: 300,
    },
    {
        name: "MCPS Food and Nutrition Services",
        image: MCPSFoodImage,
        link: "https://www.montgomeryschoolsmd.org/departments/food-and-nutrition/",
        width: 300,
    },
    {
        name: "AwesomeMath",
        image: AwesomeMathImage,
        link: "https://www.awesomemath.org/",
        width: 200,
    },

    {
        name: "Citadel",
        image: CitadelImage,
        link: "https://www.citadel.com/",
        width: 300,
    },
    {
        name: "Live by Po-Shen Loh",
        image: LiveImage,
        link: "https://live.poshenloh.com/",
        width: 300,
    },
];

export default sponsorList;
