# Climate_Action_Atlas

Projet RNCP - Cartographier les effets du changement climatique, connecter les initiatives et agir pour un avenir durable.

## Installation

### Prérequis

J'utilise la version >20 de nvm, le gestionnaire de version de Node.js. Pour installer nvm :

```bash
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
```

Vérifiez ensuite que votre fichier .bashrc, .bash_profile ou .zshrc (en fonction de votre OS) dans votre répertoire racine (~) contient les lignes suivantes :

```bash
$ tail ~/<.bashrc|.bash_profile|.zshrc>
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

Ensuite, installez node dans sa version v20 :

```bash
$ nvm install 20
```

Pour basculer sur nvm v20 :

```bash
$ nvm use 20
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
