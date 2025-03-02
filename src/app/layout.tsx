import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sardar Patel Hr. Sec School, Satna | Excellence in Education',
  description:
    'Sardar Patel Hr. Sec School, Satna, is committed to academic excellence, character development, and holistic education for future leaders.',
  keywords:
    'Sardar Patel School, Satna School, Best School in Satna, Mp board School in Satna, High School, Education in Madhya Pradesh',
  authors: [{ name: 'Sardar Patel Hr. Sec School, Satna' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://sardarpatelschoolsatna.in/',
    title: 'Sardar Patel Hr. Sec School, Satna - Excellence in Education',
    description:
      'Providing top-quality education with a focus on leadership, innovation, and global exposure.',
    images: [
      {
        url: 'https://sardarpatelschoolsatna.in/real-school.webp',
        width: 1200,
        height: 630,
        alt: 'Sardar Patel Hr. Sec School, Satna Campus',
      },
      {
        url: 'https://sardarpatelschoolsatna.in/logo.png',
        width: 1200,
        height: 630,
        alt: 'Sardar Patel Hr. Sec School, Satna Logo',
      },
    ],
    siteName: 'Sardar Patel Hr. Sec School, Satna',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sardar Patel Hr. Sec School, Satna - Excellence in Education',
    description:
      'Providing top-quality education with a focus on leadership, innovation, and global exposure.',
    images: ['https://sardarpatelschoolsatna.in/real-school.webp'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="google-site-verification" content="Z1YNlh4SfNUdXKyj8lpHdTFu9Z_WYcGrBPaoM0SCgu0" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://sardarpatelschoolsatna.in/" />
        <link rel="sitemap" type="application/xml" href="https://sardarpatelschoolsatna.in/sitemap.xml" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              name: 'Sardar Patel Hr. Sec School, Satna',
              url: 'https://sardarpatelschoolsatna.in/',
              logo: 'https://sardarpatelschoolsatna.in/logo.png',
              description:
                'Sardar Patel Hr. Sec School in Satna provides quality education, fostering leadership and innovation in students.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'WARD NO.13, Hanuman Nagar, Adarsh Nagar Nai Basti',
                addressLocality: 'Satna',
                addressRegion: 'Madhya Pradesh',
                postalCode: '485005',
                addressCountry: 'IN',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+91 9907378338',
                contactType: 'customer service',
              },
              sameAs: [
                'https://www.facebook.com/profile.php?id=100010652954238',
                'https://twitter.com/sardarpatelschool',
                'https://www.instagram.com/sardar_patel_hr_sec_school/',
                'https://www.youtube.com/@sardarpatelhr.sec.school9963',
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
