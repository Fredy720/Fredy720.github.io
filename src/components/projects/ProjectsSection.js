import ProjectRight from '../projects/ProjectRight';
import ProjectLeft from '../projects/ProjectLeft';
import SectionHeader from '../UI/SectionHeader';
import ParagraphLight from '../UI/ParagraphLight';
import H4Header from '../UI/H4Header';
// import CodeLibraryItem from './components/projects/CodeLibraryItem';

const ProjectsSection = props => {
    return (
        <div class='bg-black'>
            <section id="section-projects">
                <SectionHeader text={'Projects'} headerGradientStyle={'header-projects'} />
                <ProjectRight
                    projectTitle={'Sistema Punto de venta'}
                    techStack={['HTML5', 'CSS3', 'GitHub', 'Figma', 'Netlify']}
                    buttonGitHub={'https://github.com/elmergustavo/SistemaPuntoVenta'}>
                    <ParagraphLight>
                        <p>Sistema creado para satisfacer la necesidad de un Restaurante para poder manejar las transacciones diarias que realiza, desde poder llevar un control diario de sus ventas, de los suministros con los que cuenta y principalmente el poder realizar reportes de ventas, cotizaciones y llevar un control de todas las actividades que se ejecutan con el día a día. El proyecto ha sido realizado utilizando el lenguaje de JAVA. </p>
                    </ParagraphLight>
                    
                    <ParagraphLight>
                        <div >
                            <img src="https://raw.githubusercontent.com/elmergustavo/SistemaPuntoVenta/master/Capturas/2.PNG" alt='Freddy Mateo with a hat in a park on a sunny day.' class='max-w-xs' />
                        </div>
                    </ParagraphLight>
                </ProjectRight>
                <ProjectLeft
                    projectTitle={'Proyecto TASKMERN '}
                    bgImage={'bg-to-do'}
                    techStack={['HTML5', 'CSS3', 'GitHub', 'JS', 'Figma', 'Netlify']}
                    buttonWatchItLive={'https://celadon-dragon-7a7e71.netlify.app/'}
                    buttonGitHub={'https://github.com/url-classes/proyecto-grupal---frontend-tasksmern'}>
                    <ParagraphLight>
                        <p>Proyecto aplicando el frameworm de React, con el objetivo de gestionar y adminsitrar proyectos, desde designar tareas, designar responsabilidades para actividades, es practicamente un gestor de actividades para proyectos, cuidando la interacción con el usuario, colores y presentación, así mismo la inclusión de un chat para mejorar la comunicación entre colaboradores asignados.</p>
                    </ParagraphLight>
                   
                    <ParagraphLight>
                        
                        <img src="https://github.com/url-classes/proyecto-grupal---frontend-tasksmern/blob/main/asessts/9.png?raw=true" alt='Freddy Mateo with a hat in a park on a sunny day.' class='max-w-xs' />
                      
                    </ParagraphLight>

                    <ProjectRight
                    projectTitle={'Proyecto Analisis de datos. '}
                    techStack={['HTML5', 'CSS3', 'GitHub', 'Figma', 'Netlify']}
                    buttonGitHub={'https://github.com/danieltistoj/proyecto_analisis_de_datos'}>
                    <ParagraphLight>
                        <p>Proyecto creado con el fin de monitorear la actividad principal de los usuarios, así mismo la aplicación de guardado y gestión de datos masivos, en este proyecto se creo un script ejecutable en segundo plano que su función principal es ir guardando las diferentes aplicaciones utilizadas, así mismo se creo un keylogger con el fin de monitorear cada cierto tiempo las palabras escritas. </p>
                    </ParagraphLight>
                    
                    <ParagraphLight>
                        <div >
                            <img src="https://raw.githubusercontent.com/elmergustavo/SistemaPuntoVenta/master/Capturas/2.PNG" alt='Freddy Mateo with a hat in a park on a sunny day.' class='max-w-xs' />
                        </div>
                    </ParagraphLight>
                </ProjectRight>   

                <ProjectRight
                    projectTitle={'Proyecto SO'}
                    techStack={['HTML5', 'CSS3', 'GitHub', 'Figma', 'Netlify']}
                    buttonGitHub={'https://github.com/danieltistoj/Proyecto_SO'}>
                    <ParagraphLight>
                        <p>Proyecto enfocado en la utilización y administración de tareas y procesos en una computadora, desde utilización de espacio, manejo de colas y de diferentes características como Mov, Contador, Base y limite, creado principalmente para gestión de tareas en un procesador. </p>
                    </ParagraphLight>
                  
                </ProjectRight>


                <ProjectRight
                    projectTitle={'Proyecto Compiladores'}
                    techStack={['HTML5', 'CSS3', 'GitHub', 'Figma', 'Netlify']}
                    buttonGitHub={'https://github.com/alextax/Compis'}>
                    <ParagraphLight>
                        <p>Proyecto generado para análisis de un lenguaje de programación creado en el curso de Compiladores, utilizando el lenguaje Lex y Java, se realizó un análisis semantico y sintactico de los lengujes para comprensión a profundidad de como funcionan los lenguajes compiladores. </p>
                    </ParagraphLight>
                  
                </ProjectRight>
                </ProjectLeft>
            </section>
            {/* <section id="section-code-library">
          <SectionHeader text={'Code Library'} headerGradientStyle={'header-projects'} class={'mt-52'} />
          <div class='flex flex-wrap md:flex-nowrap gap-10 max-w-5xl m-auto mt-32 px-2'>
            <div>
              <CodeLibraryItem codeLibraryTitle={'5 use cases of the useState ReactJS hook'} goTo={'#'}>
                <ParagraphLight><p>useState is a Hook that needs to be called inside a function component to add some local state to it.React will preserve this state between component re-renders.</p></ParagraphLight>
                <ParagraphLight><p>There are many use cases for the useState hook, but in this article, I will focus on the following five: </p></ParagraphLight>
                <ParagraphLight>
                  <ul class='list-disc ml-4'>
                    <li>State management</li>
                    <li>Conditional rendering</li>
                    <li>Toggle flags (true/false)</li>
                    <li>Counter</li>
                    <li>Get API data and store it in state</li>
                  </ul>
                </ParagraphLight>
              </CodeLibraryItem>
            </div>
            <div>
              <CodeLibraryItem codeLibraryTitle={'JavaScript array methods'} goTo={'#'}>
                <p>Vestibulum sed vestibulum libero, bibendum accumsan nisi.Duis mattis felis vitae pellentesque ultricies.Phasellus elementum feugiat metus vel fermentum.Aenean vitae nisl vel metus tincidunt rutrum.Nunc egestas, quam vitae porttitor lacinia, nisi purus pharetra ipsum, cursus iaculis neque massa vel.</p>
              </CodeLibraryItem>
            </div>
            <div>
              <CodeLibraryItem codeLibraryTitle={'CSS Flex and Grid'} goTo={'#'}>
                <p>Vestibulum sed vestibulum libero, bibendum accumsan nisi.Duis mattis felis vitae pellentesque ultricies.Phasellus elementum feugiat metus vel fermentum.Aenean vitae nisl vel metus tincidunt rutrum.Nunc egestas, quam vitae porttitor lacinia, nisi purus pharetra ipsum, cursus iaculis neque massa vel.</p>
              </CodeLibraryItem>
            </div>
          </div>
        </section> */}
        </div>
    );
};

export default ProjectsSection;