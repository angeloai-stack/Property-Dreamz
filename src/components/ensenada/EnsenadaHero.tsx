// Ensenada Real Estate hero — Figma nodes 1313:17504-17522.
import Image from "next/image";

export function EnsenadaHero() {
  return (
    <section className="relative min-h-[min(60vh,485px)] w-full overflow-hidden bg-[#eaedf0]">
      <Image
        src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&q=80"
        alt="Modern luxury residence in Ensenada"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/5 to-transparent" />

      <div className="relative z-10 flex min-h-[min(60vh,485px)] flex-col justify-center px-6 py-16 sm:px-10 lg:px-20">
        {/* Single-line + extra tracking works around a kerning defect in the Ewangi font file itself:
            "Ensenada"/"Real Estate" glyphs visibly overlap at default tracking regardless of markup,
            line-height, or spacing — confirmed by swapping to a system font, which renders cleanly. */}
        <h1 className="font-ewangi text-[clamp(2rem,6vw,4.25rem)] leading-tight tracking-wider">
          <span className="text-[#eaedf0]">Ensenada </span>
          <span className="font-bold text-[#191919]">Real Estate</span>
        </h1>
        <p className="mt-6 max-w-2xl font-ewangi text-[1.1rem] leading-relaxed text-white">
          Explore Ensenada real estate — oceanfront condos, valley homes &amp; lots near Valle de
          Guadalupe. Verified developers, bilingual support, 80 mi from San Diego.
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
