// ============ CAFE WEBSITE — DYNAMIC RENDERER ============
// All content is pulled from /config/*.js — never hardcode.

const T = window.CAFE_TEXT || {};
const B = window.CAFE_BUTTONS || {};
const M = window.CAFE_MESSAGES || {};
const I = window.CAFE_IMAGES || {};

// Helper: safely set text
function setText(id, value) {
  const el = document.getElementById(id);
  if (el && value != null) el.textContent = value;
}
function setHTML(id, value) {
  const el = document.getElementById(id);
  if (el && value != null) el.innerHTML = value;
}
function setImg(id, src, alt) {
  const el = document.getElementById(id);
  if (el && src) { el.src = src; if (alt) el.alt = alt; }
}
function setLink(id, href) {
  const el = document.getElementById(id);
  if (el && href) el.href = href;
}
function setBtn(id, btn, variant) {
  const el = document.getElementById(id);
  if (!el || !btn) return;
  el.textContent = btn.text;
  el.href = btn.link;
  if (variant) el.className = `btn ${variant}`;
}

// ============ NAVBAR (shared on all pages) ============
function renderNav(activePage) {
  const nav = document.getElementById("nav");
  if (!nav) return;
  nav.innerHTML = `
    <div class="nav-inner">
      <a href="index.html" class="brand">
        <span class="brand-mark">${(T.brandName||'C').charAt(0)}</span>
        ${T.brandName || 'Cafe'}
      </a>
      <div class="nav-links">
        <a href="index.html" class="${activePage==='home'?'active':''}">${T.navHome||'Home'}</a>
        <a href="offers.html" class="${activePage==='offers'?'active':''}">${T.navOffers||'Offers'}</a>
        <a href="events.html" class="${activePage==='events'?'active':''}">${T.navEvents||'Events'}</a>
        <a href="reservation.html" class="${activePage==='reserve'?'active':''}">${T.navReserve||'Reservations'}</a>
      </div>
      <div class="nav-cta">
        <a class="btn btn-outline" href="${B.callNow?.link||'#'}">${B.callNow?.text||''}</a>
        <a class="btn btn-primary" href="${B.reserveTable?.link||'#'}">${B.reserveTable?.text||''}</a>
      </div>
      <button class="nav-toggle" aria-label="Menu" id="navToggle">☰</button>
    </div>
  `;
  const toggle = document.getElementById("navToggle");
  if (toggle) toggle.addEventListener("click", () => nav.classList.toggle("open"));
}

// ============ FOOTER ============
function renderFooter() {
  const f = document.getElementById("footer");
  if (!f) return;
  f.innerHTML = `
    <div class="container">
      <div class="brand"><span class="brand-mark">${(T.brandName||'C').charAt(0)}</span>${T.brandName||''}</div>
      <p>${T.address||''} • ${T.phone||''}</p>
      <p>${T.hours||''}</p>
      <p style="opacity:.7;font-size:.85rem;margin-top:8px">${T.footerNote||''}</p>
    </div>
  `;
}

// ============ STICKY CTA (shared) ============
function renderStickyCTA() {
  const s = document.getElementById("stickyCta");
  if (!s) return;
  s.innerHTML = `
    <a class="btn btn-ghost" href="${B.callNow?.link||'#'}">📞 ${B.callNow?.text||''}</a>
    <a class="btn btn-primary" href="${B.reserveTable?.link||'#'}">🪑 ${B.reserveTable?.text||''}</a>
  `;
}

