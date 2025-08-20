import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import Gallery from "@/components/Gallery";
import VideoSection from "@/components/VideoSection";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <AboutPreview />
      <Gallery />
      <VideoSection />
      <Contact />
    </main>
  );
}
