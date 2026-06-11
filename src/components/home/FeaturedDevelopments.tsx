import Image from "next/image";
import Link from "next/link";
import { Bed, Bath, Maximize2, MapPin, ArrowRight } from "lucide-react";
import { Badge, Container } from "@/components/ui";
import { cn } from "@/lib/utils";

type DevelopmentStatus = "Available" | "Pre-sale" | "Limited";

interface Development {
  id: string;
  name: string;
  location: string;
  region: string;
  priceUSD: number;
  priceMXN: number;
  beds: number;
  baths: number;
  sqft: number;
  status: DevelopmentStatus;
  image: string;
}

const developments: Development[] = [
  {
    id: "boga-telchac",
    name: "Boga Telchac",
    location: "Telchac Puerto",
    region: "Yucatán",
    priceUSD: 285_000,
    priceMXN: 4_893_000,
    beds: 3,
    baths: 2,
    sqft: 2_100,
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=720&q=75",
  },
  {
    id: "marietta",
    name: "Marietta",
    location: "Sayulita",
    region: "Nayarit",
    priceUSD: 450_000,
    priceMXN: 7_735_500,
    beds: 4,
    baths: 3,
    sqft: 3_200,
    status: "Pre-sale",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=720&q=75",
  },
  {
    id: "punta-de-mita",
    name: "Punta de Mita",
    location: "Bahía de Banderas",
    region: "Nayarit",
    priceUSD: 895_000,
    priceMXN: 15_376_250,
    beds: 5,
    baths: 4,
    sqft: 5_800,
    status: "Limited",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=720&q=75",
  },
  {
    id: "lemuria",
    name: "Lemuria",
    location: "Isla Mujeres",
    region: "Quintana Roo",
    priceUSD: 320_000,
    priceMXN: 5_498_000,
    beds: 2,
    baths: 2,
    sqft: 1_800,
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=720&q=75",
  },
];

const statusVariant: Record<DevelopmentStatus, "default" | "success" | "gold"> =
  {
    Available: "success",
    "Pre-sale": "gold",
    Limited: "default",
  };

function formatUSD(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

function DevelopmentCard({ dev }: { dev: Development }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-subtle transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={dev.image}
          alt={dev.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3">
          <Badge variant={statusVariant[dev.status]}>{dev.status}</Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-ibrand text-subtitle leading-snug text-brand-ink">
              {dev.name}
            </h3>
            <span className="mt-0.5 flex items-center gap-1 font-ewangi text-label text-brand-muted">
              <MapPin className="h-3 w-3 shrink-0" aria-hidden="true" />
              {dev.location}, {dev.region}
            </span>
          </div>
          <div className="text-right">
            <p className="font-ibrand text-subtitle font-bold text-brand-emerald">
              {formatUSD(dev.priceUSD)}
            </p>
            <p className="font-ewangi text-label text-brand-muted">
              MXN {(dev.priceMXN / 1_000_000).toFixed(1)}M
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 border-t border-brand-ink/6 pt-3">
          {[
            { icon: Bed, value: dev.beds, label: "beds" },
            { icon: Bath, value: dev.baths, label: "baths" },
            { icon: Maximize2, value: dev.sqft.toLocaleString(), label: "sqft" },
          ].map(({ icon: Icon, value, label }) => (
            <span
              key={label}
              className="flex items-center gap-1 font-ewangi text-label text-brand-muted"
            >
              <Icon className="h-3.5 w-3.5 shrink-0 text-brand-emerald" aria-hidden="true" />
              {value}
            </span>
          ))}
          <Link
            href={`/explore-map?q=${dev.id}`}
            className={cn(
              "ml-auto flex items-center gap-1 rounded-full bg-brand-ink px-3 py-1.5",
              "font-ewangi text-label font-semibold text-brand-paper",
              "transition hover:bg-brand-emerald"
            )}
          >
            View
            <ArrowRight className="h-3 w-3" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export function FeaturedDevelopments() {
  return (
    <section className="w-full bg-brand-ink py-14 md:py-16">
      <Container>
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="mb-1 font-ewangi text-label font-semibold uppercase tracking-widest text-brand-emerald/70">
              Certified & Verified
            </p>
            <h2 className="font-ibrand text-title text-brand-paper">
              Featured Developments
            </h2>
          </div>
          <Link
            href="/properties"
            className="hidden shrink-0 items-center gap-1 font-ewangi text-label text-brand-emerald transition hover:text-brand-paper sm:flex"
          >
            View all
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {developments.map((dev) => (
            <DevelopmentCard key={dev.id} dev={dev} />
          ))}
        </div>

        <div className="mt-6 flex sm:hidden">
          <Link
            href="/properties"
            className="flex items-center gap-1 font-ewangi text-label text-brand-emerald"
          >
            View all developments
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
