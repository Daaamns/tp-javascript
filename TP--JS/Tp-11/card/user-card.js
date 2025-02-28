class UserCard extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const card = document.createElement("div");
    card.classList.add("user-card");

    const avatar = document.createElement("img");
    avatar.src = this.getAttribute("avatar");
    avatar.alt = "Avatar";
    avatar.classList.add("avatar");

    const name = document.createElement("h2");
    name.textContent = this.getAttribute("name");
    name.classList.add("name");

    card.appendChild(avatar);
    card.appendChild(name);

    const style = document.createElement("style");
    style.textContent = `
          .user-card {
              display: inline-block;
              border: 1px solid #ccc;
              border-radius: 8px;
              padding: 16px;
              text-align: center;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              background-color: #f9f9f9;
              max-width: 200px;
              font-family: Arial, sans-serif;
          }
          .avatar {
              width: 100px;
              height: 100px;
              border-radius: 50%;
              border: 2px solid #fff;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          .name {
              margin-top: 12px;
              font-size: 1.2em;
              color: #333;
          }
      `;
    shadow.appendChild(style);
    shadow.appendChild(card);
  }
}

customElements.define("user-card", UserCard);
