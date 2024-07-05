import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
   <main className="relative bg-black-100 flex justify-center align-center mx-auto overflow-hidden sm:px-10 px-5 ">
    <Hero/>
   </main>
  );
}
