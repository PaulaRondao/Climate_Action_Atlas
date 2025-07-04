# Climate_Action_Atlas

<img align="left" alt="badge ci" src="https://github.com/PaulaRondao/Climate_Action_Atlas/actions/workflows/node.js.yml/badge.svg" />         


#### Projet RNCP - Cartographier les initiatives dans le monde qui font germer un avenir plus juste et durable.

## Installation

### Prérequis

J'utilise la version >22 de nvm, le gestionnaire de version de Node.js. Pour installer nvm :

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

Vérifiez ensuite que votre fichier .bashrc, .bash_profile ou .zshrc (en fonction de votre OS) dans votre répertoire racine (~) contient les lignes suivantes :

```bash
$ tail ~/<.bashrc|.bash_profile|.zshrc>
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

Ensuite, installez node dans sa version v22 :

```bash
$ nvm install 22
```

Pour basculer sur nvm v22 :

```bash
$ nvm use 22
```

Enfin, installez les dépendances du projet :

```bash
$ npm install
```

### Environnement

Créer un ficher .env et un fichier .env.test

```bash
$ cp .env .envsample .env.test
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
