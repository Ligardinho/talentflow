import Hero from "@/components/Hero";
import { NavigationMenuDemo } from "@/components/Nav";

export default function Home() {
  return (
    <div className="flex flex-col items-center font-sans">
      <NavigationMenuDemo/>
      <Hero/>
    </div>
  );
}
