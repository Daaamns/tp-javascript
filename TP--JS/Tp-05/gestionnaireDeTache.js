function creerGestionnaire() {
  return {
    taches: [],

    ajouterTache(description) {
      this.taches.push({ description, terminee: false });
      console.log(`Tâche ajoutée : "${description}"`);
    },

    terminerTache(index) {
      if (index >= 0 && index < this.taches.length) {
        this.taches[index].terminee = true;
        console.log(`Tâche "${this.taches[index].description}" terminée`);
      } else {
        console.log("Index invalide !");
      }
    },

    afficherTaches() {
      console.log("Liste des tâches :");
      this.taches.forEach((tache, index) => {
        const statut = tache.terminee ? "Terminée" : "À faire";
        console.log(`${index + 1}. ${tache.description} - ${statut}`);
      });
    },
  };
}

const gestionnaire = creerGestionnaire();

gestionnaire.ajouterTache("Acheter du pain");
gestionnaire.ajouterTache("Faire du sport");
gestionnaire.ajouterTache("Coder un projet");

gestionnaire.afficherTaches();

gestionnaire.terminerTache(1);

gestionnaire.afficherTaches();
