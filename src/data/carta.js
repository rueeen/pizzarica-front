export const categorias = [
  {
    id: 'pizzas',
    nombre: {
      es: 'Pizzas',
      ay: 'T’ant’anaka',
      en: 'Pizzas',
      pt: 'Pizzas',
    },
  },
  {
    id: 'conos',
    nombre: {
      es: 'Conos',
      ay: 'Cononaka',
      en: 'Pizza cones',
      pt: 'Cones da pizza',
    },
  },
  {
    id: 'empanadas',
    nombre: {
      es: 'Empanadas fritas',
      ay: 'Phiritata empanadanaka',
      en: 'Fried empanadas',
      pt: 'Empadas fritas',
    },
  },
  {
    id: 'completos',
    nombre: {
      es: 'Completos',
      ay: 'Completos',
      en: 'Chilean hot dogs',
      pt: 'Cachorros-quentes chilenos',
    },
  },
  {
    id: 'jugos',
    nombre: {
      es: 'Jugos naturales',
      ay: 'Fresco juyranaka',
      en: 'Fresh fruit juices',
      pt: 'Sucos naturais',
    },
  },
  {
    id: 'batidos',
    nombre: {
      es: 'Batidos proteicos',
      ay: 'Proteína batidonaka',
      en: 'Protein shakes',
      pt: 'Batidos proteicos',
    },
  },
  {
    id: 'batidos-clasicos',
    nombre: {
      es: 'Batidos',
      ay: 'Batidos',
      en: 'Shakes & smoothies',
      pt: 'Batidos',
    },
  },
  {
    id: 'bebidas',
    nombre: {
      es: 'Bebidas calientes y frías',
      ay: 'Bebidas calientes y frías',
      en: 'Hot & cold drinks',
      pt: 'Bebidas quentes e frias',
    },
  },
];
export const prefijos = {
  pizzas: { es: 'Pizza', ay: "T'ant'a", en: 'Pizza', pt: 'Pizza' },
  conos: { es: 'Cono', ay: 'Cono', en: 'Cone', pt: 'Cones da' },
};
const pizza = (id, nombre, precio, es, ay, en, pt) => ({
  id: `pizza-${id}`,
  nombre,
  precio,
  ingredientes: { es, ay, en, pt },
});
export const pizzas = [
  pizza(
    'margarita',
    'Margarita',
    8990,
    'Jamón, queso, salsa, albahaca, orégano.',
    'Jamón · Kisu · Tomate salsa · Albahaca · chuxña ali.',
    'Ham, cheese, sauce, basil, oregano.',
    'Presunto, queijo, molho de tomate, manjericão, orégano.',
  ),
  // TODO: ingredientes de la Redoni
  pizza('redoni', 'Redoni', 11990, '', '', '', ''),
  pizza(
    'piubella',
    'Piubella',
    12990,
    'Chorizo, champiñón, aceituna, salsa, queso, orégano.',
    'Aycha jipilla · Champiñón · Asituna · Tomate salsa · Kisu · chuxña ali.',
    'Chorizo sausage, mushrooms, olives, sauce, cheese, oregano.',
    'Chorizo, cogumelos, azeitonas, molho de tomate, queijo, orégano.',
  ),
  pizza(
    'napolitana',
    'Napolitana',
    12990,
    'Jamón, aceituna, queso, salsa, orégano.',
    'Jamón · Asituna · Kisu · Tomate salsa · chuxña ali.',
    'Ham, olives, cheese, sauce, oregano.',
    'Presunto, azeitonas, queijo, molho de tomate, orégano.',
  ),
  pizza(
    'ibiza',
    'Ibiza',
    12990,
    'Salame, champiñón, tomate en rodajas, aceituna, queso parmesano, salsa, queso, orégano.',
    'Tomate salsa · Salame · Champiñón · Tomate · Asituna · Parmesano kisu · Kisu · chuxña ali.',
    'Sauce, salami, mushrooms, sliced tomato, olives, Parmesan cheese, cheese, oregano.',
    'Molho de tomate, salame, cogumelos, tomate, azeitonas, queijo parmesão, queijo, orégano.',
  ),
  pizza(
    'diamante',
    'Diamante',
    12990,
    'Salame, cebolla, champiñón, queso parmesano, salsa, queso, orégano.',
    'Salame · Siwulla · Champiñón · Parmesano kisu · Tomate salsa · Kisu · chuxña ali.',
    'Salami, onion, mushrooms, Parmesan cheese, sauce, cheese, oregano.',
    'Salame, cebola, cogumelos, queijo parmesão, molho de tomate, queijo, orégano.',
  ),
  pizza(
    'hawaiana',
    'Hawaiana',
    12990,
    'Jamón, piña, queso, salsa, orégano.',
    'Jamón · Achupaya · Kisu · Tomate salsa · chuxña ali.',
    'Ham, pineapple, cheese, sauce, oregano.',
    'Presunto, abacaxi, queijo, molho de tomate, orégano.',
  ),
  pizza(
    'primavera',
    'Primavera',
    12990,
    'Tocino, jamón, queso, salsa, choclo, orégano.',
    'Tocino · Jamón · Kisu · Tomate salsa · Tunqu · chuxña ali.',
    'Bacon, ham, cheese, sauce, corn, oregano.',
    'Bacon, presunto, queijo, molho de tomate, milho, orégano.',
  ),
  pizza(
    '4-quesos',
    '4 Quesos',
    12990,
    'Queso cheddar, queso crema, queso azul, salsa, queso, orégano.',
    'Cheddar kisu · Cream cheese · Azul kisu · Tomate salsa · Kisu · chuxña ali.',
    'Cheddar cheese, cream cheese, blue cheese, sauce, cheese, oregano.',
    'Queijo cheddar, cream cheese, queijo azul, molho de tomate, queijo, orégano.',
  ),
  pizza(
    'melissa',
    'Melissa',
    12990,
    'Salsa blanca a base de crema de champiñón, queso, tocino, cebolla, queso parmesano, orégano.',
    'Tomate salsa · Cream cheese · Tocino · Siwulla · Parmesano kisu · Kisu · chuxña ali.',
    'Cream-based white sauce with mushrooms, bacon, onion, Parmesan cheese, cheese, oregano.',
    'Molho branco com creme de cogumelos, bacon, cebola, queijo parmesão, queijo, orégano.',
  ),
  pizza(
    'vegetariana',
    'Vegetariana',
    12990,
    'Pimentón, tomate, choclo, cebolla, salsa, queso, orégano.',
    'Pimentón · Tomate · Tunqu · Siwulla · Tomate salsa · Kisu · chuxña ali.',
    'Bell pepper, tomato, corn, onion, sauce, cheese, oregano.',
    'Pimentão, tomate, milho, cebola, molho de tomate, queijo, orégano.',
  ),
  pizza(
    'california',
    'California',
    12990,
    'Queso, jamón, choclo, salame, salsa, orégano.',
    'Kisu · Jamón · Tunqu · Salame · Tomate salsa · chuxña ali.',
    'Cheese, ham, corn, salami, sauce, oregano.',
    'Queijo, presunto, milho, salame, molho de tomate, orégano.',
  ),
  pizza(
    'salchipizza',
    'Salchipizza',
    12990,
    'Queso, salchicha tradicional, tocino, choclo, salsa, orégano.',
    'Kisu · Aycha jipilla · Tocino · Tomate salsa · Salchicha · chuxña ali.',
    'Cheese, traditional sausage, bacon, corn, sauce, oregano.',
    'Queijo, linguiça tradicional, bacon, milho, molho de tomate, orégano.',
  ),
  pizza(
    'combinada',
    'Combinada',
    12990,
    'Pizza a elección de la carta (mitad y mitad).',
    'Carta taypit pä t’ant’a ajllisma — chikata ukat chikata.',
    'Combine two pizzas from the menu (half and half).',
    'Escolha 2 pizzas do cardápio (metade de cada sabor).',
  ),
  pizza(
    'texas-bbq',
    'Texas BBQ',
    12990,
    'Salsa, queso, carne, pepperoni, salsa BBQ, orégano.',
    'Tomate salsa · Kisu · aycha waka · Pepperoni · BBQ salsa · chuxña ali.',
    'Sauce, cheese, beef, pepperoni, BBQ sauce, oregano.',
    'Molho de tomate, queijo, carne bovina, pepperoni, molho BBQ, orégano.',
  ),
  pizza(
    'grill',
    'Grill',
    13990,
    'Trozos de carne, pollo, chorizo, queso, salsa, orégano.',
    'aycha waka · aycha wallpa · Aycha jipilla · Kisu · Tomate salsa · chuxña ali.',
    'Pieces of beef, chicken, sausage, cheese, sauce, oregano.',
    'Pedaços de carne bovina e frango, chorizo, queijo, molho de tomate, orégano.',
  ),
  pizza(
    'charcutera',
    'Charcutera',
    12990,
    'Salame, tocino, jamón, queso, salsa, orégano.',
    'Salame · Tocino · Jamón · Kisu · Tomate salsa · chuxña ali.',
    'Salami, bacon, ham, cheese, sauce, oregano.',
    'Salame, bacon, presunto, queijo, molho de tomate, orégano.',
  ),
  pizza(
    'suprema',
    'Suprema',
    12990,
    'Salame, champiñón, salsa, queso, orégano.',
    'Salame · Champiñón · Tomate salsa · Kisu · chuxña ali.',
    'Salami, mushrooms, sauce, cheese, oregano.',
    'Salame, cogumelos, molho de tomate, queijo, orégano.',
  ),
  pizza(
    'costa',
    'Costa',
    12990,
    'Salame, atún, cebolla, salsa, queso, orégano.',
    'Salame · Atún · Siwulla · Tomate salsa · Kisu · chuxña ali.',
    'Salami, tuna, onions, sauce, cheese, oregano.',
    'Salame, atum, cebola, molho de tomate, queijo, orégano.',
  ),
];
const item = (id, nombre, precio, es, ay, en, pt, extra = {}) => ({
  id,
  nombre,
  precio,
  ingredientes: { es, ay, en, pt },
  ...extra,
});
export const conos = [
  [
    'oliva',
    'Oliva',
    'Salsa, queso, jamón, aceituna, orégano.',
    'Tomate salsa · Kisu · Jamón · Asituna · chuxña ali.',
    'Tomato sauce, cheese, ham, olives, oregano.',
    'Molho de tomate, queijo, presunto, azeitona, orégano.',
  ],
  [
    'aloha',
    'Aloha',
    'Salsa de tomate, queso, piña, jamón, orégano.',
    'Tomate salsa · Kisu · Achupaya · Jamón · chuxña ali.',
    'Tomato sauce, cheese, pineapple, ham, oregano.',
    'Molho de tomate, queijo, abacaxi, presunto, orégano.',
  ],
  [
    'bacon',
    'Bacon',
    'Salsa tomate, queso, tocino, orégano.',
    'Tomate salsa · Kisu · Tocino · chuxña ali.',
    'Tomato sauce, cheese, bacon, oregano.',
    'Molho de tomate, queijo, bacon, orégano.',
  ],
  [
    'chicken',
    'Chicken',
    'Salsa tomate, queso, pollo, orégano.',
    'Tomate salsa · Kisu · Wallpa aycha · chuxña ali.',
    'Tomato sauce, cheese, chicken, oregano.',
    'Molho de tomate, queijo, frango, orégano.',
  ],
  [
    'texas',
    'Texas',
    'Salsa tomate, queso, pepperoni, orégano.',
    'Tomate salsa · Kisu · Pepperoni · chuxña ali.',
    'Tomato sauce, cheese, pepperoni, oregano.',
    'Molho de tomate, queijo, pepperoni, orégano.',
  ],
  [
    'champi',
    'Champi',
    'Salsa tomate, queso, champiñón, orégano.',
    'Tomate salsa · Kisu · Champiñón · chuxña ali.',
    'Tomato sauce, cheese, mushrooms, oregano.',
    'Molho de tomate, queijo, cogumelos, orégano.',
  ],
  [
    'milano',
    'Milano',
    'Salsa tomate, queso, salame, orégano.',
    'Tomate salsa · Kisu · Salame · chuxña ali.',
    'Tomato sauce, cheese, salami, oregano.',
    'Molho de tomate, queijo, salame, orégano.',
  ],
].map((x) => item(x[0], x[1], 3000, ...x.slice(2)));
const emp = [
  [2800, 'Queso', 'Kisu', 'Cheese', 'Queijo'],
  [3500, 'Queso aceituna', 'Kisu, asituna', 'Cheese & olive', 'Queijo e azeitona'],
  [3500, 'Queso choclo', 'Kisu, tunqu', 'Cheese & corn', 'Queijo e milho'],
  [3500, 'Queso salchicha', 'Kisu, salchicha', 'Cheese & sausage', 'Queijo e salsicha'],
  [3500, 'Queso champiñón', 'Kisu, champiñón', 'Cheese & mushroom', 'Queijo e cogumelo'],
  [3500, 'Queso pollo', 'Kisu, aycha wallpa', 'Cheese & chicken', 'Queijo e frango'],
  [3500, 'Queso camarón', 'Kisu, camarón', 'Cheese & shrimp', 'Queijo e camarão'],
  [
    3500,
    'Queso carne mechada',
    'Kisu, aycha waka mechada',
    'Cheese & shredded beef',
    'Queijo e carne desfiada',
  ],
  [3500, 'Queso tocino', 'Kisu, tocino', 'Cheese & bacon', 'Queijo e bacon'],
  [3500, 'Queso salame', 'Kisu, salame', 'Cheese & salami', 'Queijo e salame'],
  [
    3500,
    'Queso napolitana',
    'Kisu, jamón, tomate, asituna',
    'Cheese, ham & tomato',
    'Queijo, presunto e tomate',
  ],
  [
    3500,
    'Queso hawaiana',
    'Kisu, jamón, piña',
    'Cheese, ham & pineapple',
    'Queijo, presunto e abacaxi',
  ],
  [
    3500,
    'Queso vegetariana (champiñón, cebolla y choclo)',
    'Kisuni vegetariana (champiñón, siwulla, tunqu)',
    'Vegetarian with cheese (mushroom, onion & corn)',
    'Vegetariana com queijo (cogumelo, cebola e milho)',
  ],
  [
    3500,
    'Vegetariana sin queso (champiñón, cebolla y choclo)',
    'Vegetariana, jan kisuni (champiñón, siwulla, tunqu)',
    'Vegetarian, no cheese (mushroom, onion & corn)',
    'Vegetariana sem queijo (cogumelo, cebola e milho)',
  ],
];
export const empanadas = emp.map((x, i) => ({
  id: `empanada-${i}`,
  precio: x[0],
  nombre: { es: x[1], ay: x[2], en: x[3], pt: x[4] },
}));
const bats = [
  ['power-mani', 'Power Maní', '💪', 'Plátano · Maní', 'Banana · Peanuts', 'Banana · Amendoim'],
  [
    'berry-fit',
    'Berry Fit',
    '🍓',
    'Frutilla · Almendra',
    'Strawberry · Almonds',
    'Morango · Amêndoas',
  ],
  ['apple-fit', 'Apple Fit', '🍏', 'Manzana · Avena', 'Apple · Oats', 'Maçã · Aveia'],
  ['green-mango', 'Green Mango', '🥭', 'Mango · Espinaca', 'Mango · Spinach', 'Manga · Espinafre'],
  ['choco-power', 'Choco Power', '🍫', 'Plátano · Cacao', 'Banana · Cocoa', 'Banana · Cacau'],
];
export const batidos = bats.map(([id, nombre, emoji, base, en, pt]) =>
  item(
    id,
    nombre,
    4500,
    `${base} · Proteína (${id === 'power-mani' || id === 'berry-fit' || id === 'apple-fit' ? 'sabor a elección' : 'a elección'}) · Leche`,
    `${base} · Proteína (munata sabor) · Leche`,
    `${en} · Protein (your choice of flavor) · Milk`,
    `${pt} · Proteína (sabor à escolha) · Leite`,
    { emoji },
  ),
);
export const notaBatidos = {
  es: 'Sin sabor, libre de gluten y sin lactosa, apto para intolerantes. Recomendado para mayores de 15 años.',
  ay: "Jan mallini, jan glutenani, jan lactosani, jan lactosa katuqirinakataki wakisiri. 15 marat jilïrinakataki iwxt'ata.",
  en: 'Unflavored, gluten-free and lactose-free, suitable for people with intolerances. Recommended for ages 15 and over.',
  pt: 'Sem sabor, sem glúten e sem lactose, adequado para intolerantes. Recomendado para maiores de 15 anos.',
};
export const encabezadosJugos = {
  es: ['Agua', 'Leche Soprole', 'Leche Gloria', 'Gloria sin lactosa'],
  ay: ['Uma', 'Leche Soprole', 'Leche Gloria', 'Gloria jan lactosani'],
  en: ['Water', 'Soprole milk', 'Gloria milk', 'Lactose-free Gloria'],
  pt: ['Água', 'Leite Soprole', 'Leite Gloria', 'Gloria sem lactose'],
};
export const jugos = [
  {
    id: 'jugo-mango',
    nombre: {
      es: 'Mango',
      ay: 'Mango',
      en: 'Mango',
      pt: 'Manga',
    },
    precios: [3000, 3500, 4000, 4500],
  },
  {
    id: 'jugo-maracuya',
    nombre: {
      es: 'Maracuyá',
      ay: 'Maracuyá',
      en: 'Passion fruit',
      pt: 'Maracujá',
    },
    precios: [3000, 3500, 4000, 4500],
  },
  {
    id: 'jugo-pina',
    nombre: {
      es: 'Piña',
      ay: 'Achupaya',
      en: 'Pineapple',
      pt: 'Abacaxi',
    },
    precios: [3000, 3500, 4000, 4500],
  },
  {
    id: 'jugo-frutilla',
    nombre: {
      es: 'Frutilla',
      ay: 'Frutilla',
      en: 'Strawberry',
      pt: 'Morango',
    },
    precios: [3000, 3500, 4000, 4500],
  },
  {
    id: 'jugo-platano',
    nombre: {
      es: 'Plátano',
      ay: 'Plátano',
      en: 'Banana',
      pt: 'Banana',
    },
    precios: [3000, 3500, 4000, 4500],
  },
  {
    id: 'jugo-frutos-rojos',
    nombre: {
      es: 'Frutos rojos',
      ay: 'Frutos rojos',
      en: 'Mixed berries',
      pt: 'Frutas vermelhas',
    },
    precios: [3000, 3500, 4000, 4500],
  },
  {
    id: 'jugo-durazno',
    nombre: {
      es: 'Durazno',
      ay: 'Durazno',
      en: 'Peach',
      pt: 'Pêssego',
    },
    precios: [3000, 3500, 4000, 4500],
  },
  {
    id: 'jugo-melon-tuna',
    nombre: {
      es: 'Melón tuna',
      ay: 'Melón tuna',
      en: 'Cantaloupe',
      pt: 'Melão',
    },
    precios: [3000, 3500, 4000, 4500],
  },
  {
    id: 'jugo-papaya',
    nombre: {
      es: 'Papaya',
      ay: 'Papaya',
      en: 'Papaya',
      pt: 'Mamão',
    },
    precios: [3000, 3500, 4000, 4500],
  },
  {
    id: 'jugo-guayaba',
    nombre: {
      es: 'Guayaba',
      ay: 'Guayaba',
      en: 'Guava',
      pt: 'Goiaba',
    },
    precios: [3000, 3500, 4000, 4500],
  },
  {
    id: 'jugo-naranja',
    nombre: {
      es: 'Naranja',
      ay: 'Larankha',
      en: 'Orange',
      pt: 'Laranja',
    },
    precios: [3000, 3500, 4000, 4500],
  },
  {
    id: 'jugo-limon',
    nombre: {
      es: 'Limón',
      ay: 'Limuna',
      en: 'Lemon',
      pt: 'Limão',
    },
    precios: [3000, 3500, 4000, 4500],
  },
  {
    id: 'jugo-frambuesa',
    nombre: {
      es: 'Frambuesa',
      ay: 'Frambuesa',
      en: 'Raspberry',
      pt: 'Framboesa',
    },
    precios: [3000, 3500, 4000, 4500],
  },
  {
    id: 'jugo-citrus',
    nombre: {
      es: 'Citrus',
      ay: 'Citrus',
      en: 'Citrus',
      pt: 'Cítrico',
    },
    precios: [3000, 3500, 4000, 4500],
    ingredientes: {
      es: 'Naranja, maracuyá y limón.',
      ay: 'Larankha · Maracuyá · Limuna.',
      en: 'Orange, passion fruit and lemon.',
      pt: 'Laranja, maracujá e limão.',
    },
  },
  {
    id: 'jugo-limonada',
    nombre: {
      es: 'Limonada',
      ay: 'Limonada',
      en: 'Lemonade',
      pt: 'Limonada',
    },
    precios: [3000, 3500, 4000, 4500],
  },
  {
    id: 'jugo-mixto',
    nombre: {
      es: 'Mixto 2 sabores',
      ay: 'Mixto 2 sabores',
      en: 'Mix (2 flavors)',
      pt: 'Misto (2 sabores)',
    },
    precios: [3000, 3500, 4000, 4500],
    ingredientes: {
      es: 'Combina 2 sabores de la carta.',
      ay: 'Carta taypit pä sabor ajllisma.',
      en: 'Combine 2 flavors from the menu.',
      pt: 'Combine 2 sabores do cardápio.',
    },
  },
  {
    id: 'jugo-sandia',
    nombre: {
      es: 'Sandía',
      ay: 'Sandía',
      en: 'Watermelon',
      pt: 'Melancia',
    },
    precios: [3000, 3500, 4000, 4500],
  },
];
export const agregados = [
  { id: 'choclo', precio: 800, nombre: { es: 'Choclo', ay: 'Tunqu', en: 'Corn', pt: 'Milho' } },
  {
    id: 'cebolla',
    precio: 800,
    nombre: { es: 'Cebolla', ay: 'Siwulla', en: 'Onion', pt: 'Cebola' },
  },
  {
    id: 'morron',
    precio: 800,
    nombre: { es: 'Morrón', ay: 'Pimentón', en: 'Bell pepper', pt: 'Pimentão' },
  },
  {
    id: 'albahaca',
    precio: 800,
    nombre: { es: 'Albahaca', ay: 'Albahaca', en: 'Basil', pt: 'Manjericão' },
  },
  {
    id: 'aceituna',
    precio: 800,
    nombre: { es: 'Aceituna', ay: 'Asituna', en: 'Olives', pt: 'Azeitonas' },
  },
  {
    id: 'pina',
    precio: 800,
    nombre: { es: 'Piña', ay: 'Achupaya', en: 'Pineapple', pt: 'Abacaxi' },
  },
  { id: 'jamon', precio: 1000, nombre: { es: 'Jamón', ay: 'Jamón', en: 'Ham', pt: 'Presunto' } },
  { id: 'tocino', precio: 1000, nombre: { es: 'Tocino', ay: 'Tocino', en: 'Bacon', pt: 'Bacon' } },
  {
    id: 'chorizo',
    precio: 1000,
    nombre: { es: 'Chorizo', ay: 'Aycha jipilla', en: 'Sausage', pt: 'Chorizo' },
  },
  {
    id: 'salame',
    precio: 1000,
    nombre: { es: 'Salame', ay: 'Salame', en: 'Salami', pt: 'Salame' },
  },
  {
    id: 'pepperoni',
    precio: 1000,
    nombre: { es: 'Pepperoni', ay: 'Pepperoni', en: 'Pepperoni', pt: 'Pepperoni' },
  },
  { id: 'palta', precio: 1200, nombre: { es: 'Palta', ay: 'Palta', en: 'Avocado', pt: 'Abacate' } },
  { id: 'queso', precio: 1200, nombre: { es: 'Queso', ay: 'Kisu', en: 'Cheese', pt: 'Queijo' } },
  {
    id: 'pollo',
    precio: 1200,
    nombre: { es: 'Pollo', ay: 'Aycha wallpa', en: 'Chicken', pt: 'Frango' },
  },
  {
    id: 'carne',
    precio: 1200,
    nombre: { es: 'Carne', ay: 'Aycha waka', en: 'Beef', pt: 'Carne bovina' },
  },
  { id: 'atun', precio: 1200, nombre: { es: 'Atún', ay: 'Atún', en: 'Tuna', pt: 'Atum' } },
];
export const categoriasConAgregados = ['pizzas', 'conos'];
export const tamanos = [
  {
    nombre: 'Individual 25 × 25 cm',
    precio: 5990,
    texto: {
      es: 'Cualquiera a elección.',
      ay: "Munata t'ant'a ajllisma.",
      en: 'Any pizza of your choice.',
      pt: 'Qualquer pizza à escolha.',
    },
  },
  {
    nombre: 'Familiar 38 × 38 cm',
    precio: null,
    texto: {
      es: 'Valor según carta.',
      ay: "Carta uñacht'ayat chaniparjama.",
      en: 'Price according to menu.',
      pt: 'Preço conforme o cardápio.',
    },
  },
];
export const completos = [
  {
    id: 'completo-talquino',
    nombre: {
      es: 'Completo Talquino',
      ay: 'Completo Talquino',
      en: 'Talquino hot dog',
      pt: 'Cachorro-quente Talquino',
    },
    precio: 2500,
  },
];
export const batidosClasicos = [
  {
    id: 'smoothie',
    nombre: {
      es: 'Smoothie',
      ay: 'Smoothie',
      en: 'Smoothie',
      pt: 'Smoothie',
    },
    precio: 4500,
  },
  {
    id: 'cafe-frappe',
    nombre: {
      es: 'Café frappé',
      ay: 'Café frappé',
      en: 'Frappé coffee',
      pt: 'Café frappé',
    },
    precio: 4500,
  },
  {
    id: 'milkshake',
    nombre: {
      es: 'Milkshake',
      ay: 'Milkshake',
      en: 'Milkshake',
      pt: 'Milkshake',
    },
    precio: 4500,
  },
  {
    id: 'granizado',
    nombre: {
      es: 'Granizado',
      ay: 'Granizado',
      en: 'Slush',
      pt: 'Raspadinha',
    },
    precio: 4000,
    ingredientes: {
      es: 'Sabores: piña, melón, sandía, limón, guayaba, mora, plátano, naranja, guanábana, frutilla, mango.',
      ay: 'Sabores: piña, melón, sandía, limón, guayaba, mora, plátano, naranja, guanábana, frutilla, mango.',
      en: 'Flavors: pineapple, melon, watermelon, lemon, guava, blackberry, banana, orange, soursop, strawberry, mango.',
      pt: 'Sabores: abacaxi, melão, melancia, limão, goiaba, amora, banana, laranja, graviola, morango, manga.',
    },
  },
];
export const bebidas = [
  {
    id: 'coca-cola-medio',
    nombre: {
      es: 'Coca-Cola ½ L',
      ay: 'Coca-Cola ½ L',
      en: 'Coca-Cola ½ L',
      pt: 'Coca-Cola ½ L',
    },
    precio: 2000,
  },
  {
    id: 'fanta-medio',
    nombre: {
      es: 'Fanta ½ L',
      ay: 'Fanta ½ L',
      en: 'Fanta ½ L',
      pt: 'Fanta ½ L',
    },
    precio: 2000,
  },
  {
    id: 'sprite-medio',
    nombre: {
      es: 'Sprite ½ L',
      ay: 'Sprite ½ L',
      en: 'Sprite ½ L',
      pt: 'Sprite ½ L',
    },
    precio: 2000,
  },
  {
    id: 'gatorade-litro',
    nombre: {
      es: 'Gatorade 1 L',
      ay: 'Gatorade 1 L',
      en: 'Gatorade 1 L',
      pt: 'Gatorade 1 L',
    },
    precio: 2500,
  },
  {
    id: 'agua-medio',
    nombre: {
      es: 'Agua ½ L',
      ay: 'Uma ½ L',
      en: 'Water ½ L',
      pt: 'Água ½ L',
    },
    precio: 1000,
  },
  {
    id: 'bebida-lata',
    nombre: {
      es: 'Bebida en lata',
      ay: 'Bebida en lata',
      en: 'Canned soft drink',
      pt: 'Refrigerante em lata',
    },
    precio: 1500,
  },
  {
    id: 'te-cafe-infusion',
    nombre: {
      es: 'Té de hoja, café o infusión',
      ay: 'Té de hoja, café o infusión',
      en: 'Loose-leaf tea, coffee or herbal tea',
      pt: 'Chá de folhas, café ou infusão',
    },
    precios: [1000, 1500, 2000, 3000],
  },
];
export const productos = {
  pizzas,
  conos,
  empanadas,
  completos,
  jugos,
  batidos,
  'batidos-clasicos': batidosClasicos,
  bebidas,
};
