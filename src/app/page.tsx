import HeroSection from "@/components/sections/HeroSection";
import PublicationsFeed from "@/components/sections/PublicationsFeed"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <PublicationsFeed />
    </main>
  );
}