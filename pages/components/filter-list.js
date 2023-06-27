class FilterList extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let data = localStorage.getItem('categories') ? JSON.parse(localStorage.getItem('categories')) : {};

        var filters_html = ``;
        for (const id in data) {
            var filter = data[id];
            filters_html += `
            <filter-capsule
                value="${filter.name}"
            ></filter-capsule>
            `;
        }

        this.innerHTML = `
        <div class="container-fluid filters">
            <div class="row">
                <div class="col">
                    ${filters_html}
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('filter-list', FilterList);