import { Github } from "lucide-react"; // ✅ Import the GitHub icon

export const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Cloud Platform",
            description: "Scalable cloud infrastructure management with real-time monitoring and automated scaling.",
            technologies: ["React", "Node.js", "AWS", "Docker"],
            githubLink: "https://github.com/nguyennb12/AdvCompSecProject",
            projectLink: "#" // Replace with actual project link if available
        },
        {
            id: 2,
            title: "AI Chatbot",
            description: "An AI-powered chatbot using OpenAI's GPT API for real-time customer support automation.",
            technologies: ["Python", "FastAPI", "OpenAI API", "React"],
            githubLink: "https://github.com/nguyennb12/AI-Chatbot",
            projectLink: "#" // Replace with actual project link if available
        },

        {
            id: 3,
            title: "E-commerce",
            description: "A modern e-commerce platform with user authentication, cart functionality, and payment processing.",
            technologies: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
            githubLink: "https://github.com/nguyennb12/E-commerce",
            projectLink: "#" // Replace with actual project link if available
        },
        {
            id: 4,
            title: "Real-time Chat App",
            description: "A real-time chat application with authentication, WebSocket integration, and real-time messaging.",
            technologies: ["Node.js", "React.js", "Firebase", "MongoDB"],
            githubLink: "https://github.com/nguyennb12/Real-chat",
            projectLink: "#" // Replace with actual project link if available
        }
    ];

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div key={project.id} className="glass rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">

                            {/* Project Title & Description */}
                            <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                            <p className="text-gray-300 mb-4">{project.description}</p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-500 text-white py-1 px-3 rounded-full text-sm hover:bg-blue-500/80 
                                        hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex justify-between items-center">
                                <a
                                    href={project.projectLink}
                                    className="text-blue-400 hover:text-blue-300 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Project
                                </a>

                                {/* GitHub Link */}
                                {project.githubLink && (
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white hover:text-blue-400 transition-colors flex items-center gap-2"
                                    >
                                        <Github size={24} />
                                        <span className="hidden md:inline">GitHub</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};