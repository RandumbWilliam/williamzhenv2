import DoxeyLab from '../../assets/experience/doxeylab.png'
import GrandAndToy from '../../assets/experience/grandandtoy.png'
import Questrade from '../../assets/experience/questrade.png'
import ShopperArmy from '../../assets/experience/shopperarmy.png'

export const ExperienceItems = [
    {
        id: "questrade",
        logo: Questrade,
        name: "Questrade",
        title: "Web Engineer",
        location: "Toronto, Ontario (Remote)",
        date: "Jan. 2022 - Present",
        description: `Demonstrated adaptability and versatility by taking on various tickets involving 
        implementing, optimizing, and mainting the internal and external sites of Questrade. Collborated
        on an online contanct management form to improve customer interactions. Developed robust automation tests
        and unit tests.`,
        tags: [
            "Agile",
            "Jira",
            "Angular",
            "HTML",
            "CSS/SASS",
            "JavaScript",
            "TypeScript",
            "Protractor",
        ]
    },
    {
        id: "doxeylab",
        logo: DoxeyLab,
        name: "Doxey Lab",
        title: "Front-End & UI/UX Developer",
        location: "Waterloo, Ontario (Remote)",
        date: "Sep. 2020 - Present",
        description: `Lead the project of Annoview and was involved in developing the front-end
        of the web tool that allows for a smooth user experiece for exploring genomoes. Involved in
        developing and designing the front-end of AlignDx of a web tool that detects pathogen from
        an RNA sequence.`,
        tags: [
            "ReactJS",
            "MaterialUI",
            "Bootstrap",
            "Python",
            "Flask",
            "MongoDB",
            "PostgresSQL",
            "Docker",
            "Sketch",
            "Illustrator"
        ]
    },
    {
        id: "shopperarmy",
        logo: ShopperArmy,
        name: "Shopper Army",
        title: "Operations Technician Assistant & Creative Director",
        location: "Toronto, Ontario",
        date: "Jan. 2020 - Jan. 2022",
        description: `Involved in developing and maintaing the automation scripts for
        daily admin operations and the redesign of the review page. Currently 
        producing high-quality social advertisments for various partners of Shopper Army.`,
        tags: [
            "Python",
            "Juptyer",
            "Vue.Js",
            "Storyblok",
            "Figma",
            "Sketch",
            "Photoshop"
        ]
    },
    {
        id: "grandandtoy",
        logo: GrandAndToy,
        name: "Grand & Toy",
        title: "PC Support Technican",
        location: "Vaughan, Ontario",
        date: "May. 2019 - Aug. 2019",
        description: `Responsible for deploying Windows 10 for the company across Canada and
        developed an automated back-up script for user data migration.`,
        tags: [
            "Bash",
        ]
    },
]