export const About = () => {
    const frontendSkills = [
        "React.js",
        "Vue.js",
        "Tailwind CSS",
        "TypeScript",
        "Bootstrap" // Fixed typo from "Boostrap"
    ];

    const backendSkills = [
        "JavaScript",
        "Node.js",
        "Python",
        "Django",
        "FastAPI",
        "C/C++",
        "C#"
    ];

    const dataBaseSkills = [
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "NoSQL"
    ];

    const devTools = [
        "Git",
        "Jira",
        "Agile",
        "Microsoft Azure",
        "Scrum",
        "Docker",
        "Firebase",
        "AWS"
    ];

    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="max-w-3xl mx-auto px-4">
                {/* Section Title */}
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>
                {/* Glass Card Container */}
                <div className="glass rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
                    {/* About Description */}
                    <p className="text-gray-300 mb-6">
                        Passionate developer with expertise in building scalable web
                        applications and creating innovative solutions.
                    </p>
                    {/* Skills Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Frontend Section */}
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-white">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-500 text-white py-1 px-3 rounded-full text-sm hover:bg-blue-500/80 
                                        hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        {/* Backend Section */}
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-white">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-500 text-white py-1 px-3 rounded-full text-sm hover:bg-blue-500/80 
                                        hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        {/* Database Section (Fixed Mapping Issue) */}
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-white">Database</h3>
                            <div className="flex flex-wrap gap-2">
                                {dataBaseSkills.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-500 text-white py-1 px-3 rounded-full text-sm hover:bg-blue-500/80 
                                        hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        {/* Development Tools Section */}
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-white">Development Tools</h3>
                            <div className="flex flex-wrap gap-2">
                                {devTools.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-500 text-white py-1 px-3 rounded-full text-sm hover:bg-blue-500/80 
                                        hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
