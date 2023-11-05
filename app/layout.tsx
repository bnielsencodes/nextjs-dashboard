import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
// import { ErrorBoundary } from "next/dist/client/components/error-boundary";
// import { Suspense } from "react";
// import { NotFound } from "./not-found";
// import { Suspense } from "./loading";
// import { Error } from "./error";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
