import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a professional in the IT field with general knowledge of computer systems, including the Office Suite, Windows, Linux, and Hardware. I am currently working as a Test/QA Analyst and have experience in User Support and Infrastructure. I am studying web programming and am eager to learn more about programming and software quality.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Junior Tester Analyst",
    company: "ADISRA.",
    description: `Test/QA Analyst, performing various types of tests such as manual, regression, exploratory, and unit testing. Documenting and organizing tests in spreadsheets and documents, as well as managing processes using the JIRA system.`,
    technologies: ["Database", "Tests", "Office Suite", "Windows", "Linux"],
  },
  {
    year: "2022 - 2023",
    role: "Itern IT infrastructure",
    company: "Omnibees",
    description: `IT Support Intern for user support and infrastructure, resolving various issues for internal company users through tickets, installing software, and fixing basic hardware issues, as well as providing general assistance to the infrastructure and support team.`,
    technologies: ["Windows", "Office Suite", "Hardware", "Networks"],
  },
  {
    year: "2021 - 2022",
    role: "Itern IT infrastructure",
    company: "Inox Tech",
    description: `IT Support Intern for user support and infrastructure, resolving various issues for internal company users through SAP tickets, installing software, and fixing basic hardware and switch issues, as well as providing general assistance to the infrastructure and support team`,
    technologies: ["Windows", "Windows Server", "Linux", "Android suport", "SAP", "Networks"],
  },

];

export const PROJECTS = [
  {
    title: "Pokédex Website",
    link: "https://felipevvictor.github.io/js-developer-pokedex/index.html",
    image: project1,
    description:
      "Website that search differents pokemons for a API, this site is structured with HTML, CSS and JavaScript",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Mini Game YuGiOh",
    link: "https://felipevvictor.github.io/js-game-yugioh-jokenpo-edition/",
    image: project2,
    description:
      "One miniGame of Rock-paper-scissors with YuGiOh Theme",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Spotify Website",
    image: project3,
    description:
      "WebSite of Spotify",
    technologies: ["HTML", "CSS", "BootsTrap"],
  },
  {
    title: "EpicGames WebSite",
    image: project4,
    description:
      "Clone of site of games EpicGames",
    technologies: ["HTML", "CSS", "TypeScript", "Angular"],
  },
];

