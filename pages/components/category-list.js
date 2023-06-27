class CategoryList extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let data = localStorage.getItem('categories') ? JSON.parse(localStorage.getItem('categories')) : {};

        var categories_html = '';
        for (const id in data) {
            var category = data[id];
            categories_html += `
            <category-button id="${category.id}" value="${category.name}"></category-button>
            `;
        }

        this.innerHTML = `
        <div class="categories-list">
            ${categories_html}
            <div class="invalid-feedback">
                Por favor, marque, ao menos, uma categoria.
            </div>
        </div>
        `;
    }
}

customElements.define('category-list', CategoryList);