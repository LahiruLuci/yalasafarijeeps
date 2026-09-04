"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function BookingFAQ() {
    const faqs = [
        {
            question: "Do I need to pay now?",
            answer: "No upfront payment is required at the time of inquiry. We first verify park availability and guide schedules. Once confirmed, we will discuss payment options with you via WhatsApp."
        },
        {
            question: "Is hotel pickup included?",
            answer: "Complimentary pickup and drop-off are available from selected locations around Yala, Tissamaharama, Kirinda and Kataragama. Transfers from more distant locations can be arranged at an additional charge."
        },
        {
            question: "Are Yala National Park entrance tickets included?",
            answer: "Yala National Park entrance tickets are not included in the standard safari price unless specifically stated in your quotation. We can assist with arranging the ticket purchase in advance for your convenience."
        },
        {
            question: "Can I book a private jeep?",
            answer: "All our safaris are strictly private. You will have the entire 4x4 jeep to yourself (and your group), ensuring a personalized experience and the freedom to spend as much time as you want at specific sightings."
        },
        {
            question: "What time does the morning safari start?",
            answer: "The morning safari officially operates from 5:30 AM to 10:30 AM. We pick you up accordingly to ensure you are ready for the park gates opening."
        },
        {
            question: "What should I bring?",
            answer: "We recommend bringing a camera, binoculars, sun protection, and a light jacket for the early morning. We provide bottled water and snacks, but you're welcome to bring your own as well."
        },
        {
            question: "Can I customize my Yala safari?",
            answer: "Yes. Our Tailor-Made Yala Safari option allows you to discuss your preferred schedule, interests and travel plans with us. The final arrangement is subject to park regulations, operating conditions and availability."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="bg-white py-24 md:py-32">
            <div className="max-w-4xl mx-auto px-4 md:px-8">
                <div className="text-center mb-20">
                    <span className="text-sunset-gold font-black text-xs tracking-[0.5em] uppercase mb-4 block">Information</span>
                    <h2 className="text-4xl md:text-5xl font-black text-deep-charcoal italic leading-tight">Common Questions</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border border-warm-sand/50 rounded-[2rem] overflow-hidden transition-all duration-300">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-8 text-left bg-warm-sand/5 hover:bg-warm-sand/10 transition-colors"
                            >
                                <span className="text-xl font-bold text-deep-charcoal pr-8">{faq.question}</span>
                                <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-sunset-gold flex items-center justify-center text-sunset-gold transition-transform duration-500 ${openIndex === i ? 'rotate-180' : ''}`}>
                                    {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                                </div>
                            </button>
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="p-8 pt-2 text-safari-brown/70 font-medium leading-relaxed bg-warm-sand/5">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
