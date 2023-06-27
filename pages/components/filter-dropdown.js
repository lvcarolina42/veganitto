class FilterDropdown extends HTMLElement {
    constructor() {
        super();
    }
  
    connectedCallback() {
        var actions = '';
        this.getAttribute('actions').split(', ').forEach(element => {
            actions += `<li><a class="dropdown-item" href="#">${element}</a></li>`;
        });

        this.innerHTML = `
        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">${this.getAttribute('value')}</button>
        <ul class="dropdown-menu">
            ${actions}
        </ul>
        `;
    }
}
  
customElements.define('filter-dropdown', FilterDropdown);