export interface SafariPackage {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  heroImage: string;
  duration: string;
  time: string;
  highlights: string[];
  included: string[];
}

export const safariPackages: SafariPackage[] = [
  {
    slug: "morning",
    title: "Morning Safari",
    subtitle: "The Awakening Wilderness",
    description: "Witness the jungle come to life as the first rays of sun pierce through the canopy, revealing Yala's active predators.",
    longDescription: "Our Morning Safari is designed for those who want to experience the park at its most active. Starting before sunrise, we position ourselves to witness the awakening of the wild. This is often the best time to spot leopards as they emerge from their night hunts and sloth bears as they forage before the heat of the day sets in.",
    image: "/images/yala-national-park/yala-national-park-sri-lanka-image1.jpg",
    heroImage: "/images/yala-national-park/yala-national-park-sri-lanka-image2.jpg",
    duration: "4-5 Hours",
    time: "5:00 AM - 10:00 AM",
    highlights: [
        "Sunrise wildlife photography",
        "Active leopard tracking",
        "Birdwatching at dawn",
        "Block I & II coverage"
    ],
    included: [
        "Private 4x4 Jeep",
        "Permits & Taxes",
        "Expert Guide/Driver",
        "Hotel Pickup/Drop"
    ]
  },
  {
    slug: "evening",
    title: "Evening Safari",
    subtitle: "The Golden Hour Prowl",
    description: "Experience the magic of the golden hour as the predators emerge for their nightly hunt under the amber Sri Lankan sky.",
    longDescription: "The Evening Safari captures the transition from day to night. As the temperature drops, the park's inhabitants become increasingly active. The golden light provides an incredible backdrop for photography, especially as leopards often climb onto rocky outcrops to survey their territory before dusk.",
    image: "/images/yala-national-park/yala-national-park-sri-lanka-image8.jpg",
    heroImage: "/images/yala-national-park/yala-national-park-sri-lanka-image7.jpg",
    duration: "4 Hours",
    time: "2:00 PM - 6:00 PM",
    highlights: [
        "Golden hour photography",
        "Sunset over the lagoon",
        "Evening predator activity",
        "Expert tracking skills"
    ],
    included: [
        "Private 4x4 Jeep",
        "Permits & Taxes",
        "Expert Guide/Driver",
        "Hotel Pickup/Drop"
    ]
  },
  {
    slug: "full-day",
    title: "Full Day Safari",
    subtitle: "The Ultimate Expedition",
    description: "A comprehensive deep-dive into the heart of Yala, exploring distant corners and forgotten trails for the ultimate encounter.",
    longDescription: "For the true wildlife enthusiast, the Full Day Safari offers the most comprehensive experience. We delve deep into the less-traveled areas of the park, increasing the chances of unique sightings. This extended duration allows for a more relaxed pace and the opportunity to observe animal behavior in depth.",
    image: "/images/yala-national-park/yala-national-park-sri-lanka-image5.jpg",
    heroImage: "/images/yala-national-park/yala-national-park-sri-lanka-image1.jpg",
    duration: "12 Hours",
    time: "5:00 AM - 6:00 PM",
    highlights: [
        "Deep park exploration",
        "Maximum wildlife viewing",
        "Mid-day lagoon break",
        "Comprehensive coverage"
    ],
    included: [
        "Private 4x4 Jeep",
        "Permits & Taxes",
        "Expert Guide/Driver",
        "Breakfast & Lunch",
        "Hotel Pickup/Drop"
    ]
  }
];

export function getSafariBySlug(slug: string) {
  return safariPackages.find((s) => s.slug === slug);
}
