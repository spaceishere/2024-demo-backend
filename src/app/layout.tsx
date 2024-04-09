"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { UserProvider } from "../context/context";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const client = new ApolloClient({
    uri: "https://2024-demo-backend-3tq4.vercel.app/api/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <html lang="en">
      <UserProvider>
        <ApolloProvider client={client}>
          <body className={`${inter.className} w-full h-screen flex items-center justify-center`}>{children}</body>
        </ApolloProvider>
      </UserProvider>
    </html>
  );
}
