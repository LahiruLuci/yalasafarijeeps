"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "James & Sarah Thorne",
    location: "London, UK",
    initials: "JT",
    color: "bg-[#6B6F3A]", // olive-green
    date: "October 2025",
    rating: 5,
    title: "An unforgettable encounter!",
    text: "The expertise of our guide was unmatched. We saw three different leopards on a single full-day safari. The premium jeep was incredibly comfortable even on the rougher tracks. Truly a world-class experience.",
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Sydney, Australia",
    initials: "MC",
    color: "bg-[#D07A3F]", // sunset-gold
    date: "September 2025",
    rating: 5,
    title: "Best safari outside of Africa",
    text: "I've been on safaris in Kenya and South Africa, and the Yala experience curated by this team completely holds its own. The sheer volume of elephants and the breathtaking coastline landscapes were surreal.",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    location: "Madrid, Spain",
    initials: "ER",
    color: "bg-[#8E7E5A]", 
    date: "November 2025",
    rating: 5,
    title: "Exceptional from start to finish",
    text: "From the seamless hotel pickup to the beautifully arranged wilderness picnic, every detail was perfect. Our tracker anticipated the animals' movements beautifully. Highly recommend the evening drive!",
  },
  {
    id: 4,
    name: "David Dubois",
    location: "Paris, France",
    initials: "DD",
    color: "bg-[#A65B3B]", 
    date: "August 2025",
    rating: 5,
    title: "A photographer's ultimate dream",
    text: "As a wildlife photographer, positioning is everything. Our driver incredibly understood angles and lighting, maneuvering us into perfect positions without stressing the animals. Got the shot of a lifetime.",
  },
  {
    id: 5,
    name: "Aisha Patel",
    location: "Mumbai, India",
    initials: "AP",
    color: "bg-[#555C31]", 
    date: "December 2025",
    rating: 5,
    title: "Magical family adventure",
    text: "We were worried about bringing our kids, but the team made it so engaging and safe. They spotted tiny birds and massive elephants with the same enthusiasm. The kids are still talking about it!",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-olive-green py-24 md:py-32 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-sunset-gold/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 bg-warm-sand/5 rounded-full blur-[80px]" />
        <svg className="absolute top-10 left-10 text-white/5 w-64 h-64 transform -rotate-12" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <span className="text-sunset-gold font-bold text-sm tracking-[0.3em] uppercase mb-4 block">
            Voices of the Wild
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-soft-beige mb-6 leading-tight">
            Guest Experiences
          </h2>
          <p className="text-lg text-warm-sand/80 font-medium leading-relaxed">
            Don't just take our word for it. Discover the indelible memories and breathtaking encounters shared by explorers from around the globe.
          </p>
        </div>

        {/* Cinematic Swiper Carousel */}
        <div className="testimonials-slider-wrapper pb-16">
          <Swiper
            modules={[Autoplay, Pagination, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
            speed={800}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 150,
              modifier: 2.5,
              slideShadows: false,
            }}
            pagination={{
              clickable: true,
              renderBullet: (_index, className) => {
                return `<span class="${className} custom-bullet"></span>`;
              },
            }}
            className="!overflow-visible"
            breakpoints={{
              320: { slidesPerView: 1.1 },
              640: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2.5 },
            }}
          >
            {testimonials.map((review) => (
              <SwiperSlide key={review.id} className="max-w-[320px] sm:max-w-[400px] md:max-w-[480px]">
                {({ isActive }) => (
                  <div 
                    className={`relative p-8 md:p-12 rounded-3xl transition-all duration-700 h-full flex flex-col justify-between ${
                      isActive 
                        ? 'bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] scale-100 opacity-100 z-20' 
                        : 'bg-warm-sand/90 shadow-xl scale-95 opacity-50 z-10 blur-[2px]'
                    }`}
                  >
                    {/* Top Section */}
                    <div>
                      <div className="flex justify-between items-start mb-8">
                        <div className="flex gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill={isActive ? "#D07A3F" : "#8E7E5A"} className="transition-colors duration-500">
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                          ))}
                        </div>
                        <span className={`text-xs font-bold uppercase tracking-widest ${isActive ? 'text-safari-brown/40' : 'text-safari-brown/30'}`}>
                          {review.date}
                        </span>
                      </div>

                      <h3 className={`text-2xl font-extrabold mb-4 leading-tight ${isActive ? 'text-deep-charcoal' : 'text-olive-green'}`}>
                        "{review.title}"
                      </h3>
                      
                      <p className={`text-base leading-relaxed mb-10 ${isActive ? 'text-safari-brown/80' : 'text-safari-brown/60'}`}>
                        {review.text}
                      </p>
                    </div>

                    {/* Bottom Author Section */}
                    <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-200/50">
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-extrabold text-xl shadow-inner ${review.color}`}>
                        {review.initials}
                      </div>
                      <div className="flex flex-col">
                        <span className={`font-bold text-lg ${isActive ? 'text-deep-charcoal' : 'text-olive-green'}`}>
                          {review.name}
                        </span>
                        <span className={`text-xs font-bold tracking-widest uppercase ${isActive ? 'text-sunset-gold' : 'text-safari-brown/50'}`}>
                          {review.location}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Embedded CSS for custom pagination styling specific to this section */}
      <style>{`
        .testimonials-slider-wrapper .swiper-pagination {
          position: relative;
          margin-top: 50px;
          bottom: 0 !important;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
        }
        .testimonials-slider-wrapper .custom-bullet {
          width: 12px;
          height: 12px;
          background: rgba(242, 230, 206, 0.3) !important;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.4s ease;
          opacity: 1 !important;
          margin: 0 !important;
        }
        .testimonials-slider-wrapper .swiper-pagination-bullet-active.custom-bullet {
          background: #D07A3F !important;
          width: 32px;
          border-radius: 100px;
        }
        /* Custom hide shadow from swiper coverflow to use tailwind shadows */
        .swiper-slide-shadow-left,
        .swiper-slide-shadow-right {
           display: none !important;
        }
      `}</style>
    </section>
  );
}
