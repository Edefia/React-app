import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://localhost:3000"),

	title: 'Hebra Dalton',
	authors: {
		name: "Hebra Dalton",
	},

	description:
		"Based in Ghana, I am a Fullstack developer passionate about building a modern web application that users love.",
	openGraph: {
		title: "Hebra Dalton",
		description:
			"Based in Ghana, I am a Fullstack developer passionate about building a modern web application that users love.",
		url: "https://localhost:3000",
		siteName: "Hebra Dalton",
		images: "/og.png",
		type: "website",
	},
	keywords: ["daily web coding", "chensokheng", "dailywebcoding"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
