// Tiny markdown-lite renderer for article body paragraphs — supports **bold** and [label](href).
import Link from "next/link";
import type { ReactNode } from "react";

const TOKEN_RE = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;

export function RichText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;
  let match: RegExpExecArray | null;

  TOKEN_RE.lastIndex = 0;
  while ((match = TOKEN_RE.exec(text))) {
    if (match.index > lastIndex) nodes.push(text.slice(lastIndex, match.index));

    if (match[1] !== undefined) {
      nodes.push(
        <strong key={key++} className="font-bold text-brand-pine">
          {match[1]}
        </strong>
      );
    } else {
      nodes.push(
        <Link key={key++} href={match[3]} className="font-bold text-[#038e7f] underline underline-offset-2">
          {match[2]}
        </Link>
      );
    }
    lastIndex = TOKEN_RE.lastIndex;
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));

  return <>{nodes}</>;
}
