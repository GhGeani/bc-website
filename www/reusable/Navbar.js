class Navbar extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = `
    <nav id="nav-bar" class="container-fluid bg-nav">
      <div
        class="row justify-content-between justify-content-md-center align-items-center"
      >
        <!-- LOGO CONTAINER -->

        <div class="d-none d-md-block col-2 col-md-4 text-md-end">
          <a
            target="_blank"
            class="nav-link"
            href="https://www.facebook.com/BrancoveanuComplex/"
          >
            <img class="nav-icon" src="/assets/doodle/facebook.svg" loading="lazy" />
            <small class="d-none d-lg-inline-block"
              >/BrancoveanuComplex</small
            >
          </a>
          <a
            target="_blank"
            class="nav-link mt-1"
            href="https://www.instagram.com/glampingbrancoveanu/"
            class="small-copy col-9"
          >
            <img class="nav-icon" src="/assets/doodle/instagram.svg" loading="lazy" />
            <small class="d-none d-lg-inline-block"
              >/glampingbrancoveanu</small
            >
          </a>
        </div>

        <div
          class="col-5 col-sm-4 col-md-4 col-lg-3 col-xxl-2 py-4 text-md-center"
        >
          <img
            id="logo"
            class="img-fluid"
            src="/assets/logo.png"
            alt="Brâncoveanu glamping"
            loading="lazy"
          />
        </div>

        <div class="d-none d-md-block col-2 col-md-4 float-md-end">
          <a
            target="_blank"
            class="nav-link"
            href="mailto:brancoveanuglamping@gmail.com"
          >
            <img class="nav-icon" src="/assets/doodle/email.svg" loading="lazy" />
            <small class="d-none d-lg-inline-block"
              >brancoveanuglamping@gmail.com</small
            >
          </a>
          <a
            target="_blank"
            class="nav-link mt-1"
            href="tel:+40757461574"
            class="small-copy col-9"
          >
            <img class="nav-icon" src="/assets/doodle/phone.svg" loading="lazy" />
            <small class="d-none d-lg-inline-block">+40 757 461 574</small>
          </a>
        </div>

        <!-- BUTTON CONTAINER -->

        <div
          id="navbar-toggle-button"
          class="col-5 col-md-8 d-flex justify-content-end align-items-center d-md-none"
        >
          <button
            id="navbar-open"
            class="col-5 col-md-8 d-flex justify-content-end d-md-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
        </div>

        <!-- LINKS CONTAINER -->

        <div
          class="col-12 col-md-12 d-md-block text-center"
          id="navbar-links"
        >
          <div class="col-12 text-end d-md-none my-4 ml-3">
            <button id="navbar-close">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </button>
          </div>

          <a href="/acasa.html">Acasă</a>
          <a href="/despre.html">Despre Noi</a>
          <a href="/facilitati.html">Ce oferim</a>
          <a href="/obiective-turistice.html">Obiective Turistice</a>
          <a href="/galerie.html">Galerie</a>
          <a href="/activitati.html">Activități</a>
          <a href="/rezervari.html">Rezervări</a>
          <a href="/acasa.html#location-section">Contact</a>
        </div>
      </div>
    </nav>
    `;
  }
}


customElements.define('nav-bar', Navbar);