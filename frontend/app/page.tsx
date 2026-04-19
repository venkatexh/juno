import Link from "next/link";

export default function Home() {
  return (
    <div>
      Welcome to Juno. <Link href='/login'>Login</Link>
    </div>
  );
}
