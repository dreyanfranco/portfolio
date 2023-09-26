import renhouse from "../../public/renhouse.png";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

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
] as const;

export const experiencesData = [
    {
        title: "Graduated bootcamp",
        location: "Miami, FL",
        description:
            "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
        icon: React.createElement(LuGraduationCap),
        date: "2019",
    },
    {
        title: "Front-End Developer",
        location: "Orlando, FL",
        description:
            "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
        icon: React.createElement(CgWorkAlt),
        date: "2019 - 2021",
    },
    {
        title: "Full-Stack Developer",
        location: "Houston, TX",
        description:
            "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "2021 - present",
    },
] as const;

export const projectsData = [
    {
        title: "Renhouse",
        description:
            "User-friendly platform that simplifies the process of booking holiday destionations. Whether you're a property owner looking to rent out your soace or a traveler in search of the perfect place to stay.",
        tags: ["React", "JavaScript", "Tailwind", "NodeJs", "MongoDB"],
        imageUrl: renhouse,
    },
    {
        title: "project 2",
        description:
            "info about project 2",
        tags: ["React", "JavaScript", "CSS", "Tailwind", "Context", "NodeJs", "MongoDB"],
        imageUrl: renhouse,
    },
    {
        title: "project 3",
        description:
            "info about project 3",
        tags: ["React", "TypeScript", "MongoDB", "Tailwind", "NestJs"],
        imageUrl: renhouse,
    },
] as const;

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
    "Docker"

] as const;