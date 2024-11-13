import Title from '@/components/Title';
import Box from '@/components/Box';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Encore Tickets: Privacy Policy',
	description:
		'Learn how Encore Tickets collects, uses, and protects your personal data. Review our privacy practices for securing your information when purchasing tickets, accessing VIP services, and engaging with our platform.',
	keywords:
		'Privacy Policy, data protection, personal information, ticket purchase privacy, VIP services privacy, data collection practices, Encore Tickets, secure transactions, GDPR compliance, user privacy',
	openGraph: {
		title: 'Encore Tickets: Privacy Policy',
		description:
			'Learn how Encore Tickets collects, uses, and protects your personal data. Review our privacy practices for securing your information when purchasing tickets, accessing VIP services, and engaging with our platform.',
		siteName: 'Encore Tickets',
		images: ['/favicon-big.png'],
	},
	twitter: {
		title: 'Encore Tickets: Privacy Policy',
		description:
			'Learn how Encore Tickets collects, uses, and protects your personal data. Review our privacy practices for securing your information when purchasing tickets, accessing VIP services, and engaging with our platform.',
		images: ['/favicon-big.png'],
	},
};

const privacyPolicyInfo: {
	title: string;
	txt: JSX.Element | string;
	topics?: {
		[x: string]: JSX.Element | string;
	}[];
}[] = [
	{
		title: 'Introduction',
		txt: (
			<span>
				Here at Encore Tickets, we are committed to our fans. We are passionate
				about the game, but even more obsessed with providing you the most
				reliable purchasing experience on the market. In short, this boils down
				to one thing: protecting your privacy. Allow us to explain:
				<br />
				<br />
				This privacy policy describes our practices regarding personal and
				account information that is collected through our Website, located at
				www.myencoreexperience.com In this policy, &quot;personal and account
				information&quot; is referring to your name, company name, account
				information, address, telephone number, e-mail address, and any other
				identification which may identify you (i.e.: industry, profession, size
				of company, past purchase history).
				<br />
				<br />
				Please rest assured that if at any moment in time, we decide to change
				any detail of our privacy policy, we will alert you. The homepage of
				Encore Tickets, as well as any other pages we deem appropriate will be
				updated accordingly. You are our top priority and we guarantee that you
				will always know what information is collected and how it is used, if at
				all. We are committed to 100% transparency.
				<br />
				<br />
				Keep in mind that we have the legal right to modify our privacy policy
				as needed at any time, so please be sure to review it frequently, and
				always before making your next purchase. If ever material changes are
				made, we will communicate that to all of our customers.
			</span>
		),
	},
	{
		title: 'When you are on the site',
		txt: (
			<span>
				In order to make a purchase through our Web Site, you must provide us
				with your name, billing address, and credit card number, expiration of
				the card, and security code.
				<br />
				<br />
				If you are simply browsing our site and do not go through with buying
				any of our unbelievably priced tickets, we still collect your IP
				address, in an effort to measure our site traffic and help provide a
				relevant shopping experience.
				<br />
				<br />
				If you come to our site through an intermediary, we track the location
				of the link that referred you.
				<br />
				<br />
				In any situation, we observe what kind of browser you use so that we can
				optimize our website for future visitors. We also follow what pages you
				visit once on the site to better understand navigation habits.
			</span>
		),
	},
	{
		title: 'For Frequent Fans & Buyers',
		txt: (
			<span>
				Once you create an account on Encore Tickets, we will need access to
				your name, e-mail address, home address, phone number, zip code and
				password. Please keep in mind, protecting your privacy is crucial to us,
				so do not give out your account password to anyone.
				<br />
				<br />
				If you choose to subscribe to our newsletter (which you should,
				it&apos;s awesome), we store both your e-mail and home address so that
				we can send you all kinds of promotional offers. You may unsubscribe at
				any time by clicking the &quot;unsubscribe&quot; link located at the
				bottom of every e-mail.
				<br />
				<br />
				When you chat with a representative online, we collect your e-mail
				address and any other order information that might be needed to respond
				to your question/concern and provide a hassle-free shopping experience.
				<br />
				<br />
				If any of your personal information changes, or if you no longer require
				our services, you can correct or update what is in the system by
				e-mailing our customer support at concierge@encoretix.com, or calling us
				at 240-690-6136
				<br />
				<br />
				Please note that that for legal obligations, we retain all personal
				information as long as your account is active or needed to provide you
				services. In the event of a dispute or to enforce our agreements, we may
				need client information, which is never shared with third parties.
			</span>
		),
	},
	{
		title: 'Personal and Account Information',
		txt: (
			<span>
				We use 128-bit encryption technology and Secure Socket Layers
				(&quot;SSL&quot;) in all areas where your personal and account
				information is required. Our Web site is certified by VeriSign, which
				verifies that our Web site is authentic and that we use SSL security. To
				view our VeriSign certificate, click on the image of the closed lock or
				the solid key at the bottom of your browser window. Our Web site
				security information will appear.
				<br />
				<br />
				In addition, your personal and account information and transaction
				history are kept behind our firewall on separate servers. All
				transaction information is processed under encrypted channels.
				<br />
				<br />
				We follow generally accepted industry standards to protect the
				personally identifiable information submitted to us, both during
				transmission and once we receive it. No method of transmission over the
				Internet, or method of electronic storage, is 100% secure, however.
				Therefore, while we strive to use commercially acceptable means to
				protect your personal information, we cannot guarantee its absolute
				security.
			</span>
		),
	},
	{
		title: 'Cookies + Third Party Cookies',
		txt: (
			<span>
				A cookie is a small text file that computer&apos;s store for record
				keeping. Almost every retail website makes use of cookies, as does
				Encore Tickets. We do not share any information that is stored in
				cookies with anyone. Our website uses BOTH session and persistent
				cookies. Session cookies expire once you close the browser, and make it
				easier to steer through the site. Persistent cookies remain on your hard
				drive even after you have closed down the browser. We use them to store
				your e-mail address, which saves you time next time you shop on the
				site. In addition, persistent cookies help us track and target user
				interests in order to enhance the shopping experience in the future.
				<br />
				<br />
				Each browser has a different method for persistent cookie removal, all
				of which are very simple. Please look at the &quot;help&quot; file on
				your browser for more instruction.
				<br />
				<br />
				Our privacy statement does not include any third parties; we do not have
				access or control over these cookies whatsoever.
			</span>
		),
	},
	{
		title: 'Agents/Service Providers/Third Parties:',
		txt: (
			<span>
				We use a limited amount of third party services for order completion,
				such as a FedEx to ship our orders & our credit card processing company
				for billing. We share your name, email address, billing and shipping
				address with third parties only when necessary for order completion.
				These third parties are prohibited from using any identifiable
				information for promotional purposes.
				<br />
				<br />
				We restrict access to your personal and account information to those who
				need access to use it as set forth in this policy. Your personal and
				account information will never be sold, shared, rented or traded to
				third parties except under the following circumstances:
				<br />
				<br />
				We may disclose your personal and account information to respond to
				subpoenas, court orders, or other legal process, as required by law, or
				to establish or exercise our legal rights or defend against legal
				claims.
				<br />
				<br />
				Your personal and account information may also be disclosed in
				connection with a sale of some or all of our business or a merger with
				another company.
			</span>
		),
	},
	{
		title: 'Social Media (Features) and Widgets:',
		txt: `Our website includes social media features: twitter, Google+ the Facebook Like button and widgets ("share this" button or interactive mini-programs that run on our site). All of these may collect your IP address, which pages you visit on Encore Tickets and may set a cookie to enable the feature to function properly. All social media features and widgets are either hosted by a third party or hosted directly on our website. Each interaction with each different feature or widget is governed by individual privacy policies, which are set by the company providing it.`,
	},
	{
		title: 'Contests/Surveys:',
		txt: `If you enter a contest or survey on our site, we collect information that is necessary for entry or participation, such as name, address, e-mail, telephone number,`,
	},
	{
		title: 'Questions/Comments/Concerns/Feedback:',
		txt: `You can reach us by email concierge@encoretix.com  or you can call us toll-free at 240-690-6136. Please note that messages become our property and, unless you direct otherwise, may be used by us for promotional purposes.`,
	},
	{
		title: 'Changes to This Privacy Policy',
		txt: 'Encore Tickets may update this Privacy Policy. Significant changes will be posted on our website with the update date indicated.',
	},
	{
		title: 'Contact Us',
		txt: 'For questions or concerns about this Privacy Policy, please contact us at concierge@encoretix.com .',
	},
];

export default function PrivacyPolicy() {
	return (
		<main className='bg-beige'>
			<Box>
				<div className='pt-20 md:pt-32'>
					<Title>Encore Tickets Privacy Policy</Title>
					<div className='mt-8'>
						{privacyPolicyInfo.map((section, index) => (
							<div key={index} className={`${index && 'mt-20'}`}>
								<p className='font-extrabold text-xl md:text-2xl -tracking-tighter uppercase'>
									{index + 1}. {section.title}
								</p>
								{/* Если есть основной текст, отображаем его */}
								{section.txt && (
									<p className='mt-8 text-sm md:text-lg'>{section.txt}</p>
								)}
								{/* Если есть темы (topics), отображаем их */}
								{section.topics &&
									Object.entries(section.topics).map(
										([topicTitle, topicContent]: [any, any], i) => (
											<div key={i} className='mt-8'>
												<p className='text-base md:text-lg uppercase'>
													{topicTitle}
												</p>
												<p className='mt-2.5 text-sm md:text-lg'>
													{topicContent}
												</p>
											</div>
										)
									)}
							</div>
						))}
					</div>
				</div>
			</Box>
		</main>
	);
}
