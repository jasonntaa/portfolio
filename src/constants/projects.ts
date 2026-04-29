export interface Project {
    id: string;
    slug: string;
    title: string;
    image: string;
    description: string;
    shortDescription: string;
    tech: string[];
    liveSiteUrl: string;
    codeUrl: string;
    isPlaceholder?: boolean;
}

export const projects: Project[] = [
    {
        id: "Fync Finance",
        slug: "fync-finance",
        title: "Fync Finance",
        image: "/images/fync-finance.png",
        description:
            "A full-stack budget planning and financial tracking application. Fync connects to your bank accounts via Plaid, syncs transactions, and provides intelligent categorization and budgeting tools to help you take control of your finances.",
        shortDescription:
            "Full-stack budget planning app with Plaid integration.",
        tech: [
            "NextJS",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Prisma",
            "Supabase",
            "Plaid API",
        ],
        liveSiteUrl: "https://fync-finance.vercel.app/",
        codeUrl: "https://github.com/jasonntaa/fync-finance",

    },
    {
        id: "MoViews",
        slug: "moviews",
        title: "MoViews",
        image: "/images/moviews.png",
        description:
            "A web application to discover trending movies and TV shows. MoViews is a dynamic movie discovery platform that leverages the TMDB API to provide users with up-to-date information on trending, popular, and upcoming films. Appwrite is used to track the user's searches, creating a list of trending movies.",
        shortDescription:
            "A dynamic movie discovery platform powered by TMDB and Appwrite.",
        tech: [
            "NextJS",
            "Tailwind CSS",
            "JavaScript",
            "Vercel",
            "UX/UI",
            "Figma",
            "AppWrite",
            "NodeJS",
            "REST Apis",
        ],
        liveSiteUrl: "https://moviews-orpin.vercel.app/",
        codeUrl: "https://github.com/jasonntaa/Movie-Project",
    },
    {
        id: "Browser Extensions Manager",
        slug: "browser-extensions-manager",
        title: "Browser Extensions Manager",
        image: "/images/extension-manager.png",
        description:
            "A project from FrontEnd Mentor, practicing creating pixel perfect design. Optimized the code for maintaibility and scalability.",
        shortDescription:
            "Pixel-perfect UI built from a FrontEnd Mentor design challenge.",
        tech: ["Javascript", "HTML", "CSS", "Vercel", "UX/UI", "Figma"],
        liveSiteUrl: "https://browser-extensions-manager-ui-main-silk.vercel.app/",
        codeUrl: "https://github.com/jasonntaa/browser-extensions-manager-ui-main",
    },

];