// ============ HOME PAGE ============
function renderHome() {
  // Hero
  setImg("heroImg", I.hero, "Cafe interior");
  setText("heroEyebrow", T.tagline);
  setText("heroTitle", T.heroTitle);
  setText("heroSubtitle", T.heroSubtitle);
  setBtn("heroBtn1", B.reserveTable, "btn btn-primary");
  setBtn("heroBtn2", B.viewOffers, "btn btn-ghost");

  // Today's Special
  setText("specialEyebrow", T.todaySpecialLabel);
  setText("specialTitle", T.todaySpecialTitle);
  setText("specialDesc", T.todaySpecialDesc);
  setText("specialPrice", T.todaySpecialPrice);
  setImg("specialImg", I.todaySpecial, T.todaySpecialTitle);
  setBtn("specialBtn", B.reserveTable, "btn btn-primary");

  // Offers preview (3)
  const offersWrap = document.getElementById("offersPreview");
  if (offersWrap) {
    offersWrap.innerHTML = [1,2,3].map(n => `
      <div class="card fade-up">
        <div class="card-img">
          <img src="${I['offer'+n]}" alt="${T['offer'+n+'Title']||''}">
          <span class="card-tag">${T['offer'+n+'Tag']||''}</span>
        </div>
        <div class="card-body">
          <h3>${T['offer'+n+'Title']||''}</h3>
          <p>${T['offer'+n+'Desc']||''}</p>
        </div>
      </div>
    `).join("");
  }
  setText("offersTitle", T.offersSectionTitle);
  setText("offersSubtitle", T.offersSectionSubtitle);
  setBtn("offersCta", B.viewOffers, "btn btn-outline");

  // Events preview (3)
  const eventsWrap = document.getElementById("eventsPreview");
  if (eventsWrap) {
    eventsWrap.innerHTML = [1,2,3].map(n => `
      <div class="card fade-up">
        <div class="card-img"><img src="${I['event'+n]}" alt="${T['event'+n+'Title']||''}"></div>
        <div class="card-body">
          <h3>${T['event'+n+'Title']||''}</h3>
          <p>${T['event'+n+'Desc']||''}</p>
          <div class="card-meta">${T['event'+n+'When']||''}</div>
        </div>
      </div>
    `).join("");
  }
  setText("eventsTitle", T.eventsSectionTitle);
  setText("eventsSubtitle", T.eventsSectionSubtitle);
  setBtn("eventsCta", B.exploreEvents, "btn btn-outline");

  // Testimonials
  const testiWrap = document.getElementById("testimonials");
  if (testiWrap) {
    testiWrap.innerHTML = [1,2,3].map(n => `
      <div class="testi fade-up">
        <p>${T['testimonial'+n]||''}</p>
        <div class="testi-user">
          <img src="${I['testimonial'+n]}" alt="${T['testimonial'+n+'Name']||''}">
          <div>
            <strong>${T['testimonial'+n+'Name']||''}</strong>
            <span>${T['testimonial'+n+'Role']||''}</span>
          </div>
        </div>
      </div>
    `).join("");
  }
  setText("testimonialsTitle", T.testimonialsTitle);

  // Instagram
  const insta = document.getElementById("instaGrid");
  if (insta) {
    insta.innerHTML = [1,2,3,4,5,6].map(n => `
      <a href="#" aria-label="Instagram photo ${n}"><img src="${I['gallery'+n]}" alt="Cafe photo ${n}"></a>
    `).join("");
  }
  setText("instaTitle", T.instaTitle);
  setText("instaSubtitle", T.instaSubtitle);

  // FAQ
  const faqWrap = document.getElementById("faqWrap");
  if (faqWrap) {
    faqWrap.innerHTML = [1,2,3,4,5].map(n => `
      <div class="faq-item">
        <button class="faq-q">${T['faq'+n+'Q']||''}<span class="icon">+</span></button>
        <div class="faq-a"><p style="padding-top:6px">${T['faq'+n+'A']||''}</p></div>
      </div>
    `).join("");
    faqWrap.querySelectorAll(".faq-q").forEach(btn => {
      btn.addEventListener("click", () => btn.parentElement.classList.toggle("open"));
    });
  }
  setText("faqTitle", T.faqTitle);

  // Contact
  setText("contactTitle", T.contactTitle);
  setText("contactAddress", T.address);
  setText("contactPhone", T.phone);
  setText("contactEmail", T.email);
  setText("contactHours", T.hours);
  setBtn("contactCallBtn", B.callNow, "btn btn-primary");
  setBtn("contactDirBtn", B.getDirections, "btn btn-outline");
}

