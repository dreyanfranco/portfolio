

import { projectsData } from '@/lib/data'
import React from 'react'
import Project from './project'
import SectionHeading from './section-heading'

const Projects = () => {
    return (
        <section className='scroll-mt-28' id='projects'>
            <SectionHeading>Projects</SectionHeading>
            <div>
                {
                    projectsData.map((project, index) => (
                        <React.Fragment key={index}>
                            <Project {...project} />
                        </React.Fragment>
                    ))
                }
            </div>
        </section>
    )
}

export default Projects