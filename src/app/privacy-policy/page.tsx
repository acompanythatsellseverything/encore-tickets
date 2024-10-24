import Title from "@/components/Title";
import Box from "@/components/Box";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Encore Tickets: Privacy Policy',
    description: 'Learn how Encore Tickets collects, uses, and protects your personal data. Review our privacy practices for securing your information when purchasing tickets, accessing VIP services, and engaging with our platform.',
    keywords: 'Privacy Policy, data protection, personal information, ticket purchase privacy, VIP services privacy, data collection practices, Encore Tickets, secure transactions, GDPR compliance, user privacy',
    openGraph: {
        title: 'Encore Tickets: Privacy Policy',
        description: 'Learn how Encore Tickets collects, uses, and protects your personal data. Review our privacy practices for securing your information when purchasing tickets, accessing VIP services, and engaging with our platform.',
        siteName: 'Encore Tickets',
        images: ['/favicon-big.png']
    },
    twitter: {
        title: 'Encore Tickets: Privacy Policy',
        description: 'Learn how Encore Tickets collects, uses, and protects your personal data. Review our privacy practices for securing your information when purchasing tickets, accessing VIP services, and engaging with our platform.',
        images: ['/favicon-big.png']
    },
};

const privacyPolicyInfo = [
    {
        title: 'Introduction',
        txt: 'At Encore Tickets, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our services.',
    },
    {
        title: 'Information We Collect',
        topics: {
          "Personal Information": 'We collect personal information necessary to process your transactions, including your name, email address, and phone number.',
          "Event Preferences": 'We may collect details about your event preferences to provide personalized recommendations and services.',
          "Usage Data": 'We collect information on how you interact with our website, including your IP address, browser type, pages visited, and other usage data to improve our services and enhance your experience.'
        }
    },
    {
        title: 'How We Use Your Information',
        topics: {
            "Transaction Processing": 'Your personal information is used to process ticket purchases and sales, including payment processing and ticket delivery.',
            "Personalized Services": 'We use your information to offer personalized recommendations, VIP concierge services, and customized event packages.',
            "Communication": 'We may contact you via email, phone, or SMS regarding your transactions, event updates, or customer support inquiries.',
            "Marketing": 'With your consent, we may use your information to send promotional offers, event updates, and newsletters. You can opt-out of marketing communications at any time.',
            "Improvement of Services": 'Usage data helps us analyze and improve our website\'s performance, security, and user experience.',
        }
    },
    {
        title: 'Sharing Your Information',
        topics: {
            "Third-Party Service Providers": 'We may share your personal information with third-party service providers who assist with payment processing, ticket delivery, marketing, and customer support. These providers are required to protect your information and use it solely for the services they provide.',
            "Legal Compliance": 'We may disclose your information if required by law, such as in response to a court order, or to protect the rights and safety of Encore Tickets, our users, or the public.',
            "Business Transfers": 'In the event of a merger, acquisition, or sale of assets, your personal information may be transferred as part of the business transaction. We will notify you of any such changes to ownership or use of your information.',
        }
    },
    {
        title: 'Data Security',
        txt: 'We employ industry-standard security measures to protect your personal information. This includes encryption, secure servers, and regular security audits. While we strive to protect your data, no system is completely secure, and we cannot guarantee the absolute security of your information.',
    },
    {
        title: 'Your Rights',
        topics: {
            "Access and Correction": 'You have the right to access and correct your personal information at any time. You can update your information through your account settings or by contacting our support team.',
            "Data Deletion": 'You may request the deletion of your personal information, subject to legal and contractual obligations. Please note that deleting your information may affect your ability to use some of our services.',
            "Opt-Out": 'You can opt-out of receiving marketing communications by following the unsubscribe instructions in our emails or contacting our support team.',
        }
    },
    {
        title: 'Cookies and Tracking Technologies',
        txt: 'Our website uses cookies and similar tracking technologies to enhance your experience, analyze website performance, and deliver personalized content. By using our website, you consent to our use of cookies. You can manage your cookie preferences through your browser settings.',
    },
    {
        title: 'Children\'s Privacy',
        txt: 'Encore Tickets is not intended for use by children under the age of 13. We do not knowingly collect personal information from children. If we become aware that a child under 13 has provided us with personal information, we will take steps to delete it.',
    },
    {
        title: 'International Data Transfers',
        txt: 'If you are accessing our services from outside the country where our servers are located, your information may be transferred internationally. We take steps to ensure that your information is protected according to applicable laws.',
    },
    {
        title: 'Changes to This Privacy Policy',
        txt: 'Encore Tickets may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the updated policy on our website and indicating the date of the most recent update.',
    },
    {
        title: 'Contact Us',
        txt: 'If you have any questions or concerns about this Privacy Policy or how we handle your personal information, please contact us at privacy@encoretickets.com.',
    },
]

export default function PrivacyPolicy() {
    return (
        <main className='bg-beige'>
            <Box>
                <div className='pt-20 md:pt-32'>
                    <Title>Encore Tickets Privacy Policy</Title>
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
