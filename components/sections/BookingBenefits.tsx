import { CheckCircle2, ShieldCheck, Zap, HeartHandshake } from "lucide-react";

export default function BookingBenefits() {
  const benefits = [
    {
      icon: <CheckCircle2 className="w-10 h-10 text-sunset-gold" />,
      title: "Instant Confirmation",
      desc: "Receive pre-approval within 2 hours of inquiry. No long waits."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-sunset-gold" />,
      title: "Secure Booking",
      desc: "No credit card needed for inquiry. Pay securely upon final confirmation."
    },
    {
      icon: <Zap className="w-10 h-10 text-sunset-gold" />,
      title: "Priority Entry",
      desc: "We handle all park permits to ensure you get inside Block I early."
    },
    {
      icon: <HeartHandshake className="w-10 h-10 text-sunset-gold" />,
      title: "24/7 Support",
      desc: "Our team is available round-the-clock for changes or questions."
    }
  ];

  return (
    <section className="bg-warm-sand/40 py-24 md:py-32 border-y border-warm-sand">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="mb-6 p-6 rounded-[2rem] bg-white shadow-xl group-hover:bg-sunset-gold group-hover:scale-110 transition-all duration-500">
                <div className="group-hover:text-white transition-colors duration-500">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-2xl font-black text-deep-charcoal mb-4 italic leading-tight">
                {benefit.title}
              </h3>
              <p className="text-safari-brown/70 font-medium leading-relaxed font-sans text-sm px-4">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
