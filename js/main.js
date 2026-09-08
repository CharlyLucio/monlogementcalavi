/* ==========================================================================
   MonLogementCalavi - Scripts
   Listings data, search, filters, nav, reveal animations
   ========================================================================== */

/* ---------- Données des annonces ---------- */
const QUARTIERS = [
  { id: "zogbadje", name: "Zogbadjè", listings: 68 },
  { id: "godomey", name: "Godomey", listings: 42 },
  { id: "kpota", name: "Kpota", listings: 51 },
  { id: "tankpe", name: "Tankpè", listings: 37 },
  { id: "zoca", name: "Zoca", listings: 29 },
  { id: "bidossessi", name: "Bidossessi", listings: 34 }
];

const TYPE_LABELS = {
  "entree-couchee": "Entrée couchée",
  "chambre-salon": "Chambre Salon",
  "1-chambre-salon": "1 Chambre Salon",
  "appartement": "2+ Chambres Salon",
  "studio": "Studio",
  "colocation": "Colocation"
};

let LISTINGS = [
  {
    id: 1,
    title: "Entrée couchée Sanitaire à Zogbadjè, près du petit portail",
    quartier: "Zogbadjè",
    type: "entree-couchee",
    sanitaire: "Sanitaire",
    prix: 20000,
    chambres: 1,
    formal: true,
    badges: ["premium"],
    phone: "01 97 00 00 01",
    desc: "Entrée couchée sanitaire avec salle d'eau et WC privés, compteur personnel, proche du petit portail du campus. Sécurité garantie, eau et électricité disponibles. Plafonnée et carrelée.",
    conditions: ["Avance : 3+1", "Caution E-E : 20 000 F"],
    feats: ["Salle d'eau + WC privés", "Compteur personnel", "Plafonnée + carrelée", "Sécurité", "Proche campus"]
  },
  {
    id: 2,
    title: "Studio meublé au calme près de l'IITA, Godomey",
    quartier: "Godomey",
    type: "studio",
    sanitaire: "Sanitaire",
    prix: 25000,
    chambres: 1,
    formal: true,
    badges: ["new"],
    phone: "01 97 00 00 02",
    desc: "Studio entièrement meublé (lit, armoire, table, ventilateur), douche interne, quartier calme et sécurisé. À 5 minutes de l'IITA. Convenable pour 1 étudiant sérieux.",
    conditions: ["Avance : 3+1", "Caution E-E : 20 000 F"],
    feats: ["Entièrement meublé", "Douche interne", "Ventilateur", "Quartier calme", "Sécurité"]
  },
  {
    id: 3,
    title: "2 Chambres Salon Sanitaire à Kpota (colocation possible)",
    quartier: "Kpota",
    type: "appartement",
    sanitaire: "Sanitaire",
    prix: 60000,
    chambres: 2,
    formal: true,
    badges: [],
    phone: "01 97 00 00 03",
    desc: "2 chambres salon-sanitaire spacieuses, carrelage, plafond staff, cuisine. Idéal pour colocation entre 2-3 étudiants. Compteurs individuels. Cour commune clôturée.",
    conditions: ["Avance : 3+1", "Caution E-E : 50 000 F"],
    feats: ["2 chambres + salon", "Cuisine", "Carrelage + plafond staff", "Compteurs individuels", "Cour clôturée"]
  },
  {
    id: 4,
    title: "Entrée couchée Ordinaire très abordable à Tankpè",
    quartier: "Tankpè",
    type: "entree-couchee",
    sanitaire: "Ordinaire",
    prix: 12000,
    chambres: 1,
    formal: true,
    badges: ["urgent"],
    phone: "01 97 00 00 04",
    desc: "Entrée couchée ordinaire avec WC commun, plafonnée, bien aérée. Près de la voie principale, boutiques et gbakossè. Loyers abordables, adapté petit budget étudiant.",
    conditions: ["Avance : 3+1", "Caution E-E : 10 000 F"],
    feats: ["WC commun", "Plafonnée", "Bien aérée", "Prix abordable", "Proche voie principale"]
  },
  {
    id: 5,
    title: "Colocation étudiante à Zoca (2 places)",
    quartier: "Zoca",
    type: "colocation",
    sanitaire: "Semi-Sanitaire",
    prix: 15000,
    chambres: 2,
    formal: true,
    badges: ["new"],
    phone: "01 97 00 00 05",
    desc: "2 étudiants partagent un appart 1 salon 2 chambres. Chaque chambre 15 000 F/mois. Frais d'eau et d'électricité partagés. Quartier étudiant. Salle d'eau commune.",
    conditions: ["Avance : 3+1", "Charges partagées"],
    feats: ["Colocation", "1 salon 2 chambres", "Eau/électricité partagée", "Quartier étudiant", "Salle d'eau commune"]
  },
  {
    id: 6,
    title: "3 Chambres Salon Sanitaire à Bidossessi",
    quartier: "Bidossessi",
    type: "appartement",
    sanitaire: "Sanitaire",
    prix: 45000,
    chambres: 3,
    formal: true,
    badges: ["premium"],
    phone: "01 97 00 00 06",
    desc: "3 chambres-salon sanitaire avec salle d'eau moderne, douche italienne, plafond staff, carrelage. Bonne exposition, cour personnelle pour véhicule. 5 min de la voie asphaltée.",
    conditions: ["Avance : 3+1", "Caution E-E : 50 000 F"],
    feats: ["3 chambres-salon", "Douche italienne", "Plafond staff", "Cour personnelle", "Garage/extérieur"]
  },
  {
    id: 7,
    title: "Studio simple sans cuisine à Zogbadjè, à 300 m du campus",
    quartier: "Zogbadjè",
    type: "studio",
    sanitaire: "Semi-Sanitaire",
    prix: 20000,
    chambres: 1,
    formal: true,
    badges: [],
    phone: "01 97 00 00 07",
    desc: "Studio simple avec douche interne, sans cuisine, à 300 m du campus. Très demandé à la rentrée. Disponible vite, visitez maintenant. Salle d'eau partagée avec la cour.",
    conditions: ["Avance : 3+1", "Caution E-E : 15 000 F"],
    feats: ["Douche interne", "Sans cuisine", "Proche campus", "Disponible vite"]
  },
  {
    id: 8,
    title: "1 Chambre Salon Sanitaire neuf à Godomey Togoudo",
    quartier: "Godomey",
    type: "1-chambre-salon",
    sanitaire: "Sanitaire",
    prix: 35000,
    chambres: 1,
    formal: true,
    badges: ["premium"],
    phone: "01 97 00 00 08",
    desc: "1 chambre-salon sanitaire construction neuve, carrelage moderne, douche, plafond, compteurs personnels. Quartier sécurisé avec accès facile. Très propre.",
    conditions: ["Avance : 3+1", "Caution E-E : 30 000 F"],
    feats: ["Construction neuve", "Carrelage moderne", "Salon + chambre", "Douche", "Compteurs personnels"]
  }
];

