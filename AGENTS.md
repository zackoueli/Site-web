<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Règles SEO du site breizhapp.tech

Ces règles s'appliquent à toute création ou modification de page/article. Elles priment sur les demandes ponctuelles : si une demande les contredit (ex. « génère 10 articles »), le signaler avant d'agir.

## Contenu

- **Jamais de prix en dehors de la page d'accueil** : ni dans les titles, ni dans les meta descriptions, ni dans le corps des pages services et articles de blog. Les questions de coût renvoient vers le devis gratuit sous 24h.
- **Jamais de génération en masse** : maximum 1 article par session, cadence cible 1-2 articles/semaine. Google pénalise les publications en lot.
- **Relecture humaine obligatoire** : tout nouveau contenu (article, page) est présenté à Enzo pour validation AVANT commit/push. Pas d'exception.
- **Anti-cannibalisation** : avant de créer un contenu, vérifier dans `lib/blog.ts` (slugs, titles, descriptions) et `app/services/**` qu'aucune page ne vise déjà le même mot-clé. Si oui, proposer d'améliorer la page existante plutôt que d'en créer une nouvelle.
- Langue : français, vouvoiement du lecteur. Le site parle à des TPE, restaurateurs, artisans et commerçants — vocabulaire concret, pas de jargon technique non expliqué.

## Structure de page (template durable)

- **Title** : unique sur le site, contient le mot-clé cible, format `<Sujet> | BreizhApp` (pages) — page d'accueil : `... - BreizhApp`.
- **Un seul H1** par page, aligné sur le mot-clé cible.
- **Canonical** systématique via `alternates.canonical`.
- **Schema.org** obligatoire : articles → `BlogPosting` + `BreadcrumbList` (+ `FAQPage` auto si une section a un heading commençant par « FAQ ») ; pages services → `Service` + `BreadcrumbList` + `FAQPage`.
- **Breadcrumb visuel** cohérent avec le breadcrumb JSON-LD.

## Maillage interne (lib/taxonomy.ts est la source de vérité)

- Tout article de `lib/blog.ts` doit renseigner `service:` avec un slug valide de `SERVICES` ou `SECTEURS` (`lib/taxonomy.ts`) — c'est ce qui alimente automatiquement les breadcrumbs, les « articles liés » et les sections des pages services.
- Les pages services/secteurs utilisent `<RelatedArticles service="..." />` et `<RelatedProjects service="..." />` — ne pas coder de listes de liens en dur.

## Fraîcheur et indexation

- Toute modification de contenu d'un article met à jour son champ `lastModified` (le sitemap en dépend).
- Après un push qui change un contenu important, rappeler à Enzo de demander l'indexation dans Google Search Console (Inspection d'URL).
