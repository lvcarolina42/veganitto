class RestaurantNotVerifiedList extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let data = localStorage.getItem('restaurants') ? JSON.parse(localStorage.getItem('restaurants')) : {};

        var restaurants_html = ``;
        for (const id in data) {
            var restaurant = data[id];

            if (restaurant.verified != true) {
                restaurants_html += `
                <restaurant-not-verified-card
                    id="${restaurant.id}"
                    name="${restaurant.name}"
                    image="${restaurant.image}"
                    price=${restaurant.price}
                    rating=${restaurant.rating}
                    address="${restaurant.address}"
                    phone="${restaurant.phone}"
                    description="${restaurant.description}"
                ></restaurant-not-verified-card>
                `;
            }

        }

        this.innerHTML = `
            <div class="list d-flex flex-row flex-nowrap overflow-auto">
                ${restaurants_html}
            </div>
        `;
    }
}

customElements.define('restaurant-not-verified-list', RestaurantNotVerifiedList);