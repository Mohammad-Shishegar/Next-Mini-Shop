// app/layout.tsx
import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mini Shop",
  description: "A simple e-commerce app with Next.js",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        {/* Header */}
        <header className="bg-white shadow-md">
          <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
            <h1 className="text-2xl font-bold  text-blue-600">MiniShop</h1>
            <nav className="flex gap-6">
              <a href="/" className=" text-black hover:text-blue-600">
                Home
              </a>
              <a href="/products" className="text-black hover:text-blue-600">
                Products
              </a>
              <a href="/cart" className=" text-black hover:text-blue-600">
                Cart
              </a>
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 max-w-6xl mx-auto px-4 py-6">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-100 border-t py-4 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} MiniShop. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
