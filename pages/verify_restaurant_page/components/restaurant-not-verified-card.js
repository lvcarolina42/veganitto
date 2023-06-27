class RestaurantNotVerifiedCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <a href="#$" onclick="showRestaurantCard">
                <div class="card card-block mx-2 p-0" style="width: 200px; height: 200px;">
                    <img class="card-img-top"
                    src="${this.getAttribute('image')}"
                    alt="Card image cap">
                    <div class="card-body">
                    <h5 class="name-restaurant">${this.getAttribute('name')}</h5>
                    </div>
                </div>
            </a>
        `;
    }
}

customElements.define('restaurant-not-verified-card', RestaurantNotVerifiedCard);