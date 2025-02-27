let triAscendant = false;
let dataGlobal = [];

function recupererDonnees() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://digicode.cleverapps.io/json/pays/pollution", true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        dataGlobal = JSON.parse(xhr.responseText);
        afficherDonnees(dataGlobal);
      } else {
        console.error(
          "Erreur lors de la récupération des données :",
          xhr.status
        );
      }
    }
  };

  xhr.send();
}

function afficherDonnees(data) {
  document.getElementById(
    "titre"
  ).textContent = `Polluant : ${data.polluant} (${data.unite})`;
  document.getElementById("annee").textContent = `Année : ${data.annee}`;

  const corpsTableau = document.getElementById("corps");
  corpsTableau.innerHTML = "";

  data.pays.forEach((pays) => {
    const ligne = document.createElement("tr");
    ligne.innerHTML = `
      <td><img src="https://flagcdn.com/24x18/${pays.code}.png" alt="Drapeau de ${pays.nom}"></td>
      <td>${pays.nom}</td>
      <td>${pays.valeur}</td>
      <td>${pays.pourcentage}%</td>
    `;
    corpsTableau.appendChild(ligne);
  });
}

function filtrerDonnees() {
  const minInput = document.getElementById("min").value;
  const maxInput = document.getElementById("max").value;

  let min = minInput ? parseFloat(minInput) : 0;
  let max = maxInput ? parseFloat(maxInput) : Number.MAX_VALUE;

  if (min < 0 || max < 0) {
    alert("Veuillez saisir des valeurs positives.");
    return;
  }

  if (min > max) {
    alert(
      "Veuillez saisir des nombres cohérents (MIN ne doit pas être supérieur à MAX)."
    );
    return;
  }

  const filteredData = dataGlobal.pays.filter((pays) => {
    return pays.valeur >= min && pays.valeur <= max;
  });

  afficherDonnees({ ...dataGlobal, pays: filteredData });
}

recupererDonnees();
