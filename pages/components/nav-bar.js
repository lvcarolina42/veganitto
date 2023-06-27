class NavBar extends HTMLElement {
    constructor() {
        super();
    }
  
    connectedCallback() {
        this.innerHTML = `
        <section class="header_0">
            <header class="header_1">
                <div>
                    <a href="../home_page/home.html"><img src="../../images/logo.png" alt="logo_site"></a>
                </div>
                <div class="search_box">
                    <form action="">
                        <input id="searchInput" class="box" type="text" placeholder="O que você quer comer hoje?">

                    </form>
                    <div class="lupe">
                        <button><img src="../../images/search.png" alt="lupe"></button>
                    </div>
                </div>
                <div>
                    <nav class="nav">
                        <button><a href="../new_restaurant/new_restaurant.html">Adicionar Restaurante</a></button>
                        <button><a href="../verify_restaurant_page/verify_restaurant.html">Verificar Restaurante</a></button>
                        <button><a href="">Entrar</a></button>
                    </nav>
                </div>
            </header>
        </section>
        `;
    }
}
  
customElements.define('nav-bar', NavBar);
