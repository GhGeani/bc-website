class Footer extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = 
    `
    <footer id="footer" class="container-fluid py-5">
      <div class="row justify-content-center">

        <div
          class="d-none d-lg-inline-block col-lg-3 col-xxl-2 my-auto"
        >
          <img
            class="img-fluid"
            src="/assets/logo.png"
            alt="Brâncoveanu glamping"
          />
        </div>

        <!-- CONTACT -->
        <div class="col-8 col-md-4 col-lg-3 pt-3">
          <h2 class="footer-header caption medium-copy">Contact</h2>
          <hr>
          <div>
            <a
              target="_blank"
              class="nav-link"
              href="mailto:brancoveanuglamping@gmail.com"
            >
              <img class="nav-icon" src="/assets/doodle/email.svg" loading="lazy" />
              <small>brancoveanuglamping@gmail.com</small
              >
            </a>
            <a
              target="_blank"
              class="nav-link mt-1"
              href="tel:+40757461574"
              class="small-copy col-9"
            >
              <img class="nav-icon" src="/assets/doodle/phone.svg" loading="lazy" />
              <small>+40 757 461 574</small>
            </a>
            <a class="nav-link" href="https://wa.me/+40757461574?text=Salutare! Sunt interesant de Brancoveanu Glamping. Ma poti ajuta, te rog?">
              <img class="nav-icon" src="/assets/doodle/whatsapp.svg" loading="lazy" />
              <small>Whatsapp</small>
            </a>
          </div>
        </div>

        <!-- REZERVARI -->
        <div class="col-8 col-md-4 col-lg-3 pt-3">
          <h2 class="footer-header caption medium-copy">Rezervari</h2>
          <hr>
          <a
            target="_blank"
            class="nav-link"
            href="https://www.booking.com/hotel/ro/brancoveanu-glamping.en-us.html?aid=1703513;label=55;sid=f6331ede8f8f0050c1c10ada5b2d5360;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1642444874;srpvid=faf38364b0190065;type=total;ucfs=1&#hotelTmpl"
          >
            <img class="nav-icon" src="/assets/logos/booking-icon.svg" loading="lazy" />
            <small>Booking</small
            >
          </a>
          <a
            target="_blank"
            class="nav-link mt-1"
            href="https://www.airbnb.com.ro/rooms/53804923?source_impression_id=p3_1642444562_wgN3zr9Pn4PjnE7w&guests=1&adults=1"
            class="small-copy col-9"
          >
            <img class="nav-icon" src="/assets/logos/airbnb.png" loading="lazy" />
            <small>Airbnb</small>
          </a>
        </div>

        <!-- SOCIALS -->
        <div class="col-8 col-md-4 col-lg-3 pt-3">
          <h2 class="footer-header caption medium-copy">Socials</h2>
          <hr>
          <a
          target="_blank"
          class="nav-link"
          href="https://www.facebook.com/BrancoveanuComplex/"
          >
            <img class="nav-icon" src="/assets/doodle/facebook.svg" loading="lazy" />
            <small>/BrancoveanuComplex</small>
          </a>
          <a
            target="_blank"
            class="nav-link mt-1"
            href="https://www.instagram.com/glampingbrancoveanu/"
            class="small-copy col-9"
          >
            <img class="nav-icon" src="/assets/doodle/instagram.svg" loading="lazy" />
            <small>/glampingbrancoveanu</small>
          </a>
        </div>
      </div>
    </footer>
    `;
  }
}


customElements.define('footer-bar', Footer);