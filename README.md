# Kuljetuspalvelu MJ Oy – mallisivu

Yhden sivun Next.js + Tailwind -mallisivu. Visuaalinen esikuva WordPress/Divi-toteutukselle Cloudways-palvelimelle.

## Käynnistys

```bash
npm install
npm run dev
```

Avaa [http://localhost:3000](http://localhost:3000).

## Staattinen export

```bash
npm run build
```

Tiedostot kansioon `out/`. Voit avata ne paikallisesti tai kopioida staattiseen hostingiin.

## Paikkamerkit

Muokkaa `src/lib/constants.ts` ennen julkaisua:

- `[PUHELIN]` / `phoneTel` / `phoneWhatsApp`
- `[Y-TUNNUS]` / `businessId`

Lomakkeella on placeholder-`action`. Oikea käsittely tehdään WordPressissä.

## Hero-kuva

`public/hero-van.jpg` on Pexels-placeholder (valkoihoinen kuriiri + pakettiauto). Vaihda omaan kuvaan metallinharmaasta VW Transporterista, kun se on saatavilla. Tarkista käyttöoikeus ennen tuotantokäyttöä.

## SEO

- Title ja meta description asetettu `src/app/layout.tsx`-tiedostossa
- LocalBusiness JSON-LD (paikkamerkit puhelimelle ja Y-tunnukselle)
