export function getProjects() {
    return [
        {
            title: "Personal Website",
            technologies: "HTML, CSS, Bootstrap",
            description: "Build your own personal website portfolio.",
            githubLink: "#",
            liveDemoLink: "#",
            isPlaceholder: false,
            hasWeatherWidget: false
        },
        {
            title: "Weather Checker",
            technologies: "JavaScript, JSON and Fetch API",
            description: "Search for a city to view current temperature, feels like temperature, and weather description.",
            githubLink: "#",
            liveDemoLink: "#",
            isPlaceholder: false,
            hasWeatherWidget: true
        },
        {
            title: "Algorithm and Structural Foundations",
            technologies: "Coming soon!",
            description: "A future project space for algorithm practice and foundational data structure work.",
            githubLink: "#",
            liveDemoLink: "#",
            isPlaceholder: false,
            hasWeatherWidget: false
        },
        {
            title: "Note Taking App",
            technologies: "Javascript, Node.js, Express.js, MongoDB, Mongoose, EJS, Passport.js",
            description: "A full-stack note-taking application where users can securely create, edit, delete, and search notes using a responsive interface and rich text editor.",
            details: {
                what: "",
                whyHow: "Created during my Software Development Bootcamp to strengthen full-stack and MVC skills. The app includes Google OAuth with Passport.js and required integrating Quill while keeping note previews clean by converting rich text to readable plain previews server-side.",
                when: "Completed in 2026 as part of the Software Development Bootcamp.",
                whoWhere: "Developed independently by Megan Simpson.",
                outcomes: [
                    "Built a full-stack application using MVC architecture.",
                    "Implemented CRUD operations and secure user authentication.",
                    "Integrated MongoDB for storage and Quill for rich text editing.",
                    "Improved MVC, Git/GitHub workflows, debugging, and AI-assisted development skills."
                ]
            },
            githubLink: "https://github.com/megancsimpson/note-taking-app",
            isPlaceholder: false,
            hasWeatherWidget: false
        },
        {
            title: "Placeholder Project 2",
            technologies: "Technologies Used: Add stack here",
            description: "Placeholder project description. Replace this with details about the user need, the build, and what makes it noteworthy.",
            githubLink: "#",
            liveDemoLink: "#",
            isPlaceholder: true,
            hasWeatherWidget: false
        },
        {
            title: "Placeholder Project 3",
            technologies: "Technologies Used: Add stack here",
            description: "Placeholder project description. Use this space later for another portfolio piece, experiment, or client build.",
            githubLink: "#",
            liveDemoLink: "#",
            isPlaceholder: true,
            hasWeatherWidget: false
        }
    ];
}