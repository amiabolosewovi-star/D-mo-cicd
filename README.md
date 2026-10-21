# Démonstration : CI avec GitHub Actions

## Prérequis
- Node.js 22 ou une version compatible avec les scripts utilisés
- Git
- Un compte GitHub

## 1. Tester le projet localement
Dans un terminal ouvert dans ce dossier :

```bash
npm ci
npm test
npm run build
```

Le dossier `dist/` doit être créé après la construction.

## 2. Envoyer le projet sur GitHub
1. Créez un dépôt vide sur GitHub, sans ajouter de README distant.
2. Depuis ce dossier, exécutez :

```bash
git init
git add .
git commit -m "Ajout du projet et de la CI"
git branch -M main
git remote add origin ADRESSE_DU_DEPOT
git push -u origin main
```

Remplacez `ADRESSE_DU_DEPOT` par l'adresse de votre dépôt GitHub.

## 3. Observer GitHub Actions
Ouvrez l'onglet **Actions** du dépôt. Sélectionnez la dernière exécution puis le job `verification`. Les étapes attendues sont : récupération du code, configuration de Node.js, installation, tests et construction.

## 4. Mini-défi
- Ajoutez un test dans `test/app.test.js`.
- Faites un commit et poussez la modification.
- Vérifiez qu'un nouveau workflow démarre.
- Essayez de faire échouer une assertion temporairement, puis corrigez-la.
- Expliquez la différence entre un pipeline CI et un pipeline qui déploie réellement l'application.

## Fichiers importants
- `.github/workflows/ci.yml` : pipeline automatisé
- `src/app.js` : fonction testée
- `test/app.test.js` : tests automatiques
- `scripts-build.js` : création de `dist/index.html`

Ce projet teste et construit une petite application. Il ne réalise pas de déploiement en production.
