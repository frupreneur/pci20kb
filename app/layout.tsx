import "./globals.css";
import { Header, Footer } from "@/components";
import { Inter } from "next/font/google";
import GlobalContextProvider from "@/state";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://photoconvertinto20kb.com"),
  title: "Photo Convert Into 20Kb - Compress Into 20Kb Online",
  description: `Here convert your photo like jpg, png, jpeg or any image file into 20kb online. Upload your photo and it will convert/compress photo into 20kb`,
  themeColor: "#3D0264",
  openGraph: {
    title: "Photo Convert Into 20Kb - Compress Into 20Kb Online",
    description:
      "Here convert your photo like jpg, png, jpeg or any image file into 20kb online. Upload your photo and it will convert/compress photo into 20kb",
    url: "https://photoconvertinto20kb.com",
    siteName: "Photo Convert Into 20Kb",
    images: [
      {
        url: "/assets/og.png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "Photo_Convert_Into_20Kb",
    title: "Photo Convert Into 20Kb - Compress Into 20Kb Online",
    description: "Photo Convert Into 20Kb - Compress Into 20Kb Online",
    creator: "Photo Convert Into 20Kb",
    images: ["/assets/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-8849438768625360" />
      </head>
      <Script id="googleAdSenseScript" async strategy="lazyOnload" />
      <body className={inter.className} suppressHydrationWarning={true}>
        <GlobalContextProvider>
          <Header />
          <main className="">
            <div className="site-wrap prose" id="site-wrap">
              {children}
            </div>
          </main>
          <Footer />
        </GlobalContextProvider>
      </body>
    </html>
  );
}
