# Roadmap produit GymEmpire

| Phase | Livrable | Etat | Definition de fini |
|---|---|---|---|
| 0 | Baseline et historique Git | done | Arbre compris, fichiers sensibles contrôlés |
| 1 | Build et TypeScript | done | Check et build reproductibles |
| 2 | Architecture et dead code | done | Découpage conforme à `AGENTS.md` |
| 3 | Intégrité des données | done | Validation runtime et import robuste |
| 4 | Auth et synchronisation | done | Limites documentées, overwrite confirmé |
| 5 | Offline et service worker | done | Routes FR/EN et cache versionné |
| 6 | Design system | done | Tokens et composants cohérents sur les écrans clés |
| 7 | Dashboard premium | done | Lecture en 3 secondes, états complets, responsive validé |
| 8 | Builder professionnel | done | Création rapide, résumé, séries et supersets maîtrisés |
| 9 | Session active | done | Saisie à une main, timer et undo fiables |
| 10 | Progression et insights | done | Tendances actionnables et graphiques compréhensibles |
| 11 | QA DOM/E2E/accessibilité | done | Parcours critiques automatisés |
| 12 | Documentation et release | done | README, SECURITY et workflow CI présents |

## Séquence prioritaire

```text
Design system -> Dashboard -> Builder -> Session active -> Progression -> QA E2E
```

## Barre de qualité

Chaque phase doit satisfaire :

- mobile-first et desktop
- dark/light mode
- clavier et lecteur d'écran
- FR/EN
- états vide, erreur, chargement et succès
- tests adaptés
- `pnpm test`, `pnpm check`, `pnpm build` et `git diff --check`

## Etat actuel

- Fondations techniques stables : 460 tests Vitest passent.
- CI configurée avec Node 22.13.0 et pnpm 11.21.0.
- Le chantier prioritaire est désormais une montée en gamme produit et visuelle, pas une simple retouche cosmétique.
- Lot livré : surfaces de cartes, hiérarchie des KPI, objectif hebdomadaire, action de prochaine séance et focus clavier renforcés.
- Le dashboard est clôturé : états vide, chargement et erreur récupérable, avec parcours premier lancement testé.
- Dashboard renforcé : états de chargement et d'erreur avec relance explicite, sans surface décorative.
- Le builder est engagé : résumé exercices/séries et filtre horizontal par muscle ajoutés au sélecteur.
- La session active est engagée : résultats et navigation aplatis, contrôle de la série courante renforcé.
- La progression est engagée : variation de l'estimation 1RM affichée pour les exercices ayant un historique.
- QA renforcée : 27 fichiers et 460 tests, dont 3 tests ciblés sur le sélecteur d'exercices.
- Smoke E2E préparé : 12 routes critiques FR/EN et le service worker vérifiés après build via `pnpm test:smoke`.
- E2E navigateur ajouté : le parcours builder ouvre le sélecteur, filtre un exercice et valide l'état vide.
- E2E navigateur clôturé : builder et dashboard premier lancement passent sur Chromium.
- Validation finale locale : `pnpm test`, `pnpm check`, `pnpm build`, `pnpm test:smoke`, `pnpm test:e2e` et `git diff --check` passent.
- Hardening post-roadmap terminé : les warnings CSS `:global` historiques ont été supprimés ; le build génère 42 routes sans warning.
