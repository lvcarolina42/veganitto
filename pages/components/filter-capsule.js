class FilterCapsule extends HTMLElement {
    constructor() {
        super();
    }
  
    connectedCallback() {
        this.innerHTML = `
        <input type="radio" class="btn-check" name="btnradio" id="${this.getAttribute('value')}" autocomplete="off">
        <label class="btn filter" for="${this.getAttribute('value')}">${this.getAttribute('value')}</label>
        `;
    }
}
  
customElements.define('filter-capsule', FilterCapsule);