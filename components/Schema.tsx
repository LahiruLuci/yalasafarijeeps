"use client";

export default function Schema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "@id": "https://yalasafarijeeps.com/#organization",
        "name": "Yala Safari Jeeps",
        "alternateName": "Yala Safari Jeeps Sri Lanka",
        "url": "https://yalasafarijeeps.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://yalasafarijeeps.com/images/logo-2.png",
          "width": "600",
          "height": "600"
        },
        "image": "https://yalasafarijeeps.com/images/yala-banner.jpg",
        "description": "Premium Yala Safari experience provider since 2008. Specializing in Leopard Tracking, Bear Safaris, and luxury wildlife photography expeditions in Yala National Park.",
        "telephone": "+94 77 123 4567",
        "email": "hello@yalasafarijeeps.com",
        "priceRange": "$$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Kirinda Road",
          "addressLocality": "Tissamaharama",
          "addressRegion": "Southern Province",
          "postalCode": "82600",
          "addressCountry": "LK"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "6.2163",
          "longitude": "81.2829"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1250",
          "bestRating": "5",
          "worstRating": "1"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Safari Packages",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Morning Leopard Safari",
                "description": "5:30 AM to 10:00 AM expert leopard tracking expedition."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Evening Sunset Safari",
                "description": "2:30 PM to 6:30 PM wildlife photography expedition."
              }
            }
          ]
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Tissamaharama"
          },
          {
            "@type": "NationalPark",
            "name": "Yala National Park"
          }
        ],
        "knowsAbout": [
          "Leopard Tracking",
          "Wildlife Photography",
          "Sri Lankan Sloth Bear",
          "Bird Watching",
          "Wild Elephant Conservation"
        ],
        "sameAs": [
          "https://www.facebook.com/yalasafarijeeps",
          "https://www.instagram.com/yalasafarijeeps",
          "https://www.tripadvisor.com/Attraction_Review-g304144-d8438183-Reviews-Yala_Safari_Jeeps-Tissamaharama_Southern_Province.html"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://yalasafarijeeps.com/#website",
        "url": "https://yalasafarijeeps.com",
        "name": "Yala Safari Jeeps",
        "description": "Premium Yala Safari Experience",
        "publisher": { "@id": "https://yalasafarijeeps.com/#organization" },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://yalasafarijeeps.com/safari?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