/* ---------- Utilitaires ---------- */
const pad = (n) => n.toString().padStart(2, "0");
const fmtPrix = (p) => new Intl.NumberFormat("fr-FR").format(p) + " F";

/* ---------- État ---------- */
const state = {
  filter: "all",
  query: { quartier: "", type: "", budget: "" },
  favs: new Set(JSON.parse(localStorage.getItem("mlc-favs") || "[]"))
};

/* ---------- Helpers DOM ---------- */
const $ = (sel, scope = document) => scope.querySelector(sel);
const $$ = (sel, scope = document) => Array.from(scope.querySelectorAll(sel));

/* ---------- Icônes ---------- */
const ICON_PIN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>';
const ICON_BED = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 9v6"/><path d="M2 12h15"/><path d="M22 12v3"/><path d="M4 9V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"/><path d="M4 12h13a3 3 0 0 1 3 3v1"/></svg>';
const ICON_WATER = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3s6 6 6 11a6 6 0 0 1-12 0c0-5 6-11 6-11z"/></svg>';
const ICON_HEART = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21C12 21 4 14.5 4 9a4 4 0 0 1 7-2.5A4 4 0 0 1 20 9c0 5.5-8 12-8 12z"/></svg>';
const ICON_BACK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 11l14-9-4 9 4 9-14-9z"/><path d="M9 22l7-7-7-7"/><path d="M2 22l7-7"/></svg>'; // unused placeholder
const ICON_CALL = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z"/></svg>';

