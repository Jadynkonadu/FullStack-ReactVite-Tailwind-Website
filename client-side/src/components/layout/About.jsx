import jadyn from './images/jadyn.png'
import abigail from './images/abigail.png'

const About = () => {
    return (
        <section className="p-6">
            <div className="lg:gap-xl-60 grid gap-x-40 md:grid-cols-2 xl:grid-cols-2 pt-5 px-20">
                <div className="mb-12 bg-gradient-to-b from-slate-100/50 to-slate-800/50 rounded-full p-40 transition-transform hover:scale-105 shadow-2xl px-20">
                    <img src={abigail}
                        className="mx-auto mb-6 rounded-full shadow-lg dark:shadow-black/20" />
                    <p className="mb-2 font-bold">Abigail Roberts</p>
                    <p className="text-neutral-500 dark:text-gray-300">WCCI Student</p>
                    <p className="text-neutral-500/ dark:text-white/50 text-md">Graduating with a bachelors degree in forensic science from Eastern Kentucky University in 2022, I quickly shifted paths of what I wanted to do with my life. I have always had a passion for technology, whether it be an interest in programming, or building computers from the ground up, I knew that working in the tech industry was where I was meant to be. I am an aspiring fullstack web developer, and I hope to soon make my dreams a reality after finishing the We Can Code IT bootcamp.</p>
                </div>
                <div className="mb-12 bg-gradient-to-b from-slate-100/50 to-slate-800/50 rounded-full p-40 transition-transform hover:scale-105 shadow-2xl px-20">
                    <img src={jadyn}
                        className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20" />
                    <p className="mb-2 font-bold">Jadyn Asamoah</p>
                    <p className="text-neutral-500 dark:text-gray-300">IT Field Technician</p>
                    <p className="text-neutral-500/ dark:text-white/50 text-md">Coming from a small country like Ghana, I have always aspired to one day help create solutions to better the community that made me. During my study for a degree in Biophysics at North Carolina A & T, my journey has led me to discover my true passion lies in technology, particularly computers and the internet. I am now an aspiring fullstack web developer & software engineer, eager to embark on a dynamic career in the world of web development, where science and technology converge to create innovative solutions. -- all around the world.</p>
                </div>
            </div>
        </section>
    )
}
export default About
