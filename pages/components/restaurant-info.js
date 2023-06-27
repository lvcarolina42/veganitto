class RestaurantInfo extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var url = new URL(window.location.href);
        var id = url.searchParams.get("id");

        let restaurants = localStorage.getItem('restaurants') ? JSON.parse(localStorage.getItem('restaurants')) : {};

        var restaurant = restaurants[id];
        var comments_html = ``;
        restaurant.comments.forEach(element => {
            comments_html += `
            <review-comment
                author="${element.author}"
                rating="${element.rating}"
                comment="${element.comment}"
            ></review-comment>
            `;
        });
            
        let categories = localStorage.getItem('categories') ? JSON.parse(localStorage.getItem('categories')) : {};
           
        var categories_html = ``;
        restaurant.categories.forEach(category_id => {
            categories_html += `
            <category-label value="${categories[category_id].name}"></category-label>
            `;
        });
            
        this.innerHTML = `
        <div class="card-group shadow-lg p-0 mb-0 bg-white rounded-5 border-0">
            <div class="card bg-white border-0">
                <img class="card-img-top" src="${restaurant.image}"/>
            </div>
            <div class="card bg-white border-0">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="p-2 title-rest">${restaurant.name}</div>
                        <div class="p-2 price">${"$".repeat(restaurant.price)}</div>
                    </div>
                    <div style="height: 20px"></div>
                    ${categories_html}
                    <div style="height: 20px"></div>
                    <div class="description">${restaurant.description}</div>
                    <div style="height: 20px"></div>
                    <a class="pdf container-fluid d-flex justify-content-between align-items-center m-0" href="../../data/menus/${restaurant.menu}" download="Cardapio ${restaurant.name}">
                    <!-- tem que arrumar o link do pdf -->
                        <div>Cardápio</div>
                        <div>
                            <img src="../../images/pdf.png" width="30px" height="30px"/>
                        </div>
                    </a>
                    <div style="height: 20px"></div>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="p-2 address-rest">${restaurant.address}</div>
                        <div>
                            ${restaurant.verified && restaurant.verified === true ? '<img src="../../images/verified.png" width="30px" height="30px"/>' : ''}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="height: 50px"></div>
        <div class="container">
        <div class="row p-0">
            <div class="col-md p-0">
                <div class="d-flex align-items-center">
                    ${(restaurant.rating && restaurant.rating > 0) ? `<div class="general-rate">Avaliação -&nbsp</div> <img src="../../images/star.svg"/> <div class="general-rate">&nbsp${(Math.floor(restaurant.rating*100)/100).toFixed(2)}</div>` : 'Restaurante novo'}</div>
                </div>
                <div style="height: 40px"></div>
                    ${comments_html}
                </div>
                <div class="col-md p-0">
                    <div class="local">Localização</div>
                    <div style="height: 20px"></div>
                    <iframe
                        class="container-map"
                        src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d86665.57911817894!2d-44.000151926672075!3d-19.91213568239269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m3!3m2!1d-19.9293957!2d-43.995534899999996!4m5!1s0xa690f4199ac05d%3A0x5fdeb00f06e99299!2sCentro%20Esportivo%20Universit%C3%A1rio%20-%20Avenida%20Coronel%20Oscar%20Paschoal%20-%20S%C3%A3o%20Jos%C3%A9%2C%20Belo%20Horizonte%20-%20MG!3m2!1d-19.8662836!2d-43.9732145!5e0!3m2!1spt-BR!2sbr!4v1687625730275!5m2!1spt-BR!2sbr"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
        <div style="height: 100px"></div>
        `;
    }
}

customElements.define('restaurant-info', RestaurantInfo);