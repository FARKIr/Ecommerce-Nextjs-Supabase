# Zoznam všetkých súborov v projekte Hiyori E-commerce

Tento súbor obsahuje zoznam všetkých súborov v projekte s ich relatívnymi cestami.

## Konfigurácia projektu
- `.env.example` - Príklad súboru s premennými prostredia
- `.eslintrc.json` - Konfigurácia ESLint pre lintovanie kódu
- `.gitignore` - Súbory ignorované Gitom
- `.graphqlrc.yml` - Konfigurácia GraphQL
- `.prettierignore` - Súbory ignorované Prettier
- `.watchmanconfig` - Konfigurácia Watchman
- `components.json` - Konfigurácia komponentov (pravdepodobne ShadcnUI)
- `drizzle.config.ts` - Konfigurácia Drizzle ORM
- `jest.config.js` - Konfigurácia Jest pre testovanie
- `next-env.d.ts` - Typové definície pre Next.js
- `next.config.mjs` - Konfigurácia Next.js
- `package-lock.json` - Zámok závislostí npm
- `package.json` - Závislosti a skripty projektu
- `postcss.config.js` - Konfigurácia PostCSS
- `tailwind.config.ts` - Konfigurácia Tailwind CSS
- `tsconfig.json` - Konfigurácia TypeScript

## Dokumentácia
- `docs/project-structure.md` - Štruktúra projektu (už preložená na slovenčinu)
- `README.md` - Hlavná dokumentácia projektu (už preložená na slovenčinu)

## GraphQL
- `graphql/schema/schema.graphql` - Schéma GraphQL

## Skripty
- `scripts/fetchGraphQLSchema.js` - Skript na načítanie schémy GraphQL

## Verejné súbory
- `public/assets/bathroom-planning.jpg` - Obrázok pre plánovanie kúpeľne
- `public/assets/cutingcardImage.jpg` - Obrázok pre rezanie karty
- `public/github-mark.svg` - SVG logo GitHub
- `public/next.svg` - SVG logo Next.js
- `public/vercel.svg` - SVG logo Vercel

## Zdrojový kód (src)
### Akcie
- `src/_actions/medias.ts` - Akcie súvisiace s médiami
- `src/_actions/produkty.ts` - Akcie súvisiace s produktmi

### Admin časť aplikácie
- `src/app/(admin)/admin/kolekcie/[KolekcieId]/page.tsx` - Stránka detailu kolekcie
- `src/app/(admin)/admin/kolekcie/new/page.tsx` - Stránka novej kolekcie
- `src/app/(admin)/admin/kolekcie/page.tsx` - Zoznam kolekcií
- `src/app/(admin)/admin/dashboard/page.tsx` - Admin dashboard
- `src/app/(admin)/admin/layout.tsx` - Layout pre admin časť
- `src/app/(admin)/admin/medias/@mediaModal/[mediaId]/page.tsx` - Modálne okno pre detail média
- `src/app/(admin)/admin/medias/@mediaModal/default.tsx` - Predvolené modálne okno pre médiá
- `src/app/(admin)/admin/medias/[mediaId]/page.tsx` - Stránka detailu média
- `src/app/(admin)/admin/medias/layout.tsx` - Layout pre médiá
- `src/app/(admin)/admin/medias/new/page.tsx` - Stránka nového média
- `src/app/(admin)/admin/medias/page.tsx` - Zoznam médií
- `src/app/(admin)/admin/orders/page.tsx` - Zoznam objednávok
- `src/app/(admin)/admin/page.tsx` - Hlavná admin stránka
- `src/app/(admin)/admin/produkty/[productId]/page.tsx` - Stránka detailu produktu
- `src/app/(admin)/admin/produkty/new/page.tsx` - Stránka nového produktu
- `src/app/(admin)/admin/produkty/page.tsx` - Zoznam produktov
- `src/app/(admin)/admin/users/[userId]/page.tsx` - Stránka detailu používateľa
- `src/app/(admin)/admin/users/new/page.tsx` - Stránka nového používateľa
- `src/app/(admin)/admin/users/page.tsx` - Zoznam používateľov
- `src/app/(admin)/admin/users/profiles/page.tsx` - Profily používateľov
- `src/app/(admin)/layout.tsx` - Hlavný layout pre admin

