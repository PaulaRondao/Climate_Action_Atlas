export const MESSAGES = {
  ERRORS: {
    NOT_FOUND: 'Ressource non trouvée',
    UNAUTHORIZED: 'Non autorisé',
    SERVER_ERROR: 'Une erreur est survenue',
    VALIDATION: {
      REQUIRED_FIELD: 'Ce champ est requis',
      INVALID_EMAIL: 'Email invalide',
      INVALID_PASSWORD: 'Mot de passe invalide',
      PASSWORD_MISMATCH: 'Les mots de passe ne correspondent pas',
    },
  },
  SUCCESS: {
    INITIATIVE: {
      CREATED: 'Initiative créée avec succès',
      UPDATED: 'Initiative mise à jour avec succès',
      DELETED: 'Initiative supprimée avec succès',
    },
    AUTH: {
      LOGIN: 'Connexion réussie',
      REGISTER: 'Inscription réussie',
      LOGOUT: 'Déconnexion réussie',
    },
  },
  CONFIRMATIONS: {
    DELETE: 'Êtes-vous sûr de vouloir supprimer cet élément ?',
    CANCEL: 'Êtes-vous sûr de vouloir annuler ?',
    SAVE: 'Voulez-vous enregistrer les modifications ?',
  },
} as const;
