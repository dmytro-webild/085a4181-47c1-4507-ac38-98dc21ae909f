import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Archivo } from "next/font/google";



export const metadata: Metadata = {
  title: 'IsmailovStom — Стоматологическая Клиника Алматы',
  description: 'Премиальная стоматология IsmailovStom в Алматы с рейтингом 5.0 на 2GIS. Имплантация, брекеты, виниры и бесплатная консультация. Ваша идеальная улыбка начинается здесь.',
  keywords: ["стоматология алматы, имплантация, брекеты, виниры, лечение зубов, детская стоматология, бесплатная консультация, dentium, american orthodontist"],
  openGraph: {
    "title": "IsmailovStom — Стоматологическая Клиника Алматы",
    "description": "Премиальная стоматология IsmailovStom в Алматы с рейтингом 5.0 на 2GIS. Имплантация, брекеты, виниры и бесплатная консультация. Ваша идеальная улыбка начинается здесь.",
    "url": "https://ismailovstom.kz",
    "siteName": "IsmailovStom",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/attractive-patient-redviolet-dress-laying-dental-chair-while-female-dentist-treating-her-teeth-with-special-instruments_627829-9769.jpg",
        "alt": "Современный интерьер стоматологической клиники IsmailovStom"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "IsmailovStom — Стоматологическая Клиника Алматы",
    "description": "Премиальная стоматология IsmailovStom в Алматы с рейтингом 5.0 на 2GIS. Имплантация, брекеты, виниры и бесплатная консультация. Ваша идеальная улыбка начинается здесь.",
    "images": [
      "http://img.b2bpic.net/free-photo/attractive-patient-redviolet-dress-laying-dental-chair-while-female-dentist-treating-her-teeth-with-special-instruments_627829-9769.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${archivo.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
