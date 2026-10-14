import Image from "next/image";
import { COMPANY, LINKS } from "@/lib/constants";
import { MobileCallBar } from "@/components/MobileCallBar";

const services = [
  {
    title: "Kuriirikuljetukset",
    text: "Pienet ja keskikokoiset lähetykset yritykseltä yritykselle pääkaupunkiseudulla.",
  },
  {
    title: "Pikanoudot",
    text: "Nouto jopa kahden tunnin sisällä. Kysy vapaata aikaa.",
  },
  {
    title: "Pienet tavarat ja lavat",
    text: "Paketit, useampi kolli tai EUR-lava. Trukki tarvitaan molemmissa päissä.",
  },
];

const prices = [
  {
    title: "Kuriirikeikka",
    price: "45 €",
    note: "+ alv",
    detail: "Pääkaupunkiseudulla. Sisältää enintään 1 h.",
  },
  {
    title: "Tuntiveloitus",
    price: "55 €",
    note: "/ h + alv",
    detail: "Kun työ kestää yli tunnin tai matka on pidempi.",
  },
  {
    title: "Pikanouto",
    price: "+20 €",
    note: "",
    detail: "Nouto 2 tunnin sisällä tilauksesta.",
  },
];

const steps = [
  {
    n: "1",
    title: "Ota yhteyttä",
    text: "Soita, lähetä WhatsApp-viesti tai täytä tilauslomake.",
  },
  {
    n: "2",
    title: "Kerro tarve",
    text: "Nouto- ja toimitusosoite, toivottu aika sekä tavaran koko.",
  },
  {
    n: "3",
    title: "Vahvistus",
    text: "Vahvistamme tilauksen 30 minuutin sisällä arkisin klo 7–17.",
  },
];

