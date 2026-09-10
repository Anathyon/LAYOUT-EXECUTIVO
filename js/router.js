/**
 * Roteador de Aplicação Client-Side (Router SPA em Vanilla JS)
 * Gerencia as rotas completas espelhadas do portal de Alcântaras
 */

import { fetchApiData } from './api/mockData.js';

export function renderPageHero(title, lead, eyebrow = 'SERRA AZUL DO MAR · ALCÂNTARAS', meta = []) {
  return `
    <section class="pagehero">
      <div class="wrap">
        <nav class="crumbs" aria-label="Migalhas de Pão">
          <a href="#/">Início</a>
          <span aria-hidden="true">/</span>
          <span style="color: #fff;">${title}</span>
        </nav>
        <span class="eyebrow">${eyebrow}</span>
        <h1>${title}</h1>
        <p class="pagehero__lead">${lead}</p>
        ${meta.length ? `<div class="pagehero__meta">${meta.map(m => `<span>${m}</span>`).join('')}</div>` : ''}
      </div>
    </section>
  `;
}

export async function routeInstitucional() {
  const data = await fetchApiData('institucional');
  return `
    ${renderPageHero(data.titulo, data.historia, 'INSTITUCIONAL', ['Prefeitura Municipal', 'Gestão 2025–2028'])}
    <section class="pagebody">
      <div class="wrap">
        <div class="prose">
          <h2>Missão e Valores</h2>
          <p><strong>Missão:</strong> ${data.missao}</p>
          <p><strong>Visão:</strong> ${data.visao}</p>
          <h3>Valores Institucionais</h3>
          <ul>
            ${data.valores.map(v => `<li><strong>${v}</strong> — Compromisso ético com a população.</li>`).join('')}
          </ul>

          <h2>Símbolos Oficiais</h2>
          <p>Hino Oficial: "${data.simbolos.hino}"</p>
        </div>
      </div>
    </section>
  `;
}

