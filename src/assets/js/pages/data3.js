
export function getProduct(productId){
  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId){
      matchingProduct = product;
    };

  });

  return matchingProduct;
}



// ===============================================
// Catálogo general de productos COMERBAS
// ===============================================

export const products = [
  //  TELEVISOR
  {
    id: "101",
    category: "audio_video",
    name: 'TV KALLEY SMART TV 32"',
    image: 'images/products/101.jpg',
    price: 550000,
    shortdescription: 'Kalley te trae el sistema operativo #1 de EEUU a Colombia',
    description:
      'Kalley Roku TV de 32" tiene una excelente calidad de imagen gracias a su pantalla HD y con su sonido Dolby Audio, está diseñado para que vivas una experiencia inmersiva. Con su sistema operativo Roku TV, navega sin esfuerzo. Disfruta de +5.000 apps y +100.000 películas y series para elegir, actualizaciones de software dos veces por año y desde el menú principal busca tu contenido favorito, puedes buscar por nombre de actor, director, título o género favorito. Menos vueltas, más contenido. ¡Cómpra tu Kalley Roku TV ahora!',
    features: [
      'Comandos de voz para mayor rapidez',
      'Búsqueda eficiente desde el menú principal',
      'Actualizaciones de software dos veces por año',
      'LED: proyecta imágenes con mayor contraste y de gran calidad'
    ],
    tags: ["mas-vendido", "recomendado1"]
  },

  {
    id: "102",
    category: "linea_blanca",
    name: 'Nevera No Frost CHALLENGER 231 Litros',
    image: 'images/products/NeveraNoFrostCHALLENGER231Litros.png',
    price: 1636900,
    description:
      'La Nevera CHALLENGER No Frost 231L mantiene tus alimentos frescos y organizados con eficiencia energética y un diseño moderno. Su sistema No Frost evita la formación de escarcha y ofrece un almacenamiento práctico para toda la familia.',
    features: [
      'Sistema No Frost (sin escarcha)',
      'Dispensador de agua',
      'Ahorro energético',
      'Diseño moderno en acero'
    ],
    tags: ["mas-vendido", "te-puede-interesar"]
  },

  {
    id: "103",
    category: "audio_video",
    name: 'TV CHALLENGER 40" Pulgadas 101 cm',
    image: 'images/products/TVCHALLENGER40Pulgadas101cm.png',
    price: 899900,
    description:
      'Disfruta tus películas y series con la máxima calidad de imagen en este televisor CHALLENGER de 40". Diseño compacto, funcional y con conectividad moderna para vivir una experiencia de entretenimiento total.',
    features: [
      'Resolución Full HD',
      'Diseño ultradelgado',
      'Entradas HDMI y USB',
      'Modo ahorro de energía'
    ],
    tags: ["mas-vendido", "recomendado1"]
  },

  {
    id: "104",
    category: "linea_blanca",
    name: 'Lavadora CHALLENGER Carga Superior 13 Kilos',
    image: 'images/products/LavadoraCHALLENGER.png',
    price: 1419900,
    description:
      'La Lavadora CHALLENGER Carga Superior 13 Kilos es perfecta para el hogar moderno. Con programas automáticos y ahorro de agua, garantiza un lavado eficiente con el menor consumo energético.',
    features: [
      'Capacidad de 13 kg',
      'Programas automáticos de lavado',
      'Ahorro de agua y energía',
      'Panel digital fácil de usar'
    ],
    tags: ["mas-vendido", "recomendado1"]
  },

  //  AUDIO
  {
    id: "201",
    category: "audio_video",
    name: 'Minicomponente LG XBOOM RNC9 1800W Negro Torre de Sonido',
    image: 'images/products/minicomponenteLg.png',
    price: 1349900,
    description:
      'El minicomponente LG XBOOM RNC9 te ofrece una potencia increíble para animar cualquier reunión. Con efectos de DJ, luces LED y conectividad Bluetooth, lleva la música a otro nivel.',
    features: [
      '1800W de potencia',
      'Efectos de DJ y luces LED',
      'Bluetooth y USB dual',
      'Control desde app móvil'
    ],
    tags: ["recomendado1"]
  },

  {
    id: "202",
    category: "audio_video",
    name: 'Minicomponente SAMSUNG MX-T70 1500W Negro Torre de Sonido',
    image: 'images/products/minicomponentesamsung.png',
    price: 1636900,
    description:
      'Vive la experiencia de sonido envolvente con el minicomponente Samsung MX-T70. Con 1500W de potencia y diseño de torre, disfrutarás tus canciones favoritas con la máxima intensidad.',
    features: [
      '1500W RMS de potencia',
      'Modo Bass Booster',
      'Bluetooth y USB',
      'Luces LED multicolor'
    ],
    tags: ["mas-vendido"]
  },

  //  CELULARES
  {
    id: "301",
    category: "celulares",
    name: 'Celular MOTOROLA Edge 60 Fusion 256GB 5G Verde',
    image: 'images/products/celularmotorola.png',
    price: 1349900,
    description:
      'Motorola Edge 60 Fusion combina potencia y elegancia. Su cámara de alta resolución y rendimiento 5G te permiten capturar y compartir cada momento sin límites.',
    features: [
      'Pantalla pOLED 144Hz',
      'Cámara 50MP con OIS',
      'Batería de 4400mAh + carga rápida 68W',
      'Conectividad 5G'
    ],
    tags: ["recomendado2"]
  },

  {
    id: "302",
    category: "celulares",
    name: 'iPhone 13 128GB Blanco Estrella',
    image: 'images/products/iphone.png',
    price: 1636900,
    description:
      'El iPhone 13 combina potencia, diseño y eficiencia. Con su chip A15 Bionic y una cámara que captura cada detalle, es la herramienta perfecta para tu día a día.',
    features: [
      'Chip A15 Bionic',
      'Pantalla Super Retina XDR',
      'Cámara dual avanzada',
      '128GB de almacenamiento'
    ],
    tags: ["mas-vendido"]
  },

  //  LAVADORAS
  {
    id: "401",
    category: "linea_blanca",
    name: 'Lavadora WHIRLPOOL Carga Superior 20 Kilos Smart Action Gris',
    image: 'images/products/lavadorawhirpool.png',
    price: 1349900,
    description:
      'Con tecnología Smart Action, esta lavadora Whirlpool de 20 kg ofrece lavado potente, ahorro de energía y máxima durabilidad para el cuidado de tus prendas.',
    features: [
      'Carga superior de 20 kg',
      'Tecnología Smart Action',
      'Motor silencioso y eficiente',
      'Panel digital táctil'
    ],
    tags: ["recomendado2", "te-puede-interesar"]
  },

  //  COCINA
  {
    id: "501",
    category: "linea_blanca",
    name: 'Estufa HACEB 4 Puestos Con Horno Gas Natural Romero 50 Torre Negro',
    image: 'images/products/estufahaceb.png',
    price: 1349900,
    description:
      'La estufa HACEB Romero 50 es ideal para tu hogar. Con 4 puestos, horno a gas y un diseño moderno que facilita la limpieza y el uso diario.',
    features: [
      '4 puestos + horno a gas',
      'Encendido automático',
      'Diseño moderno y resistente',
      'Ahorro de gas certificado'
    ],
    tags: ["recomendado2","te-puede-interesar"]
  },

  {
    id: "502",
    category: "linea_blanca",
    name: 'Estufa ABBA 4 Puestos Con Horno Gas Natural Negra',
    image: 'images/products/estufaabba.png',
    price: 1636900,
    description:
      'La estufa ABBA ofrece rendimiento y elegancia en tu cocina. Con materiales resistentes y horno eficiente para cocinar todo tipo de platos.',
    features: [
      '4 quemadores a gas',
      'Horno amplio con vidrio templado',
      'Diseño ergonómico',
      'Fácil limpieza'
    ],
    tags: ["mas-vendido", "te-puede-interesar"]
  }
];
