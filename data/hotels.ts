export interface HotelData {
    slug: string;
    name: string;
    category: string;
    location: string;
    shortDescription: string;
    description: string;
    facilities: string[];
    bestFor: string[];
    safariBenefits: {
        title: string;
        description: string;
    }[];
    seoTitle: string;
    seoDescription: string;
}

export const hotels: HotelData[] = [
    {
        slug: "uga-chena-huts-yala",
        name: "Uga Chena Huts Yala",
        category: "Luxury Wilderness Stay",
        location: "Palatupana, Yala",
        shortDescription: "A boutique luxury property where the ocean meets the jungle, offering unparalleled private living near Yala National Park.",
        description: "Uga Chena Huts Yala offers an unforgettable luxury experience tucked between the wild surroundings of Yala National Park and the crashing waves of the Indian Ocean. Designed to mirror the region's traditional farming huts but refined with ultra-luxury standards, the property features 18 private cabins strategically spaced for complete privacy in the coastal scrub. The resort boasts sophisticated dining, a 22m main swimming pool, and an onsite spa, giving guests an opportunity to relax fully amidst raw nature. Its proximity to the park makes it an exceptional choice for those seeking a premium wilderness setting intertwined with high-level service and comfort.",
        facilities: [
            "Private plunge pools",
            "Main swimming pool",
            "Spa",
            "Complimentary Wi-Fi",
            "Dining",
            "24-hour assistance"
        ],
        bestFor: [
            "Couples",
            "Honeymoon travellers",
            "Luxury travellers",
            "Wildlife enthusiasts"
        ],
        safariBenefits: [
            {
                title: "Close to the Yala Area",
                description: "Situated in Palatupana, providing convenient proximity to the main Yala National Park entrance."
            },
            {
                title: "Early Safari Departures",
                description: "Ideal for early morning safaris, ensuring you maximize your chances of spectacular wildlife sightings."
            },
            {
                title: "Nature-Focused Environment",
                description: "Immerse yourself directly in the coastal wilderness before and after your safari drives."
            },
            {
                title: "Exceptional Relaxation",
                description: "Return from a dusty safari to a private plunge pool and premium spa facilities."
            }
        ],
        seoTitle: "Uga Chena Huts Yala | Luxury Accommodation Near Yala",
        seoDescription: "Stay at Uga Chena Huts Yala, a prominent luxury wilderness accommodation offering private plunge pools and resort amenities near Yala National Park."
    },
    {
        slug: "cinnamon-wild-yala",
        name: "Cinnamon Wild Yala",
        category: "Wildlife Resort",
        location: "Yala Area",
        shortDescription: "A renowned wildlife resort offering seamless immersion into the natural wilderness surrounding Yala.",
        description: "Cinnamon Wild Yala is a wildlife-focused resort that places guests right on the boundary of Sri Lanka's most famous wilderness. Featuring 68 thoughtfully designed chalets, including Beach Chalets and wilderness-oriented spaces, the resort provides a deeply authentic natural atmosphere without compromising on comfort. Many accommodations include private terraces offering stunning views toward the coast or the surrounding wildlife landscape. With modern conveniences like Wi-Fi, accessible parking, and quality room amenities, Cinnamon Wild stands out as a prime destination for travellers wanting a classic resort experience intimately tied to Yala’s wildlife.",
        facilities: [
            "Wi-Fi",
            "Parking",
            "Room amenities",
            "Nature-focused experiences"
        ],
        bestFor: [
            "Families",
            "Wildlife enthusiasts",
            "Adventure travellers"
        ],
        safariBenefits: [
            {
                title: "Direct Wildlife Connection",
                description: "The property often witnesses wildlife roaming near the boundary, enhancing the safari atmosphere."
            },
            {
                title: "Convenient Location",
                description: "Reduces travel time to the park, making early morning and evening safaris more accessible."
            },
            {
                title: "Resort Comfort Level",
                description: "Offers the reliable comfort, dining, and amenities expected from a larger established resort."
            }
        ],
        seoTitle: "Cinnamon Wild Yala | Wildlife Safari Resort Accommodation",
        seoDescription: "Plan your stay at Cinnamon Wild Yala. Explore comfortable chalets, resort facilities, and a deep connection to the nature of Yala National Park."
    },
    {
        slug: "jetwing-yala",
        name: "Jetwing Yala",
        category: "Coastal Safari Resort",
        location: "Palatupana, Kirinda",
        shortDescription: "A full-service resort set on a sprawling coastal wilderness property near Yala National Park.",
        description: "Situated in Palatupana near Kirinda, Jetwing Yala bridges the gap between thrilling wildlife safaris and a refreshing seaside retreat. Positioned close to Yala National Park, the resort is set within a large beachfront property offering direct beach access to the Indian Ocean. Designed for space and leisure, rooms come equipped with their own balconies or terraces for enjoying the sea breeze. Guests have access to comprehensive resort facilities, including a prominent swimming pool, a fully equipped gym, a tranquil spa, and an integrated travel desk. It is an ideal anchor for visitors looking for extensive resort services alongside their wildlife explorations.",
        facilities: [
            "Swimming pool",
            "Spa",
            "Gym",
            "Free Wi-Fi",
            "Beach access",
            "Parking",
            "Room service",
            "Travel desk"
        ],
        bestFor: [
            "Families",
            "Couples",
            "Luxury travellers"
        ],
        safariBenefits: [
            {
                title: "Coastal Proximity",
                description: "Combines the thrill of a Yala safari with relaxing beach access on the same property."
            },
            {
                title: "Complete Facilities",
                description: "Perfect for unwinding after a long safari with a choice of spa treatments, gym, and large pool."
            },
            {
                title: "Excellent Accessibility",
                description: "Positioned efficiently for quick transit to the park entrances while offering parking and travel support."
            }
        ],
        seoTitle: "Jetwing Yala | Coastal Wildlife Resort Near Yala National Park",
        seoDescription: "Discover Jetwing Yala, a coastal resort offering large swimming facilities, beach access, and comfortable rooms near Yala National Park."
    },
    {
        slug: "leopard-trails-yala",
        name: "Leopard Trails Yala",
        category: "Tented Safari Experience",
        location: "Yala Area",
        shortDescription: "An immersive tented safari camp blending classic explorer aesthetics with modern comforts.",
        description: "Leopard Trails Yala brings the classic romance of the African-style safari into the heart of the Sri Lankan wilderness. This tented camp offers both Deluxe Tents and larger suite-style tented accommodation, perfect for individuals and families wanting a deeply immersive experience. Despite the canvas walls, each tent is equipped with real beds, private en-suite bathroom facilities, and charging points for modern convenience. Surrounded by the sounds of the jungle, guests are treated to a captivating atmosphere that extends the excitement of a wildlife drive throughout the night. It is the perfect choice for the adventurous traveller looking for authenticity and comfort.",
        facilities: [
            "Deluxe Tents",
            "Suite-style tents",
            "Private bathroom facilities",
            "In-tent charging facilities",
            "Modern comfort features"
        ],
        bestFor: [
            "Adventure travellers",
            "Wildlife enthusiasts",
            "Couples",
            "Families"
        ],
        safariBenefits: [
            {
                title: "Immersive Safari Style",
                description: "Maintains the rugged, exploratory feel of a true wildlife expedition throughout your stay."
            },
            {
                title: "Nature Intimacy",
                description: "The tented environment allows you to safely hear and appreciate the nocturnal sounds of the jungle."
            },
            {
                title: "Tailored Comfort",
                description: "Provides a comfortable retreat with private bathrooms without sacrificing the authentic camp vibe."
            }
        ],
        seoTitle: "Leopard Trails Yala | Tented Camp Accommodation",
        seoDescription: "Experience Leopard Trails Yala, featuring deluxe tented accommodations and authentic safari atmospheres for your Yala National Park adventure."
    }
];
