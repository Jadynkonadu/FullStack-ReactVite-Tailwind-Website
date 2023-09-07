import { Link } from 'react-router-dom';
import nasaImage from './images/NASA.png';

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <footer className=" border-gray-200 bg-gradient-to-b from-black/90 to-black/50">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-5 flex justify-between">
                <a
                    href="https://www.nasa.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                >
                    <img src={nasaImage} className="h-12 mr-3" alt="NASA Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-100/75">J.A.C. Enterprises</span>
                </a>
                <div className="hidden w-full md:block md:w-auto" id="footer-default">
                    <ul className="flex flex-wrap items-center font-medium p-4 md:p-6 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-600/50 md:dark:bg-black/75 dark:border-gray-700">
                        <li>
                            <Link to='/' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={scrollToTop}>Home</Link>
                        </li>
                        <li>
                            <Link to='/about-page' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={scrollToTop}>About</Link>
                        </li>
                        <li>
                            <Link to='/contact-page' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={scrollToTop}>Contact</Link>
                        </li>
                        <li className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ">
                            Licensing
                        </li>
                        <li className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ">
                            Privacy Policy
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full max-w-screen-xl mx-auto pb-10">
                <hr className="border-gray-200 sm:mx-auto dark:border-gray-400 lg pt-5" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-200">© 2023 <Link to='/jac-enterprises' className="hover:underline" onClick={scrollToTop}>J.A.C Enterprises™</Link>. All Rights Reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;
