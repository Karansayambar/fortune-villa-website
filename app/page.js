import HeroBanner from "@/components/HeroBanner";
import GalleryWrapper from "@/utils/GallaryWrapper";

export const revalidate = false; // Enables SSG

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <HeroBanner />
      <GalleryWrapper />
    </main>
  );
}