### Autentifikácia
- `src/app/(auth)/auth/callback/route.ts` - Callback pre autentifikáciu
- `src/app/(auth)/error/page.tsx` - Chybová stránka autentifikácie
- `src/app/(auth)/layout.tsx` - Layout pre autentifikáciu
- `src/app/(auth)/sign-in/page.tsx` - Prihlasovacia stránka
- `src/app/(auth)/sign-up/page.tsx` - Registračná stránka

### Obchod
- `src/app/(store)/cart/page.tsx` - Stránka košíka
- `src/app/(store)/kolekcie/[kolekcielug]/page.tsx` - Stránka kolekcie
- `src/app/(store)/layout.tsx` - Layout pre obchod
- `src/app/(store)/og-image.jpg` - Obrázok pre Open Graph
- `src/app/(store)/orders/[orderId]/page.tsx` - Stránka detailu objednávky
- `src/app/(store)/page.tsx` - Hlavná stránka obchodu
- `src/app/(store)/produkty/[productSlug]/page.tsx` - Stránka detailu produktu
- `src/app/(store)/search/page.tsx` - Vyhľadávacia stránka
- `src/app/(store)/thank-you/page.tsx` - Ďakovacia stránka

### API
- `src/app/api/auth/callback/google/route.ts` - API callback pre Google autentifikáciu
- `src/app/api/graphql/route.ts` - GraphQL API endpoint
- `src/app/api/stripe/webhook/route.ts` - Stripe webhook

### Assets a lib
- `src/app/globals.css` - Globálne CSS štýly
- `src/lib/utils.ts` - Pomocné funkcie
- `src/lib/validations.ts` - Validácie
- `src/middleware.ts` - Middleware aplikácie

