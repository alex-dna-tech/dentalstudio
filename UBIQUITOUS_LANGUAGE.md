# Ubiquitous Language

## Clinic & Organization

| Term | Definition | Aliases to avoid |
| --- | --- | --- |
| **DentalStudio** | The dental clinic brand/entity operating since 2005 in Kyiv | Dental Studio, Дентал Студіо |
| **ПП "ДенталСтудио"** | The official legal entity (Private Enterprise) registered in Ukraine | ЧП "ДенталСтудио" |
| **Ліцензія** | The state license authorizing medical practice (АВ №565904 від 02.09.2010) | — |

## People

| Term | Definition | Aliases to avoid |
| --- | --- | --- |
| **Пацієнт** | A person receiving or seeking dental treatment | Клієнт, відвідувач |
| **Лікар** | A medical professional employed at the clinic | Стоматолог, доктор, дантист |
| **Головний лікар** | The chief physician responsible for clinical direction | Директор, завідувач |

## Services & Treatments

| Term | Definition | Aliases to avoid |
| --- | --- | --- |
| **Послуга** | A specific dental treatment or procedure offered to patients | Процедура, маніпуляція |
| **Терапевтична стоматологія** | Branch dealing with caries, fillings, and conservative treatment of teeth | — |
| **Естетична стоматологія** | Branch dealing with appearance — whitening, veneers, cosmetic restorations | Косметична стоматологія |
| **Ортопедична стоматологія** | Branch dealing with prosthetics — crowns, bridges, dentures | Протезування |
| **Ортодонтія** | Branch dealing with bite correction using braces, aligners, trainers | Вирівнювання зубів |
| **Ендодонтія** | Branch dealing with root canal treatment and pulp diseases | Лікування кореневих каналів |
| **Пародонтологія** | Branch dealing with gum diseases (gingivitis, periodontitis) | — |
| **Карієс** | Tooth decay caused by bacterial demineralization | — |
| **Пульпіт** | Inflammation of the dental pulp (nerve) requiring root canal treatment | — |
| **Пародонтит** | Advanced gum disease with bone tissue destruction | — |
| **Відбілювання** | Professional tooth whitening treatment | — |
| **Протезування** | Replacement of missing teeth with fixed or removable prosthetics | — |
| **Вініри** | Thin porcelain/composite shells bonded to front teeth | — |
| **Реставрація** | Artistic reconstruction of a tooth using photopolymer materials | Пломбування |

## Legal & Warranty

| Term | Definition | Aliases to avoid |
| --- | --- | --- |
| **Гарантія** | The legally mandated warranty period on dental treatments and prosthetics | Гарантійний термін |
| **Термін служби** | The expected lifespan of a dental prosthesis before replacement | — |
| **Права пацієнта** | Patient rights under Ukrainian consumer protection law | — |
| **Страхова компанія** | A partner insurance provider whose policies cover treatment at the clinic | — |

## Marketing & Content

| Term | Definition | Aliases to avoid |
| --- | --- | --- |
| **Ми можемо** | The umbrella term for "what we can do" — the full services catalogue | Послуги (in navigation context) |
| **Програма лояльності** | The structured discount system for returning patients | Акції, знижки |
| **Наші роботи** | Before/after case gallery showing real treated patients | Портфоліо, галерея |
| **Наші лікарі** | The doctor profiles section | Команда, персонал |
| **Наша клініка** | The about-the-clinic page with history, photos, and directions | Про нас |
| **Сертифікати** | Official certificates of professional qualification displayed as credentials | Дипломи, досягнення |

## Location & Operations

| Term | Definition | Aliases to avoid |
| --- | --- | --- |
| **Час роботи** | Clinic operating hours: Mon-Fri 9:00-18:00, Sat-Sun closed (by appointment) | Графік, режим роботи |
| **м. Київ** | The city where the clinic is located | — |
| **вул. Бульварно-Кудрявська, 29е** | The clinic's street address (formerly Воровського street) | Воровського, 29е |

## Relationships

- A **Лікар** specializes in one or more **Послуга** categories
- A **Пацієнт** books one or more **Послуга** appointments
- A **Послуга** belongs to exactly one service branch (e.g., Терапевтична стоматологія)
- A **Гарантія** is attached to a completed **Послуга** and defines the warranty period
- **Програма лояльності** applies discounts to **Пацієнт** based on visit history and family status
- **Страхова компанія** reimburses **Пацієнт** for specific **Послуга** types

## Example dialogue

> **Dev:** "The 'Ми можемо' section lists ~15 services. Should each one be a separate Послуга page?"
>
> **Domain expert:** "Yes. Карієс, пульпіт, відбілювання — each one is a distinct Послуга. Group them by branch — Терапевтична, Естетична, etc. — but keep each page flat under the same directory."
>
> **Dev:** "What about Гарантія terms — do they apply per Послуга or per branch?"
>
> **Domain expert:** "Per Послуга. A пломба (filling) has different warranty periods depending on which tooth class it's in and what material was used. The Гарантія page documents all of these by class."
>
> **Dev:** "And the Програма лояльності — does it apply to all Пацієнти automatically?"
>
> **Domain expert:** "Mostly. Some discounts trigger automatically (5% after 4000 UAH spent in a month), others require family registration (3+ members). The Відбілювання discount has its own rules — 20% off if you return within 6 months."
>
> **Dev:** "Where do the insurance logos go — on every page like the old site?"
>
> **Domain expert:** "No. Just on the Контакти page. They're a static list of our Страхова компанія partners, not a site-wide feature."

## Flagged ambiguities

- **"Ми можемо" vs "Послуги"** — the navigation uses "Ми можемо" ("We can") which is conversational but unusual as a nav label. The page content refers to "послуги" (services). Recommendation: keep "Ми можемо" in the nav (matches old site and is distinctive) but use "Послуги" as the canonical domain term.
- **"Акції" vs "Програма лояльності"** — the main nav label says "Акції" (Promotions) but the page content is about "Програма лояльності" (Loyalty Program). These are different concepts. The old site only implements a loyalty program — not one-off promotions. Recommendation: change nav label to "Програма лояльності" or "Акції та знижки" to match actual content.
- **"Лікар" vs "Стоматолог"** — used interchangeably in conversation. "Лікар" is the general medical term (doctor), "Стоматолог" specifies the dental specialty. Recommendation: use "Лікар" for the page title (matches old site "Наші лікарі") but use "Стоматолог" within individual doctor bios for precision.
