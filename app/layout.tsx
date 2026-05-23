import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Restaurant Food Cost & Profit Calculator",
  description: "Calculate food costs and profit margins per menu item. Track ingredient costs and see real-time profit margins for your restaurant."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e29a673a-d916-46b3-9d7e-2e550f4633d8"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
