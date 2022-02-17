import AlignDxThumbnail from '../../assets/works/aligndx-thumbnail.jpg';
import ImmuneThumbnail from '../../assets/works/immune-thumbnail.jpg';
import RandumbBotThumbnail from '../../assets/works/randumbbot-thumbnail.jpg';
import SearchEngineThumbnail from '../../assets/works/searchengine-thumbnail.jpg';

export const Tags = [
    {
        id: "everything",
        name: "Everything"
    },
    {
        id: "development",
        name: "Development"
    },
    {
        id: "graphics",
        name: "Graphics"
    },
    {
        id: "uiux",
        name: "UI/UX"
    }
]

export const WorksItems = [
    {
        id: "msci-541-search-engine",
        title: "Search Engine",
        description: "Created a search engine using modern ranking and smoothing algorithm.",
        filter: ["development"],
        banner: SearchEngineThumbnail,
        images: "",
        tags: ["Java"]
    },
    {
        id: "aligndx",
        title: "AlignDx",
        description: "Online tool for rapid real-time diagnostics of RNA sequence datasets for pathogen and host detection.",
        filter: ["development", "uiux"],
        banner: AlignDxThumbnail,
        images: "",
        tags: ["ReactJS", "MaterialUI", "Sketch"]
    },
    {
        id: "immune-system",
        title: "Immune System",
        description: "2D vector of the complex intracacies of the immune system.",
        filter: ["graphics"],
        banner: ImmuneThumbnail,
        images: "",
        tags: ["Illustrator"]
    },
    {
        id: "randumb-bot",
        title: "Randumb Bot",
        description: "A personal university Discord bot for music, reminders, and roles.",
        filter: ["development"],
        banner: RandumbBotThumbnail,
        images: "",
        tags: ["NodeJS", "DiscordJS"]
    },
]
