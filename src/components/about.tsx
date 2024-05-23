"use client"

import { useSectionInView } from "@/lib/hooks"
import { motion } from "framer-motion"
import React from "react"
import SectionHeading from "./section-heading"

const About = () => {
    const { ref } = useSectionInView("About")

    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                I&apos;m fullstack developer with 2 years of experience in
                creating dynamic and user-friendly web applications. My journey
                in the tech world has equipped me with a balanced skill set in
                both front-end and back-end development, enabling me to deliver
                comprehensive solutions that are both visually appealing and
                highly functional.
            </p>
            <p>
                My experience has taught me the importance of collaboration, and
                I enjoy working closely with cross-functional teams to bring
                innovative ideas to life. I am a problem-solver at heart, with a
                keen eye for detail, and I thrive on overcoming challenges to
                deliver high-quality software solutions.
            </p>
        </motion.section>
    )
}

export default About
