// Brand typography scale — Ibrand (headlines/buttons), serif body, Ewangi (labels).
export const typography = {
  display: "font-ibrand text-display leading-[1.05] tracking-[-0.02em]",
  title: "font-ibrand text-title leading-[1.15]",
  subtitle: "font-ibrand text-subtitle leading-[1.25]",
  body: "font-body text-body leading-[1.65]", // loose leading improves readability for property descriptions
  label: "font-ewangi text-label uppercase tracking-[0.14em]", // wide tracking is a brand requirement for all label text
} as const;
