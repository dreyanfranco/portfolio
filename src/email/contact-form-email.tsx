
import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Section,
    Text,
} from "@react-email/components";
// import { Tailwind } from "@react-email/tailwind";
import React from "react";

type ContactFormEmailProps = {
    message: string;
    senderEmail: string;
};

export default function ContactFormEmail({
    message,
    senderEmail,
}: ContactFormEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>New message from portfolio site</Preview>
            {/* <Tailwind> */}
            <Body style={{ background: '#f9f9fb' }}>
                <Container>
                    <Section style={{ marginTop: '2.5rem', marginBottom: '2.5rem', padding: '1rem 2.5rem 1rem 2.5rem', borderRadius: '0.375rem' }} className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
                        <Heading style={{ lineHeight: '1.25', color: 'black' }} className="leading-tight">
                            Message from the contact form
                        </Heading>
                        <Text>{message}</Text>
                        <Hr />
                        <Text style={{ color: 'black' }}>Sender&apos;s email is: {senderEmail}</Text>
                    </Section>
                </Container>
            </Body>
            {/* </Tailwind> */}
        </Html>
    );
}