/* ---------- Images (placeholders avec gradient) ---------- */
function imgFor(listing, i) {
  const hues = ["#1e3a5f,#0ea5e9", "#3b2f14,#f59e0b", "#1a2f3a,#38bdf8", "#241a10,#d97706", "#0f2533,#2f4460", "#2a1f33,#a855f7"];
  const h = hues[(listing.id + (i || 0)) % hues.length];
  const [c1, c2] = h.split(",");
  const label = i ? `${listing.quartier} - vue ${i + 1}` : listing.quartier;
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='640' height='400'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%23${c1.replace("#", "")}'/%3E%3Cstop offset='1' stop-color='%23${c2.replace("#", "")}'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23g)'/%3E%3Ctext x='50%25' y='46%25' font-family='Arial' font-size='36' fill='%23ffffff' fill-opacity='0.7' text-anchor='middle' dominant-baseline='middle'%3E${label}%3C/text%3E%3Ctext x='50%25' y='58%25' font-family='Arial' font-size='20' fill='%23ffffff' fill-opacity='0.5' text-anchor='middle'%3EPhoto ${i + 1}%3C/text%3E%3C/svg%3E`;
}

/* ---------- Rendering ---------- */
function badgeHtml(listing) {
  const map = {
    premium: '<span class="badge premium">Premium</span>',
    urgent: '<span class="badge urgent">Urgent</span>',
    new: '<span class="badge new">Nouveau</span>'
  };
  return (listing.badges || []).map(b => map[b] || "").join("");
}

function listingCard(listing) {
  const isFav = state.favs.has(listing.id);
  const isPremium = (listing.badges || []).includes("premium");
  const typeLabel = TYPE_LABELS[listing.type] || listing.type;
  const sanLabel = listing.sanitaire ? ` · ${listing.sanitaire}` : "";
  const feats = `<span>${ICON_BED} ${listing.chambres || 1} ${listing.chambres > 1 ? "ch." : "ch."}</span><span>${ICON_WATER} Eau</span>`;
  return `
  <article class="listing-card ${isPremium ? "premium" : ""}" data-id="${listing.id}" tabindex="0" role="button" aria-label="Voir les détails de : ${listing.title}">
    <div class="listing-media">
      <img class="listing-img" src="${imgFor(listing, 0)}" alt="${listing.title}" loading="lazy">
      <div class="listing-badges">${badgeHtml(listing)}</div>
      <button class="listing-fav ${isFav ? "active" : ""}" data-fav="${listing.id}" aria-label="Ajouter aux favoris">${ICON_HEART}</button>
    </div>
    <div class="listing-body">
      <div class="listing-price">${fmtPrix(listing.prix)}<span> / mois</span></div>
      <h3 class="listing-title">${listing.title}</h3>
      <div class="listing-loc">${ICON_PIN} ${listing.quartier}</div>
      <div class="listing-type">${typeLabel}${sanLabel}</div>
      <div class="listing-feats">${feats}</div>
      <div class="listing-footer">
        <span class="btn btn-amber btn-sm">${ICON_CALL} Voir détails</span>
      </div>
    </div>
  </article>`;
}

function renderListings() {
  const grid = $("#listingsGrid");
  const empty = $("#emptyState");
  const { quartier, type, budget } = state.query;

  let list = LISTINGS.filter(l => {
    if (state.filter === "rent" && !l.formal) return false;
    if (state.filter === "new" && !(l.badges || []).includes("new")) return false;
    if (state.filter === "premium" && !(l.badges || []).includes("premium")) return false;
    if (quartier && l.quartier !== quartier) return false;
    if (type && l.type !== type) return false;
    if (budget && l.prix > Number(budget)) return false;
    return true;
  });

  grid.innerHTML = list.map(listingCard).join("");
  $("#resultCount").textContent = `${list.length} annonce(s) trouvée(s)`;
  empty.hidden = list.length > 0;

  saveFavsUI();
}

function saveFavsUI() {
  $$(".listing-fav").forEach(btn => {
    const id = Number(btn.dataset.fav);
    btn.classList.toggle("active", state.favs.has(id));
  });
}

/* ---------- Cartes cliquables + détails ---------- */
function openDetail(listing) {
  const modal = $("#detailModal");
  const thumbs = { 0: "Vue principale", 1: "Chambre", 2: "Salon", 3: "Extérieur" };
  const photos = [0, 1, 2, 3];
  const feats = (listing.feats || [])
    .map(f => `<span class="detail-feat">${f}</span>`)
    .join("");

  const typeLabel = TYPE_LABELS[listing.type] || listing.type;
  const sanLabel = listing.sanitaire ? ` · ${listing.sanitaire}` : "";
  const conditions = (listing.conditions || [])
    .map(c => `<li>${c}</li>`)
    .join("");

  $("#detailTitle").textContent = listing.title;
  $("#detailPrice").innerHTML = `<span class="detail-price-amt">${fmtPrix(listing.prix)}</span> / mois`;
  $("#detailLoc").innerHTML = `${ICON_PIN} ${listing.quartier} · ${typeLabel}${sanLabel}`;
  $("#detailDesc").textContent = listing.desc || "Description à venir. Contactez le propriétaire pour plus de détails et une visite.";
  $("#detailBadges").innerHTML = badgeHtml(listing);
  $("#detailFeats").innerHTML = feats;
  $("#detailConditions").innerHTML = conditions;

  const phone = (listing.phone || "").replace(/\s/g, "");
  $("#detailCall").setAttribute("href", "tel:" + phone);
  $("#detailWhatsapp").setAttribute("href", `https://wa.me/${phone}?text=${encodeURIComponent("Bonjour, je vous contacte depuis MonLogementCalavi au sujet de : " + listing.title)}`);

  // Galerie
  $("#detailImgMain").src = imgFor(listing, 0);
  $("#detailImgMain").alt = listing.title;
  $("#detailThumbs").innerHTML = photos.map(p => {
    const label = thumbs[p] || `Photo ${p + 1}`;
    return `<button class="detail-thumb ${p === 0 ? "active" : ""}" data-photo="${p}" aria-label="${label}"><img src="${imgFor(listing, p)}" alt="${label}"></button>`;
  }).join("");

  $$("#detailThumbs .detail-thumb").forEach(btn => {
    btn.addEventListener("click", () => {
      $$("#detailThumbs .detail-thumb").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      $("#detailImgMain").src = imgFor(listing, Number(btn.dataset.photo));
    });
  });

  // Remettre le scroll de la fiche en haut à chaque ouverture
  $("#detailModal").querySelector(".detail-scroll").scrollTop = 0;

  modal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeDetail() {
  $("#detailModal").hidden = true;
  document.body.style.overflow = "";
}

function initDetail() {
  const modal = $("#detailModal");
  $$("[data-detail-close]", modal).forEach(el => el.addEventListener("click", closeDetail));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeDetail(); });

  // Délégation : clic sur une carte -> ouvrir les détails (sauf sur le bouton favori)
  document.addEventListener("click", (e) => {
    const favBtn = e.target.closest("[data-fav]");
    if (favBtn) return;
    const card = e.target.closest(".listing-card[data-id]");
    if (!card) return;
    const listing = LISTINGS.find(l => l.id === Number(card.dataset.id));
    if (!listing) return;
    openDetail(listing);
  });
}

