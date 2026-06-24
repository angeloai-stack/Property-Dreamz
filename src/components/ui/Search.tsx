// Pill-shaped search form — exported as SearchBar but aliased to Search in ui/index.ts.
import { Icon } from "./Icon";
import { Search } from "lucide-react";
import { Input } from "./Input";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

interface SearchProps {
  className?: string;
  placeholder?: string;
}

export function SearchBar({ className, placeholder = "Ciudad, zona o desarrollo…" }: SearchProps) {
  return (
    // role="search" exposes the form as a landmark region for screen readers
    <form className={cn("flex flex-col gap-3 sm:flex-row sm:items-center", className)} role="search">
      <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full border border-brand-ink/10 bg-brand-paper px-3 py-2 shadow-sm">
        <Icon as={Search} size={20} className="text-brand-ink/60" />
        {/* px-0 py-0 strips Input's default padding so the pill container controls spacing */}
        <Input
          aria-label="Buscar"
          name="q"
          placeholder={placeholder}
          className="w-full border-none bg-transparent px-0 py-0 text-sm placeholder:text-brand-muted"
        />
      </div>
      <Button type="submit" variant="default" className="w-full sm:w-auto">
        Buscar
      </Button>
    </form>
  );
}

export default SearchBar;
