import jadyn from './images/jadyn.png'
import abigail from './images/abigail.png'

const Contact = () => {
    return (
        <div className="py-2 ">
            <div className="flex justify-evenly flex-col items-center">

                <div className="bg-gradient-to-r  from-gray-200/90 to-gray-200/50  rounded-lg shadow-xl flex w-1/3 ml-4 transition-transform hover:scale-105">
                    <div className="mx-auto w-1/3 self-center">
                        <img src={abigail} alt="Profile" />
                    </div>
                    <div className="mt-1 mx-auto w-2/3 text-center">
                        <p className="text-sm text-gray-800 leading-5 md:text-base pb-1 pt-3">Abigail Roberts</p>
                        <p className="text-xs text-neutral-500 leading-5 md:text-sm pb-1 pt-1">WCCI Student</p>
                        <p className="text-xs text-gray-500 leading-5 md:text-sm pt-1">abigailroberts2000@gmail.com</p>
                        <p>
                            <a href="https://github.com/abigailrxberts" target='_blank' rel='noopener noreferrer' className="inline-flex items-center text-slate-400 hover:underline p-1 text-xs md:text-sm">
                                GitHub
                                <path stroke="currentColor" />
                            </a>
                        </p>
                        <p>
                            <a href="https://www.linkedin.com/in/abigail-roberts-208187171/" target='_blank' rel='noopener noreferrer' className="pb-1 text-xs md:text-sm inline-flex items-center text-slate-400 hover:underline">
                                LinkedIn
                                <path stroke="currentColor" />
                            </a>
                        </p>
                    </div>
                </div>

            <div className="bg-gradient-to-r from-gray-200/90 to-gray-200/50  rounded-lg shadow-xl flex w-1/3 ml-4 transition-transform hover:scale-105 mt-10">
                    <div className="mx-auto w-1/3 self-center">
                        <img src={jadyn} alt="Profile" />
                    </div>
                    <div className="mt-1 mx-auto w-2/3 text-center">
                        <p className="text-sm text-gray-800 leading-5 md:text-base pb-1 pt-3">Jadyn Asamoah</p>
                        <p className="text-xs text-neutral-500 leading-5 md:text-sm pb-1 pt-1">IT Field Technician</p>
                        <p className="text-xs text-gray-500 leading-5 md:text-sm pt-1">jadynkonadu@gmail.com</p>
                        <p>
                            <a href="https://github.com/Jadynkonadu" target='_blank' rel='noopener noreferrer' className="inline-flex items-center text-slate-400 hover:underline p-1 text-xs md:text-sm">
                                GitHub
                                <path stroke="currentColor" />
                            </a>
                        </p>
                        <p>
                            <a href="https://www.linkedin.com/in/jadyn-asamoah-811890205/" target='_blank' rel='noopener noreferrer' className="pb-1 text-xs md:text-sm inline-flex items-center text-slate-400 hover:underline">
                                LinkedIn
                                <path stroke="currentColor" />
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
