class RestaurantCard extends HTMLElement {
    constructor() {
        super();
    }
  
    connectedCallback() {
        this.innerHTML = `
        <a href="../restaurant_page/restaurant.html?id=${this.getAttribute('id')}">
            <div class="col justify-content-center">
                <div class="card shadow-lg border-light h-100">
                    <img class="card-img-top" src="${this.getAttribute('image')}" alt="restaurant image">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="title-rest">${this.getAttribute('name')}</div>
                            <div class="price">${"$".repeat(this.getAttribute('price'))}</div>
                        </div>
                        <h4 class="card-description">${(this.getAttribute('rating') && this.getAttribute('rating') > 0) ? '<img src=../../images/star.svg> ' + (Math.floor(this.getAttribute('rating') * 100) / 100).toFixed(2) : 'Restaurante novo'}</h4>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="align-items-center">
                                <h5 class="card-text">${this.getAttribute('address')}</h5>
                            </div>
                            <div class="verified">
                                ${!(this.getAttribute('verified') && this.getAttribute('verified') === true) ? '<img src="../../images/verified.png" width="30px" height="30px">' : ''}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
        `;
    }
}
  
customElements.define('restaurant-card', RestaurantCard);