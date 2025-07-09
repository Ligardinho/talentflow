import Hero from "@/components/Hero";
import { NavigationMenuDemo } from "@/components/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <NavigationMenuDemo/>
      <Hero/>
    </div>
  );
}
