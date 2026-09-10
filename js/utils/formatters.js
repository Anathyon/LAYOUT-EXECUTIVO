/**
 * Módulo de Utilitários de Formatação (Formatters)
 * Pure JavaScript (ES Modules)
 */

/**
 * Formata um valor numérico para Moeda (ex: R$ 1.250,00)
 * @param {number} amount 
 * @param {string} locale 
 * @param {string} currency 
 * @returns {string}
 */
export function formatCurrency(amount, locale = 'pt-BR', currency = 'BRL') {
  if (typeof amount !== 'number' || isNaN(amount)) {
    return 'R$ 0,00';
  }
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(amount);
}

/**
 * Formata um número decimal como Porcentagem (ex: 12.5%)
 * @param {number} value 
 * @param {number} decimals 
 * @returns {string}
 */
export function formatPercent(value, decimals = 1) {
  if (typeof value !== 'number' || isNaN(value)) {
    return '0%';
  }
  const prefix = value > 0 ? '+' : '';
  return `${prefix}${value.toFixed(decimals)}%`;
}

/**
 * Formata um número inteiro com separador de milhar
 * @param {number} value 
 * @param {string} locale 
 * @returns {string}
 */
export function formatNumber(value, locale = 'pt-BR') {
  if (typeof value !== 'number' || isNaN(value)) {
    return '0';
  }
  return new Intl.NumberFormat(locale).format(value);
}

/**
 * Formata uma data para o padrão PT-BR (ex: 10/09/2026)
 * @param {string | Date} dateInput 
 * @returns {string}
 */
export function formatDate(dateInput) {
  if (typeof dateInput === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(dateInput)) {
    const [year, month, day] = dateInput.split('-');
    return `${day}/${month}/${year}`;
  }
  const date = new Date(dateInput);
  if (isNaN(date.getTime())) {
    return '--/--/----';
  }
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(date);
}
