// Rosarito Real Estate hero — Figma nodes 1313:18159-18177.
import Image from "next/image";

export function RosaritoHero() {
  return (
    <section className="relative min-h-[min(60vh,485px)] w-full overflow-hidden bg-[#eaedf0]">
      <Image
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=80"
        alt="Modern luxury beach home in Rosarito"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/5 to-transparent" />

      <div className="relative z-10 flex min-h-[min(60vh,485px)] flex-col justify-center px-6 py-16 sm:px-10 lg:px-20">
        {/* Single-line + extra tracking works around a kerning defect in the Ewangi font file itself:
            "Rosarito"/"Real Estate" glyphs visibly overlap at default tracking regardless of markup,
            line-height, or spacing — confirmed by swapping to a system font, which renders cleanly. */}
        <h1 className="font-ewangi text-[clamp(2rem,6vw,4.25rem)] leading-tight tracking-wider">
          <span className="text-[#eaedf0]">Rosarito </span>
          <span className="font-bold text-[#191919]">Real Estate</span>
        </h1>
        <p className="mt-6 max-w-2xl font-ewangi text-[1.1rem] leading-relaxed text-white">
          Browse Rosarito real estate — beachfront condos, ocean-view homes &amp; surf-inspired
          developments 30 min from San Diego. Verified builders, bilingual support.
        </p>
      </div>

      {/* CMRE badge — bottom-right */}
      <div className="absolute bottom-6 right-6 z-10">
        <Image
          src="https://res.cloudinary.com/dserzvrwe/image/upload/f_auto,q_auto/CMRE_Logo-02_p8szqi.png"
          alt="CMRE Certified Mexico Real Estate"
          width={69}
          height={95}
          className="h-16 w-auto drop-shadow-md"
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-2.5 bg-brand-teal" aria-hidden="true" />
    </section>
  );
}
