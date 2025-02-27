let triAscendant = false;

function recupererDonnees() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://restcountries.com/v2/all", true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        afficherDonnees(data);
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

function afficherDonnees(pays) {
  const resultatDiv = document.getElementById("resultat");
  resultatDiv.innerHTML = "";

  const table = document.createElement("table");

  const header = document.createElement("thead");
  header.innerHTML = `
        <tr>
            <th>Nom du Pays</th>
            <th>Capitale</th>
            <th id="populationHeader" style="cursor: pointer;">
                Population 
                <i class="fas fa-sort" id="populationSortIcon"></i>
            </th>
            <th>Région</th>
        </tr>
    `;
  table.appendChild(header);

  const tbody = document.createElement("tbody");

  pays.forEach((pays) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${pays.name}</td>
            <td>${pays.capital || "Non spécifiée"}</td>
            <td>${pays.population}</td>
            <td>${pays.region}</td>
        `;
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  resultatDiv.appendChild(table);

  document.getElementById("populationHeader").addEventListener("click", () => {
    triAscendant = !triAscendant;
    trierPopulation(pays);
    afficherDonnees(pays);
  });
}

function trierPopulation(pays) {
  pays.sort((a, b) => {
    if (triAscendant) {
      return a.population - b.population;
    } else {
      return b.population - a.population;
    }
  });

  const sortIcon = document.getElementById("populationSortIcon");
  sortIcon.className = triAscendant ? "fas fa-sort-up" : "fas fa-sort-down";
}
