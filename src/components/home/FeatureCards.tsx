import { BadgeCheck } from "lucide-react";
import { Container, Icon } from "@/components/ui";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Title clean before you wire a dollar",
    body: "Trust starts with transparency. Our certification process includes a thorough review of judicial records to help clients identify developers who meet high standards of professionalism and integrity.",
  },
  {
    title: "Regulatory Compliance",
    body: "We verify that certified developers meet relevant legal, regulatory, and professional standards. This review helps ensure adherence to industry requirements and best practices.",
  },
  {
    title: "Property Security Assessment",
    body: "A secure operation reflects a reliable organization. Our certification includes an evaluation of property security measures to help confirm that developers maintain safe, well-managed facilities.",
  },
] as const;

export function FeatureCards() {
  return (
    <section className="w-full bg-brand-ink pb-14 pt-2 md:pb-16">
      <Container>
        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {features.map((feature) => (
            <article
              key={feature.title}
              className={cn(
                "flex flex-col items-center rounded-[2rem] bg-white px-6 py-8 text-center shadow-subtle",
                "sm:px-7 sm:py-10"
              )}
            >
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-brand-emerald/10 text-brand-emerald">
                <Icon as={BadgeCheck} size={26} color="currentColor" />
              </span>
              <h3 className="mb-4 font-ibrand text-subtitle leading-snug text-brand-emerald">
                {feature.title}
              </h3>
              <p className="font-body text-body text-brand-muted">{feature.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
