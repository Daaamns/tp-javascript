function plusGrandeDate(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  if (isNaN(d1) || isNaN(d2)) {
    console.log("Erreur : l'une des dates fournies n'est pas valide.");
    return;
  }

  if (d1 > d2) {
    console.log(`La date la plus récente est : ${d1.toLocaleString()}`);
  } else if (d2 > d1) {
    console.log(`La date la plus récente est : ${d2.toLocaleString()}`);
  } else {
    console.log("Les deux dates sont identiques.");
  }
}

plusGrandeDate("2025-02-26", "2023-05-14");
plusGrandeDate("2020-01-01", "2020-01-01");
plusGrandeDate("invalid date", "2023-05-14");
