/** Paikkamerkit – vaihda oikeiksi tiedoiksi ennen julkaisua. */
export const COMPANY = {
  name: "Kuljetuspalvelu MJ Oy",
  domain: "kuljetuspalvelumj.fi",
  email: "tilaukset@kuljetuspalvelumj.fi",
  phoneDisplay: "[PUHELIN]",
  /** Vaihda oikeaksi numeroksi (kansainvälinen muoto ilman +). */
  phoneTel: "+358000000000",
  phoneWhatsApp: "358000000000",
  businessId: "[Y-TUNNUS]",
  area: "Helsinki, Espoo, Vantaa, Kauniainen",
} as const;

export const LINKS = {
  tel: `tel:${COMPANY.phoneTel}`,
  whatsapp: `https://wa.me/${COMPANY.phoneWhatsApp}`,
  email: `mailto:${COMPANY.email}`,
  form: "#tilaus",
} as const;
