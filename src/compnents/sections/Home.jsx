
export const Home = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex flex-col items-center justify-center"
        >
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text">
                    Hi, I'm Brian
                </h1>
                <p className="text-gray-400 text-lg mb-8 max-w-lg max-auto">
                    I'm a third-year Software Engineering Technology student at Conestoga College
                    with a strong passion for web development and software design.
                    I thrive on building innovative solutions and continuously expanding my skill set.
                    I am proficient in C, C#, C++, Python, and React,
                    and I am always eager to take on new challenges that push me to grow as a developer

                </p>
                <div className="flex justify-center space-x-4">
                    <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition 
                    relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgb(59, 130, 246, 0.4)]"
                    >
                        View Projects
                    </a>
                    <a href="#contact"
                        className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
                        hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgb(59, 130, 246, 0.2) hover:bg-blue-500/10]"
                    >
                        Contact Me
                    </a>
                </div>

            </div>


        </section>

    );
};