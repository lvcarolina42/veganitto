class ReviewComment extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="comment-card">
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center">
                <img src="../../images/profile.png" width="30px" />
                <div class="user-name-comment">${this.getAttribute('author')}</div>
              </div>
              <div class="d-flex align-items-center">
                <img src="../../images/star.svg" />
                <div class="general-rate">&nbsp${(Math.floor(this.getAttribute('rating')*100)/100).toFixed(2)}</div>
              </div>
            </div>
            <div class="comment">
                ${this.getAttribute('comment')}
            </div>
          </div>
        `;
    }
}

customElements.define('review-comment', ReviewComment);