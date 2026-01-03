# Climate Action Atlas


## 🔗 Demo

🌍 Accéder à la version en ligne :  
➡️ [Review App Vercel](https://climate-action-atlas-git-main-paularondaos-projects.vercel.app/)  



## A propos du projet

### Cartographier les initiatives dans le monde qui font germer un avenir plus juste et durable.

Climate Action Atlas est une plateforme collaborative et interactive pensée pour cartographier les initiatives locales qui agissent pour une transformation écologique, sociale, artisanale, éducative ou culturelle. Elle s’adresse à toutes celles et ceux qui souhaitent comprendre, s’inspirer et s’engager.

La plateforme permet d’explorer des initiatives partout dans le monde, en naviguant par type d'impact.

Chaque utilisateur·rice peut contribuer à cette cartographie en ajoutant une initiative via un formulaire simple en respectant leur souhait d’être anonymisé·e. Pour cela, la création d'un compte sur la plateforme est nécessaire.


### Tech Stack

- **Client:** NextJs, Typescript, Styled component

- **Server:** Node

- **ORM:** Prisma

- **Backend:** PostgreSQL

- **Environnement:** Docker

- **API:** Base Adresse Nationale (API) et leaflet (carte intéractive)



## Run Locally

Clone the project

```bash
  git clone https://github.com/PaulaRondao/Climate_Action_Atlas.git
```

Go to the project directory

```bash
  cd my-project
```



## Commencement

### Prérequis

- Node.js version **22.x** 
- [NVM](https://github.com/nvm-sh/nvm) (gestionnaire de versions Node)
- Docker 


### Installation

Install dependencies

```bash
$ npm install
```


### Environnement

Créer un ficher .env à la racine du projet

```bash
$ cp .env .env.local .env.sample .env.test
```

Créer un ficher .gitignore et ajouter .env dedans

```bash
$ cp .gitignore
```


### Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

`ANOTHER_API_KEY`


### Utilisation avec Docker

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


### Créer une nouvelle migration

```
docker compose exec web npx prisma migrate dev --name <un nom parlant de migration>
```

<un nom parlant de migration> c'est par exemple "update-<un nom en lien avec la table>"


### Appliquer les migrations

```
# Dev (crée/ajuste le schéma en développement)
docker compose exec web npx prisma migrate dev 

# Client Prisma (le code TypeScript) soit régénéré
npx prisma generate

# Prod/CI (applique les migrations déjà créées)
docker compose exec web npx prisma migrate deploy
```


### Réinitialiser la base (drop + migrate + seed) :

```
docker compose exec web npx prisma migrate reset --force
```


### Seeder la base :

```
docker compose exec web npx prisma db seed
```


### Pour lancer l'éditeur graphique de Prisma

```
docker compose exec web npx prisma studio --port 5555
```


### Build (production ou CI/CD ou création de nouveaux containers Docker)

Prisma a besoin de générer son client avant que Next.js puisse construire l'application, 
vous devez exécuter :

```bash
npx prisma generate && next build
```


### Deployment

Pour déployer ce projet :

```bash
  npm run deploy
```


## Roadmap
- Additional browser support

- Add more integrations




## Screenshots

![App Screenshot]()
