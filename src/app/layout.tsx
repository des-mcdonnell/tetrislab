import type { Metadata } from "next";
import { TetrisLabContextProvider } from "@/state/TetrisLabContext";

import getRandomVariant from "@/utils/getRandomVariant";

import "./normalize.css";
import "./layout.scss";

export const metadata: Metadata = {
  title: "TetrisLab",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const variant = getRandomVariant();

  return (
    <html lang="en">
      <body>
        <TetrisLabContextProvider variant={variant}>
          {children}
        </TetrisLabContextProvider>
      </body>
    </html>
  );
}
