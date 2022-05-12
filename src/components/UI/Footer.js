import iconLinkedIn from '../../assets/img/icon-linkedin.webp';
import iconTwitter from '../../assets/img/icon-twitter.webp';
import iconGitHub from '../../assets/img/icon-github.webp';
import iconReact from '../../assets/img/icon-react.svg';
import iconTailwind from '../../assets/img/icon-tailwind.svg';
import locationPin from '../../assets/img/locationPin.webp';
import IconBlack from "./IconBlack";
import NavbarFooter from "./NavbarFooter";
import resume from '../../assets/pdf/cv.pdf';
import EmailOptions from './EmailOptions';


const Footer = props => {
    return (
        <footer class='flex flex-wrap justify-evenly gap-5 lg:gap-10 max-w-5xl m-auto mt-32'>
            <NavbarFooter />
            <div class='text-left hero-content items-start'>
                <div class='max-w-2xl'>
                    <p class='mb-5'><span><img src={locationPin} class='h-4 inline mb-1 mr-1' alt='Location pin icon' /></span>Guatemala, Huehuetenango</p>
                    <h1 class='mb-5  font-bold font-poppins'>
                        <span class='block text-md lg:text-xl'>Freddy Mateo,</span><span class='text-3xl lg:text-5xl subpixel-antialiased'>Desarrollador<br />Backend</span>
                    </h1>
                    <a href={resume} target='_blank' rel="noreferrer" class='btn mr-10 btn-md mb-5 sm:mb-0'>Obten mi CV</a>
                    <div class="dropdown dropdown-hover">
                        <a href='fredy720b@gmail.com' target='_blank' rel="noreferrer" class="btn btn-outline btn-md">fredy720b@gmail.com</a>
                        <EmailOptions />
                    </div>
                    <div class="mt-14 flex justify-between">
                        <IconBlack icon={iconLinkedIn} goTo='https://www.linkedin.com/in/fredy-mateo-4b353323a/' ariaLabel='LinkedIn'>LinkedIn</IconBlack>
                        <IconBlack icon={iconTwitter} goTo='' ariaLabel='Twitter'>Twitter</IconBlack>
                        <IconBlack icon={iconGitHub} goTo='https://github.com/Fredy720' ariaLabel='GitHub'>GitHub</IconBlack>
                    </div>
                    <div class='mt-10 text-xs'>
                        <p>👨‍💻 Portfolio site made by Freddy Meteo, using<img src={iconReact} alt="" class='w-7 inline -mx-1' />ReactJS, <img src={iconTailwind} alt="" class='w-4 inline mx-1' />TailwindCSS and DaisyUI.</p>
                        <p>Icons from <a href='https://www.flaticon.com/' target='_blank' rel='noreferrer' class='link ' >Flaticon.</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;