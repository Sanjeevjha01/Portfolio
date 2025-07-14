import { OrbitingCircles } from "./OrbitingCircles";
import html5 from '../assets/logo/html-5.svg';
import css3 from '../assets/logo/css-3.svg';
import javascript from '../assets/logo/javascript.svg';
import react from '../assets/logo/react.svg';
import tailwind from '../assets/logo/tailwind-css.svg';
import mysql from '../assets/logo/mysql.svg';
import mongodb from '../assets/logo/mongodb.svg';
import nodejs from '../assets/logo/nodejs.svg';
import expressjs from '../assets/logo/express.svg';
import git from '../assets/logo/git.svg';
import github from '../assets/logo/github.svg';

export function Frameworks() {
    const skills = [
        "html5",
        "css3",
        "javascript",
        "react",
        "tailwind",
        "mysq",
        "mongodb",
        "nodejs",
        "expressjs",
        "git",
        "github",];

    const icons = {
        html5,
        css3,
        javascript,
        react,
        tailwind,
        mysql,
        mongodb,
        nodejs,
        expressjs,
        git,
        github
    };
    return (
        <div className="relative flex h-[15rem] w-full flex-col items-center justify-center ">
            <OrbitingCircles iconSize={40}>
                {skills.map(((skill, index) => (<Icon key={index} src={icons[skill]} />)))}
            </OrbitingCircles>
            <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
                {skills.reverse().map(((skill, index) => (<Icon key={index} src={icons[skill]} />)))}

            </OrbitingCircles>
        </div>
    );
}

const Icon = ({ src }) => (
    <img src={src} className="duration-200 rounded-sm hover:scale-110" />
)

