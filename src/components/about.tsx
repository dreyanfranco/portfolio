'use client'

import { motion } from 'framer-motion'
import React from 'react'
import SectionHeading from './section-heading'

const About = () => {
    return (
        <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id='about'
        >
            <SectionHeading>About me</SectionHeading>
            <p className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid sunt eaque distinctio error quis. Doloribus explicabo libero numquam harum praesentium laboriosam adipisci, vero omnis. Non nobis itaque impedit? Enim, similique!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, rem, fugit cupiditate praesentium vitae sed autem asperiores aperiam inventore esse alias architecto placeat natus aliquid dolorem consequatur eveniet nostrum saepe.</p>
        </motion.section >
    )
}

export default About