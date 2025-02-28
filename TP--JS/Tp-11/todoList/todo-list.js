class TodoList extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    // Conteneur
    const container = document.createElement("div");
    container.style.fontFamily = "Arial, sans-serif";

    // Champ de saisie
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Ajouter une tâche";
    input.style.padding = "8px";
    input.style.marginRight = "10px";
    input.style.border = "1px solid #ccc";
    input.style.borderRadius = "4px";

    // Bouton
    const button = document.createElement("button");
    button.textContent = "Ajouter";
    button.style.padding = "8px 16px";
    button.style.backgroundColor = "#007BFF";
    button.style.color = "#fff";
    button.style.border = "none";
    button.style.borderRadius = "4px";
    button.style.cursor = "pointer";

    // Liste des tâches
    const taskList = document.createElement("ul");
    taskList.style.listStyleType = "none";
    taskList.style.padding = "0";
    taskList.style.marginTop = "20px";

    container.appendChild(input);
    container.appendChild(button);
    container.appendChild(taskList);
    shadow.appendChild(container);

    // Ajouter une tâche
    button.addEventListener("click", () => {
      if (input.value.trim() !== "") {
        const taskItem = document.createElement("li");
        taskItem.textContent = input.value;
        taskItem.style.padding = "8px";
        taskItem.style.marginBottom = "5px";
        taskItem.style.backgroundColor = "#f9f9f9";
        taskItem.style.border = "1px solid #ddd";
        taskItem.style.borderRadius = "4px";
        taskItem.style.cursor = "pointer";

        // Supprimer une tâche
        taskItem.addEventListener("click", () => {
          taskList.removeChild(taskItem);
        });

        taskList.appendChild(taskItem);
        input.value = "";
      }
    });
  }
}

customElements.define("todo-list", TodoList);
