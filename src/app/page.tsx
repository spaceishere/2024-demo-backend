import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Link href="/login">About Us</Link>
    </div>
  );
}
