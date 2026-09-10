/**
 * Módulo de Ajuda para Manipulação de DOM (DOM Utilities)
 * Pure JavaScript (ES Modules)
 */

/**
 * Seleciona um único elemento do DOM
 * @param {string} selector 
 * @param {Element | Document} parent 
 * @returns {Element | null}
 */
export function $(selector, parent = document) {
  return parent.querySelector(selector);
}

/**
 * Seleciona múltiplos elementos do DOM
 * @param {string} selector 
 * @param {Element | Document} parent 
 * @returns {NodeListOf<Element>}
 */
export function $$(selector, parent = document) {
  return parent.querySelectorAll(selector);
}

/**
 * Cria um novo elemento HTML com atributos e texto/filhos
 * @param {string} tag 
 * @param {Object} attributes 
 * @param {string | Array<Element | string>} children 
 * @returns {HTMLElement}
 */
export function createElement(tag, attributes = {}, children = []) {
  const element = document.createElement(tag);

  Object.entries(attributes).forEach(([key, value]) => {
    if (key === 'className') {
      element.className = value;
    } else if (key === 'dataset') {
      Object.entries(value).forEach(([dataKey, dataValue]) => {
        element.dataset[dataKey] = dataValue;
      });
    } else if (key.startsWith('on') && typeof value === 'function') {
      const eventName = key.substring(2).toLowerCase();
      element.addEventListener(eventName, value);
    } else {
      element.setAttribute(key, value);
    }
  });

  if (typeof children === 'string') {
    element.textContent = children;
  } else if (Array.isArray(children)) {
    children.forEach(child => {
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child));
      } else if (child instanceof Element) {
        element.appendChild(child);
      }
    });
  }

  return element;
}

/**
 * Alterna uma classe em um elemento
 * @param {Element} element 
 * @param {string} className 
 * @param {boolean} [force] 
 */
export function toggleClass(element, className, force) {
  if (element && element.classList) {
    element.classList.toggle(className, force);
  }
}
