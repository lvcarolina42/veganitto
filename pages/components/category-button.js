class CategoryButton extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var button_id = `category-${this.getAttribute("id")}`;
        this.innerHTML = `
        <input type="checkbox" class="btn-check" name="categories" id="${button_id}" autocomplete="off"/>
        <label class="btn btn-outline-secondary" for="${button_id}">${this.getAttribute("value")}</label>
        `;
    }
}

customElements.define('category-button', CategoryButton);