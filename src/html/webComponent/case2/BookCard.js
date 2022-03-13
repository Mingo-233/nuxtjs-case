class BookCard extends HTMLElement {
  constructor() {
    super();

    const templateElem = document.getElementById('book-card-template')
    console.log(templateElem);
    console.dir(templateElem);
    const clonedElem = templateElem.content.cloneNode(true)

    this.appendChild(clonedElem)
  }
}

customElements.define('book-card', BookCard)