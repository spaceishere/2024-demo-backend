"use client";

import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "@/context/context";
import Login from "./login/page";
export default function Home() {
  const { welcomed } = useContext(UserContext);

  if (!welcomed) {
    return <Login />;
  }
  return (
    <div>
      <Link href="/login">About Us</Link>
    </div>
  );
}
