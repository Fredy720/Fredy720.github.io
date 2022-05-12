import ParagraphLight from "../UI/ParagraphLight";
import SectionHeader from "../UI/SectionHeader";
import AboutMe from "./AboutMe";

const AboutSection = props => {
    return (
        <div class='bg-black pb-32'>
            <section id='section-about'>
                <SectionHeader text={'About Me'} headerGradientStyle={'header-about-me'} />
                <AboutMe projectTitle={`Hola! 👋 Soy Freddy`} bgImage={'bg-virus'} techStack={['HTML5', 'CSS3', 'GitHub', 'JS', 'React', 'Figma', 'Netlify', 'Linux']}>
                    <ParagraphLight>
                    Estudiante de último año de Ingeniería en informática y sistemas, en la Universidad Rafael Landívar de Quetzaltenango. Interesado en especializarme como desarrollador backend, actualmente domino principalmente los lenguajes de programación: Java y Python. Contando con varios proyectos diferentes algunos de la carrera y algunos por Hobby, así mismo cuento con conocimientos generales de Frontend: como HTML, Javascript, y el Framework React.
                    </ParagraphLight>
                </AboutMe>
            </section>
        </div>
    );
};

export default AboutSection;