class RestaurantCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
           <div>Teste</div>
        `;
    }
}

customElements.define('restaurant-card', RestaurantCard);