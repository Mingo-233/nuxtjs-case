
class BookCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' })
    const templateElem = document.getElementById('book-card-template')
    const clonedElem = templateElem.content.cloneNode(true)

    clonedElem.querySelector('.container > .action').addEventListener('click', this.onAction)
    this.shadowRoot.appendChild(clonedElem)
  }
  onAction = () => {
    alert('Hello World')
  }
}

customElements.define('book-card', BookCard)