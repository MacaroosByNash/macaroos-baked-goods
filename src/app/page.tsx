import About from "@/components/home/about";
import Features from "@/components/home/features";
import Hero from "@/components/home/hero";
import HowWeWork from "@/components/home/how-we-work";
import OurProducts from "@/components/home/our-products";
import OurStory from "@/components/home/our-story";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <OurStory />
      <OurProducts />
      <HowWeWork />
    </>
  );
}
