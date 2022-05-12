import iconFigma from '../../assets/img/icon-figma.png';
import iconHTML5 from '../../assets/img/icon-html5.png';
import iconCSS3 from '../../assets/img/icon-css3.png';
import iconGitHub from '../../assets/img/icon-github.webp';
import iconJavaScript from '../../assets/img/icon-javascript-black.png';
import iconReact from '../../assets/img/icon-react.jpg';
import iconNetlify from '../../assets/img/icon-netlify.png';
import iconLinux from '../../assets/img/icon-linux.png';
import iconJava from '../../assets/img/java.png'
import iconPytho from '../../assets/img/python (1).png'
import iconMysql from '../../assets/img/mysql.png'
import TechStackElement from './TechStackElement';


const techArray = [
    <TechStackElement key={`${Math.random()}`} icon={iconHTML5}>HTML5</TechStackElement>,
    <TechStackElement key={`${Math.random()}`} icon={iconCSS3}>CSS3</TechStackElement>,
    <TechStackElement key={`${Math.random()}`} icon={iconGitHub}>Git & GitHub</TechStackElement>,
    <TechStackElement key={`${Math.random()}`} icon={iconJavaScript}>JavaScript</TechStackElement>,
    <TechStackElement key={`${Math.random()}`} icon={iconReact}>ReactJS</TechStackElement>,
    <TechStackElement key={`${Math.random()}`} icon={iconLinux}>Linux, Windows</TechStackElement>,
    <TechStackElement key={`${Math.random()}`} icon={iconJava}>Java</TechStackElement>,
    <TechStackElement key={`${Math.random()}`} icon={iconPytho}>Python</TechStackElement>,
    <TechStackElement key={`${Math.random()}`} icon={iconMysql}>Mysql</TechStackElement>,
];

const TechStack = props => {
    const filteredArray = [...techArray];
    !props.usedTech.includes('Linux') && filteredArray.splice(7, 1);
    !props.usedTech.includes('Netlify') && filteredArray.splice(6, 1);
    !props.usedTech.includes('Figma') && filteredArray.splice(5, 1);
    !props.usedTech.includes('React') && filteredArray.splice(4, 1);
    !props.usedTech.includes('JS') && filteredArray.splice(3, 1);
    !props.usedTech.includes('GitHub') && filteredArray.splice(2, 1);
    !props.usedTech.includes('CSS3') && filteredArray.splice(1, 1);
    !props.usedTech.includes('HTML5') && filteredArray.splice(0, 1);
    !props.usedTech.includes('Java') && filteredArray.splice(0, 1);
    !props.usedTech.includes('Python') && filteredArray.splice(0, 1);
    !props.usedTech.includes('Mysql') && filteredArray.splice(0, 1);
    return filteredArray;
};

export default TechStack;