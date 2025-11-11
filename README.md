![og-image](https://hiyori-backpack.s3.us-west-2.amazonaws.com/Hiyori-nextjs-supabase-graphql-og.jpg)

> Stále vyvíjame projekt.

# Hiyori - E-commerce s vlastným CMS

[Hiyori](https://hiyori.hugo-coding.com) je moderná e-commerce platforma vybavená vlastným systémom správy obsahu (CMS), navrhnutá na poskytovanie výnimočného online nakupovacieho zážitku. Postavená pomocou najnovších webových technológií ako Next.js 14, GraphQL, Supabase, Drizzle, ShadcnUI a TailwindCSS, Hiyori ponúka plynulé, rýchle a responzívne interakcie na všetkých zariadeniach.

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/clong)

## Funkcie

- **Funkcia vyhľadávania s GraphQL**: Dynamické a efektívne vyhľadávanie, umožňujúce komplexné otázky s optimalizovaným načítaním dát.
- **Stripe Checkout s Webhookmi**: Plynulé spracovanie platieb integrované s real-time notifikáciami pre automatizovanú správu objednávok a inventára.
- **Vlastný CMS**: Ľahká správa objednávok, používateľov, produktov a kolekcií prostredníctvom užívateľsky prívetivého rozhrania navrhnutého pre e-commerce.
- **Podpora Next.js 14 AppDir**: Využíva najnovšie funkcie Next.js pre vylepšené smerovanie, organizáciu stránok a výkon.
- **Autentifikácia**: Bezpečná prihlasovacia možnosť pomocou prihlasovacích údajov alebo OAuth s Google, zabezpečujúca flexibilitu a bezpečnosť.
- **Synchronizácia košíka pre hostí a používateľov**: Synchronizuje košíky medzi stavmi hostí a prihlásených používateľov, zlepšujúc nakupovací zážitok a tok nákupu.
- **Vlastný uploader médií do S3 Bucket**: Efektívna správa médií s priamym nahrávaním do Amazon S3, optimalizujúc doručovanie obsahu.
- **Vytvorenie databázy s Drizzle ORM**: Zjednodušená správa databázy s objektovo-relačným mapovaním, zlepšujúca integritu dát a efektívnosť vývojárov.
- **Supabase Row Security**: Implementuje bezpečnosť na úrovni riadkov pre jemnozrnnú kontrolu prístupu, chránia citlivé údaje.
- **Zod validácia pre formuláre a údaje trás**: Zabezpečuje integritu dát s výkonnou validáciou pre vstupy formulárov a parametre trás.
- **Middleware pre ochranu admin stránok a trás**: Zabezpečuje citlivé oblasti s vlastným middleware, obmedzujúc prístup na autorizovaných používateľov.
- **Responzívny dizajn**: Zabezpečuje optimálny zážitok z prezerania na všetkých zariadeniach, od desktopov po smartfóny.
- **SEO**: Implementuje najlepšie praktiky pre optimalizáciu pre vyhľadávače na zlepšenie viditeľnosti a zvýšenie organickej návštevnosti.

## Nadchádzajúca funkcia

- Admin dashboard s realtime dátami
- Stav objednávania
- Skladovanie produktov
- Varianty produktov



## Technológie

- **Next.js 14:** React framework na budovanie používateľských rozhraní so server-side renderingom a statickým generovaním stránok.
- **GraphQL:** Jazyk otázok pre vaše API, umožňujúci načítanie presných žiadostí o dáta.
- **Supabase:** Open-source alternatíva Firebase poskytujúca databázy, autentifikáciu a real-time odbery.
- **Drizzle:** Knižnica na správu stavu aplikácie s Redux store jednoduchšie a predvídateľnejšie.
- **ShadcnUI:** Moderná UI knižnica pre React, umožňujúca vytváranie krásnych, responzívnych dizajnov.
- **TailwindCSS:** Utility-first CSS framework na rýchle budovanie vlastných dizajnov.

## Začíname

Na získanie lokálnej kópie a spustenie, postupujte podľa týchto jednoduchých krokov:

### Predpoklady

- Node.js (v12.x or later)
- npm or yarn

### Inštalácia

1. Naklonujte repozitár:

   ```bash
   git clone https://github.com/yourusername/hiyori.git
   ```

2. Prejdite do adresára projektu:

   ```bash
   cd hiyori
   ```

3. Nainštalujte závislosti:

   ```bash
   npm install
   ```

4. Spustite vývojový server:
   ```bash
   npm run dev
   ```

Otvorte http://localhost:3000 vo vašom prehliadači a pozrite si výsledok.

## Prispievanie

Vitáme príspevky do Hiyori! Prečítajte si náš Príručku prispievania pre podrobnosti o našom kódexe správania a procese odosielania pull requestov.

## Licencia

Hiyori je licencovaný pod MIT licenciou. Pozrite si licenčný súbor pre viac informácií.

## Poďakovania

- Špeciálne poďakovanie všetkým knižniciam a frameworkom, ktoré umožnili Hiyori.
- Pokrik komunite za podporu a používanie Hiyori.
