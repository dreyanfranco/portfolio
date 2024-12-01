import holiyay from "../../public/holiyay.png"
import nestApi from "../../public/nest-api.png"
import renhouse from "../../public/renhouse.png"
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";
import React from "react"
import { CgWorkAlt } from "react-icons/cg"

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
        title: "Fullstack Developer",
        company: "Sharehood",
        description:
            "I focused on creating and maintaining a visually appealing and user-friendly marketplace frontend using React. I also collaborated on developing scalable microservices, utilized Docker for containerization, and translated Figma designs into interfaces with MaterialUI, enhancing the user experience.",
        icon: React.createElement(CgWorkAlt),
        date: " Mar 2023 - Oct 2023",
    },
    {
        title: "Fullstack Developer",
        company: "Proxya",
        description:
            "I built robust web application features using TypeScript, React, NodeJS, and MongoDB. I implemented CI/CD workflows with GitHub Actions, performed end-to-end testing to ensure software reliability, and contributed to designing REST APIs for efficient project and employee management.",
        icon: React.createElement(CgWorkAlt),
        date: "Feb 2022 - Feb 2023",
    },
    // {
    //     title: "Fullstack Developer",
    //     company: "Elavon",
    //     description:
    //         "I worked in group of 5 developers where I built features using TypeScript, React, NodeJs and MongoDB. I collaborated with different deparments through out the project.",
    //     icon: React.createElement(CgWorkAlt),
    //     date: "Jun 2021 - Dec 2021",
    // },
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
            "Holiyay aims to be a one-stop solution for all your booking needs, ensuring convenience, efficiency, and satisfaction for both service providers and customers.",
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
        title: "Booking API",
        description:
            "A scalable RESTful API built with NestJS, MongoDB, TypeScript, and Stripe. It includes user authentication, hotel booking management, secure payment integration, and extensive unit testing with Jest to ensure reliability and performance",
        tags: ["NestJs", "TypeScript", "MongoDB", "Jest"],
        imageUrl: nestApi,
        link: "https://nest-booking.onrender.com/",
    },
] as const

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "NodeJs",
    "Git",
    "Tailwind",
    "MongoDB",
    "Redux",
    "Express",
    "NestJs",
    "PostgreSQL",
    "Github Actions",
    "Docker",
    "Jest",
    "Playwright",
] as const
