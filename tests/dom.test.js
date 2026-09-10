/**
 * Testes Unitários para Manipuladores do DOM (dom.js)
 * Executados via Vitest com JSDOM (JavaScript Nativo)
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach } from 'vitest';
import { $, $$, createElement, toggleClass } from '../js/utils/dom.js';

describe('DOM Utilities Unit Tests', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="container">
        <span class="item">Item 1</span>
        <span class="item">Item 2</span>
      </div>
    `;
  });

  it('$() deve selecionar o elemento correto por ID', () => {
    const container = $('#container');
    expect(container).not.toBeNull();
    expect(container.id).toBe('container');
  });

  it('$$() deve selecionar múltiplos elementos por classe', () => {
    const items = $$('.item');
    expect(items.length).toBe(2);
  });

  it('createElement() deve criar elemento HTML com classe e atributos', () => {
    const btn = createElement('button', {
      id: 'test-btn',
      className: 'btn btn-primary',
      'aria-label': 'Botão de Teste'
    }, 'Clique Aqui');

    expect(btn.tagName).toBe('BUTTON');
    expect(btn.id).toBe('test-btn');
    expect(btn.className).toBe('btn btn-primary');
    expect(btn.getAttribute('aria-label')).toBe('Botão de Teste');
    expect(btn.textContent).toBe('Clique Aqui');
  });

  it('toggleClass() deve alternar a classe no elemento', () => {
    const container = $('#container');
    toggleClass(container, 'active', true);
    expect(container.classList.contains('active')).toBe(true);

    toggleClass(container, 'active', false);
    expect(container.classList.contains('active')).toBe(false);
  });
});
