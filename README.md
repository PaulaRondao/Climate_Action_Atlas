# Climate_Action_Atlas
Projet RNCP - Cartographier les effets du changement climatique, connecter les initiatives et agir pour un avenir durable.

##Installation

###Prérequis
J'utilise la version >20 de nvm, le gestionnaire de version de Node.js. Pour installer nvm :

```bloc de code```$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash


Vérifiez ensuite que votre fichier .bashrc, .bash_profile ou .zshrc (en fonction de votre OS) dans votre répertoire racine (~) contient les lignes suivantes :

$ tail ~/<.bashrc|.bash_profile|.zshrc>
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion


Ensuite, installez node dans sa version v16.. :

$ nvm install 20


Pour basculer sur nvm v20 :

$ nvm use 20


Enfin, installez les dépendances du projet :

$ npm install


Environnement
Créer un ficher .env et un fichier .env.test en se basant sur le fichier .env.sample

$ cp .env.sample .env






