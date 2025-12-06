# Climate_Action_Atlas

<img align="left" alt="badge ci" src="https://github.com/PaulaRondao/Climate_Action_Atlas/actions/workflows/node.js.yml/badge.svg" />         


#### Projet RNCP - Cartographier les initiatives dans le monde qui font germer un avenir plus juste et durable.

Ce projet réalisé sur Nextjs en Typescript comprend :
- Backend : Prisma et PostrgreSQL
- API : Base Adresse Nationale (API) et leaflet (carte intéractive)
- Environnement : Docker


## 🔗 Demo

🌍 Accéder à la version en ligne :  
➡️ [Review App Vercel](https://climate-action-atlas-git-main-paularondaos-projects.vercel.app/)  


## Prérequis

- Node.js version **22.x** 
- [NVM](https://github.com/nvm-sh/nvm) (gestionnaire de versions Node)
- Docker 


## installez des dépendances

```bash
$ npm install
```


## Environnement

Créer un ficher .env à la racine du projet

```bash
$ cp .env .env.local .env.sample .env.test
```

Créer un ficher .gitignore et ajouter .env dedans

```bash
$ cp .gitignore
```


## Logs


## Utilisation avec Docker

Démarrer une base de données PostgreSQL conteneurisée dans une image Docker :

```bash
docker compose up
```

Pour arrêter la base de données :

```bash
docker compose down
```

Pour vider le volume de la base de données :

```bash
docker compose down -v
```


## Créer une nouvelle migration

```
docker compose exec web npx prisma migrate dev --name <un nom parlant de migration>
```

<un nom parlant de migration> c'est par exemple "update-<un nom en lien avec la table>"


## Appliquer les migrations

```
# Dev (crée/ajuste le schéma en développement)
docker compose exec web npx prisma migrate dev 

# Client Prisma (le code TypeScript) soit régénéré
npx prisma generate

# Prod/CI (applique les migrations déjà créées)
docker compose exec web npx prisma migrate deploy
```


## Réinitialiser la base (drop + migrate + seed) :

```
docker compose exec web npx prisma migrate reset --force
```


## Seeder la base :

```
docker compose exec web npx prisma db seed
```


## Pour lancer l'éditeur graphique de Prisma

```
docker compose exec web npx prisma studio --port 5555
```


## Build (production ou CI/CD ou création de nouveaux containers Docker)

Prisma a besoin de générer son client avant que Next.js puisse construire l'application, 
vous devez exécuter :

```bash
npx prisma generate && next build
```
