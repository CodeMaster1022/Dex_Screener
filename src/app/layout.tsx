import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provider from '@/providers';
import Script from 'next/script'
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KOM WALLET",
  description: "kom trading bot wallet",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon.png",
        href: "/favicon.png",
      }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true} className={``}>
      <head>
        <Script src="https://telegram.org/js/telegram-web-app.js"></Script>
      </head>
      <body className={`${inter.className} bg-gradient-to-b dark:from-[#171918] dark:to-[#424745] from-[#dfe1e2] to-[#ffffff] bg-cover fixed top-0 right-0 left-0 bottom-0`} suppressHydrationWarning={true}>
        <div className="h-full overflow-y-scroll">
          <Provider>
            {children}
          </Provider>
        </div>
      </body>
    </html>
  );
}
