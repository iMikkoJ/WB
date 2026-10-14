import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { COMPANY } from "@/lib/constants";
import "./globals.css";

const ibmPlex = IBM_Plex_Sans({
  variable: "--font-ibm-plex",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kuriirikuljetus pääkaupunkiseudulla | Kuljetuspalvelu MJ Oy",
  description:
    "Kiireelliset kuriirikuljetukset yrityksille Helsingissä, Espoossa ja Vantaalla. Nouto jopa 2 tunnissa. Kysy vapaata aikaa.",
  metadataBase: new URL(`https://${COMPANY.domain}`),
  openGraph: {
    title: "Kuriirikuljetus pääkaupunkiseudulla | Kuljetuspalvelu MJ Oy",
    description:
      "Kiireelliset kuriirikuljetukset yrityksille Helsingissä, Espoossa ja Vantaalla. Nouto jopa 2 tunnissa.",
    locale: "fi_FI",
    type: "website",
    url: `https://${COMPANY.domain}`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: COMPANY.name,
  description:
    "Kiireelliset kuriirikuljetukset yrityksille pääkaupunkiseudulla. Nouto jopa 2 tunnissa.",
  url: `https://${COMPANY.domain}`,
  telephone: COMPANY.phoneDisplay,
  email: COMPANY.email,
  vatID: COMPANY.businessId,
  areaServed: [
    { "@type": "City", name: "Helsinki" },
    { "@type": "City", name: "Espoo" },
    { "@type": "City", name: "Vantaa" },
    { "@type": "City", name: "Kauniainen" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Helsinki",
    addressRegion: "Uusimaa",
    addressCountry: "FI",
  },
  priceRange: "€€",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "07:00",
    closes: "17:00",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className={`${ibmPlex.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
