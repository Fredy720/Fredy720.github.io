import logo from '../../assets/img/logo.png';

const Navbar = props => {
    return (
        <div class='pt-2 fixed mx-auto w-full z-10 bg-gray-50 navbar hidden md:block'>
            <nav class='flex justify-between mx-auto max-w-5xl md:w-4/5 lg:w-3/4 '>
                <span class='hidden w-10 md:block md:ml-5 lg:mr-0'><a href='#header' aria-label='Logo'><img src="https://avatars.githubusercontent.com/u/56169346?v=4" alt='' class='inline' /></a></span>
                <ul class='flex  md:mr-2'>
                    <li><a href='#section-projects' class='btn btn-ghost btn-md mx-1 sm:btn-sm lg:btn-md h-auto'>Proyectos</a> </li>
                    {/* <li><a href='#section-code-library' class='btn btn-ghost btn-md mx-1 sm:btn-sm lg:btn-md h-auto'>Code<span class='hidden sm:inline sm:ml-2'>Library</span></a> </li> */}
                    {/* <li><a href='#section-blog-posts' class='btn btn-ghost btn-md mx-1 sm:btn-sm lg:btn-md h-auto'>Blog<span class='hidden sm:inline sm:ml-2'>Posts</span></a> </li> */}
                    <li><a href='#section-about' class='btn btn-ghost btn-md mx-1 sm:btn-sm lg:btn-md h-auto'>Sobre Mí</a> </li>
                    <li><a href='#section-contact' class='btn btn-ghost btn-md sm:btn-sm lg:btn-md h-auto'>Contacto</a> </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;