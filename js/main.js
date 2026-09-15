// Main JavaScript (ES6 Modules / Native Vanilla JS)
import { resolveRoute } from './router.js';

const svg = (paths) => `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;

const ICONS = {
  praia: svg('<path d="M3 18h18"/><path d="M12 18V9"/><path d="M12 9c-3 0-5 1-6 3 1-4 3-6 6-6s5 2 6 6c-1-2-3-3-6-3z"/>'),
  documento: svg('<path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4"/><path d="M10 12h6M10 16h6"/>'),
  grafico: svg('<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>'),
  jornal: svg('<path d="M4 5h13v14H4z"/><path d="M17 9h3v8a2 2 0 0 1-3 2"/><path d="M7 9h7M7 13h7M7 16h4"/>'),
  instituicao: svg('<path d="M3 10 12 4l9 6"/><path d="M5 10v9M19 10v9M9 19v-6M15 19v-6M3 19h18"/>'),
  megafone: svg('<path d="M4 10v4l10 4V6z"/><path d="M14 9a3 3 0 0 1 0 6"/><path d="M7 15v4"/>'),
  obra: svg('<path d="M3 20h18"/><path d="M6 20V9l7-4v15"/><path d="M13 12h5v8"/><path d="M9 12h1M9 16h1"/>'),
  saude: svg('<path d="M12 21s-7-4.6-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.4-7 10-7 10z"/><path d="M9 12h6M12 9v6"/>'),
  escola: svg('<path d="M2 8l10-4 10 4-10 4z"/><path d="M6 10v5c0 2 3 3 6 3s6-1 6-3v-5"/>'),
  gastronomia: svg('<path d="M6 3v8a2 2 0 0 0 4 0V3"/><path d="M8 11v10"/><path d="M16 3c2 2 2 5 0 7v11"/>'),
  onibus: svg('<path d="M4 6h16v9H4z"/><path d="M4 11h16"/><circle cx="8" cy="18" r="1.6"/><circle cx="16" cy="18" r="1.6"/>'),
  animal: svg('<circle cx="7" cy="9" r="1.8"/><circle cx="12" cy="6.5" r="1.8"/><circle cx="17" cy="9" r="1.8"/><path d="M12 11c3 0 5 2 5 4.5S15 20 12 20s-5-2-5-4.5S9 11 12 11z"/>'),
  lixo: svg('<path d="M4 7h16"/><path d="M9 7V4h6v3"/><path d="M6 7l1 13h10l1-13"/><path d="M10 11v6M14 11v6"/>')
};

var ATALHOS = [
  { icone: "praia", titulo: "Turismo", descricao: "Roteiros e atrativos", href: "#turismo" },
  { icone: "documento", titulo: "IPTU 2026", descricao: "Emitir 2ª via", href: "#servicos" },
  { icone: "grafico", titulo: "Transparência", descricao: "Receitas e despesas", href: "#transparencia" },
  { icone: "jornal", titulo: "Diário Oficial", descricao: "Edições do município", href: "#/diario" },
  { icone: "instituicao", titulo: "Licitações", descricao: "Editais abertos", href: "#/licitacoes" },
  { icone: "megafone", titulo: "Ouvidoria", descricao: "Registrar manifestação", href: "#contato" }
];

var ROTEIROS = [
  {
    titulo: "Praia do Vento Leste",
    descricao: "Faixa de areia branca com água calma, ideal para famílias e stand-up paddle.",
    categoria: "natureza",
    tag: "Praias",
    meta: "12 km do centro · acesso acessível",
    img: "./assets/img/praia.jpg"
  },
  {
    titulo: "Cachoeira do Véu Azul",
    descricao: "Trilha leve de 40 minutos na mata atlântica até um poço de água cristalina.",
    categoria: "natureza",
    tag: "Trilhas",
    meta: "Trilha leve · guia credenciado",
    img: "./assets/img/cachoeira.jpg"
  },
  {
    titulo: "Centro Histórico",
    descricao: "Casario colonial do século XVIII, igrejas tombadas e ruas de pedra iluminadas.",
    categoria: "historia",
    tag: "Patrimônio",
    meta: "Visitas guiadas às 9h e 16h",
    img: "./assets/img/centro-historico.jpg"
  },
  {
    titulo: "Festival de Cultura Popular",
    descricao: "Quadrilhas, maracatu e artesanato ocupando as praças por três dias.",
    categoria: "cultura",
    tag: "Eventos",
    meta: "Agosto · entrada gratuita",
    img: "./assets/img/cultura.jpg"
  },
  {
    titulo: "Rota do Peixe Fresco",
    descricao: "Restaurantes da orla com pescado do dia trazido pela colônia de pescadores.",
    categoria: "gastronomia",
    tag: "Sabores",
    meta: "8 restaurantes credenciados",
    img: "./assets/img/praia.jpg"
  },
  {
    titulo: "Mirante da Serra Azul",
    descricao: "Vista panorâmica do encontro da serra com o mar — melhor no fim da tarde.",
    categoria: "natureza",
    tag: "Miradouros",
    meta: "Aberto até 18h30",
    img: "./assets/img/hero.jpg"
  }
];

var NOTICIAS = [
  {
    titulo: "Serra Azul do Mar é escolhida como destino indutor do turismo estadual",
    resumo: "Reconhecimento amplia recursos para sinalização turística, capacitação de guias e requalificação da orla.",
    data: "02 de setembro de 2026",
    editoria: "Turismo",
    img: "./assets/img/hero.jpg",
    destaque: true
  },
  {
    titulo: "Nova ciclovia liga o centro histórico à Praia do Vento Leste",
    resumo: "Trecho de 6,4 km com iluminação em LED e pontos de apoio ao ciclista.",
    data: "28 de agosto de 2026",
    editoria: "Infraestrutura",
    img: "./assets/img/centro-historico.jpg"
  },
  {
    titulo: "Mutirão de atendimento em saúde acontece no sábado",
    resumo: "Consultas, exames e vacinação em três unidades básicas do município.",
    data: "25 de agosto de 2026",
    editoria: "Saúde",
    img: "./assets/img/cultura.jpg"
  },
  {
    titulo: "Inscrições abertas para oficinas gratuitas de artesanato",
    resumo: "Turmas de renda de bilro, cerâmica e cestaria na Casa de Cultura.",
    data: "20 de agosto de 2026",
    editoria: "Cultura",
    img: "./assets/img/cachoeira.jpg"
  }
];

var SERVICOS = [
  { icone: "documento", titulo: "IPTU e taxas", descricao: "2ª via, parcelamento e certidões negativas.", status: "Online" },
  { icone: "obra", titulo: "Alvarás e licenças", descricao: "Abertura de empresa, obras e eventos.", status: "Online" },
  { icone: "saude", titulo: "Agendamento de saúde", descricao: "Consultas e exames na rede municipal.", status: "Online" },
  { icone: "escola", titulo: "Matrícula escolar", descricao: "Pré-matrícula e transferência na rede.", status: "Sazonal" },
  { icone: "gastronomia", titulo: "Cadastro de turismo", descricao: "Guias, pousadas e restaurantes credenciados.", status: "Online" },
  { icone: "onibus", titulo: "Transporte e mobilidade", descricao: "Cartão do estudante e linhas municipais.", status: "Online" },
  { icone: "animal", titulo: "Bem-estar animal", descricao: "Castração gratuita e adoção responsável.", status: "Agendamento" },
  { icone: "lixo", titulo: "Limpeza urbana", descricao: "Coleta seletiva e solicitação de reparos.", status: "Online" }
];

var EVENTOS = [
  { dia: "12", mes: "Set", titulo: "Feira de Artesanato da Praça", local: "Praça da Matriz", tag: "Cultura" },
  { dia: "20", mes: "Set", titulo: "Regata dos Pescadores", local: "Cais do Porto Velho", tag: "Turismo" },
  { dia: "04", mes: "Out", titulo: "Festival Gastronômico do Mar", local: "Orla Leste", tag: "Gastronomia" },
  { dia: "18", mes: "Out", titulo: "Circuito de Trilhas Guiadas", local: "Reserva da Serra", tag: "Esporte" },
  { dia: "09", mes: "Nov", titulo: "Mostra de Cinema Municipal", local: "Casa de Cultura", tag: "Cultura" }
];

var TRANSPARENCIA = [
  { t: "Portal da Transparência", d: "Receitas, despesas, folha e diárias em tempo real." },
  { t: "Licitações e contratos", d: "Editais, atas, dispensas e contratos vigentes." },
  { t: "Diário Oficial", d: "Publicações oficiais do Executivo municipal." },
  { t: "Concursos e seleções", d: "Editais, resultados e convocações." },
  { t: "Ouvidoria / e-SIC", d: "Pedidos de informação com prazo legal de 20 dias." },
  { t: "LGPD", d: "Política de privacidade e encarregado de dados." },
  { t: "Prestação de contas", d: "Relatórios RREO, RGF e pareceres do TCE." },
  { t: "Plano de governo", d: "PPA, LDO e LOA vigentes." }
];

var ORCAMENTO = [
  { area: "Saúde", pct: 27 },
  { area: "Educação", pct: 25 },
  { area: "Turismo e Cultura", pct: 18 },
  { area: "Infraestrutura", pct: 16 },
  { area: "Assistência Social", pct: 14 }
];

var SECRETARIAS = [
  { n: "Turismo e Patrimônio", r: "Roteiros, sinalização e eventos" },
  { n: "Saúde", r: "Rede básica e vigilância sanitária" },
  { n: "Educação", r: "24 escolas e transporte escolar" },
  { n: "Infraestrutura", r: "Obras, vias e iluminação" },
  { n: "Meio Ambiente", r: "Reserva, licenciamento e praias" },
  { n: "Cultura", r: "Casa de Cultura e biblioteca" },
  { n: "Finanças", r: "Tributos e execução orçamentária" },
  { n: "Assistência Social", r: "CRAS, CREAS e programas sociais" }
];

var CIDADE_STATS = [
  { k: "População", v: "48.320" },
  { k: "Área", v: "412 km²" },
  { k: "Fundação", v: "1712" },
  { k: "IDH", v: "0,742" }
];

var GALERIA = [
  { img: "./assets/img/cultura.jpg", cap: "Festival de Cultura Popular, edição 2025" },
  { img: "./assets/img/centro-historico.jpg", cap: "Rua das Pedras, centro histórico" },
  { img: "./assets/img/praia.jpg", cap: "Praia do Vento Leste" },
  { img: "./assets/img/cachoeira.jpg", cap: "Cachoeira do Véu Azul" },
  { img: "./assets/img/hero.jpg", cap: "Encontro da serra com o mar" }
];

var BUSCA = [
  ...ATALHOS.map((a) => ({ titulo: a.titulo, href: a.href })),
  ...SERVICOS.map((s) => ({ titulo: s.titulo, href: "#servicos" })),
  ...ROTEIROS.map((r) => ({ titulo: r.titulo, href: "#turismo" })),
  ...NOTICIAS.map((n) => ({ titulo: n.titulo, href: "#noticias" })),
  ...TRANSPARENCIA.map((t) => ({ titulo: t.t, href: "#transparencia" })),
  ...SECRETARIAS.map((s) => ({ titulo: `Secretaria de ${s.n}`, href: "#governo" }))
];

var $ = (sel) => document.querySelector(sel);
var $$ = (sel) => Array.from(document.querySelectorAll(sel));

let initialMainMarkup = '';

function html(target, markup) {
  if (target) target.innerHTML = markup;
}

function renderAtalhos() {
  html(
    $("#shortcuts-grid"),
    ATALHOS.map(
      (a, i) => `
      <a class="shortcut reveal" href="${a.href}" style="transition-delay:${i * 60}ms">
        <span class="shortcut__ico" aria-hidden="true">${ICONS[a.icone] ?? ""}</span>
        <div class="shortcut__info">
          <strong>${a.titulo}</strong>
          <span>${a.descricao}</span>
        </div>
      </a>`
    ).join("")
  );
}

function renderRoteiros() {
  html(
    $("#tour-grid"),
    ROTEIROS.map(
      (r, i) => `
      <article class="tour" data-cat="${r.categoria}" style="animation-delay:${i * 70}ms" tabindex="0">
        <img src="${r.img}" alt="${r.titulo}" loading="lazy" width="1024" height="1024" />
        <div class="tour__body">
          <span class="tour__tag">${r.tag}</span>
          <h3>${r.titulo}</h3>
          <p>${r.descricao}</p>
          <span class="tour__meta">${r.meta}</span>
        </div>
      </article>`
    ).join("")
  );
}

function renderNoticias() {
  html(
    $("#news-grid"),
    NOTICIAS.map(
      (n) => `
      <article class="card reveal${n.destaque ? " card--wide" : ""}">
        <div class="card__media">
          <img src="${n.img}" alt="${n.titulo}" loading="lazy" width="1024" height="640" />
          <span class="card__badge">${n.editoria}</span>
        </div>
        <div class="card__body">
          <span class="card__date">${n.data}</span>
          <h3>${n.titulo}</h3>
          <p>${n.resumo}</p>
          <a class="link-arrow" href="#noticias">Ler notícia</a>
        </div>
      </article>`
    ).join("")
  );
}

function renderServicos() {
  html(
    $("#services-grid"),
    SERVICOS.map(
      (s, i) => `
      <a class="service reveal" href="#servicos" style="transition-delay:${i * 45}ms">
        <span class="service__ico" aria-hidden="true">${ICONS[s.icone] ?? ""}</span>
        <strong>${s.titulo}</strong>
        <span>${s.descricao}</span>
        <em>${s.status}</em>
      </a>`
    ).join("")
  );
}

function renderEventos() {
  html(
    $("#agenda-list"),
    EVENTOS.map(
      (e, i) => `
      <li class="event reveal" style="transition-delay:${i * 70}ms">
        <span class="event__date"><b>${e.dia}</b><small>${e.mes}</small></span>
        <span><h3>${e.titulo}</h3><span>${e.local}</span></span>
        <span class="event__tag">${e.tag}</span>
      </li>`
    ).join("")
  );
}

function renderGaleria() {
  html(
    $("#gallery"),
    GALERIA.map(
      (g) => `
      <figure class="reveal">
        <img src="${g.img}" alt="${g.cap}" loading="lazy" width="1024" height="1024" />
        <figcaption>${g.cap}</figcaption>
      </figure>`
    ).join("")
  );
}

function renderTransparencia() {
  html(
    $("#transparency-grid"),
    TRANSPARENCIA.map(
      (t, i) => `
      <a class="tcard reveal" href="#transparencia" style="transition-delay:${i * 45}ms">
        <strong>${t.t}</strong><span>${t.d}</span>
      </a>`
    ).join("")
  );
  html(
    $("#bars"),
    ORCAMENTO.map(
      (o) => `
      <li>
        <span class="bar__top"><span>${o.area}</span><b>${o.pct}%</b></span>
        <span class="track"><span class="fill" data-pct="${o.pct}"></span></span>
      </li>`
    ).join("")
  );
}

function renderGoverno() {
  html(
    $("#gov-grid"),
    SECRETARIAS.map(
      (s, i) => `
      <a class="sec reveal" href="#governo" style="transition-delay:${i * 45}ms">
        <b>Secretaria de ${s.n}</b><span>${s.r}</span>
      </a>`
    ).join("")
  );
  html(
    $("#city-stats"),
    CIDADE_STATS.map((c) => `<div><dt>${c.k}</dt><dd>${c.v}</dd></div>`).join("")
  );
}

function initReveal() {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
  );
  $$(".reveal").forEach((el) => io.observe(el));
}

function initCounters() {
  const els = $$("[data-count]");
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      io.unobserve(el);
      const target = Number(el.dataset["count"] ?? "0");
      const suffix = el.dataset["suffix"] ?? "";
      const start = performance.now();
      const dur = 1400;
      const tick = (now) => {
        const p = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased).toLocaleString("pt-BR") + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  });
  els.forEach((el) => io.observe(el));
}

function initBars() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const fill = e.target;
      fill.style.width = `${fill.dataset["pct"] ?? 0}%`;
      io.unobserve(fill);
    });
  });
  $$(".fill").forEach((f) => io.observe(f));
}

function initHeader() {
  const header = $("#header");
  const progress = $("#progress");
  const totop = $("#totop");
  const onScroll = () => {
    const y = window.scrollY;
    header?.classList.toggle("is-stuck", y > 20);
    totop?.classList.toggle("is-visible", y > 700);
    if (progress) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = `${max > 0 ? y / max * 100 : 0}%`;
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  totop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function initMenus() {
  const burger  = $('#header [data-menu-toggle]');
  const sidebar = $('#sidebar');
  const overlay = $('#sidebar-overlay');
  const closeBtn = $('#sidebar-close');

  function openSidebar() {
    sidebar?.classList.add('is-open');
    overlay?.classList.add('is-visible');
    sidebar?.removeAttribute('aria-hidden');
    overlay?.removeAttribute('aria-hidden');
    burger?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    // Foca no primeiro elemento interativo do sidebar
    setTimeout(() => closeBtn?.focus(), 60);
  }

  function closeSidebar() {
    sidebar?.classList.remove('is-open');
    overlay?.classList.remove('is-visible');
    sidebar?.setAttribute('aria-hidden', 'true');
    overlay?.setAttribute('aria-hidden', 'true');
    burger?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    burger?.focus();
  }

  burger?.addEventListener('click', openSidebar);
  closeBtn?.addEventListener('click', closeSidebar);
  overlay?.addEventListener('click', closeSidebar);

  // Fecha com Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar?.classList.contains('is-open')) {
      closeSidebar();
    }
  });

  // Acordeão de submenus do sidebar
  $$('[data-sidebar-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset['sidebarToggle'];
      const sub = document.getElementById(targetId);
      const isOpen = sub?.classList.contains('is-open');

      // Fecha todos os outros
      $$('.sidebar__sub.is-open').forEach((el) => {
        el.classList.remove('is-open');
        const parentBtn = el.previousElementSibling;
        parentBtn?.setAttribute('aria-expanded', 'false');
        // Rotaciona a seta de volta
        const svg = parentBtn?.querySelector('svg');
        if (svg) svg.style.transform = '';
      });

      if (!isOpen && sub) {
        sub.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
        const svg = btn.querySelector('svg');
        if (svg) svg.style.transform = 'rotate(180deg)';
      }
    });
  });

  // Fecha o sidebar ao clicar em qualquer link dentro dele
  $$('#sidebar a').forEach((a) => {
    a.addEventListener('click', () => {
      closeSidebar();
      // Fecha submenus abertos
      $$('.sidebar__sub.is-open').forEach((el) => {
        el.classList.remove('is-open');
        const parentBtn = el.previousElementSibling;
        parentBtn?.setAttribute('aria-expanded', 'false');
        const svg = parentBtn?.querySelector('svg');
        if (svg) svg.style.transform = '';
      });
    });
  });

  // Busca integrada no sidebar (reutiliza BUSCA global)
  const sidebarInput   = $('#sidebar-search-input');
  const sidebarResults = $('#sidebar-search-results');
  sidebarInput?.addEventListener('input', () => {
    const q = sidebarInput.value.trim().toLowerCase();
    if (!sidebarResults) return;
    if (q.length < 2) { sidebarResults.innerHTML = ''; return; }
    const hits = BUSCA.filter((b) => b.titulo.toLowerCase().includes(q)).slice(0, 5);
    sidebarResults.innerHTML = hits.length
      ? hits.map((h) => `<li><a href="${h.href}">${h.titulo}</a></li>`).join('')
      : `<li class="empty">Nenhum resultado para "${sidebarInput.value}".</li>`;
  });
}

function initFilters() {
  $$(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      $$(".chip").forEach((c) => {
        c.classList.remove("is-active");
        c.setAttribute("aria-selected", "false");
      });
      chip.classList.add("is-active");
      chip.setAttribute("aria-selected", "true");
      const filter = chip.dataset["filter"] ?? "todos";
      $$(".tour").forEach((card, i) => {
        const match = filter === "todos" || card.dataset["cat"] === filter;
        card.classList.toggle("is-hidden", !match);
        if (match) {
          card.style.animation = "none";
          void card.offsetWidth;
          card.style.animation = `pop .5s var(--ease) ${i * 50}ms both`;
        }
      });
    });
  });
}

function initSearch() {
  const bar = $("#searchbar");
  const input = $("#search-input");
  const results = $("#search-results");
  const open = () => {
    bar?.removeAttribute("hidden");
    input?.focus();
  };
  const close = () => {
    bar?.setAttribute("hidden", "");
    if (input) input.value = "";
    if (results) results.innerHTML = "";
  };
  $("[data-search-open]")?.addEventListener("click", open);
  $("[data-search-close]")?.addEventListener("click", close);
  input?.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    if (!results) return;
    if (q.length < 2) {
      results.innerHTML = "";
      return;
    }
    const hits = BUSCA.filter((b) => b.titulo.toLowerCase().includes(q)).slice(0, 6);
    results.innerHTML = hits.length ? hits.map((h) => `<li><a href="${h.href}">${h.titulo}</a></li>`).join("") : `<li class="empty">Nenhum resultado para “${input.value}”.</li>`;
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

function initA11y() {
  const root = document.documentElement;
  let scale = Number(localStorage.getItem("saz-scale") ?? "1");
  const apply = () => {
    root.style.fontSize = `${scale}rem`;
    localStorage.setItem("saz-scale", String(scale));
  };
  apply();
  $$("[data-font]").forEach(
    (btn) => btn.addEventListener("click", () => {
      const mode = btn.dataset["font"];
      if (mode === "inc") scale = Math.min(1.35, scale + 0.1);
      else if (mode === "dec") scale = Math.max(0.85, scale - 0.1);
      else scale = 1;
      apply();
    })
  );
  const contrastBtn = $("[data-contrast]");
  const setContrast = (on) => {
    root.classList.toggle("contrast", on);
    contrastBtn?.setAttribute("aria-pressed", String(on));
    localStorage.setItem("saz-contrast", String(on));
  };
  setContrast(localStorage.getItem("saz-contrast") === "true");
  contrastBtn?.addEventListener("click", () => setContrast(!root.classList.contains("contrast")));
  document.addEventListener("keydown", (e) => {
    if (!e.altKey) return;
    const map = { "1": "#conteudo", "2": "#header", "3": "#searchbar", "4": "#mapa-do-site" };
    const sel = map[e.key];
    if (!sel) return;
    if (e.key === "3") $("[data-search-open]")?.click();
    else document.querySelector(sel)?.scrollIntoView({ behavior: "smooth" });
  });
}

function initForm() {
  const form = $("#form");
  const status = $("#form-status");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const fields = Array.from(form.querySelectorAll("[required]"));
    let ok = true;
    fields.forEach((f) => {
      const valid = f.value.trim().length > 0 && (f.type !== "email" || /.+@.+\..+/.test(f.value));
      f.classList.toggle("invalid", !valid);
      if (!valid) ok = false;
    });
    if (!status) return;
    if (!ok) {
      status.style.color = "var(--terra)";
      status.textContent = "Preencha os campos obrigatórios corretamente.";
      return;
    }
    status.style.color = "var(--green)";
    const protocolo = `SAZ-${new Date().getFullYear()}-${Math.floor(Math.random() * 9e4 + 1e4)}`;
    status.textContent = `Manifestação registrada (demonstração). Protocolo ${protocolo}.`;
    form.reset();
  });
}

// Gerenciador de Roteamento Dinâmico por Hash (#/)
async function handleRouting() {
  const hash = window.location.hash || '#/';
  const mainEl = $('#conteudo');
  if (!mainEl) return;

  if (!initialMainMarkup) {
    initialMainMarkup = mainEl.innerHTML;
  }

  if (hash.startsWith('#/')) {
    const routePath = hash.replace('#/', '/');
    const renderedHtml = await resolveRoute(routePath);
    if (renderedHtml) {
      mainEl.innerHTML = renderedHtml;
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Re-inicializa reveals nas páginas internas
      initReveal();
      return;
    }
  }

  // Se a rota for home ou âncora comum, restaura a marcação principal
  if (mainEl.innerHTML !== initialMainMarkup) {
    mainEl.innerHTML = initialMainMarkup;
    bootHomePageViews();
  } else {
    // Já na home — rola até a âncora se existir
    const anchor = hash.startsWith('#') && !hash.startsWith('#/') ? hash : null;
    if (anchor && anchor !== '#') {
      const target = document.querySelector(anchor);
      if (target) {
        setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
      }
    }
  }
}

function bootHomePageViews() {
  renderAtalhos();
  renderRoteiros();
  renderNoticias();
  renderServicos();
  renderEventos();
  renderTransparencia();
  renderGoverno();
  initFilters();
  initForm();
  initCounters();
  initBars();
  initReveal();
}

function boot() {
  initialMainMarkup = $('#conteudo')?.innerHTML || '';
  bootHomePageViews();
  initHeader();
  initMenus();
  initSearch();
  initA11y();

  window.addEventListener('hashchange', handleRouting);
  handleRouting();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
