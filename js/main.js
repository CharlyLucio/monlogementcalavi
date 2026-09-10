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
    verified: true,
    code: "MLC-001",
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
    verified: true,
    boost: true,
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
    verified: true,
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
    code: "MLC-008",
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
  favs: new Set(JSON.parse(localStorage.getItem("mlc-favs") || "[]")),
  owner: JSON.parse(localStorage.getItem("mlc-owner") || "null")
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

/* ---------- Images (photos réelles temporaires via Lorem Picsum) ---------- */
/* À remplacer plus tard par les vraies photos des logements. Le seed fixe
   garantit une image stable par annonce et par vue. */
function imgFor(listing, i) {
  const seed = `mlc-${listing.id}-${i || 0}`;
  return `https://picsum.photos/seed/${seed}/640/400`;
}

/* ---------- Rendering ---------- */
const BADGE_MAP = {
  premium: '<span class="badge premium">Premium</span>',
  urgent: '<span class="badge urgent">Urgent</span>',
  new: '<span class="badge new">Nouveau</span>',
  verified: '<span class="badge verified">Vérifié</span>',
  boost: '<span class="badge boost">En tête</span>'
};

function badgeHtml(listing) {
  const out = [];
  if (listing.verified) out.push(BADGE_MAP.verified);
  if (listing.boost) out.push(BADGE_MAP.boost);
  (listing.badges || []).forEach(b => { if (BADGE_MAP[b]) out.push(BADGE_MAP[b]); });
  return out.join("");
}

