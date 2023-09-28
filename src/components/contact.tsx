
import { sendEmail } from '@/actions/sendEmail'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import React from 'react'
import toast from 'react-hot-toast'
import SectionHeading from './section-heading'
import SubmitBtn from './submit-btn'

const Contact = () => {
    const { ref } = useSectionInView('Contact')


    return (
        <motion.section
            id='contact'
            ref={ref}
            className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 1
            }}
            viewport={{
                once: true
            }}
        >
            <SectionHeading>Contact me</SectionHeading>
            <p className='text-gray-700 -mt-6'>Please contact me at{' '}
                <a className='underline' href="mailto:dreyanfranco@gmail.com">
                    dreyanfranco@gmail.com
                </a>{' '}
                or through this form
            </p>

            <form className='mt-10 flex flex-col' action={async (formData) => {
                const { data, error } = await sendEmail(formData)


                if (error) {
                    toast.error(error)
                    return
                }

                toast.success('Email sent succesfully')
            }}
            >
                <input
                    className='h-14 px-4 rounded-lg borderBlack'
                    name='senderEmail'
                    type="email" required maxLength={500}
                    placeholder='Your email'
                />
                <textarea
                    className='h-52 my-3 rounded-lg borderBlack p-4'
                    name='message'
                    placeholder='Your message'
                    required
                    maxLength={1000}
                />
                <SubmitBtn />
            </form>
        </motion.section >
    )
}

export default Contact