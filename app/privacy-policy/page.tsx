import { Metadata } from 'next';
import { siteConfig } from '@/lib/siteConfig';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Read how Yala Safari Jeeps collects, uses and protects information provided through safari enquiries, bookings, WhatsApp and our website.',
    alternates: {
        canonical: 'https://yalasafarijeeps.com/privacy-policy',
    }
};

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-warm-sand/20 py-32">
            <div className="max-w-4xl mx-auto px-6 md:px-12">
                <header className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-black text-deep-charcoal mb-4">Privacy Policy</h1>
                    <p className="text-safari-brown/70 font-medium tracking-wide uppercase text-sm">Last updated: September 2026</p>
                </header>

                <section className="prose prose-lg prose-safari-brown max-w-none text-safari-brown/90">
                    <p className="font-medium text-lg leading-relaxed mb-10">
                        Yala Safari Jeeps respects your privacy and is committed to handling your personal information responsibly.
                        This Privacy Policy explains what information we may collect when you visit yalasafarijeeps.com, contact us,
                        submit a safari enquiry, or communicate with us through WhatsApp, email, or other available contact methods.
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal mt-12 mb-6">1. Information We Collect</h2>
                    <p>We may collect information that you voluntarily provide when you contact us or submit a safari enquiry. This may include:</p>
                    <ul className="list-disc pl-6 space-y-2 my-6">
                        <li>Your name</li>
                        <li>Email address</li>
                        <li>WhatsApp or telephone number</li>
                        <li>Country</li>
                        <li>Preferred safari date and time</li>
                        <li>Number of adults and children travelling</li>
                        <li>Safari package or experience you are interested in</li>
                        <li>Hotel or pickup location</li>
                        <li>Safari preferences or special requests</li>
                        <li>Any other information you choose to provide in your message</li>
                    </ul>
                    <p>We only ask for information that is useful for responding to your enquiry and arranging your safari experience.</p>

                    <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal mt-12 mb-6">2. Information Collected Automatically</h2>
                    <p>When you visit our website, some technical information may be collected automatically by our website hosting, analytics, security, or similar services. This may include:</p>
                    <ul className="list-disc pl-6 space-y-2 my-6">
                        <li>IP address</li>
                        <li>Browser type</li>
                        <li>Device type</li>
                        <li>Operating system</li>
                        <li>Pages visited</li>
                        <li>Approximate location</li>
                        <li>Date and time of your visit</li>
                        <li>Referring website or search engine</li>
                    </ul>
                    <p>This information may be used to understand how visitors use our website, improve website performance, detect technical problems, and protect the website from misuse.</p>
                    <p>Our website currently uses Google Analytics to help us understand website traffic and visitor behaviour.</p>

                    <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal mt-12 mb-6">3. How We Use Your Information</h2>
                    <p>We may use your information to:</p>
                    <ul className="list-disc pl-6 space-y-2 my-6">
                        <li>Respond to safari enquiries</li>
                        <li>Check safari availability</li>
                        <li>Help arrange your safari</li>
                        <li>Confirm pickup locations and times</li>
                        <li>Communicate with you through WhatsApp, phone, or email</li>
                        <li>Provide information about safari packages</li>
                        <li>Respond to questions about accommodation or travel planning</li>
                        <li>Improve our website and customer experience</li>
                        <li>Maintain website security</li>
                        <li>Comply with legal requirements where necessary</li>
                    </ul>
                    <p>We will not use your personal information for unrelated purposes without a valid reason.</p>

                    <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal mt-12 mb-6">4. WhatsApp Communications</h2>
                    <p>If you choose to contact us through WhatsApp, information you send through WhatsApp will also be processed according to WhatsApp&apos;s own privacy practices.</p>
                    <p>We may use your WhatsApp number to:</p>
                    <ul className="list-disc pl-6 space-y-2 my-6">
                        <li>Reply to your enquiry</li>
                        <li>Confirm safari details</li>
                        <li>Confirm availability</li>
                        <li>Discuss pickup arrangements</li>
                        <li>Provide booking-related information</li>
                    </ul>
                    <p>We will not intentionally add you to unrelated marketing lists simply because you contacted us about a safari.</p>

                    <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal mt-12 mb-6">5. Email Communications</h2>
                    <p>If you send us an email or submit an enquiry through the website, we may use your email address to respond to your request and provide information related to your safari or travel enquiry.</p>
                    <p>We do not sell your email address to third parties.</p>

                    <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal mt-12 mb-6">6. Sharing Your Information</h2>
                    <p>We do not sell or rent your personal information.</p>
                    <p>However, we may need to share limited information with service providers or other parties when reasonably necessary to fulfil your request. For example, this may include:</p>
                    <ul className="list-disc pl-6 space-y-2 my-6">
                        <li>Safari drivers or guides</li>
                        <li>Transport providers</li>
                        <li>Accommodation providers, if you specifically ask us to assist with accommodation</li>
                        <li>Technology or hosting providers</li>
                        <li>Email or messaging service providers</li>
                        <li>Authorities where disclosure is required by applicable law</li>
                    </ul>
                    <p>We only aim to share information that is reasonably necessary for the relevant purpose.</p>

                    <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal mt-12 mb-6">7. Accommodation Enquiries</h2>
                    <p>Our website may provide information about hotels, lodges, camps, or other accommodation near Yala National Park.</p>
                    <p>If you contact us asking for assistance regarding a property, we may need to share relevant enquiry information with that accommodation provider if necessary to help with your request.</p>
                    <p>Yala Safari Jeeps is not automatically the official booking agent or representative of accommodation properties shown on our website unless specifically stated.</p>

                    <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal mt-12 mb-6">8. Cookies and Analytics</h2>
                    <p>Our website uses cookies and similar technologies, specifically Google Analytics, to understand website traffic, measure performance, and improve the visitor experience. These tools collect technical information about how visitors use the website.</p>
                    <p>If advertising technologies such as Google Ads or Meta Pixel are introduced in the future, this Privacy Policy will be updated where necessary.</p>

                    <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal mt-12 mb-6">9. Third-Party Links</h2>
                    <p>Our website may contain links to third-party websites, including:</p>
                    <ul className="list-disc pl-6 space-y-2 my-6">
                        <li>Hotels</li>
                        <li>WhatsApp</li>
                        <li>Google Maps</li>
                        <li>Social media platforms</li>
                        <li>Tourism-related websites</li>
                    </ul>
                    <p>We are not responsible for the privacy practices or content of external websites. We encourage users to review the privacy policies of those websites before providing personal information.</p>

                    <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal mt-12 mb-6">10. Data Retention</h2>
                    <p>We keep personal information only for as long as reasonably necessary for the purpose for which it was collected. For example, enquiry and booking-related information may be retained for:</p>
                    <ul className="list-disc pl-6 space-y-2 my-6">
                        <li>Customer communication</li>
                        <li>Safari planning</li>
                        <li>Booking records</li>
                        <li>Customer support</li>
                        <li>Legal or administrative purposes</li>
                    </ul>
                    <p>We may remove or delete information when it is no longer reasonably required.</p>

                    <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal mt-12 mb-6">11. Data Security</h2>
                    <p>We take reasonable steps to protect the personal information provided to us. However, no website, email service, messaging platform, or internet transmission can be guaranteed to be completely secure.</p>
                    <p>Users should avoid sending highly sensitive information through website forms, email, or WhatsApp unless necessary.</p>

                    <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal mt-12 mb-6">12. Your Privacy Rights</h2>
                    <p>Depending on applicable law and the circumstances, you may contact us to request:</p>
                    <ul className="list-disc pl-6 space-y-2 my-6">
                        <li>Access to personal information we hold about you</li>
                        <li>Correction of inaccurate information</li>
                        <li>Deletion of personal information where appropriate</li>
                        <li>Information about how your data is being used</li>
                        <li>Withdrawal of consent where processing is based on consent</li>
                    </ul>
                    <p>We may need to verify your identity before responding to certain requests.</p>

                    <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal mt-12 mb-6">13. Children&apos;s Privacy</h2>
                    <p>Our website is intended for travellers and people arranging safari experiences. We do not knowingly request personal information directly from young children without the involvement of a parent or guardian.</p>
                    <p>Parents or guardians arranging safaris for children may provide relevant information required for the booking.</p>

                    <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal mt-12 mb-6">14. Changes to This Privacy Policy</h2>
                    <p>We may update this Privacy Policy when:</p>
                    <ul className="list-disc pl-6 space-y-2 my-6">
                        <li>Our website changes</li>
                        <li>New services are introduced</li>
                        <li>Our booking process changes</li>
                        <li>Analytics or advertising tools are introduced</li>
                        <li>Legal or regulatory requirements change</li>
                    </ul>
                    <p>The latest version will be published on this page with an updated date.</p>

                    <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal mt-12 mb-6">15. Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy or how we handle your personal information, please contact us:</p>
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
