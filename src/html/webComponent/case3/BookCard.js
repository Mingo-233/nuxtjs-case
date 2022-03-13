
class BookCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' })
console.log(this.shadowRoot);
    const templateElem = document.getElementById('book-card-template')
    const clonedElem = templateElem.content.cloneNode(true)

    this.shadowRoot.appendChild(clonedElem)
  }
}

customElements.define('book-card', BookCard)