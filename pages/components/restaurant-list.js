class RestaurantList extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Read the restaurants from the local storage
        let data = localStorage.getItem('restaurants') ? JSON.parse(localStorage.getItem('restaurants')) : {};

        var restaurants_html = ``;
        for (const id in data) {
            var restaurant = data[id];
            restaurants_html += `
            <restaurant-card
                id="${restaurant.id}"
                name="${restaurant.name}"
                image="${restaurant.image}"
                price=${restaurant.price}
                rating=${restaurant.rating}
                address="${restaurant.address}"
                verified=${restaurant.verified ? restaurant.verified : false}
            ></restaurant-card>
            `;
        }

        this.innerHTML = `
        <div class="container">
            <div class="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4">
                ${restaurants_html}
            </div>
        </div>
        `;
    }
}

customElements.define('restaurant-list', RestaurantList);