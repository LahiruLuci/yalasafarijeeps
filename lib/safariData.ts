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
    longDescription: "Our Morning Safari is designed for those who want to experience the park at its most active. Starting before sunrise, we position ourselves to witness the awakening of the wild. Morning safaris can offer good opportunities for wildlife viewing, including possible leopard sightings, while temperatures are cooler.",
    image: "/images/yala-national-park/yala-national-park-sri-lanka-image1.jpg",
    heroImage: "/images/yala-national-park/yala-national-park-sri-lanka-image2.jpg",
    duration: "4-5 Hours",
    time: "5:30 AM – 10:30 AM",
    highlights: [
      "Sunrise wildlife photography",
      "Possible leopard sightings",
      "Birdwatching at dawn",
      "Block I & II coverage"
    ],
    included: [
      "Private 4x4 Safari Jeep",
      "Experienced Safari Driver/Guide",
      "Complimentary Local Hotel Pickup & Drop-off",
      "Bottled Water",
      "Assistance With Park Entrance Arrangements"
    ]
  },
  {
    slug: "evening",
    title: "Evening Safari",
    subtitle: "The Golden Hour Prowl",
    description: "Experience the magic of the golden hour as the predators emerge for their nightly hunt under the amber Sri Lankan sky.",
    longDescription: "The Evening Safari captures the transition from day to night. As the temperature drops, the park's inhabitants become increasingly active. The softer evening light and cooler conditions can create excellent opportunities for wildlife observation and photography, with possible sightings including Sri Lankan leopards and elephants.",
    image: "/images/yala-national-park/yala-national-park-sri-lanka-image8.jpg",
    heroImage: "/images/yala-national-park/yala-national-park-sri-lanka-image7.jpg",
    duration: "3.5 Hours",
    time: "2:30 PM – 6:00 PM",
    highlights: [
      "Golden hour photography",
      "Sunset over the lagoon",
      "Evening predator activity",
      "Experienced safari drivers"
    ],
    included: [
      "Private 4x4 Safari Jeep",
      "Experienced Safari Driver/Guide",
      "Complimentary Local Hotel Pickup & Drop-off",
      "Bottled Water",
      "Assistance With Park Entrance Arrangements"
    ]
  },
  {
    slug: "tailor-made",
    title: "Tailor-Made Yala Safari",
    subtitle: "Your Safari, Your Way",
    description: "Create a safari experience around your interests, schedule and travel plans. Tell us what you're looking for, and we'll help arrange a personalized Yala safari experience.",
    longDescription: "Tell us what kind of Yala experience you're looking for, and we'll help create a safari plan around your schedule and interests. We assist with choosing preferred timings, targeting specific wildlife or photography interests, and scheduling pick-ups. Note: Customization is always subject to park regulations, operating conditions, and availability.",
    image: "/images/yala-national-park/yala-national-park-sri-lanka-image5.jpg",
    heroImage: "/images/yala-national-park/yala-national-park-sri-lanka-image1.jpg",
    duration: "Customizable",
    time: "Flexible Schedule",
    highlights: [
      "Preferred safari timing",
      "Wildlife & photography interests",
      "Group requirements accommodation",
      "Flexible pickup planning"
    ],
    included: [
      "Personalized Safari Planning",
      "Private 4x4 Safari Jeep",
      "Driver/Guide",
      "Flexible Pickup Arrangement",
      "Confirmed Inclusions Before Booking"
    ]
  }
];

export function getSafariBySlug(slug: string) {
  return safariPackages.find((s) => s.slug === slug);
}
