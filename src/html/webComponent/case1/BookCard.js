class BookCard extends HTMLElement {
  constructor() {
    super();

    const container = document.createElement('div')
    container.className = 'container'

    const image = document.createElement('img')
    image.className = 'image'
    image.src = "https://pic1.zhimg.com/50/v2-a6d65e05ec8db74369f3a7c0073a227a_200x0.webp"

    const title = document.createElement('p')
    title.className = 'title'
    title.textContent = '切尔诺贝利的祭祷'

    const desc = document.createElement('p')
    desc.className = 'desc'
    desc.textContent = 'S·A·阿列克谢耶维奇'

    const price = document.createElement('p')
    price.className = 'price'
    price.textContent = `￥25.00`

    container.append(image, title, desc, price)

    this.appendChild(container)


  }
  connectedCallback() {
    console.log('connectedCallback 执行.');
  }

}
customElements.define('book-card', BookCard)