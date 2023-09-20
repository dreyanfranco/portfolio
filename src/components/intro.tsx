"use client";
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from "next/link";
import React from 'react';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import fotoPerfil from '../../public/fotoPerfil.png';

const Intro = () => {
    return (
        <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
            <div className='flex items-center justify-center'>
                <div className='relative'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2,
                        }}
                    >
                        <Image
                            src={fotoPerfil}
                            alt='Dreyan Portrait'
                            priority={true}
                            quality="95"
                            className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
                        />
                    </motion.div>
                    <motion.span
                        className="absolute bottom-0 right-0 text-4xl"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7,
                        }}
                    >
                        👾
                    </motion.span>
                </div>
            </div>

            <motion.h1
                className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold">Hello, I&apos;m Dreyan.</span> I&apos;m a{" "}
                <span className="font-bold">full-stack developer</span> with{" "}
                <span className="font-bold">2 years</span> of experience. My focus revolves around crafting web applications using modern technologies.
            </motion.h1>

            <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
            >
                <Link
                    href="#contact"
                    className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full"
                >
                    Contact me here <BsArrowRight />
                </Link>
                <a
                    href=""
                    className="bg-white px-7 py-3 flex items-center gap-2 rounded-full"
                >Download CV <HiDownload />
                </a>
                <a
                    href=""
                    className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full"
                >
                    <BsLinkedin />
                </a>
                <a
                    href=""
                    className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full"
                >
                    <FaGithubSquare />
                </a>
            </motion.div>
        </section>
    )
}

export default Intro