import Image from "next/image";
import bg from "@/../public/assets/image/bg.png";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Image
        src={bg}
        fill
        placeholder="blur"
        alt="background iamge of the home page"
        className="object-cover object-top"
      />
      <div className="relative z-10 text-center mt-35">
        <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-700 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-800 transition-all"
        >
          Explore luxury cabins
        </Link>{" "}
      </div>
    </div>
  );
}