### Funkcie (features)
- `src/features/auth/components/index.ts` - Export komponentov pre autentifikáciu
- `src/features/auth/components/LoginForm.tsx` - Formulár prihlásenia
- `src/features/auth/components/SignUpForm.tsx` - Formulár registrácie
- `src/features/auth/hooks/index.ts` - Export hákov pre autentifikáciu
- `src/features/auth/hooks/useAuth.ts` - Hák pre autentifikáciu
- `src/features/auth/index.ts` - Hlavný export pre autentifikáciu
- `src/features/auth/types/index.ts` - Export typov pre autentifikáciu
- `src/features/auth/types/auth.ts` - Typy pre autentifikáciu
- `src/features/cart/components/index.ts` - Export komponentov pre košík
- `src/features/cart/components/CartItem.tsx` - Položka košíka
- `src/features/cart/components/CartSummary.tsx` - Súhrn košíka
- `src/features/cart/components/CheckoutForm.tsx` - Formulár platby
- `src/features/cart/hooks/index.ts` - Export hákov pre košík
- `src/features/cart/hooks/useCart.ts` - Hák pre košík
- `src/features/cart/index.ts` - Hlavný export pre košík
- `src/features/cart/stores/cart.ts` - Store pre košík
- `src/features/cart/types/index.ts` - Export typov pre košík
- `src/features/cart/types/cart.ts` - Typy pre košík
- `src/features/cart/utils/index.ts` - Export utilít pre košík
- `src/features/cart/utils/cart.ts` - Pomocné funkcie pre košík
- `src/features/kolekcie/components/index.ts` - Export komponentov pre kolekcie
- `src/features/kolekcie/components/KolekcieCard.tsx` - Karta kolekcie
- `src/features/kolekcie/components/kolekcieGrid.tsx` - Mriežka kolekcií
- `src/features/kolekcie/hooks/index.ts` - Export hákov pre kolekcie
- `src/features/kolekcie/hooks/usekolekcie.ts` - Hák pre kolekcie
- `src/features/kolekcie/index.ts` - Hlavný export pre kolekcie
- `src/features/kolekcie/types/index.ts` - Export typov pre kolekcie
- `src/features/kolekcie/types/Kolekcie.ts` - Typy pre kolekcie
- `src/features/medias/components/index.ts` - Export komponentov pre médiá
- `src/features/medias/components/MediaCard.tsx` - Karta média
- `src/features/medias/components/MediaGrid.tsx` - Mriežka médií
- `src/features/medias/components/MediaModal.tsx` - Modálne okno pre médiá
- `src/features/medias/components/MediaUploader.tsx` - Uploader médií
- `src/features/medias/hooks/index.ts` - Export hákov pre médiá
- `src/features/medias/hooks/useMedias.ts` - Hák pre médiá
- `src/features/medias/index.ts` - Hlavný export pre médiá
- `src/features/medias/types/index.ts` - Export typov pre médiá
- `src/features/medias/types/media.ts` - Typy pre médiá
- `src/features/orders/components/index.ts` - Export komponentov pre objednávky
- `src/features/orders/components/OrderCard.tsx` - Karta objednávky
- `src/features/orders/components/OrderDetails.tsx` - Detaily objednávky
- `src/features/orders/components/OrderStatus.tsx` - Stav objednávky
- `src/features/orders/components/OrdersTable.tsx` - Tabuľka objednávok
- `src/features/orders/hooks/index.ts` - Export hákov pre objednávky
- `src/features/orders/hooks/useOrders.ts` - Hák pre objednávky
- `src/features/orders/index.ts` - Hlavný export pre objednávky
- `src/features/orders/types/index.ts` - Export typov pre objednávky
- `src/features/orders/types/order.ts` - Typy pre objednávky
- `src/features/produkty/components/index.ts` - Export komponentov pre produkty
- `src/features/produkty/components/ProductCard.tsx` - Karta produktu
- `src/features/produkty/components/ProductDetails.tsx` - Detaily produktu
- `src/features/produkty/components/ProductGrid.tsx` - Mriežka produktov
- `src/features/produkty/components/ProductImage.tsx` - Obrázok produktu
- `src/features/produkty/hooks/index.ts` - Export hákov pre produkty
- `src/features/produkty/hooks/useProdukty.ts` - Hák pre produkty
- `src/features/produkty/index.ts` - Hlavný export pre produkty
- `src/features/produkty/types/index.ts` - Export typov pre produkty
- `src/features/produkty/types/product.ts` - Typy pre produkty
- `src/features/search/components/index.ts` - Export komponentov pre vyhľadávanie
- `src/features/search/components/SearchBar.tsx` - Vyhľadávací panel
- `src/features/search/components/SearchResults.tsx` - Výsledky vyhľadávania
- `src/features/search/hooks/index.ts` - Export hákov pre vyhľadávanie
- `src/features/search/hooks/useSearch.ts` - Hák pre vyhľadávanie
- `src/features/search/index.ts` - Hlavný export pre vyhľadávanie
- `src/features/search/types/index.ts` - Export typov pre vyhľadávanie
- `src/features/search/types/search.ts` - Typy pre vyhľadávanie
- `src/features/users/components/index.ts` - Export komponentov pre používateľov
- `src/features/users/components/UserCard.tsx` - Karta používateľa
- `src/features/users/components/UserDetails.tsx` - Detaily používateľa
- `src/features/users/components/UserForm.tsx` - Formulár používateľa
- `src/features/users/components/UserTable.tsx` - Tabuľka používateľov
- `src/features/users/hooks/index.ts` - Export hákov pre používateľov
- `src/features/users/hooks/useUsers.ts` - Hák pre používateľov
- `src/features/users/index.ts` - Hlavný export pre používateľov
- `src/features/users/types/index.ts` - Export typov pre používateľov
- `src/features/users/types/user.ts` - Typy pre používateľov

## Konfigurácia IDE
- `.vscode/settings.json` - Nastavenia Visual Studio Code

*Tento zoznam je generovaný automaticky a môže obsahovať nepresnosti v popisoch. Pre presné informácie si prezrite obsah jednotlivých súborov.*
