/**
 * Testes Unitários para Manipuladores do DOM (dom.js)
 * Executados via Runner Nativo do Node.js (node:test) - Sem Frameworks ou JSDOM
 */

import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { $, $$, createElement, toggleClass } from '../js/utils/dom.js';

// Setup de Mock Nativo do DOM para ambiente Node.js sem pacotes externos
class MockElement {
  constructor(tagName = 'DIV', attributes = {}) {
    this.tagName = tagName.toUpperCase();
    this.attributes = { ...attributes };
    this.id = attributes.id || '';
    this.className = attributes.className || '';
    this.textContent = '';
    this.children = [];
    this.dataset = attributes.dataset || {};
    this.eventListeners = {};
    this.classList = {
      _classes: new Set(this.className ? this.className.split(/\s+/) : []),
      add: (...cls) => cls.forEach(c => this.classList._classes.add(c)),
      remove: (...cls) => cls.forEach(c => this.classList._classes.delete(c)),
      contains: (c) => this.classList._classes.has(c),
      toggle: (c, force) => {
        if (force === undefined) {
          if (this.classList._classes.has(c)) this.classList._classes.delete(c);
          else this.classList._classes.add(c);
        } else if (force) {
          this.classList._classes.add(c);
        } else {
          this.classList._classes.delete(c);
        }
      }
    };
  }

  getAttribute(key) {
    return this.attributes[key] !== undefined ? this.attributes[key] : null;
  }

  setAttribute(key, value) {
    this.attributes[key] = String(value);
    if (key === 'id') this.id = String(value);
    if (key === 'class' || key === 'className') this.className = String(value);
  }

  addEventListener(event, fn) {
    this.eventListeners[event] = fn;
  }

  appendChild(child) {
    this.children.push(child);
  }
}

globalThis.Element = MockElement;

function createMockDOM() {
  const container = new MockElement('DIV', { id: 'container' });
  const item1 = new MockElement('SPAN', { className: 'item' });
  item1.textContent = 'Item 1';
  const item2 = new MockElement('SPAN', { className: 'item' });
  item2.textContent = 'Item 2';
  container.children = [item1, item2];

  globalThis.document = {
    createElement: (tag) => new MockElement(tag),
    createTextNode: (text) => text,
    querySelector: (sel) => {
      if (sel === '#container') return container;
      if (sel === '.item') return item1;
      return null;
    },
    querySelectorAll: (sel) => {
      if (sel === '.item') return [item1, item2];
      return [];
    }
  };
}

describe('DOM Utilities Unit Tests', () => {
  beforeEach(() => {
    createMockDOM();
  });

  it('$() deve selecionar o elemento correto por ID', () => {
    const container = $('#container');
    assert.notStrictEqual(container, null);
    assert.strictEqual(container.id, 'container');
  });

  it('$$() deve selecionar múltiplos elementos por classe', () => {
    const items = $$('.item');
    assert.strictEqual(items.length, 2);
  });

  it('createElement() deve criar elemento HTML com classe e atributos', () => {
    const btn = createElement('button', {
      id: 'test-btn',
      className: 'btn btn-primary',
      'aria-label': 'Botão de Teste'
    }, 'Clique Aqui');

    assert.strictEqual(btn.tagName, 'BUTTON');
    assert.strictEqual(btn.id, 'test-btn');
    assert.strictEqual(btn.className, 'btn btn-primary');
    assert.strictEqual(btn.getAttribute('aria-label'), 'Botão de Teste');
    assert.strictEqual(btn.textContent, 'Clique Aqui');
  });

  it('toggleClass() deve alternar a classe no elemento', () => {
    const container = $('#container');
    toggleClass(container, 'active', true);
    assert.strictEqual(container.classList.contains('active'), true);

    toggleClass(container, 'active', false);
    assert.strictEqual(container.classList.contains('active'), false);
  });
});

