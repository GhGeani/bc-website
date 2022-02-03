class Footer extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = `
    <footer id="footer" class="container-fluid pt-5 pb-2">
      <div class="row justify-content-center align-items-center">
        <div class="col-12 m-md-1 p-md-1">
          <hr>
          <h2 class="medium-copy caption mb-3 text-center pb-md-3">
            Social media 
          </h2>
          </div>
          <social-links></social-links>
        </div>
      </div>
    </footer>
    `;
  }
}


customElements.define('footer-bar', Footer);