// app/layout.tsx
import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";
import { ProductProvider } from "./_componenets/Context/ProductProvider";
import Header from "./_componenets/Header";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "Mini Shop",
  description: "A simple e-commerce app with Next.js",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <ProductProvider>
           <ToastContainer />
          {/* Header */}
         <Header/>

          {/* Main content */}
          <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-6">
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-gray-100  w-full bottom-0 border-t py-4 text-center text-sm text-gray-600">
            © {new Date().getFullYear()} MiniShop. All rights reserved.
          </footer>
        </ProductProvider>
      </body>
    </html>
  );
}
