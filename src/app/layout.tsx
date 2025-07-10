import type { Metadata } from "next";

import { Space_Grotesk } from "next/font/google";

import "@/assets/styles/global.css";
import "@/assets/styles/layout.css";

const font = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Neptune | Social Media Agency",
  description:
    "Neptune is a social media marketing agency helps to launch new businesses and leverage the marketing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={font.className} cz-shortcut-listen="false">
        {children}
      </body>
    </html>
  );
}