function listingCard(listing) {
  const isFav = state.favs.has(listing.id);
  const isPremium = (listing.badges || []).includes("premium");
  const typeLabel = TYPE_LABELS[listing.type] || listing.type;
  const sanLabel = listing.sanitaire ? ` · ${listing.sanitaire}` : "";
  const feats = `<span>${ICON_BED} ${listing.chambres || 1} ${listing.chambres > 1 ? "ch." : "ch."}</span><span>${ICON_WATER} Eau</span>`;
  const isOwned = state.owner && state.owner.id === listing.id;
  const boostBtn = isOwned
    ? `<button class="btn btn-outline btn-sm listing-boost-cta" data-boost="${listing.id}">Booster mon annonce (en tête)</button>`
    : "";
  return `
  <article class="listing-card ${isPremium ? "premium" : ""} ${listing.boost ? "boosted" : ""}" data-id="${listing.id}" tabindex="0" role="button" aria-label="Voir les détails de : ${listing.title}">
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
      ${boostBtn}
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

  // Les annonces boostées (en tête) passent devant
  list.sort((a, b) => (b.boost ? 1 : 0) - (a.boost ? 1 : 0));

  grid.innerHTML = list.map(listingCard).join("");
  $("#resultCount").textContent = `${list.length} annonce(s) trouvée(s)`;
  empty.hidden = list.length > 0;

  const bannerBox = $("#ownerBannerBox");
  bannerBox.innerHTML = state.owner ? renderOwnerBanner() : "";
  const logoutBtn = $("#ownerLogout");
  if (logoutBtn) logoutBtn.addEventListener("click", () => {
    state.owner = null;
    localStorage.removeItem("mlc-owner");
    renderListings();
  });

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

  // Délégation : clic sur une carte -> ouvrir les détails (sauf bouton favori / boost)
  document.addEventListener("click", (e) => {
    if (e.target.closest("[data-fav]")) return;
    if (e.target.closest("[data-boost]")) return;
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

/* ---------- Envoi Netlify Forms ---------- */
function submitNetlify(form) {
  return fetch("/", {
    method: "POST",
    body: new FormData(form)
  });
}

/* ---------- Codes de gestion (Espace propriétaire) ---------- */
function genOwnerCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let s = "";
  for (let i = 0; i < 4; i++) s += chars[Math.floor(Math.random() * chars.length)];
  return "MLC-" + s;
}

function savePublishedCode(code, phone, titre) {
  const codes = JSON.parse(localStorage.getItem("mlc-codes") || "[]");
  codes.push({ code, phone, titre, date: new Date().toISOString() });
  localStorage.setItem("mlc-codes", JSON.stringify(codes));
}

function setOwner(listing, code) {
  state.owner = { id: listing.id, code, titre: listing.title };
  localStorage.setItem("mlc-owner", JSON.stringify(state.owner));
}

function initOwner() {
  const modal = $("#ownerModal");
  const form = $("#ownerForm");
  const msg = $("#ownerMsg");
  const success = $("#ownerSuccess");

  function close() { modal.hidden = true; document.body.style.overflow = ""; }
  function open() { modal.hidden = false; document.body.style.overflow = "hidden"; }

  $$("[data-owner-open]").forEach(el => el.addEventListener("click", (e) => { e.preventDefault(); open(); }));
  $$("[data-owner-close]").forEach(el => el.addEventListener("click", close));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const code = form.elements["code"].value.trim().toUpperCase();
    if (state.owner && state.owner.code === code) {
      success.hidden = false; form.hidden = true; return;
    }
    const listing = LISTINGS.find(l => l.code && l.code.toUpperCase() === code);
    if (!listing) {
      msg.textContent = "Code inconnu. Vérifiez le code reçu après la publication de votre annonce.";
      return;
    }
    setOwner(listing, code);
    msg.textContent = "";
    form.hidden = true;
    success.hidden = false;
    renderListings();
  });
}

function renderOwnerBanner() {
  const l = LISTINGS.find(x => x.id === state.owner.id);
  if (!l) return " ";
  return `
    <div class="owner-banner">
      <span>Votre annonce est en mode propriétaire.</span>
      <button class="btn btn-sm btn-outline" id="ownerBoostBtn" data-boost="${l.id}">Booster (en tête)</button>
      <button class="btn btn-sm btn-outline" id="ownerLogout">Quitter</button>
    </div>`;
}

/* ---------- Formulaires ---------- */
function initModal() {
  const modal = $("#submitModal");
  const openBtn = $("#submitBtn");
  const form = $("#submitForm");
  const success = $("#submitSuccess");
  const successText = $("#submitSuccessText");
  const codeBox = $("#submitCodeBox");
  const codeEl = $("#submitCode");
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
    const btn = form.querySelector("button[type=submit]");
    btn.textContent = "Envoi en cours...";
    btn.disabled = true;

    submitNetlify(form)
      .then(res => {
        const code = genOwnerCode();
        savePublishedCode(code, form.elements["phone"].value, form.elements["titre"].value);
        codeEl.textContent = code;
        codeBox.hidden = false;
        const formule = form.elements["formule"].value;
        if (formule === "gratuit") {
          successText.textContent = "Votre demande est bien reçue. Nous vérifions votre annonce par téléphone sous 24 h puis nous la publions. C'est gratuit !";
        } else {
          successText.textContent = "Votre annonce (avec boost) est bien reçue. Nous vous envoyons par WhatsApp le numéro MoMo pour payer " + (formule === "boost-3j" ? "500 F" : "1 000 F") + " puis activer la mise en tête.";
        }
        form.hidden = true;
        success.hidden = false;
        form.reset();
        btn.textContent = "Envoyer ma demande";
        btn.disabled = false;
      })
      .catch(() => {
        successText.textContent = "Une erreur est survenue. Envoyez-nous votre demande par WhatsApp au 02 90 00 00 00.";
        form.hidden = true;
        success.hidden = false;
        btn.textContent = "Envoyer ma demande";
        btn.disabled = false;
      });
  });
}

/* ---------- Boost ---------- */
function initBoost() {
  const modal = $("#boostModal");
  const form = $("#boostForm");
  const success = $("#boostSuccess");

  function close() { modal.hidden = true; document.body.style.overflow = ""; }
  function open() { modal.hidden = false; document.body.style.overflow = "hidden"; }

  $$("[data-boost-close]").forEach(el => el.addEventListener("click", close));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });

  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-boost]");
    if (!btn) return;
    const listing = LISTINGS.find(l => l.id === Number(btn.dataset.boost));
    if (!listing) return;
    $("#bAnnonceId").value = listing.id;
    $("#bAnnonceTitre").value = listing.title;
    $("#bPhone").value = "";
    $("#bRef").value = "";
    $("#bDuree").value = "boost-3j";
    form.hidden = false;
    success.hidden = true;
    open();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = form.querySelector("button[type=submit]");
    btn.textContent = "Envoi en cours...";
    btn.disabled = true;

    submitNetlify(form)
      .then(() => {
        const id = Number($("#bAnnonceId").value);
        const listing = LISTINGS.find(l => l.id === id);
        if (listing) listing.boost = true;
        form.hidden = true;
        success.hidden = false;
        renderListings();
        form.reset();
        btn.textContent = "Valider mon boost";
        btn.disabled = false;
      })
      .catch(() => {
        form.hidden = true;
        success.hidden = false;
        btn.textContent = "Valider mon boost";
        btn.disabled = false;
      });
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
  initBoost();
  initOwner();
  initDetail();
  initReveal();
  renderQuartiers();
  renderListings();
  renderStats();
});