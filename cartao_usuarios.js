class Card extends HTMLElement {
    constructor() {
        super();
    }

  connectedCallback() {

        const div = document.createElement("div");
        div.className = "card mb-3 mt-3";
        div.innerHTML = `
        <div class="col">
            <div class="card" style="width: 15rem; height: 28rem;">
                <img src=""${this.getAttribute('imgScr')}" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">${this.getAttribute('cpf')}</p>
                    <p class="card-text">${this.getAttribute('nome')}</p>
                    <p class="card-text">${this.getAttribute('data_nasc')}</p>
                    <p class="card-text">${this.getAttribute('telefone')}</p>
                </div>
            </div>
        </div>`;
      this.appendChild(div);
    }
}

customElements.define("card-news", Card);