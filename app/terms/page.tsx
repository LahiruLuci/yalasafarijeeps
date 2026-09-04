import { Metadata } from 'next';
import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
    title: 'Terms of Service',
    description: 'Review the terms for Yala Safari Jeeps enquiries, bookings, park entrance tickets, pickup arrangements, wildlife sightings and safari services.',
    alternates: {
        canonical: 'https://yalasafarijeeps.com/terms',
    }
};

export default function TermsOfServicePage() {
    return (
        <main className="min-h-screen bg-warm-sand/20 py-32">
            <div className="max-w-4xl mx-auto px-6 md:px-12">
                <header className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-black text-deep-charcoal mb-4">Terms of Service</h1>
                    <p className="text-safari-brown/70 font-medium tracking-wide uppercase text-sm">Last updated: September 2026</p>
                </header>

                <section className="prose prose-lg prose-safari-brown max-w-none text-safari-brown/90">
                    <p className="font-medium text-lg leading-relaxed mb-10">
                        These Terms of Service explain the conditions that apply when you use the Yala Safari Jeeps website,
                        submit a safari enquiry, communicate with us, or arrange a safari through our team.
                        By using this website or requesting our services, you acknowledge that you have read and understood these terms.
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal mt-12 mb-6">1. Safari Enquiries</h2>
                    <p>You can submit enquiries through our website, WhatsApp, email, or other available contact channels.
                        Please note that submitting an enquiry does not automatically confirm a booking.</p>

                    <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal mt-12 mb-6">2. Booking Confirmation</h2>
                    <p>
                        Submitting a booking request through our website, WhatsApp, email, or another communication channel does not by itself create a confirmed booking.
                    </p>
                    <p>
                        A safari is confirmed only after Yala Safari Jeeps has confirmed availability, the agreed price, pickup arrangements, and any required payment or confirmation conditions.
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal mt-12 mb-6">3. Prices and Payments</h2>
                    <p>
                        Safari prices, payment requirements, and any applicable additional charges will be confirmed with you before the booking is finalized.
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal mt-12 mb-6">4. Park Entrance Tickets</h2>
                    <p>
                        Yala National Park entrance tickets are not included in the standard safari price unless specifically stated in your quotation.
                    </p>
                    <p>
                        We may assist customers with arranging park entrance tickets in advance for convenience.
                        Park entrance charges are determined by the relevant authorities and may change independently of Yala Safari Jeeps.
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal mt-12 mb-6">5. Pickup and Transfers</h2>
                    <p>
                        Complimentary pickup and drop-off may be available from selected locations around Yala, Tissamaharama,
                        Kirinda and Kataragama, depending on the confirmed safari arrangement.
                    </p>
                    <p>
                        Transfers from more distant locations may be available at an additional charge.
                        Pickup details must be confirmed before the safari.
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal mt-12 mb-6">6. Safari Times</h2>
                    <p>Standard safari schedules are as follows:</p>
                    <ul className="list-disc pl-6 space-y-2 my-6">
                        <li><span className="font-semibold text-deep-charcoal">Morning Safari:</span> 5:30 AM – 10:30 AM</li>
                        <li><span className="font-semibold text-deep-charcoal">Evening Safari:</span> 2:30 PM – 6:00 PM</li>
                        <li><span className="font-semibold text-deep-charcoal">Tailor-Made Yala Safari:</span> Flexible arrangements confirmed with the customer.</li>
                    </ul>
                    <p>
                        Times may occasionally need adjustment due to park regulations, operational conditions, weather,
                        government/park authority instructions, or other circumstances outside reasonable control.
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal mt-12 mb-6">7. Tailor-Made Safaris</h2>
                    <p>
                        Tailor-made safari arrangements depend on preferred schedule, customer interests, pickup location, group requirements,
                        practical conditions, park operating rules, and availability.
                        Tailor-made safari requests are subject to park regulations, operating conditions and availability.
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal mt-12 mb-6">8. Wildlife Sightings</h2>
                    <p>
                        Yala National Park is a natural wildlife environment.
                        The presence, location, movement and behaviour of wild animals cannot be controlled.
                        Sightings of leopards, elephants, bears, birds or any other species cannot be guaranteed.
                    </p>
                    <p>
                        Our safari drivers use their experience, local knowledge, recent wildlife activity and park conditions to help provide the best possible safari experience.
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal mt-12 mb-6">9. National Park Rules</h2>
                    <p>
                        Customers must respect applicable Yala National Park rules and the instructions of park authorities and safari staff.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 my-6">
                        <li>Do not disturb wildlife</li>
                        <li>Do not feed animals</li>
                        <li>Do not leave the vehicle where prohibited</li>
                        <li>Do not litter</li>
                        <li>Follow driver/guide instructions</li>
                        <li>Follow park authority rules</li>
                        <li>Avoid behaviour that may endanger people, animals or the environment</li>
                    </ul>

                    <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal mt-12 mb-6">10. Customer Responsibilities</h2>
                    <p>Customers should provide accurate information regarding:</p>
                    <ul className="list-disc pl-6 space-y-2 my-6">
                        <li>Number of travellers</li>
                        <li>Pickup location</li>
                        <li>Contact details</li>
                        <li>Children in the group</li>
                        <li>Timing requirements</li>
                        <li>Any relevant special requirements</li>
                    </ul>
                    <p>Customers should arrive or be ready at the agreed pickup time.</p>

                    <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal mt-12 mb-6">11. Changes Due to Weather or Park Conditions</h2>
                    <p>
                        Safari routes, timing or other arrangements may need to change due to weather, road conditions, park regulations,
                        wildlife management requirements, safety considerations or instructions from relevant authorities.
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal mt-12 mb-6">12. Cancellations and Refunds</h2>
                    <p>
                        Cancellation, rescheduling and refund conditions will be communicated to the customer when the booking is confirmed.
                    </p>
                    <p>
                        Any applicable cancellation conditions may depend on the safari arrangement, advance payments, third-party services,
                        and timing of the cancellation.
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal mt-12 mb-6">13. Accommodation Information</h2>
                    <p>
                        Our website may provide information about hotels, lodges, camps and other accommodation near Yala National Park
                        to help travellers plan their visit.
                    </p>
                    <p>
                        Unless specifically stated, Yala Safari Jeeps is not the official booking agent, owner or representative of these properties.
                    </p>
                    <p>
                        Property facilities, availability, policies and services may change, so customers should confirm important details before booking accommodation.
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal mt-12 mb-6">14. Third-Party Services</h2>
                    <p>Some arrangements may involve third parties such as:</p>
                    <ul className="list-disc pl-6 space-y-2 my-6">
                        <li>National park authorities</li>
                        <li>Accommodation providers</li>
                        <li>Transport providers</li>
                        <li>Payment providers</li>
                        <li>Messaging platforms</li>
                    </ul>
                    <p>Yala Safari Jeeps cannot control every third-party service or policy.</p>

                    <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal mt-12 mb-6">15. Website Information Accuracy</h2>
                    <p>
                        We aim to keep the information on this website accurate and current. However, safari conditions, park regulations,
                        entrance charges, accommodation information and other travel details may change.
                    </p>
                    <p>Customers should confirm important booking details with us before travelling.</p>

                    <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal mt-12 mb-6">16. Limitation of Liability</h2>
                    <p>
                        To the extent permitted by applicable law, Yala Safari Jeeps is not responsible for losses or disruptions caused by
                        circumstances outside our reasonable control, including severe weather, park closures, government restrictions,
                        wildlife-related conditions, transport disruptions or actions of independent third-party providers.
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal mt-12 mb-6">17. Intellectual Property</h2>
                    <p>
                        Unless otherwise stated, the website design, original text, branding and other original website content are owned by or
                        licensed for use by Yala Safari Jeeps.
                    </p>
                    <p>Third-party names, trademarks, hotel names and other property belong to their respective owners.</p>

                    <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal mt-12 mb-6">18. Changes to Terms</h2>
                    <p>
                        We may update these Terms of Service when our website, services, booking process or legal requirements change.
                        The latest version will be published on this page with an updated date.
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal mt-12 mb-6">19. Contact Information</h2>
                    <div className="bg-white p-8 rounded-2xl border border-warm-sand mt-6">
                        <p className="font-bold text-deep-charcoal mb-2">{siteConfig.name}</p>
                        <p className="mb-4">{siteConfig.contact.address}</p>

                        <p className="mb-2">
                            <span className="font-semibold text-deep-charcoal">Email:</span>{' '}
                            <a href={siteConfig.contact.emailHref} className="text-sunset-gold hover:underline">
                                {siteConfig.contact.email}
                            </a>
                        </p>
                        <p>
                            <span className="font-semibold text-deep-charcoal">Phone / WhatsApp:</span>{' '}
                            <a href={siteConfig.contact.phoneHref} className="text-sunset-gold hover:underline">
                                {siteConfig.contact.phoneDisplay}
                            </a>
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}