/* ---------- Quartiers ---------- */
function renderQuartiers() {
  const grid = $("#quartiersGrid");
  const max = Math.max(...QUARTIERS.map(q => q.listings));
  grid.innerHTML = QUARTIERS.map(q => {
    const count = q.listings >= max ? `${q.listings}+ annonces` : `${q.listings} annonces`;
    return `<a class="quartier-tile reveal" href="#annonces" data-quartier="${q.name}">
      <div><h3>${q.name}</h3><p>${count}</p></div>
    </a>`;
  }).join("");

  $$("#quartiersGrid .quartier-tile").forEach(tile => {
    tile.addEventListener("click", () => {
      state.query.quartier = tile.dataset.quartier;
      $("#searchQuartier").value = tile.dataset.quartier;
      renderListings();
    });
  });
}

/* ---------- Statistiques ---------- */
function renderStats() {
  const nums = [LISTINGS.length, QUARTIERS.length, 1520];
  const targets = { statListings: nums[0], statQuartiers: nums[1], statStudiants: nums[2] };
  const entries = Object.entries(targets);
  entries.forEach(([id, target], i) => {
    animateNum(id, target, 1200, i * 150);
  });
}

function animateNum(id, target, duration, delay) {
  const el = $("#" + id);
  if (!el) return;
  const start = performance.now() + delay;
  const step = (now) => {
    if (now < start) { requestAnimationFrame(step); return; }
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = Math.round(target * eased).toLocaleString("fr-FR");
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* ---------- Recherche ---------- */
function initSearch() {
  const form = $("#searchForm");
  const qSelect = $("#searchQuartier");
  const tSelect = $("#searchType");
  const bSelect = $("#searchBudget");

  const quartierNames = [...new Set(LISTINGS.map(l => l.quartier))].sort();
  quartierNames.forEach(name => {
    const opt = document.createElement("option");
    opt.value = name;
    opt.textContent = name;
    qSelect.appendChild(opt);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    state.query.quartier = qSelect.value;
    state.query.type = tSelect.value;
    state.query.budget = bSelect.value;
    renderListings();
    $("#annonces").scrollIntoView({ behavior: "smooth" });
  });

  $$(".chip").forEach(chip => {
    chip.addEventListener("click", () => {
      $$(".chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      state.filter = chip.dataset.filter;
      renderListings();
    });
  });
}

/* ---------- Favoris ---------- */
function initFavs() {
  $("#listingsGrid").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-fav]");
    if (!btn) return;
    const id = Number(btn.dataset.fav);
    if (state.favs.has(id)) state.favs.delete(id); else state.favs.add(id);
    localStorage.setItem("mlc-favs", JSON.stringify([...state.favs]));
    saveFavsUI();
  });
}

