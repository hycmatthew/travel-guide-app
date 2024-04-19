import config from "@/config/config";
export const languages = config.LANG
export const fallbackLang = "en";
export const cookieName = "i18next";
export const defaultNS = "translation";

export function getOptions(lang = fallbackLang, ns = defaultNS) {
  return {
    debug: false,
    supportedLngs: languages,
    fallbackLng: fallbackLang,
    lng: lang,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}