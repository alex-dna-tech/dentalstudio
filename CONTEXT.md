# Domain glossary

## Services catalogue

| Term | Definition |
|------|-----------|
| **Послуга** | A single dental service/treatment — maps to one Hugo page under `content/shho-mi-mozhemo/` |
| **Категорія** | A group of related послуг (e.g., "Терапевтична стоматологія") — stored as front matter `category` on each sub-page |
| **Ми можемо** | Navigation label for `/shho-mi-mozhemo/` — the services catalogue section |
| **Card** | A responsive UI component displaying one послуга — emoji, title, description excerpt, link |

## Relationships

- A **Категорія** contains one or more **Послуга**
- A **Послуга** belongs to exactly one **Категорія**
- Cards are rendered by iterating child pages of the section, grouped by `category` param
