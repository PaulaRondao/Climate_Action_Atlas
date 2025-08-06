# Climate_Action_Atlas

<img align="left" alt="badge ci" src="https://github.com/PaulaRondao/Climate_Action_Atlas/actions/workflows/node.js.yml/badge.svg" />         


#### Projet RNCP - Cartographier les initiatives dans le monde qui font germer un avenir plus juste et durable.

## 🔗 Demo

🌍 Accéder à la version en ligne :  
➡️ [Review App Vercel](climate-action-atlas-git-main-paularondaos-projects.vercel.app)  

## Installation

### Build (local ou CI/CD)

Prisma a besoin de générer son client avant que Next.js puisse construire l'application.  
Que ce soit en local ou sur Vercel, vous devez exécuter :

```bash
npx prisma generate && next build
```

### Prérequis

- Node.js version **22.x**
- [NVM](https://github.com/nvm-sh/nvm) (gestionnaire de versions Node)

#### Installation rapide avec NVM

Si vous n’avez pas encore `nvm` :

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

Ensuite, installez node dans sa version v22 :

$ nvm install 22

Pour basculer sur nvm v22 :

$ nvm use 22
```

Enfin, installez les dépendances du projet :

```bash
$ npm install
```

### Environnement

Créer un ficher .env

```bash
$ cp .env .env.local .env.sample .env.test
```

Créer un ficher .gitignore et ajouter .env dedans

```bash
$ cp .gitignore
```

### Logs

### Docker

Démarrer une base de données PostgreSQL conteneurisée dans une image Docker :

```bash
docker compose up
```

Pour arrêter la base de données :

```bash
docker compose down
```

### Base de données

Appliquer les scripts de migration sur la base de données PostgreSQL démarrée :

```bash
npm run db:migrate
```

#### Créer une nouvelle migration

```
npx prisma migrate dev --name <un nom parlant de migration>
```

<un nom parlant de migration> c'est par exemple "update-<un nom en lien avec la table>"

### Pour lancer l'éditeur graphique de Prisma

```
npx prisma studio
```