/* ---------- Nav mobile ---------- */
function initNav() {
  const toggle = $("#navToggle");
  const menu = $("#navMenu");
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  $$("#navMenu a").forEach(a => a.addEventListener("click", () => {
    menu.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }));
}

/* ---------- To top ---------- */
function initToTop() {
  const btn = $("#toTop");
  window.addEventListener("scroll", () => {
    btn.hidden = window.scrollY < 500;
  }, { passive: true });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* ---------- Formulaires ---------- */
function initModal() {
  const modal = $("#submitModal");
  const openBtn = $("#submitBtn");
  const form = $("#submitForm");
  const success = $("#submitSuccess");
  const qSelect = $("#fQuartier");

  const quartierNames = [...new Set(LISTINGS.map(l => l.quartier))].sort();
  quartierNames.forEach(name => {
    const opt = document.createElement("option");
    opt.value = name;
    opt.textContent = name;
    qSelect.appendChild(opt);
  });

  function open() { modal.hidden = false; document.body.style.overflow = "hidden"; }
  function close() { modal.hidden = true; document.body.style.overflow = ""; }

  openBtn.addEventListener("click", (e) => { e.preventDefault(); open(); });
  $$("[data-close]", modal).forEach(el => el.addEventListener("click", close));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.hidden = true;
    success.hidden = false;
    // TODO (phase 2): envoyer la demande + lien de paiement MTN via Netlify Functions
  });
}

/* ---------- Reveal ---------- */
function initReveal() {
  if (!("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  $$(".reveal").forEach(el => io.observe(el));
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initSearch();
  initFavs();
  initNav();
  initToTop();
  initModal();
  initDetail();
  initReveal();
  renderQuartiers();
  renderListings();
  renderStats();
});