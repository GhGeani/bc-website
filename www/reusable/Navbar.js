class Navbar extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = `
    <nav class="container-fluid bg-nav p-3" id="navbar">
        <div class="row justify-content-center">
          <div class="col-8 col-md-4 col-xxl-3 d-xxl-flex justify-content-center mb-0 mb-xxl-4">
            <img id="navbar-logo" width="450px" height="250px" src="/assets/logo.png" alt="Brancoveanu Glamping">
          </div>
          <div class="col-4 col-md-8 col-xxl-9 d-flex justify-content-end align-items-center d-xxl-none">
            <div id="navbar-toggle-button">
              <button id="navbar-open">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
              </button>
              <button id="navbar-close" class="d-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </button>
            </div>
          </div>   
        </div>
        <div class="col-12 d-xxl-flex justify-content-center pb-3" id="navbar-links">
          <a href="/acasa.html">Acasă</a>
          <a href="/despre.html">Despre Noi</a>
          <a href="/facilitati.html">Ce oferim</a>
          <a href="/obiective-turistice.html">Obiective Turistice</a>
          <a href="/galerie.html">Galerie</a>
          <a href="/activitati.html">Activități</a>
          <a href="/cazari.html">Cazări</a>
          <a href="/acasa.html#location-section">Contact</a>
        </div>
    </nav>
    `;
  }
}


customElements.define('nav-bar', Navbar);