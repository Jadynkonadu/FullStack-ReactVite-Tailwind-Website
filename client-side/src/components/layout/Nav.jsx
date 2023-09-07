import { Link } from 'react-router-dom';
import nasaImage from './images/NASA.png';

const Nav = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <header className="bg-white fixed top-0 w-full shadow-2xl z-10">
            <nav className="g-white border-gray-200 bg-stone-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
                    <a
                        href="https://www.nasa.gov/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                    >
                        <img src={nasaImage} className="h-12 mr-3 transition-transform hover:scale-105" alt="NASA Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">J.A.C. Enterprises (NASA)</span>
                    </a>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="flex flex-wrap items-center font-medium p-4 md:p-2 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-600/50 md:dark:bg-black/20 dark:border-gray-700">
                            <li>
                                <Link to='/' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-transform hover:scale-105" onClick={scrollToTop}>Home</Link>
                            </li>
                            <li>
                                <Link to='/about-page' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-transform hover:scale-105" onClick={scrollToTop}>About</Link>
                            </li>
                            <li>
                                <Link to='/contact-page' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-transform hover:scale-105" onClick={scrollToTop}>Contact</Link>
                            </li>
                            <li>
                                <Link to='/jac-enterprises' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-transform hover:scale-105" onClick={scrollToTop}>Discover More</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Nav;