export default function Home() {
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="container-page flex items-center justify-between py-5">
          <a
            href="#"
            className="text-sm font-semibold tracking-wide text-white/95 md:text-base"
          >
            {COMPANY.name}
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/90 sm:flex">
            <a href="#palvelu" className="hover:text-white">
              Palvelu
            </a>
            <a href="#hinnat" className="hover:text-white">
              Hinnat
            </a>
            <a href="#tilaus" className="hover:text-white">
              Tilaa
            </a>
            <a href={LINKS.tel} className="btn btn-yellow !min-h-9 !px-3 !text-sm">
              Soita
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* 1. Hero */}
        <section className="relative min-h-[100svh] overflow-hidden text-white">
          <Image
            src="/hero-van.jpg"
            alt="Pakettiauto lastattavana – kuriirikuljetus yrityksille"
            fill
            priority
            className="object-cover scale-105 blur-[2px]"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(115deg, rgba(11,37,69,0.92) 0%, rgba(11,37,69,0.78) 45%, rgba(20,58,92,0.55) 100%)",
            }}
            aria-hidden
          />

          <div className="relative z-10 flex min-h-[100svh] flex-col justify-center pb-16 pt-28">
            <div className="container-page max-w-3xl">
              <p className="mb-4 text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl">
                {COMPANY.name}
              </p>
              <h1 className="text-balance text-3xl font-semibold leading-tight md:text-4xl lg:text-[2.75rem]">
                Kiireellinen kuljetus pääkaupunkiseudulla – nopeasti ja
                luotettavasti
              </h1>
              <p className="mt-5 max-w-xl text-lg text-white/90 md:text-xl">
                Nouto jopa 2 tunnissa. Yrityksille Helsingissä, Espoossa,
                Vantaalla ja Kauniaisissa.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href={LINKS.tel} className="btn btn-yellow">
                  Soita
                </a>
                <a
                  href={LINKS.whatsapp}
                  className="btn btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
                <a href={LINKS.form} className="btn btn-outline">
                  Tilaa kuljetus
                </a>
              </div>

              <p className="mt-8 text-sm text-white/85 md:text-base">
                Helsingin KTK:n jäsen · Vakuutettu · Laskutus yrityksille
              </p>
            </div>
          </div>
        </section>

        {/* 2. Palvelu */}
        <section id="palvelu" className="section bg-surface">
          <div className="container-page">
            <h2 className="text-2xl font-semibold text-blue md:text-3xl">
              Palvelu
            </h2>
            <p className="mt-3 max-w-2xl text-muted">
              Pieniä kuriirikuljetuksia pakettiautolla. Kysy vapaata aikaa
              täyttökeikoille.
            </p>

            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {services.map((item) => (
                <div key={item.title}>
                  <h3 className="text-lg font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-muted leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Hinnat */}
        <section id="hinnat" className="section bg-bg">
          <div className="container-page">
            <h2 className="text-2xl font-semibold text-blue md:text-3xl">
              Hinnat
            </h2>
            <p className="mt-3 max-w-2xl text-muted">
              Selkeät lähtöhinnat. Lopullinen hinta vahvistetaan tilauksen
              yhteydessä.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {prices.map((card) => (
                <article
                  key={card.title}
                  className="rounded-lg border border-line bg-surface p-6 shadow-sm"
                >
                  <h3 className="text-base font-semibold text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-4 flex items-baseline gap-1.5">
                    <span className="text-3xl font-bold text-blue">
                      {card.price}
                    </span>
                    {card.note ? (
                      <span className="text-sm text-muted">{card.note}</span>
                    ) : null}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {card.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Auto */}
        <section id="auto" className="section bg-surface">
          <div className="container-page max-w-3xl">
            <h2 className="text-2xl font-semibold text-blue md:text-3xl">
              Auto
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink">
              VW Transporter, EUR-lava mahtuu kyytiin. Autossa ei ole
              perälautaa, joten lavan lastaukseen ja purkuun tarvitaan trukki
              molemmissa päissä.
            </p>
          </div>
        </section>

        {/* 5. Näin tilaat */}
        <section id="nain-tilaat" className="section bg-blue text-white">
          <div className="container-page">
            <h2 className="text-2xl font-semibold md:text-3xl">Näin tilaat</h2>
            <p className="mt-3 max-w-2xl text-white/85">
              Soita, WhatsApp tai lomake. Vahvistamme tilauksen 30 minuutin
              sisällä arkisin klo 7–17.
            </p>

            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {steps.map((step) => (
                <div key={step.n} className="flex gap-4">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow text-sm font-bold text-blue"
                    aria-hidden
                  >
                    {step.n}
                  </span>
                  <div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/80">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href={LINKS.tel} className="btn btn-yellow">
                Soita
              </a>
              <a
                href={LINKS.whatsapp}
                className="btn btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
              <a href={LINKS.form} className="btn btn-outline">
                Avaa lomake
              </a>
            </div>
          </div>
        </section>

        {/* 6. Tilauslomake */}
        <section id="tilaus" className="section bg-bg">
          <div className="container-page max-w-3xl">
            <h2 className="text-2xl font-semibold text-blue md:text-3xl">
              Tilaa kuljetus
            </h2>
            <p className="mt-3 text-muted">
              Täytä tiedot. Palaamme asiaan mahdollisimman pian. Kysy vapaata
              aikaa.
            </p>

            {/* Placeholder: WordPressissä lomakkeen käsittely (esim. Contact Form 7 / Divi). */}
            <form
              className="mt-8 grid gap-5 sm:grid-cols-2"
              action="#"
              method="post"
              noValidate
            >
              <div className="field sm:col-span-2">
                <label htmlFor="yritys">Yritys</label>
                <input id="yritys" name="yritys" type="text" required autoComplete="organization" />
              </div>

              <div className="field">
                <label htmlFor="yhteyshenkilo">Yhteyshenkilö</label>
                <input
                  id="yhteyshenkilo"
                  name="yhteyshenkilo"
                  type="text"
                  required
                  autoComplete="name"
                />
              </div>

              <div className="field">
                <label htmlFor="puhelin">Puhelin</label>
                <input
                  id="puhelin"
                  name="puhelin"
                  type="tel"
                  required
                  autoComplete="tel"
                />
              </div>

              <div className="field sm:col-span-2">
                <label htmlFor="sahkoposti">Sähköposti</label>
                <input
                  id="sahkoposti"
                  name="sahkoposti"
                  type="email"
                  required
                  autoComplete="email"
                />
              </div>

              <div className="field sm:col-span-2">
                <label htmlFor="nouto">Nouto-osoite</label>
                <input id="nouto" name="nouto" type="text" required />
              </div>

              <div className="field sm:col-span-2">
                <label htmlFor="toimitus">Toimitusosoite</label>
                <input id="toimitus" name="toimitus" type="text" required />
              </div>

              <div className="field">
                <label htmlFor="aika">Toivottu aika</label>
                <input id="aika" name="aika" type="text" placeholder="esim. tänään klo 14" />
              </div>

              <div className="field">
                <label htmlFor="koko">Tavaran koko / paino</label>
                <select id="koko" name="koko" required defaultValue="">
                  <option value="" disabled>
                    Valitse
                  </option>
                  <option value="pieni-paketti">Pieni paketti</option>
                  <option value="useita-paketteja">Useita paketteja</option>
                  <option value="eur-lava">EUR-lava</option>
                </select>
              </div>

              <div className="field sm:col-span-2">
                <label htmlFor="lisatiedot">Lisätiedot</label>
                <textarea id="lisatiedot" name="lisatiedot" rows={4} />
              </div>

              <div className="field sm:col-span-2">
                <label htmlFor="verkkolasku">
                  Verkkolaskuosoite{" "}
                  <span className="font-normal text-muted">(valinnainen)</span>
                </label>
                <input id="verkkolasku" name="verkkolasku" type="text" />
              </div>

              <div className="sm:col-span-2">
                <button type="submit" className="btn btn-blue">
                  Lähetä tilauspyyntö
                </button>
                <p className="mt-3 text-xs text-muted">
                  Mallisivu: lomakkeella ei ole vielä taustakäsittelyä.
                  WordPressissä kytketään oikea vastaanotto.
                </p>
              </div>
            </form>
          </div>
        </section>

        {/* 7. Laskutus ja ehdot */}
        <section id="laskutus" className="section bg-surface">
          <div className="container-page max-w-3xl">
            <h2 className="text-2xl font-semibold text-blue md:text-3xl">
              Laskutus ja ehdot
            </h2>
            <p className="mt-4 leading-relaxed text-ink">
              Laskutamme yrityksiä, myös verkkolaskulla. Maksuaika 7 päivää.
              Kuljetukset hoidetaan tiekuljetussopimuslain ja yleisten
              kuljetusehtojen mukaisesti.
            </p>
          </div>
        </section>
      </main>

      {/* 8. Footer */}
      <footer className="border-t border-line bg-blue text-white">
        <div className="container-page grid gap-8 py-12 md:grid-cols-2">
          <div>
            <p className="text-lg font-semibold">{COMPANY.name}</p>
            <p className="mt-2 text-sm text-white/80">
              Y-tunnus: {COMPANY.businessId}
            </p>
            <p className="mt-4 text-sm text-white/80">
              Helsingin KTK:n jäsen
            </p>
          </div>
          <div className="text-sm text-white/85 space-y-2">
            <p>
              Puhelin:{" "}
              <a href={LINKS.tel} className="underline-offset-2 hover:underline">
                {COMPANY.phoneDisplay}
              </a>
            </p>
            <p>
              Sähköposti:{" "}
              <a
                href={LINKS.email}
                className="underline-offset-2 hover:underline"
              >
                {COMPANY.email}
              </a>
            </p>
            <p>Toiminta-alue: {COMPANY.area}</p>
            <p className="pt-2 text-white/60">
              {COMPANY.domain}
            </p>
          </div>
        </div>
      </footer>

      <MobileCallBar />
    </>
  );
}