export async function routeGestores() {
  const data = await fetchApiData('gestores');
  return `
    ${renderPageHero('Prefeito e Vice-Prefeita', 'Conheça os gestores municipais eleitos para a Gestão 2025–2028.')}
    <section class="pagebody">
      <div class="wrap">
        <div class="cardgrid cardgrid--2">
          <div class="card card--accent">
            <span class="card__tag">${data.prefeito.partido}</span>
            <h3>${data.prefeito.nome}</h3>
            <p style="color: var(--gold); font-weight: 700; margin-bottom: 0.5rem;">${data.prefeito.cargo} (${data.prefeito.gestao})</p>
            <p>${data.prefeito.biografia}</p>
            <p style="margin-top: 0.8rem; font-size: 0.85rem;">✉️ ${data.prefeito.email}</p>
          </div>

          <div class="card">
            <span class="card__tag">${data.vicePrefeito.partido}</span>
            <h3>${data.vicePrefeito.nome}</h3>
            <p style="color: var(--sea-600); font-weight: 700; margin-bottom: 0.5rem;">${data.vicePrefeito.cargo} (${data.vicePrefeito.gestao})</p>
            <p>${data.vicePrefeito.biografia}</p>
            <p style="margin-top: 0.8rem; font-size: 0.85rem;">✉️ ${data.vicePrefeito.email}</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

export async function routeGaleriaGestores() {
  const data = await fetchApiData('galeriaGestores');
  return `
    ${renderPageHero('Galeria de Ex-Gestores', 'Histórico dos prefeitos que lideraram a administração municipal.')}
    <section class="pagebody">
      <div class="wrap">
        <div class="cardgrid">
          ${data.map(g => `
            <div class="card">
              <span class="card__tag">MANDATO ${g.periodo}</span>
              <h3>${g.prefeito}</h3>
              <p>${g.destaques}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

export async function routeAgendas() {
  const data = await fetchApiData('agendas');
  return `
    ${renderPageHero('Agenda Oficial da Gestão', 'Compromissos e audiências públicas dos gestores municipais.')}
    <section class="pagebody">
      <div class="wrap">
        <div class="tablewrap">
          <table class="data">
            <caption>Compromissos Agendados</caption>
            <thead>
              <tr>
                <th>Data / Hora</th>
                <th>Evento / Audiência</th>
                <th>Local</th>
                <th>Presença</th>
              </tr>
            </thead>
            <tbody>
              ${data.map(a => `
                <tr>
                  <td><strong>${a.data}</strong><br><small>${a.hora}</small></td>
                  <td>${a.evento}</td>
                  <td>${a.local}</td>
                  <td><span class="pubitem__tag">${a.presenca}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `;
}

export async function routeSecretarias() {
  const data = await fetchApiData('secretarias');
  return `
    ${renderPageHero('Secretarias Municipais e Órgãos', 'Estrutura organizacional do poder executivo municipal.')}
    <section class="pagebody">
      <div class="wrap">
        <div class="cardgrid">
          ${data.map(s => `
            <div class="card">
              <span class="card__tag">${s.sigla}</span>
              <h3>${s.nome}</h3>
              <p><strong>Titular:</strong> ${s.gestor}</p>
              <p style="font-size: 0.85rem; margin-top: 0.4rem;">📞 ${s.fone} | ✉️ ${s.email}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

export async function routeConvenios() {
  const data = await fetchApiData('convenios');
  return `
    ${renderPageHero('Convênios e Parcerias', 'Contratos de repasse e acordos celebrados com esferas estadual e federal.')}
    <section class="pagebody">
      <div class="wrap">
        <div class="tablewrap">
          <table class="data">
            <thead>
              <tr>
                <th>Nº Convênio</th>
                <th>Concedente</th>
                <th>Objeto</th>
                <th>Valor Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${data.map(c => `
                <tr>
                  <td><strong>${c.numero}</strong></td>
                  <td>${c.orgaoConcedente}</td>
                  <td>${c.objeto}</td>
                  <td>R$ ${c.valorTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
                  <td><span class="chip is-active" style="padding: 2px 8px; font-size: 0.75rem;">${c.status}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `;
}

export async function routeEmendas() {
  const data = await fetchApiData('emendas');
  return `
    ${renderPageHero('Emendas Parlamentares', 'Recursos federais e estaduais destinados ao município.')}
    <section class="pagebody">
      <div class="wrap">
        <div class="cardgrid">
          ${data.map(e => `
            <div class="card">
              <span class="card__tag">ANO ${e.ano}</span>
              <h3>${e.parlamentar}</h3>
              <p><strong>Valor:</strong> R$ ${e.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
              <p>${e.destino}</p>
              <span class="card__go">${e.status}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

export async function routeConselhos() {
  const data = await fetchApiData('conselhos');
  return `
    ${renderPageHero('Conselhos Municipais', 'Órgãos colegiados de controle social e participação comunitária.')}
    <section class="pagebody">
      <div class="wrap">
        <div class="cardgrid">
          ${data.map(c => `
            <div class="card">
              <span class="card__tag">${c.membros} MEMBROS</span>
              <h3>${c.nome}</h3>
              <p><strong>Presidente:</strong> ${c.presidente}</p>
              <p><strong>Reuniões:</strong> ${c.reunioes}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

export async function routeSelos() {
  const data = await fetchApiData('selos');
  return `
    ${renderPageHero('Selos de Qualidade e Certificações', 'Certificações de excelência em gestão pública, sustentabilidade e educação.')}
    <section class="pagebody">
      <div class="wrap">
        <div class="cardgrid">
          ${data.map(s => `
            <div class="card">
              <span style="font-size: 2rem;">${s.icon}</span>
              <h3>${s.nome}</h3>
              <p>${s.descricao}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

export async function routeLicitacoes() {
  const data = await fetchApiData('licitacoes');
  return `
    ${renderPageHero('Licitações e Contratos', 'Editais abertos, dispensas e processos licitatórios.')}
    <section class="pagebody">
      <div class="wrap">
        <div class="tablewrap">
          <table class="data">
            <thead>
              <tr>
                <th>Processo</th>
                <th>Modalidade</th>
                <th>Objeto</th>
                <th>Abertura</th>
                <th>Valor Estimado</th>
              </tr>
            </thead>
            <tbody>
              ${data.map(l => `
                <tr>
                  <td><strong>${l.numero}</strong></td>
                  <td>${l.modalidade}</td>
                  <td>${l.objeto}</td>
                  <td>${l.abertura}</td>
                  <td>R$ ${l.valorEstimado.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `;
}

export async function routeDiario() {
  const data = await fetchApiData('diario');
  return `
    ${renderPageHero('Diário Oficial Municipal', 'Edições eletrônicas do Diário Oficial do Município.')}
    <section class="pagebody">
      <div class="wrap">
        <div class="publist">
          ${data.map(d => `
            <div class="pubitem">
              <a href="#">
                <span class="pubitem__tag">${d.edicao}</span>
                <h3>Publicação Oficial — ${d.data}</h3>
                <p>${d.resumo}</p>
                <footer><span class="pubitem__go">📥 Baixar Edição Completa (PDF)</span></footer>
              </a>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

export async function routeConcursos() {
  const data = await fetchApiData('concursos');
  return `
    ${renderPageHero('Concursos e Seleções Públicas', 'Editais de processos seletivos e concursos públicos municipais.')}
    <section class="pagebody">
      <div class="wrap">
        <div class="cardgrid">
          ${data.map(c => `
            <div class="card">
              <span class="card__tag">${c.status}</span>
              <h3>${c.edital}</h3>
              <p><strong>Cargos:</strong> ${c.cargo}</p>
              <p><strong>Vagas:</strong> ${c.vagas} vagas de provimento imediato</p>
              <p><strong>Inscrições:</strong> ${c.inscricoes}</p>
              <span class="card__go">Ver Edital Completo</span>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

// Tabela de mapeamento de rotas
const routesMap = {
  '/institucional': routeInstitucional,
  '/gestores': routeGestores,
  '/galeriagestores': routeGaleriaGestores,
  '/agendas': routeAgendas,
  '/secretarias': routeSecretarias,
  '/convenios': routeConvenios,
  '/emendas': routeEmendas,
  '/conselhos': routeConselhos,
  '/selos': routeSelos,
  '/licitacoes': routeLicitacoes,
  '/diario': routeDiario,
  '/concursos': routeConcursos
};

/**
 * Tenta resolver uma rota e renderizar o HTML dinâmico no elemento receptor
 * @param {string} route 
 * @returns {Promise<string | null>}
 */
export async function resolveRoute(route) {
  const cleanRoute = route.startsWith('#') ? route.substring(1) : route;
  if (routesMap[cleanRoute]) {
    return await routesMap[cleanRoute]();
  }
  return null;
}
