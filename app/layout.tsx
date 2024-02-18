import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Provider } from "@/components/providers.component";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js + S3",
  description: "To be used as an example for file upload to S3 with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
