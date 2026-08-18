import { BRAND_VIDEO_POSTER, BRAND_VIDEO_SRC } from "@/constants/media";
import { Container } from "@/components/ui";
import { cn } from "@/lib/utils";

type BrandVideoSectionProps = {
  className?: string;
};

export function BrandVideoSection({ className }: BrandVideoSectionProps) {
  return (
    <section className={cn("w-full bg-white py-10 md:py-14", className)} aria-label="Brand video">
      <Container>
        <div className="overflow-hidden rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.12)]">
          <video
            className="aspect-video w-full bg-black object-cover"
            autoPlay
            muted
            controls
            playsInline
            preload="metadata"
            poster={BRAND_VIDEO_POSTER}
            aria-label="Property Dreamz brand video"
          >
            <source src={BRAND_VIDEO_SRC} type="video/mp4" />
          </video>
        </div>
      </Container>
    </section>
  );
}
