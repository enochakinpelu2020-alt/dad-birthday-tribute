import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Biography from "@/components/Biography";
import Wishes from "@/components/Wishes";
import GiftSection from "@/components/GiftSection";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Gallery />
      <Biography />
      <Timeline />
      <Wishes />
      <GiftSection />
      <Footer />
    </main>
  );
}
