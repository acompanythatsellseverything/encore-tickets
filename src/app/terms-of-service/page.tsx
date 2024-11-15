import Title from '@/components/Title';
import Box from '@/components/Box';
import type { Metadata } from 'next';
import { span } from 'framer-motion/client';
import { text } from 'stream/consumers';
import { title } from 'process';

export const metadata: Metadata = {
	title: 'Encore Tickets: Terms Of Service',
	description:
		"Discover Encore Tickets' Terms of Service. Learn about our policies for VIP access, concert, sports, and theater tickets, and ensure smooth, secure transactions for personalized event experiences.",
	keywords:
		'Terms of Service, ticket policy, VIP tickets, premium event access, event policies, ticket purchase terms, refund policy, Encore Tickets, concert tickets, theater tickets, sports events, event security',
	openGraph: {
		title: 'Encore Tickets: Terms Of Service',
		description:
			"Discover Encore Tickets' Terms of Service. Learn about our policies for VIP access, concert, sports, and theater tickets, and ensure smooth, secure transactions for personalized event experiences.",
		siteName: 'Encore Tickets',
		images: ['/favicon-big.png'],
	},
	twitter: {
		title: 'Encore Tickets: Terms Of Service',
		description:
			"Discover Encore Tickets' Terms of Service. Learn about our policies for VIP access, concert, sports, and theater tickets, and ensure smooth, secure transactions for personalized event experiences.",
		images: ['/favicon-big.png'],
	},
};