// ============ OFFERS PAGE ============
function renderOffersPage() {
  setImg("pageHeroImg", I.offersHero, "Offers");
  setText("pageTitle", T.offersPageTitle);
  setText("pageSubtitle", T.offersPageSubtitle);

  setImg("bannerImg", I.offerBanner);
  setText("bannerTitle", T.offersBannerTitle);
  setText("bannerDesc", T.offersBannerDesc);
  setBtn("bannerBtn", B.reserveTable, "btn btn-ghost");

  const grid = document.getElementById("offersGrid");
  if (grid) {
    grid.innerHTML = [1,2,3,4,5,6].map(n => `
      <div class="card fade-up">
        <div class="card-img">
          <img src="${I['offer'+n]}" alt="${T['offer'+n+'Title']||''}">
          <span class="card-tag">${T['offer'+n+'Tag']||''}</span>
        </div>
        <div class="card-body">
          <h3>${T['offer'+n+'Title']||''}</h3>
          <p>${T['offer'+n+'Desc']||''}</p>
        </div>
      </div>
    `).join("");
  }
}

// ============ EVENTS PAGE ============
function renderEventsPage() {
  setImg("pageHeroImg", I.eventsHero, "Events");
  setText("pageTitle", T.eventsPageTitle);
  setText("pageSubtitle", T.eventsPageSubtitle);

  const grid = document.getElementById("eventsGrid");
  if (grid) {
    grid.innerHTML = [1,2,3,4].map(n => `
      <div class="card fade-up">
        <div class="card-img"><img src="${I['event'+n]}" alt="${T['event'+n+'Title']||''}"></div>
        <div class="card-body">
          <h3>${T['event'+n+'Title']||''}</h3>
          <p>${T['event'+n+'Desc']||''}</p>
          <div class="card-meta">${T['event'+n+'When']||''}</div>
        </div>
      </div>
    `).join("");
  }

  setText("scheduleTitle", T.scheduleTitle);
  const sch = document.getElementById("schedule");
  if (sch) {
    sch.innerHTML = [1,2,3,4].map(n => `
      <div class="schedule-row">
        <div class="day">${(T['event'+n+'When']||'').split('•')[0]||''}</div>
        <div>
          <strong>${T['event'+n+'Title']||''}</strong>
          <div class="meta">${T['event'+n+'Desc']||''}</div>
        </div>
        <a class="btn btn-outline" href="${B.reserveTable?.link||'#'}">${B.bookNow?.text||''}</a>
      </div>
    `).join("");
  }
}

// ============ RESERVATION PAGE ============
function renderReservationPage() {
  setImg("pageHeroImg", I.reserveHero, "Reservations");
  setText("pageTitle", T.reservePageTitle);
  setText("pageSubtitle", T.reservePageSubtitle);
  setText("urgencyPill", M.urgency);

  setText("labelName", T.formNameLabel);
  setText("labelPhone", T.formPhoneLabel);
  setText("labelDate", T.formDateLabel);
  setText("labelTime", T.formTimeLabel);
  setText("labelGuests", T.formGuestsLabel);
  setText("labelNotes", T.formNotesLabel);

  const submitBtn = document.getElementById("submitBtn");
  if (submitBtn) submitBtn.textContent = B.bookNow?.text || "Book";

  const form = document.getElementById("reserveForm");
  const msg = document.getElementById("formMsg");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = (data.get("name")||"").toString().trim();
      const phone = (data.get("phone")||"").toString().trim();
      const date = data.get("date");
      const time = data.get("time");
      const guests = data.get("guests");
      msg.className = "form-msg";
      if (!name || !phone || !date || !time || !guests) {
        msg.classList.add("error");
        msg.textContent = M.formIncomplete;
        return;
      }
      if (!/^[\d+\-\s()]{7,}$/.test(phone)) {
        msg.classList.add("error");
        msg.textContent = M.invalidPhone;
        return;
      }
      msg.classList.add("success");
      msg.textContent = M.reservationSuccess;
      form.reset();
    });
  }
}

// ============ SCROLL FADE-IN ============
function initFadeUp() {
  const els = document.querySelectorAll(".fade-up");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

// ============ INIT ============
document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  document.title = `${T.brandName||'Cafe'} — ${
    page==='offers' ? T.offersPageTitle :
    page==='events' ? T.eventsPageTitle :
    page==='reserve' ? T.reservePageTitle :
    T.tagline||''
  }`;
  renderNav(page);
  renderFooter();
  renderStickyCTA();
  if (page === "home") renderHome();
  if (page === "offers") renderOffersPage();
  if (page === "events") renderEventsPage();
  if (page === "reserve") renderReservationPage();
  setTimeout(initFadeUp, 50);
});
