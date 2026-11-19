import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buscarProducto,
  claveLinea,
  nombreOpciones,
  opcionesValidas,
} from '../src/utils/opcionesPedido.js';

test('las opciones requieren todos los grupos y valores vigentes', () => {
  const smoothie = buscarProducto('smoothie');
  for (const opciones of [
    undefined,
    null,
    [],
    {},
    { fruta: 'mango' },
    { fruta: 'mango', chantilly: 'talvez' },
    { fruta: 'retirada', chantilly: 'si' },
    { fruta: 'mango', chantilly: 'si', extra: 'no' },
  ]) {
    assert.equal(opcionesValidas(smoothie, opciones), false);
  }
  assert.equal(opcionesValidas(smoothie, { fruta: 'mango', chantilly: 'no' }), true);
  assert.equal(opcionesValidas(buscarProducto('granizado'), { fruta: 'pina' }), true);
  assert.equal(
    opcionesValidas(buscarProducto('cafe-frappe'), { salsa: 'manjar', chantilly: 'si' }),
    true,
  );
});

test('la clave es estable al reordenar opciones y distingue combinaciones', () => {
  const item = { id: 'smoothie', opciones: { fruta: 'mango', chantilly: 'si' } };
  assert.equal(
    claveLinea(item),
    claveLinea({ ...item, opciones: { chantilly: 'si', fruta: 'mango' } }),
  );
  assert.notEqual(
    claveLinea(item),
    claveLinea({ ...item, opciones: { fruta: 'mango', chantilly: 'no' } }),
  );
  assert.notEqual(
    claveLinea({ id: 'granizado', opciones: { fruta: 'mango' } }),
    claveLinea({ id: 'granizado', opciones: { fruta: 'pina' } }),
  );
});

test('las variantes y productos sin opciones conservan sus claves', () => {
  assert.equal(
    claveLinea({ id: 'pizza-margarita', variante: 'familiar' }),
    'pizza-margarita__familiar',
  );
  assert.equal(claveLinea({ id: 'jugo-mango', variante: 'gloria' }), 'jugo-mango__gloria');
  assert.equal(
    claveLinea({ id: 'te-cafe-infusion', variante: 'sin-lactosa' }),
    'te-cafe-infusion__sin-lactosa',
  );
  assert.equal(claveLinea({ id: 'completo-talquino' }), 'completo-talquino');
  assert.equal(opcionesValidas(buscarProducto('pizza-margarita'), undefined), true);
});

test('el resumen traduce las opciones en el orden de los grupos', () => {
  const smoothie = buscarProducto('smoothie');
  const opciones = { chantilly: 'si', fruta: 'pina' };
  assert.equal(nombreOpciones(smoothie, opciones, 'es'), 'Piña · Con crema chantilly');
  assert.equal(nombreOpciones(smoothie, opciones, 'en'), 'Pineapple · With whipped cream');
  assert.equal(nombreOpciones(smoothie, opciones, 'pt'), 'Abacaxi · Com chantilly');
  assert.equal(nombreOpciones(smoothie, opciones, 'ay'), 'Achupaya · Con crema chantilly');
});
