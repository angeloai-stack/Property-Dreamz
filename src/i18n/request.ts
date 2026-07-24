import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

// Messages are split into one file per namespace so independent sections can be authored/
// edited without touching a single shared file. The map value is the file path relative to
// messages/<locale>/ (without extension) — usually the same as the key, but property detail
// pages live grouped under a properties/ subfolder to keep the messages directory tidy.
const NAMESPACE_FILES: Record<string, string> = {
  site: "site",
  nav: "nav",
  footer: "footer",
  home: "home",
  about: "about",
  contact: "contact",
  buyersGuide: "buyersGuide",
  forDevelopers: "forDevelopers",
  forms: "forms",
  baja: "baja",
  tijuana: "tijuana",
  rosarito: "rosarito",
  ensenada: "ensenada",
  properties: "properties",
  blog: "blog",
  exploreMap: "exploreMap",
  misc: "misc",
  propertyAlimar: "properties/alimar",
  propertyAndares: "properties/andares",
  propertyCibolaDelMar: "properties/cibola-del-mar",
  propertyCostaBaja: "properties/costa-baja",
  propertyCostaBella: "properties/costa-bella",
  propertyCostaReal: "properties/costa-real",
  propertyDelmar: "properties/delmar",
  propertyEncantoDelValle: "properties/encanto-del-valle",
  propertyLagunaBay: "properties/laguna-bay",
  propertyLomaSerena: "properties/loma-serena",
  propertyNaos: "properties/naos",
  propertyPacifica: "properties/pacifica",
  propertyPalacioDelMar: "properties/palacio-del-mar",
  propertyPuntaPiedra: "properties/punta-piedra",
  propertyTheWave: "properties/the-wave",
  propertyTierraDeAgua: "properties/tierra-de-agua",
  propertyTorre51: "properties/torre51",
};

const NAMESPACE_KEYS = Object.keys(NAMESPACE_FILES);

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const parts = await Promise.all(
    NAMESPACE_KEYS.map((key) =>
      import(`../../messages/${locale}/${NAMESPACE_FILES[key]}.json`).then((m) => m.default)
    )
  );
  const messages = Object.fromEntries(NAMESPACE_KEYS.map((key, i) => [key, parts[i]]));

  return { locale, messages };
});
