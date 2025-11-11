# 🗄️ Projektová štruktúra

<!-- Thanks for https://github.com/alan2207/bulletproof-react -->

Väčšina kódu žije v priečinku `src` a vyzerá takto:

```sh
src
|
+-- assets            # priečinok assets môže obsahovať všetky statické súbory ako obrázky, písma atď.
|
+-- components        # zdieľané komponenty používané v celej aplikácii
|
+-- config            # všetka globálna konfigurácia, env premenné atď. sa exportujú odtiaľto a používajú v aplikácii
|
+-- features          # moduly založené na funkciách
|
+-- hooks             # zdieľané háky používané v celej aplikácii
|
+-- lib               # re-exportovanie rôznych knižníc predkonfigurovaných pre aplikáciu
|
+-- providers         # všetci poskytovatelia aplikácie
|
+-- routes            # konfigurácia trás
|
+-- stores            # globálne obchody stavu
|
+-- test              # testovacie nástroje a mock server
|
+-- types             # základné typy používané v aplikácii
|
+-- utils             # zdieľané pomocné funkcie
```

Aby sme škálovali aplikáciu najľahšie a najudržiavateľnejšie, udržujte väčšinu kódu v priečinku `features`, ktorý by mal obsahovať rôzne veci založené na funkciách. Každý priečinok `feature` by mal obsahovať doménovo špecifický kód pre danú funkciu. To vám umožní udržiavať funkcionality ohraničené na funkciu a nemiešať ich deklarácie so zdieľanými vecami. Toto je oveľa ľahšie udržiavateľné ako plochá štruktúra priečinkov s mnohými súbormi.

Funkcia by mohla mať nasledujúcu štruktúru:

```sh
src/features/awesome-feature
|
+-- api         # exportované deklarácie požiadaviek API a háky API súvisiace s konkrétnou funkciou
|
+-- assets      # priečinok assets môže obsahovať všetky statické súbory pre konkrétnu funkciu
|
+-- components  # komponenty ohraničené na konkrétnu funkciu
|   +-- index.ts # export komponentov
|
+-- hooks       # háky ohraničené na konkrétnu funkciu
|
+-- routes      # komponenty trás pre stránky konkrétnej funkcie
|
+-- stores      # obchody stavu pre konkrétnu funkciu
|
+-- types       # typy typescript pre doménu konkrétnej funkcie TS
|
+-- utils       # pomocné funkcie pre konkrétnu funkciu
|
+-- index.ts    # vstupný bod pre funkciu, mal by slúžiť ako verejné API danej funkcie a exportovať všetko, čo sa má používať mimo funkcie
```

Všetko z funkcie by sa malo exportovať zo súboru `index.ts`, ktorý sa správa ako verejné API funkcie.

Mali by ste importovať veci z iných funkcií len pomocou:

`import {AwesomeComponent} from "@/features/awesome-feature"`

a nie

`import {AwesomeComponent} from "@/features/awesome-feature/components/AwesomeComponent`

Toto sa dá nakonfigurovať v konfigurácii ESLint na zakázanie neskoršieho importu nasledujúcim pravidlom:

```js
{
    rules: {
        'no-restricted-imports': [
            'error',
            {
                patterns: ['@/features/*/*'],
            },
        ],

    // ...rest of the configuration
}
```

Toto bolo inšpirované tým, ako [NX](https://nx.dev/) spravuje knižnice, ktoré sú izolované, ale dostupné na použitie inými modulmi. Myslite na funkciu ako na knižnicu alebo modul, ktorý je sebestačný, ale môže exponovať rôzne časti iným funkciám prostredníctvom svojho vstupného bodu.
