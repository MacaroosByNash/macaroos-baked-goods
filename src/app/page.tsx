import About from "@/components/home/about";
import Features from "@/components/home/features";
import HowWeWork from "@/components/home/how-we-work";
import OurProducts from "@/components/home/our-products";
import OurStory from "@/components/home/our-story";

export default function Home() {
  return (
    <>
      <About />
      <Features />
      <OurStory />
      <OurProducts />
      <HowWeWork />
    </>
  );
}
