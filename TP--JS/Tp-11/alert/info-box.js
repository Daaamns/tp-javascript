class InfoBox extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    // Conteneur
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.alignItems = "center";
    container.style.padding = "16px";
    container.style.border = "1px solid #ccc";
    container.style.borderRadius = "8px";
    container.style.backgroundColor = "#f9f9f9";
    container.style.fontFamily = "Arial, sans-serif";

    // Icône
    const icon = document.createElement("span");
    icon.innerHTML = "&#128161;";
    icon.style.fontSize = "24px";
    icon.style.marginRight = "16px";

    // Contener info-box content
    const content = document.createElement("div");

    // Titre avec slot
    const titleSlot = document.createElement("slot");
    titleSlot.name = "title";
    titleSlot.style.fontSize = "18px";
    titleSlot.style.fontWeight = "bold";
    titleSlot.style.marginBottom = "8px";

    // Content avec slot
    const textSlot = document.createElement("slot");
    textSlot.name = "text";
    textSlot.style.fontSize = "14px";
    textSlot.style.color = "#333";

    content.appendChild(titleSlot);
    content.appendChild(textSlot);
    container.appendChild(icon);
    container.appendChild(content);
    shadow.appendChild(container);
  }
}

customElements.define("info-box", InfoBox);
