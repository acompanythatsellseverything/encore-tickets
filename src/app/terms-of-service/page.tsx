import Title from "@/components/Title";
import Box from "@/components/Box";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Encore Tickets: Terms Of Service',
    description: 'Discover Encore Tickets\' Terms of Service. Learn about our policies for VIP access, concert, sports, and theater tickets, and ensure smooth, secure transactions for personalized event experiences.',
    keywords: 'Terms of Service, ticket policy, VIP tickets, premium event access, event policies, ticket purchase terms, refund policy, Encore Tickets, concert tickets, theater tickets, sports events, event security',
    openGraph: {
        title: 'Encore Tickets: Terms Of Service',
        description: 'Discover Encore Tickets\' Terms of Service. Learn about our policies for VIP access, concert, sports, and theater tickets, and ensure smooth, secure transactions for personalized event experiences.',
        siteName: 'Encore Tickets',
    },
    twitter: {
        title: 'Encore Tickets: Terms Of Service',
        description: 'Discover Encore Tickets\' Terms of Service. Learn about our policies for VIP access, concert, sports, and theater tickets, and ensure smooth, secure transactions for personalized event experiences.',
    },
};

const privacyPolicyInfo = [
    {
        title: 'Introduction',
        txt: 'Welcome to Encore Tickets. By accessing or using our website and services, you agree to comply with and be bound by these Terms of Service. If you do not agree with these terms, please do not use our services.',
    },
    {
        title: 'Eligibility',
        txt: "You must be at least 18 years old to use Encore Tickets. By using our services, you represent and warrant that you have the legal capacity to enter into a binding agreement."
    },
    {
        title: 'Account Registration',
        topics: {
            "Account Creation": 'To access certain features of Encore Tickets, you may need to create an account. You agree to provide accurate and complete information during registration and to keep your account information updated.',
            "Account Security": 'You are responsible for maintaining the confidentiality of your account credentials and for any activities that occur under your account. Notify us immediately if you suspect any unauthorized use of your account.',
        }
    },
    {
        title: 'Ticket Purchases and Sales',
        topics: {
            "Buying Tickets": 'When you purchase tickets through Encore Tickets, you agree to pay the specified price and any applicable fees. All sales are final, and no refunds or exchanges are permitted unless the event is canceled or significantly changed.',
            "Selling Tickets": 'If you sell tickets through Encore Tickets, you are responsible for delivering the tickets to the buyer in a timely manner. You must ensure that the tickets are authentic and valid for the event.',
            "Payment Processing": 'Payments for ticket sales and purchases are processed securely through our third-party payment providers. By using our services, you agree to the payment provider\'s terms and conditions.',
        }
    },
    {
        title: 'Event Changes and Cancellations',
        topics: {
            "Event Changes": 'If an event is rescheduled or significantly altered, we will notify you as soon as possible. In such cases, you may be eligible for a refund or exchange, subject to the event organizer\'s policies.',
            "Event Cancellations": 'If an event is canceled, you will receive a refund for your ticket purchase, minus any applicable fees. Refunds will be processed according to the event organizer\'s terms.'
        },
    },
    {
        title: 'VIP and Concierge Services',
        topics: {
            "Service Availability": 'VIP and concierge services are subject to availability and may vary based on the event location and date. We do our best to fulfill all requests, but some services may be limited.',
            "Additional Fees": 'Fees for VIP and concierge services will be outlined during the planning process and must be paid in advance.',
        }
    },
    {
        title: 'User Conduct',
        topics: {
            "Prohibited Activities": 'You agree not to engage in any activities that violate these Terms of Service or applicable laws, including but not limited to fraudulent activities, ticket scalping, or misuse of our services.',
            "Respectful Behavior": 'You must use our platform in a respectful manner, refraining from harassment, abuse, or any form of harmful behavior towards other users or our staff.'
        }
    },
    {
        title: 'Intellectual Property',
        topics: {
            "Ownership": 'All content on the Encore Tickets website, including text, graphics, logos, and software, is the property of Encore Tickets or its licensors and is protected by copyright and other intellectual property laws.',
            "Limited License": 'You are granted a limited, non-exclusive, non-transferable license to access and use our website and services for personal, non-commercial purposes. You may not reproduce, distribute, or create derivative works from our content without our express written permission.'
        }
    },
    {
        title: 'Disclaimers and Limitation of Liability',
        topics: {
            "Service Availability": 'Encore Tickets strives to provide reliable services but does not guarantee continuous or error-free access to our website or services. We are not responsible for any interruptions or delays.',
            "No Warranties": 'Our services are provided "as is" without any warranties, express or implied. We do not guarantee the accuracy or completeness of the information on our website.',
            "Limitation of Liability": 'To the fullest extent permitted by law, Encore Tickets shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services.'
        }    
    },
    {
        title: 'Indemnification',
        txt: 'You agree to indemnify and hold Encore Tickets, its affiliates, and its employees harmless from any claims, damages, liabilities, and expenses (including legal fees) arising from your use of our services or violation of these Terms of Service.',
    },
    {
        title: 'Changes to Terms of Service',
        txt: 'Encore Tickets reserves the right to modify these Terms of Service at any time. We will notify you of any significant changes by posting the updated terms on our website and indicating the date of the most recent update. Your continued use of our services after any changes constitutes your acceptance of the new terms.',
    },
    {
        title: 'Governing Law',
        txt: 'These Terms of Service are governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising from these terms or your use of our services shall be resolved in the courts of [Your Jurisdiction].',
    },
    {
        title: 'Termination',
        txt: 'Encore Tickets may terminate or suspend your access to our services at any time, without prior notice, for conduct that we believe violates these Terms of Service or is harmful to our users or business operations.'
    },
    {
        title: 'Contact Information',
        txt: 'If you have any questions or concerns about these Terms of Service, please contact us at orders@encoretix.com.'
    },
]

export default function TermsOfService() {
    return (
        <main className='bg-beige'>
            <Box>
                <div className='pt-20 md:pt-32'>
                    <Title>Encore Tickets Terms of Service</Title>
                    <div className='mt-8'>
                        {privacyPolicyInfo.map((section, index) => (
                            <div key={index} className={`${index && 'mt-20'}`}>
                                <p className='font-extrabold text-xl md:text-2xl -tracking-tighter uppercase'>{index + 1}. {section.title}</p>
                                {/* Если есть основной текст, отображаем его */}
                                {section.txt && <p className='mt-8 text-sm md:text-lg'>{section.txt}</p>}
                                {/* Если есть темы (topics), отображаем их */}
                                {section.topics && Object.entries(section.topics).map(([topicTitle, topicContent], i) => (
                                    <div key={i} className='mt-8'>
                                        <p className='text-base md:text-lg uppercase'>{topicTitle}</p>
                                        <p className='mt-2.5 text-sm md:text-lg'>{topicContent}</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </Box>
        </main>
    )
}