const privacyPolicyInfo = [
	{
		title: 'General',
		txt: (
			<span>
				Encore Tickets acts as an intermediary between buyers and ticket sellers
				(&quot;TICKET SELLERS&quot;) to facilitate the purchase and sale of event tickets,
				and as such is not directly involved in the actual ticket sale
				transaction between the buyers and TICKET SELLERS. All sales are final.
				As tickets sold through SITE are often obtained through the secondary
				market and prices are determined by the individual ticket seller, the
				prices for tickets may be above or below face value. Tickets sold
				through SITE are from a third party; therefore, the buyer&apos;s name will
				not be printed on the tickets. Please note that the name on the tickets
				does not affect the buyer&apos;s ability to access the event.
				<br />
				<br />
				The following are the rules (&quot;TERMS&quot;) that govern use of the
				Encoretix.com Web Site (&quot;SITE&quot;) by the user of the SITE (&quot;USER&quot;). By
				using or visiting the SITE, USER expressly agrees to be bound by these
				TERMS and to follow these TERMS and all applicable laws and regulations
				governing the SITE. SITE reserves the right to change these TERMS at any
				time, effective immediately upon posting on the SITE. If USER violates
				these TERMS Encore Tickets may terminate USER&apos;S access to the SITE, bar
				USER from future use of the SITE, cancel USER&apos;S ticket order, and/or
				take appropriate legal action against USER.
			</span>
		),
	},
	{
		title: 'Above Face Value',
		txt: (
			<span>
				Tickets sold through SITE are often obtained through secondary market
				TICKET SELLERS and are being resold, in many cases, above the price or
				&quot;face value&quot; listed on the ticket. All ticket prices include additional
				service charges and handling fees as defined on each order. SITE and its
				TICKET SELLERS are not directly affiliated with any performer, sports
				team, or venue; and SITE does not act as a primary sale box office,
				unless otherwise stated. By agreeing to these TERMS, USER agrees that
				the purchase price for tickets on their order does not reflect the
				original purchase price of the ticket and may be either higher or lower
				than the original purchase price.
				<br />
				<br />
				Orders placed through SITE will be fulfilled by one of SITE&apos;S network of
				participating TICKET SELLERS. Contact information for the TICKET SELLER
				who fulfills USER&apos;s order (hereinafter known as &quot;FULFILLER&quot;) will be
				provided to USER upon completion of the purchase process. If this
				information is lost, USER may contact concierge@encoretix.com to
				retrieve information about the order.
			</span>
		),
	},
	{
		title: 'All sales are final',
		txt: (
			<span>
				Since tickets are a one-of-a-kind item and not replaceable, there are no
				refunds, exchanges or cancellations. If an event is postponed or
				rescheduled, tickets will be honored for the rescheduled date. New
				tickets will not need to be issued. If an event is cancelled without a
				rescheduled date, USER will need to contact the FULFILLER for a refund.
				The FULFILLER may require USER to return the supplied tickets at USER&apos;s
				expense before receiving any refund USER is entitled to due to
				cancellation. SITE is not responsible for providing or securing this
				refund for USER. Any shipping and handling charges are not refundable.
				Refunds will be processed in the same currency as the original order.
				Conversion charges, including though not exhaustive of the ones issued
				by USER&apos;s bank, if any, are not covered by Encore Tickets or Fulfiller.
				Neither SITE nor the FULFILLER will issue exchanges or refunds after a
				purchase has been made or for lost, stolen, damaged or destroyed
				tickets. When USER receives tickets, USER should keep them in a safe
				place. Please note that direct sunlight or heat may damage tickets.
			</span>
		),
	},
	{
		title: 'Pricing',
		txt: (
			<span>
				All prices are in United States Dollars (USD) unless otherwise
				specifically stated. SITE cannot confirm the price of an item until
				after an order is completed by USER. Despite SITE&apos;S best efforts, a
				small number of the items listed on the SITE may be priced incorrectly.
				If the FULFILLER discovers an item&apos;s correct price is higher than the
				stated price, the FULFILLER will either complete the order at the
				original price, contact USER to inform them of different price with an
				option to purchase, or cancel USER&apos;S order and notify USER of such
				cancellation.
				<br />
				<br />
				The price charged to USER&apos;s credit card beyond the price of the
				individual tickets shall include the following fees and charges:
			</span>
		),
	},
	{
		title: 'Service Fee',
		txt: (
			<span>
				Cost per ticket associated with SITE operation, customer service center
				operation, and other costs associated with the fulfillment of USER&apos;s
				ticket request.
			</span>
		),
	},
	{
		title: 'Delivery',
		txt: (
			<span>
				Costs associated with the Delivery Method chosen by USER and the SITE&apos;S
				arrangement of USER&apos;s ticket delivery by the FULFILLER
			</span>
		),
	},
	{
		title: 'Total',
		txt: (
			<span>
				Entire amount charged to USER, including each ticket&apos;s price as set by
				the FULFILLER, Service Fee, and Delivery.
			</span>
		),
	},
	{
		title: 'Taxes',
		txt: (
			<span>
				Prices stated on the SITE do not include any state or other local taxes
				that may apply to USER&apos;S order. TICKET SELLERS may collect sales tax as
				is appropriate for their locality. If taxes are applicable to USER&apos;S
				order they will be added to USER&apos;S order as a separate charge in
				addition to the TOTAL.
			</span>
		),
	},
	{
		title: 'Payment',
		topics: {
			'Credit Card Charges': `USER's credit card will be charged by the FULFILLER responsible for fulfilling their order and not SITE. If USER has any questions about charges on USER's credit card statement, USER should contact SITE at concierge@encoretix.com or direct USER's question to FULFILLER responsible for completing the ticket order. FULFILLER may charge or authorize USER's credit card in advance of confirming ticket availability. If tickets are ultimately found to be unavailable, the USER's credit card will not be charged or USER will receive a full refund for the charged amount.`,
			'Payment by Debit Card': `In some cases, FULFILLER may attempt to authorize a debit card multiple times, creating several holds on USER's account. This often happens when a third-party credit card processing company requires additional security verification such as a CVV, Zip Code, or address, or when USER's information is incorrectly provided or mistyped. Though the FULFILLER will only clear USER's transaction once, the hold(s) will temporarily lower USER's available balance. Any hold(s) may take up to several days to clear.`,
			'Third Party Payment Platforms (Paypal, ApplePay, etc.)': `If USER selects to complete the transaction using a Third Party Payment Platform, such third party services may be subject to separate policies, terms of use, and or fees of said third parties and USER accepts the same by completing the transaction using the Third Party Payment Platform. If USER has any questions about the transaction on the Third Party Payment Platform account, USER should contact concierge@encoretix.com.`,
			'International Orders': `International Orders placed by USER may be subject to delayed processing. SITE recommends that USER contact their credit card company or financial institution prior to placing an order to prevent unnecessary delays or holds. Neither SITE, nor FULFILLER shall be responsible for delays, holds, or any extra fees associated with placing an International Order.`,
			'Disputed Charges': `USER is responsible for any and all legal fees incurred by USER, FULFILLER, and/or SITE associated with USER'S disputed charges and chargebacks for purchases made on SITE. In no event will SITE or FULFILLER be responsible for such legal fees.`,
		},
	},
	{
		title: 'Event Listings',
		txt: ' SITE does not guarantee the accuracy of event information on SITE including but not limited to event name, event location or venue, event start time, or event date.',
	},
	{
		title: 'Ticket Holder Behavior Policy',
		txt: `The USER agrees to abide by all rules and policies of the venue where the event is located relating to conduct and behavior.  Should the USER be ejected from the event for failure to abide by the venue's rules and policies, USER shall be subject to all applicable fines and legal or other expenses associated with the ejection.  Further, should the ejection result in the loss of the TICKET SELLER's right to use any other season tickets at that venue, or the right to purchase other tickets from that venue, USER shall be held liable for all reasonable costs, expenses, and losses associated with said loss, including but not limited to all direct, indirect, vicarious, consequential, exemplary, incidental, special or punitive damages, including lost profits.`,
	},
	{
		title: 'Ticket Availability',
		txt: `SITE cannot guarantee ticket availability until USER is in possession of their tickets. Generally, all ticket listings on SITE are a unique set of tickets from an individual TICKET SELLER. Some ticket listings on SITE may only be representations of available tickets and not actual seat locations or currently available tickets. Occasionally tickets ordered may no longer be available at the price or in the quantity originally ordered at the time the order is received. If equivalent or better seat locations are available at the same price, the TICKET SELLER will fill the order with the alternative seat locations. If no alternates are available, either USER'S credit card will not be charged at all or the entire amount will be refunded, and USER will be notified that the ticket request has been rejected.`,
	},
	{
		title: 'Fraudulent Use',
		txt: `In order to protect USER from fraud, USER may be required to provide additional proof of identify on any order. Proof of identity may include but is not limited to a signed credit card authorization and/or photocopies of public documents such as a state driver's license or federal passport.`,
	},
	{
		title: 'Shipping ',
		txt: ` All orders are shipped to USER using the delivery method chosen for the order. Most orders are shipped the same business day in which they are received. Orders placed after business hours may be shipped on the next business day. Shipments may require a signature at the point of delivery.`,
	},
	{
		title: 'Delayed Shipment',
		txt: `Event tickets are generally delivered according to the delivery method selected at the time of ticket checkout. Most orders are shipped the same business day in which they are received or, if placed after business hours, orders may be shipped on the next business day. However, tickets may not always be available for immediate delivery, particularly in cases when the tickets have been purchased far in advance of the event in question or for certain events including but not limited to the following: all off-season orders for professional sporting leagues, concerts, and Las Vegas events tickets. While most tickets are delivered within three business days of the delivery method chosen, this does not imply a guaranteed delivery date. In these situations tickets may be marked with an estimated ship date. USER will be provided with account access information that will allow them to view the status of their order and tracking information, if available, after purchase. In the case where tracking information is not available USER may contact a representative of the FULFILLER for shipment information or an estimated delivery date. Tickets will be shipped when available, and choice of an expedited delivery method does not guarantee that tickets will be shipped immediately. USER should check the order notes for the estimated delivery date.`,
	},
	{
		title: 'International Shipping',
		txt: ' If USER is located outside of the United States, USER must choose an International Delivery option. If a domestic shipping option is chosen for an order to be shipped outside the United States, the shipping cost will be adjusted by the FULFILLER after the order is placed to use the International Rate.',
	},
	{
		title: 'Delivery Verification',
		txt: 'If USER specifies a shipping address that does not allow for Delivery Verification, such as a Post Office Box, USER may be required to pay an additional fee to cover the additional risks associated with this type of order. If such a shipping address is used, the FULFILLER will, at their discretion, either contact USER about the additional fee prior to shipping or cancel USER’S order and notify USER of such cancellation. Shipments may require direct signature at the point of delivery. Once FULFILLER has shipped the tickets, it is USER responsibility to receive the package. Should the package be refused, undelivered, or returned, refunds or credits will not be issued by FULFILLER as per the all sales are final term of these Terms. If a package has been returned and must be re-shipped by the FULFILLER, it is the USER responsibility to contact the FULFILLER for re-shipping options. USER understands that additional delivery fees may be charged prior to reshipping.',
	},
	{
		title: 'E-Ticket Instant Download',
		txt: `Electronic tickets or "e-tickets" marked as "Instant" may not be available for immediate download in all circumstances. Due to potential fraud concerns, some "Instant" e-ticket purchases may be downgraded to regular e-ticket download to allow for additional processing. In such cases, USER will receive notification with USER'S receipt explaining that USER'S order has been downgraded to regular e-ticket download`,
	},
	{
		title: 'E-Ticket Download',
		txt: `Electronic tickets or "e-tickets" may not be available for immediate download. After placing an order, USER will receive an email with instructions on how to download the tickets; therefore, it is important that USER provides accurate email address information during the order process.  The USER will be required to enter order specific credentials to gain access to the tickets, and USER must have access to a printer from which to print the tickets. USER is responsible for contacting Customer Support should USER not receive the email instructions, be unable to download the tickets, or be unable to print the tickets. Neither SITE nor FULFILLER will issue refunds for USER'S failure to provide a correct email address or failure to print the tickets`,
	},
	{
		title: 'Electronic Transfer',
		txt: `Electronic transfer delivery may not be available for immediate access. After placing an order, USER will receive an email with instructions on how to accept the electronic transfer; therefore, it is important that USER provides accurate email address information during the order process. The USER will be required to create an account with the associated ticket transfer system to gain access to the tickets, and USER must have access to a smart device to present the QR code displayed via the electronic transfer system for entry at the event. USER is responsible for contacting Customer Support should USER not receive the email instructions, be unable to accept the ticket transfer, or be unable to locate the ticket transfer email. Neither SITE nor FULFILLER will issue refunds for USER'S failure to provide a correct email address or accept ticket transfer offer. Neither SITE nor FULFILLER will issue refunds in the event a USER declines the ticket transfer offer.`,
	},
	{
		title: 'Local Delivery',
		txt: `USER must pick up the tickets from the designated location provided to the USER, which will be located near the venue.  USER will need to bring a government-issued ID in order to claim the tickets and may be asked to present the credit used at time of purchase as further verification. Should USER encounter a problem at the local delivery location, USER must contact FULFILLER for assistance.  Neither SITE nor FULFILLER will issue refunds for USER'S failure to provide a valid government-issued ID for release of tickets or if USER does not pickup tickets from designated location.`,
	},
	{
		title: 'Will-Call Option',
		txt: `USER must pick up the tickets at the box office of the venue approximately one hour before the scheduled start of the event. USER will need to bring a government-issued ID in order to claim the tickets. Should USER encounter a problem at the box office, USER must contact FULFILLER for assistance.`,
	},
	{
		title: 'Permitted Use',
		txt: `USER agrees that USER is only authorized to visit, view, and to retain a copy of pages of this SITE for USER'S own personal use, and that USER shall not duplicate, download, publish, modify, or otherwise distribute the material on this SITE for any purpose other than to review event and promotional information, for personal use, or to purchase tickets or merchandise for USER'S personal use, unless otherwise specifically authorized by SITE to do so. USER may not use any robot, spider, scraper, offline reader, site search/retrieval application or other manual or automatic device, tool, or process to retrieve or in any way reproduce, circumvent, or interfere with the Site or its contents, nor may USER use any automated software or computer system to search for, reserve, buy, or otherwise obtain tickets from SITE. USER may not submit any software or other materials that contain any viruses, worms, Trojan horses, defects, date bombs, time bombs, or other items of a destructive nature. The content and software on this SITE is the property of SITE and/or its suppliers and is protected by U.S. and international copyright laws.`,
	},
	{
		title: 'Links',
		txt: `The SITE may automatically produce search results that reference or link to third party sites throughout the World Wide Web. SITE has no control over these sites or the content within them. SITE cannot guarantee, represent or warrant that the content contained in the sites is accurate, legal and/or inoffensive. SITE does not endorse the content of any third party site, nor does SITE warrant that they will not contain viruses or otherwise impact USER'S computer systems. By using the SITE to search for or link to another site, USER agrees and understands that USER may not make any claim against SITE for any damages or losses, whatsoever, resulting from use of the SITE to obtain search results or to link to another site. If USER experiences a problem with a link from the SITE, please notify SITE at concierge@encoretix.com and SITE will investigate USER'S claim and take any actions deemed appropriate at SITE'S sole discretion.`,
	},
	{
		title: 'Violation of the Terms',
		txt: (
			<span>
				SITE, in its sole discretion, and without prior notice, may terminate
				USER&apos;S access to the SITE, cancel USER&apos;S ticket order or exercise any
				other remedy available to it. USER agrees that monetary damages may not
				provide a sufficient remedy to SITE for violations of these terms and
				conditions and USER consents to injunctive or other equitable relief for
				such violations. SITE may release USER information by operation of law,
				if the information is necessary to address an unlawful or harmful
				activity against SITE. SITE is not required to provide any refund to
				USER if USER is terminated as a USER of this SITE.
				<br />
				<br />
				Intellectual Property Information For purposes of these TERMS, CONTENT
				is defined as any information, communications, software, photos, video,
				graphics, music, sounds, and other material and services that can be
				viewed by USERS on the site. This includes, but is in no way limited to,
				message boards, chat, and other original content. By accepting these
				TERMS, USER acknowledges and agrees that all CONTENT presented to USER
				on this site is protected by copyrights, trademarks, service marks,
				patents or other proprietary rights and laws, and is the sole property
				of SITE and/or its affiliates. USER is only permitted to use the CONTENT
				as expressly authorized by SITE or the specific CONTENT provider. Except
				for a single copy made for personal use only, USER may not copy,
				reproduce, modify, republish, upload, post, transmit, or distribute any
				documents or information from this site in any form or by any means
				without prior written permission from SITE or the specific CONTENT
				provider, and USER is solely responsible for obtaining permission before
				reusing any copyrighted material that is available on this site. Any
				unauthorized use of the materials appearing on this site may violate
				copyright, trademark and other applicable laws and could result in
				criminal or civil penalties. Neither, SITE or its affiliates warrant or
				represent that USER&apos;S use of materials displayed on, or obtained
				through, this site will not infringe the rights of third parties. All
				other trademarks or service marks are property of their respective
				owners. Nothing in these TERMS grants USER any right to use any
				trademark, service mark, logo, and/or the name of SITE or its
				affiliates. SITE reserves the right to terminate the privileges of any
				USER who uses this SITE to unlawfully transmit or receive copyrighted
				material without a license or express consent, valid defense or fair use
				exemption to do so. After proper notification by the copyright holder or
				its agent to us, and confirmation through court order or admission by
				the USER that they have used this SITE as an instrument of unlawful
				infringement, SITE will terminate the infringing USER&apos;S rights to use
				and/or access to this SITE. SITE may, also in its sole discretion,
				decide to terminate a USER&apos;s rights to use or access to the SITE prior
				to that time if SITE believes that the alleged infringement has
				occurred.
			</span>
		),
	},
	{
		title: 'Disclaimers',
		txt: (
			<span>
				SITE MAKES NO ASSURANCES THAT THE SITE WILL BE ERROR-FREE,
				UNINTERRUPTED, OR PROVIDE SPECIFIC RESULTS FROM USE OF THE SITE OR ANY
				SITE CONTENT, SEARCH OR LINK THEREIN. THE SITE AND SITE CONTENT ARE
				DELIVERED ON AN &quot;AS-IS&quot; AND &quot;AS-AVAILABLE&quot; BASIS. SITE MAKES NO
				ASSURANCES THAT FILES USER ACCESSES OR DOWNLOADS FROM THE SITE WILL BE
				FREE OF VIRUSES OR CONTAMINATION OR DESTRUCTIVE FEATURES. SITE DISCLAIMS
				ALL WARRANTIES, EXPRESS OR IMPLIED INCLUDING ALSO ANY IMPLIED WARRANTIES
				OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. SITE WILL NOT
				BE LIABLE FOR ANY DAMAGES OF ANY KIND ARISING FROM THE USE OF THIS SITE,
				INCLUDING WITHOUT LIMITATION, DIRECT, INDIRECT, VICARIOUS, INCIDENTAL,
				SPECIAL, PUNITIVE, LOSS OF BUSINESS OR LOSS OF PROFITS OR CONSEQUENTIAL
				DAMAGES, WHETHER BASED UPON BREACH OF CONTRACT, BREACH OF WARRANTY,
				TORT, NEGLIGENCE, PRODUCT LIABILITY OR OTHERWISE, EVEN IF ADVISED OF THE
				POSSIBILITY OF SUCH DAMAGE.
				<br />
				<br />
				SITE DISCLAIMS ANY AND ALL LIABILITY FOR THE ACTS, OMISSIONS AND CONDUCT
				OF ANY THIRD PARTY USERS, SITE USERS, ADVERTISERS AND/OR SPONSORS ON THE
				SITE, IN CONNECTION WITH THE SITE SERVICE OR OTHERWISE RELATED TO USER
				USE OF THE SITE AND/OR THE SITE SERVICE. SITE IS NOT RESPONSIBLE FOR THE
				PRODUCTS, SERVICES, ACTIONS OR FAILURE TO ACT OF ANY TICKET BROKER,
				VENUE, PERFORMER, PROMOTER OR OTHER THIRD PARTY IN CONNECTION WITH OR
				REFERENCED ON THE SITE.
			</span>
		),
	},
	{
		title: 'Limitation on Liability',
		txt: (
			<span>
				USER acknowledges that SITE is a venue allowing people to buy and sell
				tickets to concert, sporting and entertainment events. The listings of
				ticket inventory on SITE are provided by a third party (&quot;PROVIDER&quot;).
				Neither SITE nor PROVIDER is involved in the actual transaction between
				buyers and sellers. While SITE and PROVIDER may help facilitate the
				resolution of disputes, neither SITE nor PROVIDER has control over the
				content of the tickets listed on SITE, the truth or accuracy of such
				listings, the ability of the FULFILLER to sell tickets, or that USER and
				FULFILLER will actually complete a transaction. Regardless of this
				provision, if either SITE or PROVIDER is found to be liable, SITE or
				PROVIDER&apos;S liability to USER or any third party is limited to the
				greater of (a) any amounts due under SITE&apos;s limited guarantee when
				applicable, (b) the amount of fees in dispute not to exceed the total
				fees of the transaction, or (c) $100.
				<br />
				<br />
				Except in jurisdictions where such provisions are restricted, in no
				event will SITE or PROVIDER be liable to USER for any indirect,
				vicarious, consequential, exemplary, incidental, special or punitive
				damages, including lost profits, even if SITE and PROVIDER have been
				advised of the possibility of such damages. USER further agrees that the
				maximum available remedy on any successful claim is the greater of the
				choices listed in the paragraph above.
			</span>
		),
	},
	{
		title: 'Indemnity',
		txt: `USER agrees to indemnify and hold SITE, its subsidiaries, affiliates, officers, agents and other partners and employees, harmless from any loss, liability, claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of USER'S use of the SITE, including also USER'S use of the SITE to provide a link to another site or to upload content or other information to the SITE.`,
	},
	{
		title: 'Governing Law',
		txt: `USER agrees that any controversy or claim arising out of or relating to the use of SITE will be governed by the laws of the State of Maryland without regard to its conflict of law provisions. USER agrees to personal jurisdiction by venue in the state and federal courts of the State of Maryland, Mongtomery County.`,
	},
	{
		title: 'Governing Law',
		txt: `USER agrees that any controversy or claim arising out of or relating to the use of SITE will be governed by the laws of the State of Maryland without regard to its conflict of law provisions. USER agrees to personal jurisdiction by venue in the state and federal courts of the State of Maryland, Mongtomery County.`,
	},
	{
		title: 'Arbitration and Dispute Resolution',
		txt: (
			<span>
				Any controversy, claim, dispute, or other action, arising out of or
				relating to the use of SITE, any order placed on SITE, or these policies
				including any dispute over the validity, enforceability or scope of this
				arbitration provision (a &quot;CLAIM&quot; or &quot;CLAIMS&quot;) shall be resolved through
				binding arbitration administered by the American Arbitration Association
				(the &quot;AAA&quot;) in accordance with its Consumer Rules. SITE will pay all
				filing, administration, and arbitrator fees for any arbitration for a
				CLAIM of US$10,000 or less. If, however, the arbitrator finds that
				either the substance of the CLAIM or the relief sought in the CLAIM is
				frivolous or that the CLAIM was brought for an improper purpose (as
				measured by the standards set forth in Federal Rule of Civil Procedure
				11(b)), then the payment of all such fees will be governed by applicable
				AAA Rules. In such case, USER agrees to reimburse SITE for all monies
				previously disbursed by SITE that are otherwise USER&apos;s obligation to pay
				under the AAA Rules. In addition, if USER initiates an arbitration for a
				CLAIM for more than US$10,000, the payment of fees will be governed by
				the AAA Rules. The AAA rules will determine whether the arbitration will
				take place through written submissions by USER and SITE, by telephone,
				or in person. SITE and USER shall both participate in the selection of
				an arbitrator. Any award issued through arbitration is enforceable in
				any court of competent jurisdiction.
				<br />
				<br />
				BY AGREEING TO ARBITRATE, USER IS GIVING UP THE RIGHT TO LITIGATE (OR
				PARTICIPATE IN AS A PARTY OR CLASS MEMBER) ANY AND ALL CLAIMS IN COURT
				BEFORE A JUDGE OR JURY. INSTEAD, A NEUTRAL ARBITRATOR WILL RESOLVE ALL
				CLAIMS. IF USER DOES NOT WISH TO BE BOUND BY THIS ARBITRATION PROVISION,
				USER MUST NOTIFY SITE IN WRITING WITHIN 30 DAYS OF THE DATE THAT USER
				PLACES AN ORDER ON SITE. USER&apos;s WRITTEN NOTIFICATION TO SITE MUST
				INCLUDE USER&apos;s NAME, ADDRESS AND ORDER NUMBER AS WELL AS A CLEAR
				STATEMENT THAT USER DOES NOT WISH TO RESOLVE CLAIMS WITH SITE THROUGH
				ARBITRATION. WRITTEN NOTIFICATION SHOULD BE MAILED TO SITE.
				<br />
				<br />
				Any arbitration or trial by a judge of any CLAIM will take place on an
				individual basis without resort to any form of class or representative
				action (&quot;CLASS ACTION WAIVER&quot;). Regardless of anything else in this
				Arbitration Provision, the validity and effect of this CLASS ACTION
				WAIVER may be determined only by a court and not by an arbitrator. USER
				and SITE acknowledge that the CLASS ACTION WAIVER is material and
				essential to the arbitration of any disputes between the parties and is
				non-severable from the agreement to arbitrate CLAIMS. If the CLASS
				ACTION WAIVER is limited, voided or found unenforceable, then the
				parties&apos; agreement to arbitrate shall be null and void with respect to
				such proceeding, subject to the right to appeal the limitation or
				invalidation of the CLASS ACTION WAIVER. USER AND SITE ACKNOWLEDGE AND
				AGREE THAT UNDER NO CIRCUMSTANCES WILL A CLASS ACTION BE ARBITRATED.
				<br />
				<br />
				All CLAIMS brought by USER against SITE must be resolved in accordance
				with this Arbitration and Dispute Resolution Section. All CLAIMS filed
				or brought contrary to this Arbitration and Dispute Resolution Section
				shall be considered improperly filed. Should USER improperly file a
				CLAIM, SITE may recover attorneys&apos; fees and costs up to US$1,000 from
				USER, provided that SITE has notified USER in writing of the improperly
				filed CLAIM, and USER fails to promptly withdraw the CLAIM after USER
				receives notice of improper filing from SITE.
				<br />
				<br />
				Events in Illinois. Pursuant to 815 ILCS 414/1.5(c)(5), complaints
				involving tickets to events in Illinois may be resolved through binding
				arbitration and administered by the American Arbitration Association in
				accordance with its Commercial Arbitration Rules including the Optional
				Rules for Emergency Measures of Protection. USER and FULFILLER agree to
				submit to the jurisdiction of the State of Illinois for such complaints.
			</span>
		),
	},
	{
		title: 'Force Majeure',
		txt: (
			<span>
				SITE shall not be deemed in default or otherwise liable under these
				rules and policies due to its inability to perform its obligations by
				reason of any fire, earthquake, flood, epidemic, accident, explosion,
				casualty, strike, labor controversy, riot, civil disturbance, act of
				public enemy, war, act of God, or other causes beyond SITE&apos;S control
				(collectively referred to as FORCE MAJEURE). SITE may terminate this
				Agreement in the event that USER is prevented from performing due to
				FORCE MAJEURE.
			</span>
		),
	},
	{
		title: 'Registration',
		txt: (
			<span>
				Certain areas of the SITE are provided solely to registered USERS of the
				SITE. Any USER registering for such access agrees to provide true and
				accurate information during the registration process. SITE reserves the
				right to terminate the access of USER should SITE know, or have
				reasonable grounds to suspect that USER has entered false or misleading
				information during the registration process. ALL REGISTERED USERS MUST
				BE OVER EIGHTEEN (18) YEARS OF AGE. Children under the age of eighteen
				(18) shall not be permitted to register. SITE reserves the right to
				require valid credit card information as proof of legal age. SITE
				maintains a strict online Privacy Policy and will not sell or provide
				USER credit card information to third parties.
			</span>
		),
	},
	{
		title: 'USER Account',
		txt: (
			<span>
				USER will select a username and password as part of the registration
				process. All USER account pages are protected with Secure Socket Layer
				(SSL) encryption. USER is fully responsible for maintaining the
				confidentiality of their username and password. USER agrees to
				immediately notify SITE at concierge@encoretix.com should USER know, or
				have reasonable grounds to suspect, that the username or password have
				been compromised. SITE shall not be responsible for USER&apos;S failure to
				abide by this paragraph. SITE may, in its sole discretion, terminate the
				USER&apos;S account for any reason. Under no circumstances shall SITE be
				liable to any USER or third party for termination of USER&apos;S account.
			</span>
		),
	},
	{
		title: 'Third Party Advertisers',
		txt: (
			<span>
				SITE may allow third party advertisers to advertise on the SITE. SITE
				undertakes no responsibility for USER&apos;S dealings with, including any
				on-line or other purchases from, any third party advertisers. SITE shall
				not be responsible for any loss or damage incurred by USER in its
				dealings with third party advertisers.
			</span>
		),
	},
	{
		title: 'Information Collection, Use, and Sharing',
		txt: (
			<span>
				PROVIDER and FULFILLER are the sole users of the information collected
				on this SITE. PROVIDER only accesses or collects information that USER
				voluntarily provides via email or other direct contact, or when USER
				grants SITE permission, such as during ticket requests or purchases from
				a FULFILLER. PROVIDER, along with FULFILLER, will use USER&apos;s personal
				information for transactional purposes, including customer service.
				PROVIDER may also use USER&apos;s information to provide marketing services
				on behalf of SITE and share it with affiliated entities for joint
				content and service offerings or to market products and services.
				PROVIDER may sell USER’S information to non-financial organizations,
				like companies involved in direct marketing. If USER allows SITE to
				detect their location, SITE will use that data to refine search results.
				<br />
				<br />
				PROVIDER will use USER information to respond regarding the reason USER
				contacted SITE. PROVIDER will not share USER information outside of
				PROVIDER’s organizations, except as necessary to fulfill USER requests
				(e.g., to ship an order) or partner with another company to provide
				content, programs, and services. In such cases, PROVIDER will require
				third-party agents to maintain confidentiality. Unless USER requests
				otherwise, PROVIDER may contact USER in the future about specials, new
				products, or services, or changes to this privacy policy. Neither SITE
				nor PROVIDER is responsible for third parties’ policies or offerings,
				and USER is encouraged to review those policies, as they may vary.
				<br />
				<br />
				SITE and PROVIDER will respond to verified law enforcement or government
				requests relating to investigations of illegal activity or identity
				theft. SITE and PROVIDER will disclose relevant information, such as
				name, city, state, zip code, phone number, email, fraud complaints, IP
				address, and credit card information, and may share such data with third
				parties to investigate or prevent fraudulent activities. SITE and
				PROVIDER reserve the right to report any activities they believe, in
				good faith, to be unlawful. In identity theft cases, USER may authorize
				law enforcement to request records from SITE and PROVIDER or may request
				that SITE and PROVIDER send records directly to a law enforcement
				officer.
				<br />
				<br />
				USER Access to and Control Over Information: USER may, at any time, do
				the following by contacting PROVIDER via the provided email or phone
				number:
				<ul className='pl-5'>
					<li>Opt out of any future contact from SITE or PROVIDER</li>
					<li>See what data is on file about USER, if any</li>
					<li>Change or correct any data on file about USER</li>
					<li>Request deletion of any data on file about USER</li>
					<li>Express any concerns about the use of USER data</li>
				</ul>
				<br />
				To stop receiving promotional or marketing emails or to opt out of
				having USER&apos;s information sent to third parties for marketing, USER can
				follow the instructions in any promotional email from SITE. Even if USER
				opts out of promotional emails, USER will still receive transactional
				messages.
			</span>
		),
	},
	{
		title: '3rd Party Advertising & Automated Data Collection',
		txt: (
			<span>
				Please note that third party vendors, including but not limited to
				Google, show advertisements for SITE on the internet. Third party
				vendors, including but not limited to Google, use cookies to serve
				advertisements based on USER&apos;s prior visits to SITE. To opt out of
				Google&apos;s use of cookies and web beacons, USER can visit the Google
				advertising opt-out page available on Google&apos;s website at
				www.google.com/privacy/ads. SITE may share, sell, or rent USER
				information collected voluntarily from USER on the SITE with third party
				vendors, advertising companies, or analytics providers including but not
				limited to Google.
				<br />
				<br />
				In addition, SITE participates in targeted advertising. SITE allows
				third-party companies to collect certain information when USER visits
				SITE to provide measurement services to SITE and target ads to USER.
				SITE uses this information to serve ads for SITE&apos;S products or services
				or for the products or services of other companies when USER visits this
				SITE or other websites. These companies use non-personally identifiable
				information (e.g., click stream information, browser type, time and
				date, subject of advertisements clicked or scrolled over, hardware or
				software information, cookie and session ID) and personally identifiable
				information (e.g. IP address) during USER&apos;s visits to this SITE and
				other websites in order to provide advertisements about goods and
				services likely to be of greater interest to USER. These parties
				typically use a cookie, third party web beacon, or other similar
				technologies to collect this information.
			</span>
		),
	},
	{
		title: 'Security',
		txt: (
			<span>
				PROVIDER takes precautions to protect USER information. When USER
				submits sensitive information via SITE, USER information is protected
				both online and offline.
				<br />
				<br />
				Whenever sensitive information (such as credit card data) is collected,
				that information is encrypted and transmitted in a secure way. USER can
				verify this by looking for a closed lock icon at the bottom of USER web
				browser, or looking for &quot;https&quot; at the beginning of the address of the
				web page. PROVIDER is committed to not re-identifying sensitive
				information collected by SITE.
				<br />
				<br />
				While encryption is used to protect sensitive information transmitted
				online, PROVIDER also protects USER information offline. Only employees
				who need the information to perform a specific job (for example, billing
				or customer service) are granted access to personally identifiable
				information. The computers and servers on which personally identifiable
				information is stored are kept in a secure environment.
				<br />
				<br />
				If USER feels that PROVIDER is not abiding by this Privacy Policy, USER
				should contact SITE immediately via telephone at (240) 690.6136 or via
				email at concierge@encoretix.com
			</span>
		),
	},
	{
		title: 'Copyright Infringement Notification',
		txt: (
			<span>
				Should USER wish to file a copyright infringement notification with
				FrontRowTickets.com, USER will need to send a written or electronic
				communication that includes the following, as outlined in Section
				512(c)(3) of the Digital Millennium Copyright Act (DMCA):
				<ul>
					<li>
						A physical or electronic signature of a person authorized to act on
						behalf of the owner of the material that has allegedly been
						infringed.
					</li>
					<li>
						Identification of the material that is claimed to be infringing or
						the subject of infringing activity. *Please provide the URL(s) in
						the body of the email or letter to help identify the potentially
						infringing material.
					</li>
					<li>Contact information of the complainant.</li>
					<li>
						A statement that the complainant has a good faith belief that use of
						the material in the manner complained of is a copyright violation.
					</li>
					<li>
						A statement that the information in the notification is accurate,
						and under penalty of perjury, that the complainant is authorized to
						act on behalf of the owner of the material that has allegedly been
						infringed.
					</li>
				</ul>
				Written or electronic notice of copyright infringement should be mailed,
				faxed, or emailed to Encore Tickets designated agent at:
				<br />
				<br />
				<strong>Copyright Complaints</strong>
				<br />
				Encore Tickets
				<br />
				6931 Arlington Rd. Suite 304
				<br />
				Bethesda, MD 20814
				<br />
				Fax: (301) 576-5200
				<br />
				Email: orders@encoretix.com
				<br />
				<br />
				Please note the following:
				<br />
				Under Section 512(f) of the DMCA, any person who knowingly misrepresents
				that material or activity is infringing may be subject to liability for
				damages.
			</span>
		),
	},
	{
		title: 'Service and Advertising Emails',
		txt: (
			<span>
				SITE may send USER several service-related emails to the email address
				given when placing an order. These include a confirmation email with
				details of USER&apos;S order, a pre-event email reminder about the event to
				be attended, and a post-event email gathering feedback on the USER&apos;S
				experience. When USER places an order, SITE may also add USER to the
				weekly mailing list to be informed of upcoming events. USER can opt out
				of these emails at any time by notifying
				OrderSupport@FrontRowTickets.com.
			</span>
		),
	},
	{
		title: 'Amendments',
		txt: (
			<span>
				SITE reserves the right to amend this policy at any time. SITE will post
				a notice of changes on its SITE, when and if the terms of this policy
				are amended.
			</span>
		),
	},
];

export default function TermsOfService() {
	return (
		<main className='bg-beige'>
			<Box>
				<div className='pt-20 md:pt-32'>
					<Title>Encore Tickets Terms of Service</Title>
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
										([topicTitle, topicContent], i) => (
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
