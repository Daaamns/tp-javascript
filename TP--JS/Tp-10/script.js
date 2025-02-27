const idCreateur = "adam-hemamou";

async function recupererUtilisateurs() {
  const response = await fetch(
    `https://digicode.cleverapps.io/utilisateurs/${idCreateur}`
  );
  if (response.ok) {
    const utilisateurs = await response.json();
    afficherUtilisateurs(utilisateurs);
  } else {
    const erreurData = await response.json();
    alert(erreurData.message || "Une erreur est survenue.");
    console.error(
      "Erreur lors de la récupération des utilisateurs :",
      response.status
    );
  }
}

function afficherUtilisateurs(utilisateurs) {
  const tbody = document.getElementById("utilisateurs");
  tbody.innerHTML = "";
  utilisateurs.forEach((utilisateur) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
            <td>${utilisateur.id}</td>
            <td>${utilisateur.nom}</td>
            <td>${utilisateur.prenom}</td>
            <td>${utilisateur.genre}</td>
            <td>${utilisateur.dateNaissance}</td>
            <td>
                <button onclick="modifierUtilisateur(${utilisateur.id})">Modifier</button>
                <button onclick="showDeleteModal(${utilisateur.id})">Supprimer</button>
            </td>
        `;
    tbody.appendChild(tr);
  });
}

async function creerUtilisateur(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const utilisateur = {
    idCreateur: idCreateur,
    nom: formData.get("nom"),
    prenom: formData.get("prenom"),
    genre: formData.get("genre"),
    dateNaissance: formData.get("dateNaissance"),
    lieuNaissance: formData.get("lieuNaissance"),
    departementNaissance: formData.get("departementNaissance"),
    numeroRue: formData.get("numeroRue"),
    libelleRue: formData.get("libelleRue"),
    codePostal: formData.get("codePostal"),
    ville: formData.get("ville"),
  };

  console.log("Données envoyées :", utilisateur);

  try {
    const response = await fetch(
      "https://digicode.cleverapps.io/utilisateurs/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(utilisateur),
      }
    );

    if (response.ok) {
      await recupererUtilisateurs();
      closeModale("modale1");
      alert("Utilisateur créé avec succès!");
    } else {
      const erreurData = await response.json();
      alert(erreurData.message || "Une erreur est survenue.");
      throw new Error("Erreur lors de la création de l'utilisateur");
    }
  } catch (error) {
    console.error(error);
    alert("Une erreur est survenue, veuillez réessayer.");
  }
}

async function modifierUtilisateur(id) {
  try {
    const response = await fetch(
      `https://digicode.cleverapps.io/utilisateurs/${idCreateur}`
    );
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des utilisateurs");
    }

    const utilisateurs = await response.json();

    const utilisateur = utilisateurs.find((u) => u.id === id);
    if (!utilisateur) {
      throw new Error("Utilisateur non trouvé");
    }
    document.querySelector(".modifTitle").textContent =
      "Modifier l'utilisateur";
    document.querySelector(".modifBtn").textContent = "Modifier";

    document.getElementById("nom").value = utilisateur.nom;
    document.getElementById("prenom").value = utilisateur.prenom;
    document.getElementById("genre").value = utilisateur.genre;
    document.getElementById("dateNaissance").value = utilisateur.dateNaissance;
    document.getElementById("lieuNaissance").value = utilisateur.lieuNaissance;
    document.getElementById("departementNaissance").value =
      utilisateur.departementNaissance;
    document.getElementById("numeroRue").value = utilisateur.numeroRue;
    document.getElementById("libelleRue").value = utilisateur.libelleRue;
    document.getElementById("codePostal").value = utilisateur.codePostal;
    document.getElementById("ville").value = utilisateur.ville;

    openModale("modale1");

    const form = document.querySelector("modale-view#modale1 form");
    form.onsubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const updatedUtilisateur = {
        idCreateur: idCreateur,
        nom: formData.get("nom"),
        prenom: formData.get("prenom"),
        genre: formData.get("genre"),
        dateNaissance: formData.get("dateNaissance"),
        lieuNaissance: formData.get("lieuNaissance"),
        departementNaissance: formData.get("departementNaissance"),
        numeroRue: formData.get("numeroRue"),
        libelleRue: formData.get("libelleRue"),
        codePostal: formData.get("codePostal"),
        ville: formData.get("ville"),
      };

      try {
        const updateResponse = await fetch(
          `https://digicode.cleverapps.io/utilisateurs/${id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedUtilisateur),
          }
        );

        if (updateResponse.ok) {
          await recupererUtilisateurs();
          closeModale("modale1");
          alert("Utilisateur modifié avec succès!");
        } else {
          const erreurData = await updateResponse.json();
          alert(erreurData.message || "Une erreur est survenue.");
          throw new Error("Erreur lors de la création de l'utilisateur");
        }
      } catch (error) {
        console.error(error);
      }
    };
  } catch (error) {
    console.error(error);
  }
}

async function supprimerUtilisateur(id) {
  const response = await fetch(
    `https://digicode.cleverapps.io/utilisateurs/${idCreateur}/${id}`,
    {
      method: "DELETE",
    }
  );

  if (response.ok) {
    await recupererUtilisateurs();
  } else {
    console.error(
      "Erreur lors de la suppression de l'utilisateur :",
      response.status
    );
  }
}

window.onload = recupererUtilisateurs;

function openCreateUserModal() {
  const form = document.querySelector("modale-view#modale1 form");
  form.reset();
  form.onsubmit = creerUtilisateur;

  document.querySelector(".modifTitle").textContent = "Créer un utilisateur";
  document.querySelector(".modifBtn").textContent = "Créer";

  openModale("modale1");
}

async function creerUtilisateur(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const utilisateur = {
    idCreateur: idCreateur,
    nom: formData.get("nom"),
    prenom: formData.get("prenom"),
    genre: formData.get("genre"),
    dateNaissance: formData.get("dateNaissance"),
    lieuNaissance: formData.get("lieuNaissance"),
    departementNaissance: formData.get("departementNaissance"),
    numeroRue: formData.get("numeroRue"),
    libelleRue: formData.get("libelleRue"),
    codePostal: formData.get("codePostal"),
    ville: formData.get("ville"),
  };

  console.log("Données envoyées :", utilisateur);

  try {
    const response = await fetch(
      "https://digicode.cleverapps.io/utilisateurs/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(utilisateur),
      }
    );

    if (response.ok) {
      await recupererUtilisateurs();
      closeModale("modale1");
      alert("Utilisateur créé avec succès!");
      event.target.reset();
    } else {
      const erreurData = await response.json();
      alert(erreurData.message || "Une erreur est survenue.");
      throw new Error("Erreur lors de la création de l'utilisateur");
    }
  } catch (error) {
    console.error(error);
  }
}

let userToDelete = null;

function showDeleteModal(id) {
  userToDelete = id;
  openModale("deleteUserModal");
}

function confirmDelete() {
  if (userToDelete !== null) {
    supprimerUtilisateur(userToDelete);
    console.log(`Utilisateur ${userToDelete} supprimé !`);
  }
  closeModale("deleteUserModal");
}
