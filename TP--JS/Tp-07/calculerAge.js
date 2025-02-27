function calculerAge(dateNaissance) {
  const naissance = new Date(dateNaissance);
  const aujourd = new Date();

  if (isNaN(naissance)) {
    console.log("Erreur : la date de naissance fournie n'est pas valide.");
    return;
  }

  let ageAnnées = aujourd.getFullYear() - naissance.getFullYear();
  let ageMois = aujourd.getMonth() - naissance.getMonth();

  if (ageMois < 0) {
    ageAnnées--;
    ageMois += 12;
  }

  console.log(`Vous avez ${ageAnnées} ans et ${ageMois} mois.`);
}

calculerAge("2000-01-01");
calculerAge("1995-06-15");
calculerAge("invalid date");
