"use client"

import { useTheme } from '@/context/theme-context';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SectionHeading from './section-heading';

const Experience = () => {
    const { ref } = useSectionInView('Experience')
    const { theme } = useTheme()

    return (
        <section
            id='experience'
            ref={ref}
            className='scroll-mt-28 mb-28 sm:mb-40'>
            <SectionHeading>Experience</SectionHeading>
            <VerticalTimeline lineColor=''>
                {experiencesData.map((item, index) => (
                    <VerticalTimelineElement
                        key={index}
                        contentStyle={{
                            background: theme === 'light' ? "#f3f4f6" : 'rgba(255,255,255,0.05)',
                            boxShadow: "none",
                            border: "1px solid rgba(0, 0, 0, 0.05)",
                            textAlign: "left",
                            padding: "1.3rem 2rem",
                        }}
                        contentArrowStyle={{
                            borderRight: "0.4rem solid #9ca3af"
                        }}
                        date={item.date}
                        icon={item.icon}
                        iconStyle={{
                            background: 'white',
                            fontSize: "1.5rem"
                        }}
                        visible={true}
                    >
                        <h3 className="font-semibold capitalize">{item.title}</h3>
                        <p className="font-normal !mt-0">{item.company}</p>
                        <p className="!mt-1 !font-normal text-gray-700">
                            {item.description}
                        </p>
                    </VerticalTimelineElement>
                ))}

            </VerticalTimeline>
        </section>
    )
}

export default Experience