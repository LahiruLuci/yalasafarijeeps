"use client";

import { usePathname } from "next/navigation";

export default function BreadcrumbSchema() {
  const pathname = usePathname();
  const baseUrl = "https://yalasafarijeeps.com";

  // Create breadcrumb items based on URL segments
  const pathSegments = pathname.split("/").filter((item) => item !== "");
  
  const breadcrumbList = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": baseUrl
    },
    ...pathSegments.map((segment, index) => {
      const url = `${baseUrl}/${pathSegments.slice(0, index + 1).join("/")}`;
      // Clean up segment name (e.g. "morning-safari" -> "Morning Safari")
      const name = segment
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
        
      return {
        "@type": "ListItem",
        "position": index + 2,
        "name": name,
        "item": url
      };
    })
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbList
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
