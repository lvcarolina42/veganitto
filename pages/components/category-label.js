class CategoryLabel extends HTMLElement {
    constructor() {
        super();
    }
  
    connectedCallback() {
        this.innerHTML = `
        <div class="category container-fluid d-inline">${this.getAttribute('value')}</div>
        `;
    }
}
  
customElements.define('category-label', CategoryLabel);