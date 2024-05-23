import holiyay from "../../public/holiyay.png"
import renhouse from "../../public/renhouse.png"
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";
import React from "react"
import { CgWorkAlt } from "react-icons/cg"
import { FaReact } from "react-icons/fa"
import { LuGraduationCap } from "react-icons/lu"

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const

export const experiencesData = [
    {
        title: "Frontend Developer",
        company: "Sharehood",
        description:
            "My frontend stack includes React, JavaScript, MaterialUI and Context. For the backend I was working with Python and Postgres.",
        icon: React.createElement(CgWorkAlt),
        date: " Mar 2023 - present",
    },
    {
        title: "Fullstack Developer",
        company: "Proxya",
        description:
            "I worked in group of 5 developers where I built features using TypeScript, React, NodeJs and MongoDB. I collaborated with different deparments through out the project.",
        icon: React.createElement(CgWorkAlt),
        date: "Feb 2022 - Feb 2023",
    },
    {
        title: "Fullstack Developer",
        company: "Elavon",
        description:
            "I worked in group of 5 developers where I built features using TypeScript, React, NodeJs and MongoDB. I collaborated with different deparments through out the project.",
        icon: React.createElement(CgWorkAlt),
        date: "Jun 2021 - Dec 2021",
    },
] as const

export const projectsData = [
    {
        title: "Renhouse",
        description:
            "User-friendly platform that simplifies the process of booking holiday destinations. Whether you're a property owner looking to rent out your soace or a traveler in search of the perfect place to stay.",
        tags: ["React", "JavaScript", "Tailwind", "NodeJs", "MongoDB"],
        imageUrl: renhouse,
        link: "https://renhouse-frontend.onrender.com/",
    },
    {
        title: "Holiyay",
        description:
            "QuickBook aims to be a one-stop solution for all your booking needs, ensuring convenience, efficiency, and satisfaction for both service providers and customers.",
        tags: [
            "React",
            "TypeScript",
            "Tailwind",
            "Playwright",
            "NodeJs",
            "MongoDB",
        ],
        imageUrl: holiyay,
        link: "https://holiyay.onrender.com/",
    },
    {
        title: "Under construction",
        description: "info about project 3",
        tags: ["React", "TypeScript", "MongoDB", "Tailwind", "NestJs"],
        imageUrl: renhouse,
        link: "https://renhouse-frontend.onrender.com/",
    },
] as const

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Git",
    "Tailwind",
    "MongoDB",
    "Redux",
    "Express",
    "Nestjs",
    "Python",
    "Django",
    "Docker",
] as const
