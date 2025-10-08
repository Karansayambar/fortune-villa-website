import HeroBanner from "@/components/HeroBanner";
import HorizontalScrollGallery from "@/components/HorizontalScrollGallery";

export const revalidate = false; // Enables SSG

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <HeroBanner />
      <HorizontalScrollGallery />
    </main>
  );
}
