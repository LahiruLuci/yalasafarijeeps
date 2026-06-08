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
            question: "Can you pick me up from my hotel?",
            answer: "Yes! We offer free hotel pickup and drop-off from any location in Tissamaharama, Kataragama, Kirinda, and Yala. We also arrange pickups from further locations like Ella, Mirissa, or Tangalle for an additional fee."
        },
        {
            question: "Are park entrance tickets included?",
            answer: "Our standard package includes the private jeep and expert guide. Park entrance fees are paid separately at the gate. However, we can handle the ticket purchase for you in advance to save time — just let us know in your request."
        },
        {
            question: "Can I book a private jeep?",
            answer: "All our safaris are strictly private. You will have the entire 4x4 jeep to yourself (and your group), ensuring a personalized experience and the freedom to spend as much time as you want at specific sightings."
        },
        {
            question: "What time does the morning safari start?",
            answer: "The morning safari typically starts with a pickup around 5:00 AM to 5:15 AM, as the park gates open at 6:00 AM. Being early is crucial for the best leopard tracking opportunities."
        },
        {
            question: "What should I bring?",
            answer: "We recommend bringing a camera, binoculars, sun protection, and a light jacket for the early morning. We provide bottled water and snacks, but you're welcome to bring your own as well."
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
