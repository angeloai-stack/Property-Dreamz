// Static regional hero (no rotating slides) — Figma: "Section / Hero" for the Baja California landing page.
import Image from "next/image";

export function BajaHero() {
  return (
    <section className="relative min-h-[min(78vh,700px)] w-full overflow-hidden bg-[#eaedf0]">
      <Image
        src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1600&q=80"
        alt="Modern luxury residence in Baja California"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent" />

      <div className="relative z-10 flex min-h-[min(78vh,700px)] flex-col justify-center px-6 pb-16 sm:px-10 lg:px-20">
        {/* Single-line + extra tracking works around a kerning defect in the Ewangi font file itself:
            "Baja California"/"Real Estate" glyphs visibly overlap at default tracking regardless of
            markup, line-height, or spacing — confirmed by swapping to a system font, which renders clean. */}
        <h1 className="font-ewangi text-[clamp(2.25rem,6.5vw,4.5rem)] leading-tight tracking-wider">
          <span className="text-[#eaedf0]">Baja California </span>
          <span className="font-bold text-[#191919]">Real Estate</span>
        </h1>
        <p className="mt-6 max-w-2xl font-ewangi text-[1.1rem] leading-relaxed text-white">
          Discover Baja California real estate: beachfront condos in Rosarito, oceanfront developments
          in Ensenada, and resort communities near Tijuana. Every listing certified.
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

      {/* Decorative teal accent strip */}
      <div className="absolute inset-x-0 bottom-0 h-2.5 bg-brand-teal" aria-hidden="true" />
    </section>
  );
}
