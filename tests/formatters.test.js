/**
 * Testes Unitários para Utilitários de Formatação (formatters.js)
 * Executados via Vitest (JavaScript Nativo)
 */

import { describe, it, expect } from 'vitest';
import { formatCurrency, formatPercent, formatNumber, formatDate } from '../js/utils/formatters.js';

describe('Formatters Unit Tests', () => {
  describe('formatCurrency()', () => {
    it('deve formatar valores numéricos para moeda brasileira por padrão', () => {
      const result = formatCurrency(1250.5);
      // Remove espaços não-quebráveis do Intl (nbsp / thin space) para asserção flexível
      const cleanResult = result.replace(/\s/g, ' ');
      expect(cleanResult).toContain('R$');
      expect(cleanResult).toContain('1.250,50');
    });

    it('deve retornar R$ 0,00 quando o valor for inválido ou nulo', () => {
      expect(formatCurrency(null)).toBe('R$ 0,00');
      expect(formatCurrency(NaN)).toBe('R$ 0,00');
      expect(formatCurrency('texto')).toBe('R$ 0,00');
    });
  });

  describe('formatPercent()', () => {
    it('deve adicionar o sinal + para números positivos', () => {
      expect(formatPercent(12.5)).toBe('+12.5%');
    });

    it('deve formatar números negativos corretamente', () => {
      expect(formatPercent(-4.2)).toBe('-4.2%');
    });

    it('deve retornar 0% para entradas inválidas', () => {
      expect(formatPercent(undefined)).toBe('0%');
    });
  });

  describe('formatNumber()', () => {
    it('deve formatar números grandes com separador de milhar', () => {
      const result = formatNumber(1000000);
      expect(result).toBe('1.000.000');
    });
  });

  describe('formatDate()', () => {
    it('deve formatar datas ISO para o padrão brasileiro DD/MM/YYYY', () => {
      expect(formatDate('2026-09-10')).toBe('10/09/2026');
    });

    it('deve retornar fallback para datas inválidas', () => {
      expect(formatDate('data-invalida')).toBe('--/--/----');
    });
  });
});
