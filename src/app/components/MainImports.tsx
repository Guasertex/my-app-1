/* Instruments */
import { usePathname } from "next/navigation";
import styles from "../styles/layout.module.css";
import Link from "next/link";
import Image from "next/image";
/* Components */
import OrderButton from "./OrderButton";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Nav } from "./Nav";
import DefaultNav from "./DefaultNav";
import PlantNav from "./PlantNav";
import { Hero } from "./Hero/Hero";
import HeroContent from "./Hero/HeroContent";
import PlantFooter from "./PlantFooter";
/* Images */
import logotype from "../../../public/logo1.svg";
import logotype2 from "../../../public/logo2.svg";
import heroImg from "../../../public/bgimg.png";
import firstBush from "../../../public/1bush.png";
import secondBush from "../../../public/2bush.png";
import grassInPot1 from "../../../public/grassInAPot1.png";
import grassInPot2 from "../../../public/grassInAPot2.png";
import greenAgree from "../../../public/greenAgree.svg";
import cactusInTheGround from "../../../public/cactusInTheGround.png";
import plantsInAPot from "../../../public/plantsInAPot.png";
import playgoundVid from "../../../public/playgoundVid.svg";
import plantFirst from "../../../public/plant1.png";
import plantSecond from "../../../public/plant2.png";
import plantThird from "../../../public/plant3.png";
import instagram from "../../../public/instagram.svg";
import facebook from "../../../public/facebook.svg";
import twitter from "../../../public/twitter.svg";
import youtube from "../../../public/youtube.svg";


export {
    usePathname,
    styles,
    Image,
    Link,
    Nav,
    DefaultNav,
    PlantNav,
    Header,
    Footer,
    Hero,
    HeroContent,
    PlantFooter,
    OrderButton,
    logotype,
    logotype2,
    heroImg,
    firstBush,
    secondBush,
    grassInPot1,
    grassInPot2,
    greenAgree,
    cactusInTheGround,
    plantsInAPot,
    playgoundVid,
    plantFirst,
    plantSecond,
    plantThird,
    instagram,
    facebook,
    twitter,
    youtube,
}