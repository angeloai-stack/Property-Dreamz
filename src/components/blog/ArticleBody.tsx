// Renders a post's ContentBlock[] — headings get scroll-anchor ids for the "On this page" TOC.
import Image from "next/image";
import type { ContentBlock } from "@/app/[locale]/blog/data";
import { RichText } from "./RichText";

export function ArticleBody({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="flex flex-1 flex-col items-start gap-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "lead":
            return (
              <p key={i} className="w-full font-ewangi text-[18px] leading-[1.7] text-black">
                {block.text}
              </p>
            );
          case "heading":
            return (
              <p
                key={i}
                id={block.id}
                className="w-full scroll-mt-28 font-ewangi text-[1.6rem] font-bold leading-tight text-brand-pine sm:text-[28px]"
              >
                {block.text}
              </p>
            );
          case "paragraph":
            return (
              <p key={i} className="w-full font-ewangi text-[16px] leading-[1.75] text-[#222] sm:text-[17px]">
                <RichText text={block.text} />
              </p>
            );
          case "quote":
            return (
              <div key={i} className="flex w-full items-start gap-6 py-1.5">
                <span className="w-1 shrink-0 self-stretch rounded-[2px] bg-brand-teal" aria-hidden="true" />
                <div className="flex flex-1 flex-col items-start gap-3">
                  <p className="w-full font-ewangi text-[1.25rem] italic leading-snug text-brand-pine sm:text-[24px]">
                    &ldquo;{block.text}&rdquo;
                  </p>
                  <p className="w-full font-ewangi text-[14px] font-bold text-[#8c99a8]">— {block.author}</p>
                </div>
              </div>
            );
          case "image":
            return (
              <figure key={i} className="flex w-full flex-col gap-3">
                <div className="relative h-56 w-full overflow-hidden rounded-2xl sm:h-90">
                  <Image src={block.src} alt={block.caption} fill sizes="(max-width: 1024px) 100vw, 800px" className="object-cover" />
                </div>
                <figcaption className="font-ewangi text-[13px] text-[#8c99a8]">{block.caption}</figcaption>
              </figure>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
