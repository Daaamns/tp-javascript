class CounterButton extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.alignItems = "center";
    container.style.gap = "10px";

    const button = document.createElement("button");
    button.textContent = "Cliquez-moi";
    button.style.padding = "10px";
    button.style.margin = "10px";
    button.style.fontSize = "16px";

    const counter = document.createElement("span");
    counter.textContent = "0";
    counter.style.fontSize = "20px";

    container.appendChild(button);
    container.appendChild(counter);
    shadow.appendChild(container);

    button.addEventListener("click", () => {
      let currentValue = parseInt(counter.textContent);
      currentValue += 1;
      counter.textContent = currentValue.toString();
    });

    this._updateCounter = () => {
      const val = this.getAttribute("val");
      if (val !== null && !isNaN(val)) {
        counter.textContent = val;
      }
    };

    this._updateCounter();
  }

  static get observedAttributes() {
    return ["val"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "val") {
      this._updateCounter();
    }
  }
}

customElements.define("counter-button", CounterButton);
