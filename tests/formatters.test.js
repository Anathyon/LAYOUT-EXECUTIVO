/**
 * Testes Unitários para Utilitários de Formatação (formatters.js)
 * Executados via Runner Nativo do Node.js (node:test) - Sem Frameworks
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { formatCurrency, formatPercent, formatNumber, formatDate } from '../js/utils/formatters.js';

describe('Formatters Unit Tests', () => {
  describe('formatCurrency()', () => {
    it('deve formatar valores numéricos para moeda brasileira por padrão', () => {
      const result = formatCurrency(1250.5);
      const cleanResult = result.replace(/\s/g, ' ');
      assert.ok(cleanResult.includes('R$'));
      assert.ok(cleanResult.includes('1.250,50'));
    });

    it('deve retornar R$ 0,00 quando o valor for inválido ou nulo', () => {
      assert.strictEqual(formatCurrency(null), 'R$ 0,00');
      assert.strictEqual(formatCurrency(NaN), 'R$ 0,00');
      assert.strictEqual(formatCurrency('texto'), 'R$ 0,00');
    });
  });

  describe('formatPercent()', () => {
    it('deve adicionar o sinal + para números positivos', () => {
      assert.strictEqual(formatPercent(12.5), '+12.5%');
    });

    it('deve formatar números negativos corretamente', () => {
      assert.strictEqual(formatPercent(-4.2), '-4.2%');
    });

    it('deve retornar 0% para entradas inválidas', () => {
      assert.strictEqual(formatPercent(undefined), '0%');
    });
  });

  describe('formatNumber()', () => {
    it('deve formatar números grandes com separador de milhar', () => {
      const result = formatNumber(1000000);
      assert.strictEqual(result, '1.000.000');
    });
  });

  describe('formatDate()', () => {
    it('deve formatar datas ISO para o padrão brasileiro DD/MM/YYYY', () => {
      assert.strictEqual(formatDate('2026-09-10'), '10/09/2026');
    });

    it('deve retornar fallback para datas inválidas', () => {
      assert.strictEqual(formatDate('data-invalida'), '--/--/----');
    });
  });
});

