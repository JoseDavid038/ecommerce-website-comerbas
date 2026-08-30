export function getProduct(productId) {
  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  return matchingProduct;
}

// ===============================================
// Catálogo general de productos COMERBAS
// ===============================================

export const products = [
  {
    "id": "101",
    "category": "video",
    "name": "Televisor TCL 32\" Smart TV Google",
    "image": "images/products/101.webp",
    "price": 827885,
    "brand": "TCL",
    "isEnabled": true,
    "specs": { "size_value": 32, "unit": "pulgadas" },
    "shortdescription": "Televisor TCL serie S5K: Este TV combina la tecnología de imagen QLED con FHD. 32S5K.",
    "description": "Su avanzada pantalla QLED optimiza en tiempo real la precisión de colores y brillos. Disfruta de Dolby Audio para obtener la mejor calidad de sonido, el cual sumado con los diferentes modos de visualización como Video Juego, Deportes o Películas te brindara una experiencia sin igual. ¿Quieres reproducir el contenido de tu celular en tu TV? Con Google Cast lo puedes hacer, reproduce el contenido de tu celular en tu TV para un sonido y visión mas amplios. Recuerda son 2 años de garantía. ¡Compra el tuyo ya!",
    "features": [
      "Dolby Audio: Mejor calidad y claridad de sonido",
      "Google Cast: Refleja el contenido del celular en la TV",
      "Color, brillo y contraste mejorado con HDR10",
      "Modo de visualización múltiple: Video juegos, películas y deportes",
      "Excelente calidad: 2 años de garantia"
    ],
    "tags": ["mas-vendido"]
  },
  {
    "id": "102",
    "category": "video",
    "name": "Televisor KALLEY 40\"",
    "image": "images/products/102.webp",
    "price": 918931,
    "brand": "KALLEY",
    "isEnabled": false,
    "specs": { "size_value": 40, "unit": "pulgadas" },
    "shortdescription": "Kalley te ofrece una mezcla única de tecnología, entretenimiento y calidad a un precio increíble.40G200.",
    "description": "El Google TV de 40\" cuenta con una increíble pantalla Full HD con compatibilidad HDR 10 para disfrutar de tu contenido favorito con muchos más colores. Vive una experiencia envolvente e inmersiva con su tecnología de Dolby Audio y activa el asistente de voz desde tu control remoto. Su sistema operativo Google TV cuenta con +10.000 apps, con recomendados para cada perfil de usuario según sus preferencias y con perfil recomendado para niños.¡Cómpralo ya y vive la evolución en tu Kalley TV!",
    "features": [
      "Tecnología HDR10",
      "+10.000 apps y juegos en un menú simple y fácil de usar",
      "Usa comandos de voz para controlar tu TV (Google Assistant)",
      "Puedes crear perfiles dedicados para niños personalizables"
    ],
    "tags": []
  },
  {
    "id": "103",
    "category": "video",
    "name": "Televisor PANASONIC 43\"",
    "image": "images/products/103.webp",
    "price": 1206431,
    "brand": "PANASONIC",
    "isEnabled": false,
    "specs": { "size_value": 43, "unit": "pulgadas" },
    "shortdescription": "La serie de TV NS600 de PANASONIC te brinda una imagen de alta calidad.43NS600.",
    "description": "Su tecnología Vivid Digital Pro, está diseñada para mejorar tu experiencia visual brindando tonos de piel naturales, mejorando el brillo y agudizando los detalles de las imágenes. Agrega esto con la capacidad de disfrutar todo tu contenido favorito gracias al sistema operativo Google TV, y ¡Tendrás un televisor de alta tecnología japonesa que se adapta a las preferencias de toda la familia! ¡Compra el tuyo ya!",
    "features": [
      "Google TV: Streaming, música y mas Organizado para tu hogar",
      "Vivid Digital Pro tonos naturales, brillo y detalles agudos",
      "Chromecast & Airplay:Transmite desde otros dispositivos al Tv",
      "Bluetooth AudioLink: amplifica fácilmente el sonido de tu Tv"
    ],
    "tags": ["te-puede-interesar", "recomendado1"]
  },
  {
    "id": "104",
    "category": "video",
    "name": "Televisor CHALLENGER 43\"",
    "image": "images/products/104.webp",
    "price": 1137324,
    "brand": "CHALLENGER",
    "isEnabled": false,
    "specs": { "size_value": 43, "unit": "pulgadas" },
    "shortdescription": "Equipado con tecnologia LED, garantiza colores vibrantes y mayor eficiencia energética.",
    "description": "El televisor CHALLENGER de 43 pulgadas Google, el 43KG84, ofrece una excelente calidad de imagen con resolución Full HD, ideal para disfrutas contenidos en alta definición. Equipado con tecnologia LED, garantiza colores vibrantes y mayor eficiencia energética. Su diseño delgado y moderno se adapta a cualquier espacio. Además, cuenta con puertos HDMI y USB, permitiendo una conectividad sencilla con dispositivos externos. No esperes más y !AQUIERELO AHORA MISMO!",
    "features": [
      "Resolución Full HD para imágenes claras y nítidas",
      "Tecnologia LED, colores vibrantes y eficiencia energética",
      "Diseño delgado y moderno, adecuado para cualquier espacio",
      "Puertos HDMI y USB para fácil conectividad externa"
    ],
    "tags": []
  },
  {
    "id": "105",
    "category": "video",
    "name": "Televisor HYUNDAI 43\" Sistema Operativo Roku",
    "image": "images/products/105.webp",
    "price": 1010931,
    "brand": "HYUNDAI",
    "isEnabled": true,
    "specs": { "size_value": 43, "unit": "pulgadas" },
    "shortdescription": "Referencia: HYLED4325RiM",
    "description": "Hyundai Electronics trae para ti un sistema operativo que pone a tu alcance más de 5,000 apps, ademas inteligencia artifical integrada para una busqueda más personalizada y acertada. Resolucion HD,conectividad WIFI.Usa tu celular como control, activa la escucha privada- transmite el audio del tv a tu celular sin generar molestias y activa la busqueda inteligente ¡Compra el tuyo ahora!",
    "features": [
      "Sistema Operativo Roku",
      "Actualización periodica desde casa matriz",
      "Buscador con inteligencia artificial",
      "Transmite el audio de tu tv directamente a tu celular"
    ],
    "tags": ["mas-vendido"]
  },
  {
    "id": "106",
    "category": "video",
    "name": "Televisor SAMSUNG 43\"",
    "image": "images/products/106.webp",
    "price": 1723931,
    "brand": "SAMSUNG",
    "isEnabled": true,
    "specs": { "size_value": 43, "unit": "pulgadas" },
    "shortdescription": "Disfruta de tu contenido en una asombrosa resolución hasta en 4K mejorada gracias a su procesador con inteligencia artificial.43Q7F.",
    "description": "Junto a la tecnología de punto cuántico real recibes un volumen de color al 100% que entrega más de mil millones de colores que se mantienen fieles (Colores certificados por Pantone), incluso en las escenas más brillantes que permiten apreciar cada hermoso matiz de color con increíble precisión. Siéntete en medio de cada película con sonido virtual envolvente 3D que sigue la acción. ¡Compra tu TV QLED con IA ahora!",
    "features": [
      "Quantum Dot: Volumen de color al 100 % optimizado con IA",
      "Multi View: divide la pantalla y duplica tu entretenimiento",
      "Motion Xcelerator: mejora la fluidez de la imagen en directo",
      "Tú experiencia y datos protegidos por Samsung Knox Security"
    ],
    "tags": []
  },
  {
    "id": "107",
    "category": "video",
    "name": "Televisor TCL 43\"",
    "image": "images/products/107.webp",
    "price": 1149885,
    "brand": "TCL",
    "isEnabled": true,
    "specs": { "size_value": 43, "unit": "pulgadas" },
    "shortdescription": "TV TCL serie S5K: Este TV combina la tecnología de imagen QLED con FHD. 43S5K Smart TV Google",
    "description": "Su avanzada pantalla QLED optimiza en tiempo real la precisión de colores y brillos. Disfruta de Dolby Audio para obtener la mejor calidad de sonido, el cual sumado con los diferentes modos de visualización como Video Juego, Deportes o Películas te brindara una experiencia sin igual. ¿Quieres reproducir el contenido de tu celular en tu TV? Con Google Cast lo puedes hacer, reproduce el contenido de tu celular en tu TV para un sonido y visión mas amplios. Recuerda son 2 años de garantía. ¡Compra el tuyo ya!",
    "features": [
      "Dolby Audio: Mejor calidad y claridad de sonido",
      "Google Cast: Refleja el contenido del celular en la TV",
      "Color, brillo y contraste mejorado con HDR10",
      "Modo de visualización múltiple: Video juegos, películas y deportes",
      "Excelente calidad: 2 años de garantia"
    ],
    "tags": [""]
  },
  {
    "id": "108",
    "category": "video",
    "name": "Televisor TCL 50\"",
    "image": "images/products/108.webp",
    "price": 1608931,
    "brand": "TCL",
    "isEnabled": false,
    "specs": { "size_value": 50, "unit": "pulgadas" },
    "shortdescription": "El TV ideal para tu hogar es de TCL serie V6C. 50V6C 4K-UHD Smart TV Google.",
    "description": "Su tecnología HDR10+ y el procesador AiPQ con inteligencia artificial, te ofrece colores vibrantes con la mejor resolución y brillo en tiempo real, lo cual sumado a la certificación de sonido Dolby Audio te dará una excelente fidelidad de sonido, diálogos más claros y sonidos más reales para una experiencia audio visual sin igual. ¿Amante de la acción y los deportes? Su tecnología MEMC siempre te dará imágenes fluidas y sin desenfoques para que disfrutes al máximo. Recuerda son 2 años de garantía. ¡Compra el tuyo ya!",
    "features": [
      "Inteligencia artificial ajustes automático en tiempo real",
      "Fidelidad de sonido con Dolby Audio",
      "MEMC: Imágenes sin desenfoque",
      "Color, brillo y contraste superior con HDR10+",
      "Excelente calidad: 2 años de garantia"
    ],
    "tags": [""]
  },
  {
    "id": "109",
    "category": "video",
    "name": "Televisor TCL 55\"",
    "image": "images/products/109.webp",
    "price": 1724885,
    "brand": "TCL",
    "isEnabled": true,
    "specs": { "size_value": 55, "unit": "pulgadas" },
    "shortdescription": "El TV ideal para tu hogar es de TCL serie V6C. 55V6C 4K-UHD Smart TV Google",
    "description": "Su tecnología HDR10+ y el procesador AiPQ con inteligencia artificial, te ofrece colores vibrantes con la mejor resolución y brillo en tiempo real, lo cual sumado a la certificación de sonido Dolby Audio te dará una excelente fidelidad de sonido, diálogos más claros y sonidos más reales para una experiencia audio visual sin igual. ¿Amante de la acción y los deportes? Su tecnología MEMC siempre te dará imágenes fluidas y sin desenfoques para que disfrutes al máximo. Recuerda son 2 años de garantía. ¡Compra el tuyo ya!",
    "features": [
      "Inteligencia artificial ajustes automático en tiempo real",
      "Fidelidad de sonido con Dolby Audio",
      "MEMC: Imágenes sin desenfoque",
      "Color, brillo y contraste superior con HDR10+",
      "Excelente calidad: 2 años de garantia"
    ],
    "tags": [""]
  },
  {
    "id": "110",
    "category": "video",
    "name": "Televisor CHALLENGER 40\"",
    "image": "images/products/110.webp",
    "price": 965885,
    "brand": "CHALLENGER",
    "isEnabled": true,
    "specs": { "size_value": 40, "unit": "pulgadas" },
    "shortdescription": "Referencia: 40KG90 FHD LED Smart TV Google",
    "description": "El televisor CHALLENGER FHD 40KG90 BT GOOGLETV T2 te conecta con la mejor experiencia de entretenimiento gracias a su pantalla Full HD de 40 pulgadas, donde cada detalle cobra vida con colores más reales y brillo excepcional. Su sistema GOOGLE TV organiza tus contenidos favoritos para que disfrutes sin complicaciones, mientras el sonido Dolby envuelve cada escena.",
    "features": [
      "Pantalla Full HD con gran nitidez visual",
      "Sistema GOOGLE TV fácil e intuitivo",
      "Sonido Dolby que envuelve cada escena",
      "Conectividad WiFi 2.4G/5G y Bluetooth 5.1",
      "Chromecast para compartir desde tu móvil"
    ],
    "tags": ["Nuevo"]
  },
  {
    "id": "111",
    "category": "video",
    "name": "Televisor SAMSUNG 40\"",
    "image": "images/products/111.webp",
    "price": 1149885,
    "brand": "SAMSUNG",
    "isEnabled": true,
    "specs": { "size_value": 40, "unit": "pulgadas" },
    "shortdescription": "Referencia: 40Q5F FHD QLED Smart TV",
    "description": "Vive tus series y películas como si estuvieras dentro de la escena. Con colores vibrantes y sonido envolvente, el Samsung 40Q5F transforma tu sala en el mejor lugar para disfrutar.",
    "features": [
      "El favorito en Colombia, somos el #1 en tecnología QLED",
      "Colores certificados por Pantone",
      "100% libre de cadmio",
      "Tus datos protegidos con Knox Security"
    ],
    "tags": ["Nuevo"]
  },
  {
    "id": "112",
    "category": "video",
    "name": "Televisor HYUNDAI 40\"",
    "image": "images/products/112.webp",
    "price": 872931,
    "brand": "HYUNDAI",
    "isEnabled": false,
    "specs": { "size_value": 40, "unit": "pulgadas" },
    "shortdescription": "Referencia: HYLED4027RiM FHD LED Smart TV Roku",
    "description": "Hyundai Electronics trae para ti un sistema operativo que pone a tu alcance más de 5,000 apps, ademas inteligencia artifical integrada para una busqueda más personalizada y acertada. Resolucion FHD, conectividad WIFI.",
    "features": [
      "Sistema Operativo Roku TV",
      "Resolución Full HD",
      "Conectividad WiFi",
      "Usa tu celular como control remoto",
      "Escucha privada a través del celular"
    ],
    "tags": ["Nuevo"]
  },
  {
    "id": "113",
    "category": "video",
    "name": "Televisor TCL 43\"",
    "image": "images/products/113.webp",
    "price": 1263931,
    "brand": "TCL",
    "isEnabled": false,
    "specs": { "size_value": 43, "unit": "pulgadas" },
    "shortdescription": "El TV ideal para tu hogar es de TCL serie V6C. 43V6C 4K-UHD Smart TV Google",
    "description": "Su tecnología HDR10+ y el procesador AiPQ con inteligencia artificial, te ofrece colores vibrantes con la mejor resolución y brillo en tiempo real. Tecnología MEMC para imágenes fluidas.",
    "features": [
      "Inteligencia artificial ajustes automático en tiempo real",
      "Fidelidad de sonido con Dolby Audio",
      "MEMC: Imágenes sin desenfoque",
      "Color, brillo y contraste superior con HDR10+",
      "Excelente calidad: 2 años de garantia"
    ],
    "tags": ["Nuevo"]
  },
  {
    "id": "114",
    "category": "video",
    "name": "Televisor TCL 50\"",
    "image": "images/products/114.webp",
    "price": 1378931,
    "brand": "TCL",
    "isEnabled": false,
    "specs": { "size_value": 50, "unit": "pulgadas" },
    "shortdescription": "TV TCL serie S5K: Este TV combina la tecnología de imagen QLED con FHD. 50S5K FHD QLED Smart TV Google.",
    "description": "Su avanzada pantalla QLED optimiza en tiempo real la precisión de colores y brillos. Disfruta de Dolby Audio para obtener la mejor calidad de sonido y diferentes modos de visualización.",
    "features": [
      "QLED: Imágenes y colores como en la vida real",
      "Dolby Audio: Mejor calidad y claridad de sonido",
      "Google Cast: Refleja el contenido del celular en la TV",
      "Color, brillo y contraste mejorado con HDR10",
      "Modo de visualización múltiple: Video juegos, películas y deportes"
    ],
    "tags": ["Nuevo"]
  },
  {
    "id": "115",
    "category": "video",
    "name": "Televisor CHALLENGER 40\"",
    "image": "images/products/115.avif",
    "price": 804885,
    "brand": "CHALLENGER",
    "isEnabled": true,
    "specs": {
      "size_value": 40,
      "unit": "pulgadas"
    },
    "shortdescription": "CHALLENGER 40KR14 T2 FHD LED Smart TV Roku.",
    "description": "Su sistema inteligente te permite acceder rápidamente a aplicaciones, mientras su diseño compacto se adapta a tu hogar sin complicaciones. Vive una experiencia fluida, con imagen clara y sonido envolvente para cada momento. Disfrútalo hoy y cómpralo ahora.",
    "features": [
      "Pantalla FHD 40” con imagen clara y nítida",
      "Sistema Roku con apps y contenido fácil",
      "Sonido Dolby para mejor experiencia",
      "WiFi y AirPlay para conexión sin cables",
      "3 HDMI y 2 USB para conectar dispositivos"
    ],
    "tags": []
  },
  {
    "id": "116",
    "category": "video",
    "name": "Televisor CHALLENGER 32\"",
    "image": "images/products/116.avif",
    "price": 586385,
    "brand": "CHALLENGER",
    "isEnabled": true,
    "specs": {
      "size_value": 32,
      "unit": "pulgadas"
    },
    "shortdescription": "CHALLENGER 32KR14 T2 HD LED Smart TV Roku.",
    "description": "Su sistema inteligente te permite acceder rápidamente a aplicaciones, mientras su diseño compacto se adapta a tu hogar sin complicaciones. Vive una experiencia fluida, con imagen clara y sonido envolvente para cada momento. Disfrútalo hoy y cómpralo ahora.",
    "features": [
      "Pantalla HD 32” con imagen clara y nítida",
      "Sistema Roku con apps y contenido fácil",
      "Sonido Dolby para mejor experiencia",
      "WiFi y AirPlay para conexión sin cables",
      "3 HDMI y 2 USB para conectar dispositivos"
    ],
    "tags": []
  },
  {
    "id": "117",
    "category": "video",
    "name": "Televisor HYUNDAI 32\"",
    "image": "images/products/117.avif",
    "price": 620885,
    "brand": "HYUNDAI",
    "isEnabled": true,
    "specs": {
      "size_value": 32,
      "unit": "pulgadas"
    },
    "shortdescription": "HYLED3258QR HD QLED Smart TV Roku.",
    "description": "Disfruta de un sistema operativo intuitivo que te da acceso a más de 5.000 aplicaciones y a un mundo de entretenimiento ilimitado con solo un clic. Controla tu TV fácilmente desde tu smartphone y aprovecha la inteligencia artificial integrada, que te ofrece búsquedas más rápidas y personalizadas según tus gustos. Vive cada detalle y conéctate sin límites gracias a WiFi.",
    "features": [
      "Sistema Roku TV: Acceso rápido a sus aplicaciones favoritas",
      "Tencología QLED que mejora brillo y gama de colores",
      "Con la APP Roku controla todo desde tu smartphone"
    ],
    "tags": []
  },
  {
    "id": "118",
    "category": "video",
    "name": "Televisor KALLEY 40\"",
    "image": "images/products/118.avif",
    "price": 919885,
    "brand": "KALLEY",
    "isEnabled": true,
    "specs": {
      "size_value": 40,
      "unit": "pulgadas"
    },
    "shortdescription": "40GQ200 FHD QLED Smart TV Google",
    "description": "TV Kalley Full HD QLED cuenta con una increíble pantalla que, gracias a su tecnología de puntos cuánticos, te ofrece colores vibrantes y realistas. Con compatibilidad HDR 10, disfrutarás de tu contenido favorito con mayor detalle y contraste. Sumérgete en una experiencia envolvente con Dolby Audio y activa el asistente de voz desde tu control. Su sistema operativo Google TV tiene más de 10.000 apps, recomendaciones personalizadas y te permite controlar todos tus dispositivos inteligentes del hogar.",
    "features": [
      "QLED: Tecnología con colores más vibrantes y mayor brillo",
      "Dolby Audio: Sonido Envolvente",
      "Tecnología HDR10",
      "+10.000 apps y recomendaciones personalizadas",
      "Gran Respaldo con 2 años de Garantía"
    ],
    "tags": []
  },
  {
    "id": "119",
    "category": "video",
    "name": "Televisor SAMSUNG 43\"",
    "image": "images/products/119.avif",
    "price": 1552385,
    "brand": "SAMSUNG",
    "isEnabled": true,
    "specs": {
      "size_value": 43,
      "unit": "pulgadas"
    },
    "shortdescription": "43U8000H 4K-UHD LED Crystal Smart TV con IA",
    "description": "¡No es sólo ver televisión, es dejarte llevar por cada escena y disfrutar de verdad lo que estas viendo! Imágenes claras, colores que resaltan y un brillo que hace que todo se vea más vivo y natural. Con el televisor Crystal de Samsung cada detalle se siente mejor, cada momento se vuelve más especial y al final, lo que ves se convierte en algo que realmente disfrutas.",
    "features": [
      "Calidad 4k para ver lo que quieras",
      "Estilo, diseño delgado y resistente",
      "Sonido envolvente para una experiencia inmersiva",
      "Tus datos están protegidos con Knox Security"
    ],
    "tags": []
  },
  {
    "id": "120",
    "category": "video",
    "name": "Televisor KALLEY 43\"",
    "image": "images/products/120.avif",
    "price": 1069385,
    "brand": "KALLEY",
    "isEnabled": true,
    "specs": {
      "size_value": 43,
      "unit": "pulgadas"
    },
    "shortdescription": "43GQ200 FHD QLED Smart TV Google",
    "description": "¡Kalley te ofrece una mezcla de tecnología, entretenimiento y calidad a un precio increíble! TV Kalley Full HD QLED cuenta con una increíble pantalla que, gracias a su tecnología de puntos cuánticos, te ofrece colores vibrantes y realistas. Con compatibilidad HDR 10, disfrutarás de tu contenido favorito con mayor detalle y contraste. Sumérgete en una experiencia envolvente con Dolby Audio y activa el asistente de voz desde tu control. Su sistema operativo Google TV tiene más de 10.000 apps, recomendaciones personalizadas y te permite controlar todos tus dispositivos inteligentes del hogar.",
    "features": [
      "QLED: Tecnología con colores más vibrantes y mayor brillo",
      "Dolby Audio: Sonido Envolvente",
      "Tecnología HDR10",
      "+10.000 apps y recomendaciones personalizadas",
      "Gran Respaldo con 2 años de Garantía"
    ],
    "tags": []
  },
  {
    "id": "121",
    "category": "video",
    "name": "Televisor HYUNDAI 55\"",
    "image": "images/products/121.avif",
    "price": 1743285,
    "brand": "HYUNDAI",
    "isEnabled": true,
    "specs": {
      "size_value": 55,
      "unit": "pulgadas"
    },
    "shortdescription": "HYLED5528G 4K-UHD LED Smart TV Google",
    "description": "Convierte cada momento en una experiencia única con una calidad de imagen 4K UHD y un sonido que te envuelve. Accede a miles de aplicaciones con Google TV, controla el televisor con tu voz gracias al Asistente de Google y comparte contenido desde tu celular mediante Chromecast integrado. Su diseño sin bordes y la tecnología MEMC ofrecen una experiencia de visualización más moderna y fluida.",
    "features": [
      "Resolución 4K UHD con HDR10 y HLG.",
      "Google TV con tus apps favoritas.",
      "Control por voz con Asistente de Google.",
      "Dolby Audio para un sonido envolvente.",
      "Diseño sin bordes con tecnología MEMC."
    ],
    "tags": []
  },
  {
    "id": "122",
    "category": "video",
    "name": "Televisor SAMSUNG 50\"",
    "image": "images/products/122.avif",
    "price": 1839885,
    "brand": "SAMSUNG",
    "isEnabled": true,
    "specs": {
      "size_value": 50,
      "unit": "pulgadas"
    },
    "shortdescription": "50U8000H 4K-UHD LED Crystal Smart TV con IA",
    "description": "¡No es sólo ver televisión, es dejarte llevar por cada escena y disfrutar de verdad lo que estas viendo! Imágenes claras, colores que resaltan y un brillo que hace que todo se vea más vivo y natural. Con el televisor Crystal de Samsung cada detalle se siente mejor, cada momento se vuelve más especial y al final, lo que ves se convierte en algo que realmente disfrutas.",
    "features": [
      "Calidad 4k para ver lo que quieras",
      "Estilo, diseño delgado y resistente",
      "Sonido envolvente para una experiencia inmersiva",
      "Tus datos están protegidos con Knox Security"
    ],
    "tags": []
  },
  {
    "id": "201",
    "category": "audio",
    "name": "Torre de Sonido PANASONIC 300 Watts.",
    "image": "images/products/201.jfif",
    "price": 780931,
    "brand": "PANASONIC",
    "isEnabled": false,
    "specs": { "size_value": 300, "unit": "watts" },
    "shortdescription": "Medidas del Equipo de Audio (Ancho x Alto x Fondo) En Cm 26,5 x 60,6 x 27,2 Centímetros.",
    "description": "Al heredar el concepto de audio urbano, el SC-UA30 tiene un tamaño más compacto y permite una mayor libertad de transporte. A pesar de su tamaño, el UA30 cuenta con un sonido potente y claro más allá de su imaginación. La conexión a través de un teléfono inteligente mejora aún más la experiencia musical avanzada del SC-UA30. Conectar dos micrófonos permite a los usuarios disfrutar de Karaoke en casa.",
    "features": [
      "Full Karaoke con dos entradas para micrófono y puede disfrutarlo",
      "La aplicación MAX Juke Solicite canciones desde teléfono inteligente",
      "Sistema de audio compacto de alta potencia con sonido expansivo"
    ],
    "tags": ["", "recomendado1"]
  },
  {
    "id": "202",
    "category": "audio",
    "name": "Torre de Sonido SAMSUNG 500 Watts",
    "image": "images/products/202.webp",
    "price": 976431,
    "brand": "SAMSUNG",
    "isEnabled": false,
    "specs": { "size_value": 500, "unit": "watts" },
    "shortdescription": "Medidas del Equipo de Audio (Ancho x Alto x Fondo) En Cm 35,1 x 65,1 x 32,3 Centímetros.",
    "description": "Destaca el ritmo de tu fiesta con el exclusivo SAMSUNG Giga Party Audio MX-T50. Un minicomponente que amplía el área de sonido en forma bidireccional para que disfrutes una experiencia de sonido envolvente y más potente. Sé una estrella gracias al modo karaoke, conviértete en un DJ gracias a nuestra App exclusiva y conecta varios dispositivos para disfrutar tus canciones y playlists favoritas sin preocuparte si es por medio de cable o no. Que empiece la fiesta, ¡lleva el tuyo ahora!",
    "features": [
      "Sonido bidireccional, llena el espacio en su totalidad",
      "Modo Karaoke, agarra un micrófono y canta como una estrella",
      "Resistente al agua, despreocúpate de salpicaduras accidentales",
      "Giga Party Audio: App para controlar efectos de luz y sonido"
    ],
    "tags": ["te-puede-interesar"]
  },
  {
    "id": "203",
    "category": "audio",
    "name": "Minicomponente PANASONIC 650 Watts",
    "image": "images/products/203.jfif",
    "price": 838431,
    "brand": "PANASONIC",
    "isEnabled": false,
    "specs": { "size_value": 650, "unit": "watts" },
    "shortdescription": "Medidas del Equipo de Audio (Ancho x Alto x Fondo) En Cm\n91,4 x 42,2 x 25 Centímetros",
    "description": "Disfruta tu música con el increíble sonido del minicomponente PANASONIC SC-AKX520.| Este sistema de audio te ofrece un sonido claro y dinámico gracias a su Wilfred de 20 cm y su amplificador de 2 canales. Se vincula fácilmente a tu Smartphone a para poder compartir tus canciones favoritas. Tiene un diseño compacto y elegante, la unidad principal fue rediseñada recientemente bajando su altura para permitir una fácil colocación en cualquier lugar de la habitación, cuenta con iluminación a 3 colores para que brille en sincronía con la música. Crea el mejor ambiente con Panasonic ¡lleva el tuyo ahora!",
    "features": [
      "Amplificador digital de 2 canales, sonido claro y dinámico",
      "D Bass Beat ritmos son amplificados salida más potente",
      "Tecnología Bluetooth: reproduce tus playlists fácilmente",
      "2 entradas para micrófono: Disfruta del Karaoke en familia"
    ],
    "tags": []
  },
  {
    "id": "204",
    "category": "audio",
    "name": "Torre de Sonido LG 500 Watts",
    "image": "images/products/204.webp",
    "price": 976431,
    "brand": "LG",
    "isEnabled": true,
    "specs": { "size_value": 500, "unit": "watts" },
    "shortdescription": "Medidas del Equipo de Audio (Ancho x Alto x Fondo) En Cm\n33 x 68,5 x 34,4 Centímetros",
    "description": "La torre de sonido LG XBOOM RNC5 cuenta con un potente sonido que da vida a todas tus reuniones y sus luces multicolores cambian al ritmo de la música aumentando las emociones de la fiesta. Adicional, podrás disfrutar de la función Karaoke Star la cual ajusta el volumen de la música y del micrófono por separado, y ahora que todo está listo cantarás con todas tus fuerzas las canciones favoritas. Tambien podrás conectar el RNC5 a tu TV LG a través de Bluetooth para experimentar un sonido más potente. ¡Lleva el tuyo ahora!",
    "features": [
      "Super Bass Boost: Proporciona potentes sonidos",
      "Iluminación Multicolor que cambia al ritmo de la música",
      "DJ App & DJ Pad: Contrólalo desde la pista de baile",
      "Karaoke Star: Para que puedas cantar fuerte y claro"
    ],
    "tags": []
  },
  {
    "id": "205",
    "category": "audio",
    "name": "Torre de Sonido SONY 200 Watts",
    "image": "images/products/205.webp",
    "price": 1091431,
    "brand": "SONY",
    "isEnabled": false,
    "specs": { "size_value": 200, "unit": "watts" },
    "shortdescription": "Medidas del Equipo de Audio (Ancho x Alto x Fondo) En Cm\n26,9 x 56,4 x 29,4 Centímetros",
    "description": "El parlante con función de batería SRS-XV500 en color negro es el ideal para disfrutar de la música bien sea dentro o fuera de casa gracias a que tiene batería integrada y se puede usar por varias horas sin necesidad de conectar a la energía. Permite divertirse con familia y amigos usando las entradas de micrófono para hacer karaoke o incluso conectar una guitarra. Tiene un tamaño y peso que lo hacen fácil de mover, adquiere el tuyo ahora!",
    "features": [
      "X-Balanced Speaker Unit para un sonido potente",
      "Resistencia a salpicaduras de agua IPX4",
      "Facil uso gracias a su panel táctil iluminado",
      "Control mediante la aplicación Music Center"
    ],
    "tags": []
  },
  {
    "id": "206",
    "category": "audio",
    "name": "Torre de Sonido LG 1000 Watts",
    "image": "images/products/206.webp",
    "price": 1298431,
    "brand": "LG",
    "isEnabled": true,
    "specs": { "size_value": 1000, "unit": "watts" },
    "shortdescription": "Medidas del Equipo de Audio (Ancho x Alto x Fondo) En Cm\n33 x 78,5 x 34,4 Centímetros",
    "description": "La torre de sonido LG XBOOM RNC7 cuenta con un potente sonido que da vida a todas tus reuniones y sus luces multicolores cambian al ritmo de la música aumentando las emociones de la fiesta. Adicional, podrás disfrutar de la función Karaoke Star la cual ajusta el volumen de la música y del micrófono por separado, y ahora que todo está listo cantarás con todas tus fuerzas las canciones favoritas. Tambien podrás conectar el RNC7 a tu TV LG a través de Bluetooth para experimentar un sonido más potente. ¡Lleva el tuyo ahora!",
    "features": [
      "Super Bass Boost: Proporciona potentes sonidos",
      "Iluminación Multicolor que cambia al ritmo de la música",
      "DJ App & DJ Pad: Contrólalo desde la pista de baile",
      "Karaoke Star: Para que puedas cantar fuerte y claro"
    ],
    "tags": []
  },
  {
    "id": "207",
    "category": "audio",
    "name": "Parlante PANASONIC 320W",
    "image": "images/products/207.avif",
    "price": 1149885,
    "brand": "PANASONIC",
    "isEnabled": true,
    "specs": {"size_value": 320, "unit": "watts"},
    "shortdescription": "SC-BMAX30PPK Negro IPX4 320W",
    "description": "¡La fiesta va contigo con el SC-BMAX30PPK de PANASONIC! Disfruta un sonido potente con bajos increíbles, luces tipo discoteca y hasta 14 horas de batería. Con Bluetooth 5.3, USB, entradas para micrófono y guitarra, arma karaoke o conviértete en el DJ de la reunión. Su diseño portátil con ruedas y resistencia a salpicaduras IPX4 lo hacen perfecto para playa, patio o cualquier aventura.",
    "features": [
      "Bass Reflex Bajos potentes y nítidos",
      "IPX4 Resistencia a salpicaduras",
      "Batería incorporada de gran capacidad",
      "Iluminación para todos los gustos"
    ],
    "tags": []
  },
  {
    "id": "208",
    "category": "audio",
    "name": "Minicomponente PANASONIC 2000 Watts",
    "image": "images/products/208.avif",
    "price": 1034885,
    "brand": "PANASONIC",
    "isEnabled": true,
    "specs": {
      "size_value": 2000,
      "unit": "watts"
    },
    "shortdescription": "AKX730 2000 Watts Negro Equipo de Sonido",
    "description": "Sonido Claro y Potente, Además el AKX730 cuenta con un diseño compacto y elegante. Un súper woofer de 20 cm y un biamplificador digital de 2 canales producen un sonido claro y dinámico. Con el teléfono inteligente permite compartir fácilmente sus canciones favoritas y los altavoces de nuevo diseño y MAX Dance Iluminación con efectos de luz versátiles aumentarán aún más la escena de tu fiesta.",
    "features": [
      "Super Woofer de 20 cm: Bajos potentes y sonido claro",
      "Amplificador digital de 2 canales: sonido claro y dinámico",
      "2 entradas para micrófono: Disfruta del Karaoke en familia",
      "Ecualizador latino preestablecido:disfrite del mejor sonido",
      "Tecnología Bluetooth: reproduce tus playlists fácilmente"
    ],
    "tags": []
  },
  {
    "id": "209",
    "category": "audio",
    "name": "Minicomponente SONY 200Watts",
    "image": "images/products/209.avif",
    "price": 1034885,
    "brand": "SONY",
    "isEnabled": true,
    "specs": {
      "size_value": 200,
      "unit": "watts"
    },
    "shortdescription": "SRS-XV500 200Watts Negro Torre de Sonido",
    "description": "El parlante con función de batería SRS-XV500 en color negro es el ideal para disfrutar de la música bien sea dentro o fuera de casa gracias a que tiene batería integrada y se puede usar por varias horas sin necesidad de conectar a la energía. Permite divertirse con familia y amigos usando las entradas de micrófono para hacer karaoke o incluso conectar una guitarra. Tiene un tamaño y peso que lo hacen fácil de mover.",
    "features": [
      "X-Balanced Speaker Unit para un sonido potente",
      "Resistencia a salpicaduras de agua IPX4",
      "Facil uso gracias a su panel táctil iluminado",
      "Control mediante la aplicación Music Center"
    ],
    "tags": []
  },
  {
    "id": "301",
    "category": "celulares",
    "name": "Celular SAMSUNG Galaxy A17 256GB 4G",
    "image": "images/products/301.webp",
    "price": 1148908,
    "brand": "SAMSUNG",
    "isEnabled": true,
    "specs": { "size_value": 256, "unit": "GB" },
    "shortdescription": "Tamaño Pantalla: 6.7 Pulgadas, Memoria Interna: 256 GB, Memoria RAM: 8 GB, Color: Azul. ",
    "description": "Disfruta el SAMSUNG Galaxy A17 LTE con un diseño moderno y delgado con cámaras que capturan cada detalle con brillo y nitidez. Su potente procesador y pantalla fluida te permiten sumergirte en juegos y contenido sin pausas. Cuenta con protección contra rayones, polvo y salpicaduras. ¡Lleva ahora mismo un equipo diseñado para durar, rendir y acompañarte a donde vayas!",
    "features": [
      "Procesador G99 para alto rendimiento diario",
      "Cámaras 50MP con mayor brillo y nitidez",
      "Proteccion IP54 y vidrio templado duradero"
    ],
    "tags": [""]
  },
  {
    "id": "302",
    "category": "celulares",
    "name": "Celular REDMI 15 256GB 4G Negro",
    "image": "images/products/302.webp",
    "price": 918908,
     "brand": "REDMI",
    "isEnabled": true,
    "specs": { "size_value": 256, "unit": "GB" },
    "shortdescription": "Tamaño Pantalla\n6.9 Pulgadas\nMemoria Interna\n256 GB\nMemoria RAM\n8 GB",
    "description": "REDMI 15 está pensado para quienes necesitan confianza y estilo en cada momento. Su batería de 7.000 mAh te da la libertad de pasar el día sin preocuparte por el enchufe, mientras su cámara dual con IA convierte cada foto en un recuerdo lleno de vida. Con resistencia IP64 contra polvo y salpicaduras y una pantalla amplia que mejora tu entretenimiento, este equipo se adapta a tu ritmo diario. Llévalo hoy y vive con tranquilidad y estilo.",
    "features": [
      "Batería de 7.000 mAh que dura más de un día",
      "Cámara dual con IA para fotos más creativas",
      "Resistencia IP64 contra polvo y agua",
      "Pantalla fluida con tasa de 144Hz para mayor claridad"
    ],
    "tags": ["recomendado1"]
  },
  {
    "id": "303",
    "category": "celulares",
    "name": "Celular SAMSUNG Galaxy A36 256GB 5G",
    "image": "images/products/303.webp",
    "price": 1321408,
     "brand": "SAMSUNG",
    "isEnabled": false,
    "specs": { "size_value": 256, "unit": "GB" },
    "shortdescription": "Tamaño Pantalla\n6.7 Pulgadas\nMemoria Interna\n256 GB\nMemoria RAM\n8 GB",
    "description": "El Galaxy A36 5G, está diseñado para que te conectes donde estés. Captura fotos increíbles con su cámara principal de 50 MP y frontal de 12 MP, potenciadas por Inteligencia Artificial. Además, prueba una manera diferente y eficiente de buscar en un smartphone y encuéntralo ¡solo dibujando un círculo! Disfruta de una experiencia AMOLED DE 6.7\" FHD+ y un potente procesador Snapdragon 6 Gen3 para un rendimiento superior. Con batería de 5000 mAh y carga rápida de 45W, nunca te quedarás sin energía. ¡Compra el Tuyo Ahora!",
    "features": [
      "Tasa de refresco 120Hz Desplazamientos suaves y sin retrasos",
      "Batería 5000mAh Energía duradera para largas jornadas",
      "Edición de fotos y videos con Inteligencia Artificial",
      "Plataforma de Seguridad Knox Vault para proteger tus datos"
    ],
    "tags": []
  },
  {
    "id": "304",
    "category": "celulares",
    "name": "Celular MOTOROLA Edge 50 Fusion 5G",
    "image": "images/products/304.webp",
    "price": 1608908,
     "brand": "MOTOROLA",
    "isEnabled": false,
    "specs": { "size_value": 512, "unit": "GB" },
    "shortdescription": "Tamaño Pantalla\n6.7 Pulgadas\nMemoria Interna\n512 GB\nMemoria RAM\n12 GB\nColor: Rosado.",
    "description": "Presentamos MOTOROLA Edge 50 Fusion. Con un diseño bellamente elaborado con protección al agua, está diseñado para durar. Prepárate con la increíble velocidad de carga TurboPower, ademas, captura fotos y videos nítidos y brillantes, con 32 veces más píxeles de enfoque. Disfruta de una pantalla cinematográfica con sonido Dolby Atmos® y potencia tu día con un procesador Snapdragon® , RAM Boost y toneladas de almacenamiento. Motorola Edge 50 Fusion es tu teléfono inteligente hecho arte. Adquiere el tuyo aqui!",
    "features": [
      "Materiales sofisticados y IP68",
      "Batería para todo tu día con TurboPower de 68 W",
      "Maxima proteccion con Corning® Gorilla® Glass",
      "Fotografias increibles gracias al sensor Sony con IA"
    ],
    "tags": []
  },
  {
    "id": "305",
    "category": "celulares",
    "name": "Celular POCO X7 256GB 5G Plateado",
    "image": "images/products/305.webp",
    "price": 1259135,
     "brand": "POCO",
    "isEnabled": false,
    "specs": { "size_value": 256, "unit": "GB" },
    "shortdescription": "Tamaño Pantalla\n6.67 Pulgadas\nMemoria Interna\n256 GB\nMemoria RAM\n8 GB",
    "description": "POCO X7 está pensado para quienes exigen más en cada uso. Su batería de 5110 mAh resiste las sesiones más largas, mientras la pantalla AMOLED 120Hz realza imágenes y juegos con fluidez total. Su cámara triple con IA captura escenas con calidad profesional y su diseño premium refleja tu estilo. Un smartphone gamer y versátil que no conoce límites. Hazlo tuyo y sube de nivel.",
    "features": [
      "Pantalla AMOLED 120Hz para gaming y entretenimiento",
      "Batería de 5110 mAh con carga rápida de 67W",
      "Procesador Dimensity 5G para máximo rendimiento",
      "Cámara triple de 64 MP con IA para fotos profesionales"
    ],
    "tags": []
  },
  {
    "id": "306",
    "category": "celulares",
    "name": "Celular REALME 12+ 256GB 5G Verde",
    "image": "images/products/306.webp",
    "price": 1321408,
     "brand": "REALME",
    "isEnabled": false,
    "specs": { "size_value": 256, "unit": "GB" },
    "shortdescription": "Tamaño Pantalla\n6.67 Pulgadas\nMemoria Interna\n256 GB\nMemoria RAM\n8 GB",
    "description": "El realme 12+ Maestro en retrato es un verdadero + en el segmento. Ofrece un + en fotografía gracias a su modulo alimentado por el sensor SONY LYT 600, categorizado por ser de gama alta. Además, su diseño con bordes en PVD encaja perfectamente con su cubierta trasera en cuero vegano y su inspiración en relojería de lujo dan un toque de exclusividad. El recalentamiento no será problema gracias a su sistema de refrigeración a vapor y su potente procesador MTK Dimensity 7050 soportado por 256 GB de ROM y hasta 16 Gb de RAM disfrutarás la mejor experiencia de fluidez. Adquiere el Tuyo Ahora!",
    "features": [
      "Más en fotografía de alta calidad con sensor SONY LYT 600 OIS",
      "Más en rendimiento: Procesador MediaTek Dimensity 5G de 6nm",
      "Más en multimedia: Pantalla AMOLED 120Hz y Dolby Atmos",
      "Más en velocidad de carga 67W carga rápida"
    ],
    "tags": []
  },
  {
    "id": "307",
    "category": "celulares",
    "name": "Celular HONOR X8c 256GB 5G Gris",
    "image": "images/products/307.webp",
    "price": 1723908,
     "brand": "HONOR",
    "isEnabled": false,
    "specs": { "size_value": 256, "unit": "GB" },
    "shortdescription": "Tamaño Pantalla\n6.7 Pulgadas\nMemoria Interna\n256 GB\nMemoria RAM\n8 GB",
    "description": "El HONOR X8c 5G combina tecnología avanzada con inteligencia artificial para una experiencia optimizada. Su pantalla AMOLED ofrece una visualización fluida y colores vibrantes. La cámara principal de 108MP, equipada con HONOR AI, permite capturas precisas y estabilización óptica para fotos nocturnas nítidas. Además, el Borrador IA elimina elementos no deseados de las imágenes. Su batería de 5230 mAh garantiza autonomía prolongada, mientras que su procesador optimiza el rendimiento y durabilidad. Adquiere el Tuyo Ahora!",
    "features": [
      "Aprovecha el Boton rapido de Inteligencia artificial",
      "Disfruta de toda su pantalla, con 3500 Nits de brillo",
      "Bateria para todo el dia de 5320 mAh carga rapida",
      "4 tecnologias de IA que mejoran todas tus fotos y videos"
    ],
    "tags": []
  },
  {
    "id": "308",
    "category": "celulares",
    "name": "Celular VIVO Y21D 256GB 4G Morado",
    "image": "images/products/308.webp",
    "price": 1034885,
     "brand": "VIVO",
    "isEnabled": false,
    "specs": { "size_value": 256, "unit": "GB" },
    "shortdescription": "Tamaño Pantalla\n6.68 Pulgadas\nMemoria Interna\n256 GB\nMemoria RAM\n6 GB",
    "description": "Con el VIVO Y21D lila todo se ve y se siente mejor. Disfruta una pantalla amplia y nítida para maratonear series, jugar y scrollear sin parar. Sus cámaras con IA capturan retratos y fotos nocturnas con detalle, listas para subir sin edición. La batería aguanta el día completo y con carga rápida vuelves al 100% en poco tiempo. Rendimiento fluido para tus apps y espacio de sobra para fotos, música y clases. Ligero, moderno y confiable el Y21D te acompaña a tu ritmo. ¡Llévalo ahora con audífonos incluidos y vive la música a tu ritmo!",
    "features": [
      "Carga rápida 44 W batería lista en pocos minutos.",
      "Cámara 50 MP fotos nítidas con gran detalle.",
      "Certificación IP68/IP69 resistente al agua y polvo."
    ],
    "tags": []
  },
  {
    "id": "309",
    "category": "celulares",
    "name": "Celular TECNO Spark 40Pro+ 256GB 4G",
    "image": "images/products/309.webp",
    "price": 1034885,
     "brand": "TECNO",
    "isEnabled": true,
    "specs": { "size_value": 256, "unit": "GB" },
    "shortdescription": "Tamaño Pantalla\n6.78 Pulgadas\nMemoria Interna\n256 GB\nMemoria RAM\n8 GB\nColor: Blanco.",
    "description": "Tan delgado como un lápiz, este smartphone se adapta a tu día con un diseño que llama la atención por su elegancia. Su pantalla curva hace que todo se vea más fluido y envolvente, ideal para disfrutar tus series, redes o juegos como nunca antes. Se carga rápido y sin cables, para que no pierdas tiempo y sigas con lo que más te gusta. Además, es resistente a salpicaduras y al polvo, perfecto para acompañarte en cualquier momento. Un celular que se siente tan bien como se ve. ¡Compra el Tuyo Ahora!",
    "features": [
      "Diseño ultra delgado de solo 6,49 mm, liviano y cómodo",
      "Pantalla curva y fluida, ideal para ver series y jugar",
      "Carga inalámbrica rápida, sin cables ni demoras",
      "Cámara de 50 MP con IA, fotos claras en todo momento"
    ],
    "tags": []
  },
  {
    "id": "310",
    "category": "celulares",
    "name": "Celular TECNO Spark 40Pro+ 256GB 4G",
    "image": "images/products/310.webp",
    "price": 1034885,
     "brand": "TECNO",
    "isEnabled": true,
    "specs": { "size_value": 256, "unit": "GB" },
    "shortdescription": "Tamaño Pantalla\n6.78 Pulgadas\nMemoria Interna\n256 GB\nMemoria RAM\n8 GB\nColor: Negro.",
    "description": "Tan delgado como un lápiz, este smartphone se adapta a tu día con un diseño que llama la atención por su elegancia. Su pantalla curva hace que todo se vea más fluido y envolvente, ideal para disfrutar tus series, redes o juegos como nunca antes. Se carga rápido y sin cables, para que no pierdas tiempo y sigas con lo que más te gusta. Además, es resistente a salpicaduras y al polvo, perfecto para acompañarte en cualquier momento. Un celular que se siente tan bien como se ve. ¡Compra el Tuyo Ahora!",
    "features": [
      "Diseño ultra delgado de solo 6,49 mm, liviano y cómodo",
      "Pantalla curva y fluida, ideal para ver series y jugar",
      "Carga inalámbrica rápida, sin cables ni demoras",
      "Cámara de 50 MP con IA, fotos claras en todo momento"
    ],
    "tags": []
  },
  {
    "id": "311",
    "category": "celulares",
    "name": "Celular MOTOROLA G86 5G 256GB AZUL",
    "image": "images/products/311.webp",
    "price": 1114408,
     "brand": "MOTOROLA",
    "isEnabled": false,
    "specs": { "size_value": 256, "unit": "GB" },
    "shortdescription": "Tamaño Pantalla\n6.7 Pulgadas\nMemoria Interna\n256 GB\nMemoria RAM\n8 GB",
    "description": "Descubre el MOTOROLA G86 Con diseño sofisticado, materiales premium y resistencia que te acompaña en cada aventura. Disfruta una pantalla Super HD con Dolby Atmos®, cámara Sony LYTIA™ con moto AI y una poderosa batería con carga TurboPower™. Vive cada día con estilo, potencia y libertad. Haz de cada momento una experiencia única con el moto G86. Compra el tuyo ahora!",
    "features": [
      "Energía para todo el día y carga rápida cuando más lo necesitas",
      "Colores más vivos y detalles nítidos en cualquier entorno",
      "Usa tu equipo sin miedo a salpicaduras, lluvia o caídas",
      "Controla la pantalla incluso con las manos mojadas"
    ],
    "tags": []
  },
  {
    "id": "312",
    "category": "celulares",
    "name": "Celular SAMSUNG Galaxy A17 256GB 5G",
    "image": "images/products/312.webp",
    "price": 1217908,
     "brand": "SAMSUNG",
    "isEnabled": false,
    "specs": { "size_value": 256, "unit": "GB" },
    "shortdescription": "Tamaño Pantalla\n6.7 Pulgadas\nMemoria Interna\n256 GB\nMemoria RAM\n8 GB",
    "description": "Descubre el SAMSUNG Galaxy A17 5G con diseño refinado y mayor nitidez en las cámaras para resaltar cada detalle mientras disfrutas de un smarpthone con un cuerpo delgado y chip potente. ¡Hecho para el futuro! Su pantalla fluida te sumerge en juegos y videos sin interrupciones. Gracias al vidrio templado y cuerpo metalico protege con mayor eficacia salpicaduras, polvo y rayones. Un smartphone diseñado para durar y destacar ¡Lleva el tuyo ahora mismo!",
    "features": [
      "Pantalla de 6.7\" ideal para juegos y videos",
      "Cámaras 50MP con mayor brillo y nitidez",
      "Proteccion IP54 contra polvo y salpicaduras",
      "Diseño delgado con acabado metalico resistente"
    ],
    "tags": []
  },
  {
    "id": "313",
    "category": "celulares",
    "name": "Celular HONOR X8d 512GB 4G Azul + Parlante",
    "image": "images/products/313.webp",
    "price": 1321408,
     "brand": "HONOR",
    "isEnabled": true,
    "specs": { "size_value": 512, "unit": "GB" },
    "shortdescription": "Tamaño Pantalla 6.77 Pulgadas | Memoria Interna 512 GB | Memoria RAM 8 GB",
    "description": "El HONOR X8d no es solo un celular más, siempre listo para acompañarte con un rendimiento impresionante y una batería de 7000 mAh con carga rápida de 45 W. Cámara principal de 108 MP.",
    "features": [
      "Fotografias de alta calidad, gracias a su lente focal",
      "Bateria que dura todo el dia de 7000 mAh",
      "Mejora tus fotos y videos con apps integradas con IA",
      "Seguridad al maximo, Escáner de huellas en la pantalla",
      "SUPER CARGA de 45W en 30min"
    ],
    "tags": ["Nuevo"]
  },
  {
    "id": "314",
    "category": "celulares",
    "name": "Celular REDMI Note 15 512GB 4G Negro + Audifonos Buds 6 Play",
    "image": "images/products/314.webp",
    "price": 1321408,
     "brand": "REDMI",
    "isEnabled": true,
    "specs": { "size_value": 512, "unit": "GB" },
    "shortdescription": "Tamaño Pantalla 6.77 Pulgadas | Memoria Interna 512 GB | Memoria RAM 8 GB",
    "description": "El REDMI Note 15 con 512GB ofrece una experiencia equilibrada. Su batería de 6000mAh garantiza largas jornadas, mientras HyperOS con inteligencia artificial optimiza el sistema según tu uso.",
    "features": [
      "Círculo de búsqueda con Gemini integrado",
      "Volumen mejorado 300% más claro y potente",
      "Batería 6000mAh para uso prolongado",
      "Reducción de ruido para llamadas claras",
      "IP64 protección básica contra salpicaduras"
    ],
    "tags": ["Nuevo"]
  },
  {
    "id": "315",
    "category": "celulares",
    "name": "Celular MOTOROLA Edge 60 Fusion 256GB 5G Azul",
    "image": "images/products/315.webp",
    "price": 1148908,
     "brand": "MOTOROLA",
    "isEnabled": false,
    "specs": { "size_value": 256, "unit": "GB" },
    "shortdescription": "Celular REDMI Note 15 256GB 4G Negro + Audifonos Buds 6 Play",
    "description": "Presentamos el MOTOROLA edge 60 fusion con un diseño elegante y curvo. Captura fotos en cualquier contexto gracias al sistema de cámaras Sony LYTIA™. Batería para todo el día con carga rápida.",
    "features": [
      "Excelente resistencia en una pantalla curva",
      "Poderoso sistema de camaras con IA",
      "5200 mAh Bateria para todo el día",
      "Moto Ai Tu vida más fácil y creativa"
    ],
    "tags": ["Nuevo"]
  },
  {
    "id": "316",
    "category": "celulares",
    "name": "Celular VIVO Y31D 4+256GB Blanco",
    "image": "images/products/316.avif",
    "price": 1323708,
     "brand": "VIVO",
    "isEnabled": true,
    "specs": {
      "size_value": 256, "unit": "GB"
    },
    "shortdescription": "Tamaño Pantalla\n6.75  Pulgadas\nMemoria Interna\n256 GB\nMemoria RAM\n4 GB",
    "description": "VIVO Y31D 8 GB + 256 GB te acompaña durante todo el día con la energía que necesitas para trabajar, estudiar, comunicarte y disfrutar de tu contenido favorito sin interrupciones. Su batería de larga duración te brinda mayor tranquilidad para que te enfoques en lo que realmente importa. Vive una experiencia confiable y práctica en cada momento.",
    "features": [
      "Batería de 7.200 mAh para una autonomía de larga duración.",
      "IP68 e IP69 para máxima resistencia al agua y al polvo.",
      "Volumen al 400% para disfrutar un audio más potente.",
      "Certificación SGS 5 Estrellas para mayor resistencia y durabilidad."
    ],
    "tags": []
  },
  {
    "id": "317",
    "category": "celulares",
    "name": "Celular MOTOROLA G67 256GB 5G Gris",
    "image": "images/products/317.avif",
    "price": 1033908,
     "brand": "MOTOROLA",
    "isEnabled": true,
    "specs": {
      "size_value": 256, "unit": "GB"
    },
    "shortdescription": "Tamaño Pantalla\n6.8  Pulgadas\nMemoria Interna\n256 GB \nMemoria RAM\n4 GB",
    "description": "Vive aventuras sin límites con el MOTOROLA G67 5G, donde el diseño sofisticado y materiales premium te envuelven en estilo único y protección contra agua y caídas. Brilla en cada escena con su pantalla pOLED que hace vibrar tus sentidos. Captura la magia de tus momentos con la cámara Sony LYTIA™ para fotos profesionales que emocionan. Disfruta todo el dia sin preocuparte por la carga, potencia imbatible y experiencias Moto. El moto g67 5G es tu compañero para una vida plena y aventurera.",
    "features": [
      "Pantalla 1.5K súper brillante para ver todo nítido",
      "Cámaras completas que capturan cada momento perfecto.",
      "Batería que te acompaña todo el día sin parar.",
      "5G que acelera tu mundo sin esperas ni límites.",
      "Diseño elegante que refleja tu estilo sofisticado."
    ],
    "tags": ["mas-vendido2"]
  },
  {
    "id": "318",
    "category": "celulares",
    "name": "Celular HUAWEI Nova Y73 256GB 4G Negro + Audifonos",
    "image": "images/products/318.avif",
    "price": 977385,
     "brand": "HUAWEI",
    "isEnabled": true,
    "specs": {
     "size_value": 256, "unit": "GB"
    },
    "shortdescription": "Tamaño Pantalla\n6.67  Pulgadas\nMemoria Interna\n256 GB \nMemoria RAM\n8 GB",
    "description": "Llego el Huawei nova Y73 con audifonos Freebuds Se3, cuenta con una potente cámara trasera de 50 MP cada foto cobra vida con una claridad impresionante, captura personas y paisajes con detalles vibrantes. La cámara frontal de 8MP con apertura F2.0 garantiza selfies increíbles. Disfruta de su batería de 6,620 mAh que te da más horas de uso, combinada con la carga rápida de 40W Turbo para que siempre estés listo. La clasificación IP64 garantiza que puede soportar lluvia, salpicaduras y polvo.",
    "features": [
      "40W Turbo recarga rápida para un día completo de uso",
      "Diseño de texturas a cuadros elegante y original",
      "Practico botón X con atajos a tus aplicaciones favoritas",
      "Resistente a polvo y salpicaduras IP64"
    ],
    "tags": ["mas-vendido2"]
  },
  {
    "id": "319",
    "category": "celulares",
    "name": "Celular SAMSUNG Galaxy A16 256GB LTE 4G Negro",
    "image": "images/products/319.avif",
    "price": 1125908,
     "brand": "SAMSUNG",
    "isEnabled": true,
    "specs": {
     "size_value": 256, "unit": "GB"
    },
    "shortdescription": "Tamaño Pantalla\n6.7  Pulgadas\nMemoria Interna\n256 GB \nMemoria RAM\n8 GB",
    "description": "El SAMSUNG Galaxy A16 LTE 256GB combina diseño elegante y potencia excepcional. Con su amplia pantalla inmersiva, podrás disfrutar de tus videos y juegos favoritos con una calidad sorprendente. Su almacenamiento de 256GB te permite guardar todos tus recuerdo, apps y archivos sin preocuparte por el espacio. Además, su batería de larga duración te acompaña todo el día, mientras que su cámara captura cada momento con detalle y nitidez.",
    "features": [
      "Cámara principal de 50MP,angular de 5MP y macro de 2MP",
      "Procesador: Mediatek Helio G99",
      "Protección contra el polvo y salpicaduras IP54",
      "Plataforma de Seguridad Knox Vault para proteger tus datos"
    ],
    "tags": []
  },
  {
    "id": "320",
    "category": "celulares",
    "name": "Celular REDMI Note 15 Pro 256GB 4G Titanium",
    "image": "images/products/320.avif",
    "price": 1148908,
     "brand": "REDMI",
    "isEnabled": true,
    "specs": {
     "size_value": 256, "unit": "GB"
    },
    "shortdescription": "Tamaño Pantalla\n6.77  Pulgadas\nMemoria Interna\n256 GB \nMemoria RAM\n8 GB",
    "description": "El REDMI Note 15 Pro está diseñado para ofrecer solidez y confianza todos los días. Su pantalla FHD+ de 6.77” brinda visualización clara y cómoda, mientras la inteligencia artificial de HyperAI optimiza rendimiento y consumo. La tecnología de toque húmedo permite usar la pantalla incluso con lluvia ligera o manos mojadas. La batería de 6500mAh acompaña jornadas completas y la cámara de 200MP con OIS y AI mejora cada captura automáticamente.",
    "features": [
      "Toque húmedo: pantalla usable con manos mojadas",
      "Batería 6500mAh para jornadas completas",
      "Cámara 200MP + OIS asistida por AI",
      "Certificación IP65 contra agua y polvo",
      "Helio G200-Ultra para uso diario fluido"
    ],
    "tags": []
  },
  {
    "id": "321",
    "category": "celulares",
    "name": "Celular REALME 15T 256GB 5G Titanio",
    "image": "images/products/321.avif",
    "price": 1258158,
     "brand": "REALME",
    "isEnabled": true,
    "specs": {
      "size_value": 256, "unit": "GB"
    },
    "shortdescription": "Tamaño Pantalla\n6.7  Pulgadas\nMemoria Interna\n256 GB \nMemoria RAM\n8 GB",
    "description": "El REALME 15T es pura energía. Con su doble cámara de 50 MP frontal y trasera siempre sales bien, y la IA “Dilo y edítalo” arregla tus fotos con solo decirlo. Su pantalla AMOLED de 4000 nits y 144 Hz es tan brillante y fluida que todo se siente real, mientras el procesador 6400 MAX te da la velocidad para apps, streams y momentos intensos de diversión. La batería de 6550 mAh con carga 45W nunca te deja tirado, y su resistencia cuádruple (Armor Shell, certificación militar e IP68/69) lo hace invencible.",
    "features": [
      "Cámaras frontal y trasera 50MP Sony, fotos ultra nítidas",
      "Batería 6500 mAh, energía que dura todo el día (y más)",
      "Editor de IA por comando de voz",
      "Resistencia total: golpes, agua, polvo y presión",
      "MediaTek Dimensity 6400 MAX, velocidad sin interrupciones"
    ],
    "tags": []
  },
  {
    "id": "401",
    "category": "computadores",
    "name": "Computador Portátil HP 14\"",
    "image": "images/products/401.webp",
    "price": 1551431,
     "brand": "HP",
    "isEnabled": false,
    "shortdescription": "dq6002la - Intel N100 - RAM 4GB - Disco SSD 128GB - Plateado",
    "description": "¡Descubre el portátil 14-dq6002la, tu mejor aliado para trabajar y disfrutar! Con su pantalla de 14\" pulgadas, es súper portátil y fácil de llevar a donde quieras. Incluye la tecla Copilot con asistencia de IA para facilitar tus tareas y aumentar tu productividad. Además, su batería de larga duración te acompaña todo el día sin preocuparte por recargar. Su diseño delgado y elegante te permite mantenerte conectado y entretenido en cualquier lugar. ¡Consigue el tuyo aquí!",
    "features": [
      "Ultraportátil con diseño ligero y con pantalla sin parpadeo",
      "Cuenta con tecla copilot de acceso instantáneo",
      "Transmite 4K y juega en 720p con gráficos Intel UHD.",
      "Pantalla con Micro Borde, diseño bello y eficiente"
    ],
    "tags": ["recomendado2"]
  },
  {
    "id": "402",
    "category": "computadores",
    "name": "Computador Portátil ASUS 15.6\"",
    "image": "images/products/402.webp",
    "price": 1838931,
     "brand": "ASUS",
    "isEnabled": false,
    "shortdescription": "E1504GA - Intel Core i3 - RAM 8GB - Disco SSD 512 GB - Negro",
    "description": "Con ASUS Vivobook 15 cubre tus necesidades y convierte las tareas cotidianas en algo especial, tu herramienta esencial para hacer las cosas más fácilmente, en cualquier lugar. Es completamente fácil de usar que se adapta a tu estilo de vida. Te sentirás seguro gracias a ASUS Antimicrobial Guard Plus que protege las superficies que se tocan con frecuencia de bacterias dañinas, salvaguardando tu salud. ¡Haz que todos tus días sean más agradables con Vivobook 15! ¡Llévalo ahora!.",
    "features": [
      "Certificado de grado militar MIL-STD-810H ultra-exigente",
      "Diseño mas delgado y ligero con tan solo 1.63 Kg de peso",
      "Cancelación de ruido por Inteligencia Artificial: videoconferencias mas claras",
      "Protege y cuida tu salud con Asus antimicrobial guard Plus"
    ],
    "tags": []
  },
  {
    "id": "403",
    "category": "computadores",
    "name": "Computador Portátil LENOVO 15.6\"",
    "image": "images/products/403.webp",
    "price": 1723931,
     "brand": "LENOVO",
    "isEnabled": false,
    "shortdescription": "AMD Ryzen 3 - RAM 8GB - Disco SSD 512GB - Azul",
    "description": "En el portátil LENOVO IdeaPad Slim 3 color Azul, encuentra todo el rendimiento que necesitas, un portátil accesible que cubre tus necesidades, su combinación generosa de memoria RAM y almacenamiento en estado solido, es perfecto para tus tareas diarias, con un diseño extraordinario, este equipo superará tus expectativas. Así mismo, te brindará un entretenimiento superior gracias a su sonido Dolby Audio, y te sentirás seguro gracias a su obturador de privacidad en su cámara, cuando termines tus reuniones o videollamadas solo tienes que cerrarlo. Aprovecha ¡lleva el tuyo ahora!",
    "features": [
      "Resolución Full HD, imágenes mas nítidas.",
      "Dolby Audio, mayor calidad en sonido.",
      "TrueBlock mayor privacidad para tu cámara",
      "Webcam HD, videollamadas mas claras"
    ],
    "tags": []
  },
  {
    "id": "404",
    "category": "computadores",
    "name": "Computador Portátil ACER ASPIRE 14\"",
    "image": "images/products/404.webp",
    "price": 1953885,
     "brand": "ACER",
    "isEnabled": false,
    "shortdescription": "30LC - Intel Core 3 - RAM 8GB - Disco SSD 512GB - Plateado",
    "description": "Acer trae para ti su línea de portátiles Aspire, diseñados con tecnología innovadora para la multitarea y la productividad. Gracias a su facilidad de uso, el Aspire es ideal para toda la familia, está enfocado en el rendimiento y en tu día a día. Perfecto para sacar más partido al trabajo y estudio. Con su elegante cubierta metálica, el Aspire es más ligero y delgado que nunca. Además, la batería de larga duración permite que la familia pueda hacer más entre carga y carga.¡Haz click ahora y llévate el tuyo!",
    "features": [
      "Sistema térmico mejorado, para sesiones eficientes",
      "Acer BluelightShield, filtra la luz azul y cuida tus ojos",
      "Pantalla WUXGA que muestra imágenes nítidas y detalladas",
      "Accede a Copilot con la tecla especial"
    ],
    "tags": []
  },
  {
    "id": "405",
    "category": "computadores",
    "name": "Computador Portátil ASUS 15.6\"",
    "image": "images/products/405.webp",
    "price":  1953931,
     "brand": "ASUS",
    "isEnabled": false,
    "shortdescription": "E1504FA - AMD Ryzen 5 - RAM 8GB - Disco SSD 512 GB - Negro",
    "description": "La ASUS Vivobook Go 15 es liviana, es compacta, diseñada para que seas productivo y te mantengas entretenido donde quiera que vayas. Con su bisagra plana de 180°, el protector físico de la cámara web y un montón de características de diseño bien pensadas, incluida una hermosa pantalla con bordes ultradelgados, ¡Vivobook Go 15 es un portátil que te permite hacer todo! ¡Llévala ya!",
    "features": [
      "Incluye Maletín y Mouse alámbrico",
      "Escudo de privacidad de la cámara WEB física",
      "Inicio de sesión seguro con sensor de huellas dactilares",
      "Bajas emisiones de luz azul certificado por TÜV Rheinland"
    ],
    "tags": []
  },
  {
    "id": "406",
    "category": "computadores",
    "name": "Computador Portátil MSI Modern 13.3\"",
    "image": "images/products/406.webp",
    "price": 2403500,
     "brand": "MSI",
    "isEnabled": false,
    "shortdescription": "F13MG - Intel Core i3 - RAM 16GB - Disco SSD 512GB - Negro",
    "description": "Enfrenta los desafíos diarios con el Portátil MSI Modern 13 F13MG. Su diseño delgado y liviano se adapta fácilmente a cualquier espacio, acompañándote a donde quiera que vayas. Potenciada con un procesador Intel Core que ofrece un rendimiento excepcional para superar cualquier desafío. Trabaja a cualquier hora gracias a su teclado retroiluminado, que proporciona una experiencia cómoda y eficiente. Imagina, crea y visualiza en su pantalla Full HD de 13\" pulgadas. Todo esto en un portátil con resistencia certificada. ¿Qué esperas para tener el tuyo? ¡Consíguelo ahora mismo!",
    "features": [
      "Incluye Maletin MSI",
      "Teclado retroiluminado para trabajar a cualquier hora",
      "Incluye tecla Copilot mejora tu productividad y experiencia",
      "Prueba militar MIL-STD-810H aprobada, mayor durabilidad"
    ],
    "tags": []
  },
  {
    "id": "407",
    "category": "computadores",
    "name": "Computador Portátil LENOVO 15.6\"",
    "image": "images/products/407.webp",
    "price": 1953931,
     "brand": "LENOVO",
    "isEnabled": true,
    "shortdescription": "IIdeaPad Slim 3 - Intel Core i3 - RAM 8GB - Disco SSD 512GB - Gris",
    "description": "En el portátil LENOVO IdeaPad Slim 3 color Gris, encuentra todo el rendimiento que necesitas, un portátil accesible que cubre tus necesidades, su combinación generosa de memoria Ram y almacenamiento en estado solido, es perfecto para tus tareas diarias, con un diseño extraordinario, este equipo superará tus expectativas. Así mismo, te brindará un entretenimiento superior gracias a su sonido Dolby Audio, y te sentirás seguro gracias a su obturador de privacidad en su cámara, cuando termines tus reuniones o videollamadas solo tienes que cerrarlo. Aprovecha ¡lleva el tuyo ahora!",
    "features": [
      "Resolución Full HD, imágenes mas nítidas.",
      "Dolby Audio, mayor calidad en sonido.",
      "TrueBlock privacidad para tu cámara",
      "Webcam Full HD, videollamadas mas claras",
      "Prueba militar MIL-STD-810H aprobada, mayor durabilidad",
      "No incluye paquete office"
    ],
    "tags": []
  },
  {
    "id": "408",
    "category": "computadores",
    "name": "Computador Portátil HP 15.6\"",
    "image": "images/products/408.webp",
    "price": 1953931,
     "brand": "HP",
    "isEnabled": false,
    "shortdescription": "AMD Ryzen 3 - RAM 8GB - Disco SSD 512GB - Plateado",
    "description": "La potencia que necesitas día a día, el Portátil HP 15-fc0234la está diseñado para cuando la vida se vuelve real. Con un potente procesador puede manejarlo todo, desde juegos hasta estudios. Tiene mucho espacio de almacenamiento y puertos para que siempre estés preparado, donde quiera que vayas. ¿Que esperas para comprar el tuyo? ¡adquierelo aqui!.",
    "features": [
      "Imágenes deslumbrantes con los Gráficos integrados AMD Radeon",
      "Nitidez y calidad en imágenes con pantalla Full HD",
      "Conexiones fluidas. Combinación Wi-Fi 6 y Bluetooth 5.3.",
      "Eleva su batería de 0 al 50 % en aproximadamente 45 minutos.",
      "Ahorro de energía, gracias a su Certificación ENERGY STAR."
    ],
    "tags": []
  },
  {
    "id": "409",
    "category": "computadores",
    "name": "Computador Portátil LENOVO 15.6\"",
    "image": "images/products/409.webp",
    "price": 2068931,
     "brand": "LENOVO",
    "isEnabled": true,
    "shortdescription": "IdeaPad Slim 3 - AMD Ryzen 5 - RAM 8GB - Disco SSD 512GB - Azul",
    "description": "En el portátil LENOVO IdeaPad Slim 3 color Azul, encuentra todo el rendimiento que necesitas, un portátil accesible que cubre tus necesidades, su combinación generosa de memoria Ram y almacenamiento en estado solido, es perfecto para tus tareas diarias, con un diseño extraordinario, este equipo superará tus expectativas. Así mismo, te brindará un entretenimiento superior gracias a su sonido Dolby Audio, y te sentirás seguro gracias a su obturador de privacidad en su cámara, cuando termines tus reuniones o videollamadas solo tienes que cerrarlo. Aprovecha ¡lleva el tuyo ahora!",
    "features": [
      "Resolución Full HD, imágenes mas nítidas.",
      "Película antirreflejo trabaja en cualquier condición de luz.",
      "Dolby Audio, mayor calidad en sonido.",
      "TrueBlock privacidad para tu cámara",
      "Webcam Full HD, videollamadas mas claras",
      "No incluye paquete office"
    ],
    "tags": []
  },
  {
    "id": "410",
    "category": "computadores",
    "name": "Computador Portátil LENOVO - 15.6\"",
    "image": "images/products/410.webp",
    "price": 2068850,
     "brand": "LENOVO",
    "isEnabled": false,
    "shortdescription": "IdeaPad Slim 3 - AMD R3 - RAM 16GB - Disco SSD 512GB - Gris",
    "description": "El IdeaPad Slim 3 no es solo un portátil: es tu compañero confiable para cada reto diario. Su diseño ligero y elegante te invita a llevarlo a todas partes, mientras su potencia AMD y su almacenamiento SSD veloz te permiten avanzar sin pausas. La pantalla FHD de 15.6” Antireflejo convierte tus clases, proyectos y momentos de ocio en experiencias claras y envolventes. Con cámara segura y batería duradera, este equipo está hecho para quienes buscan equilibrio entre rendimiento, portabilidad y estilo. ¡lleva el tuyo ahora!",
    "features": [
      "Incluye Mouse Bluetooth Lenovo WL310",
      "Resolución Full HD, imágenes mas nítidas.",
      "Dolby Audio, mayor calidad en sonido.",
      "TrueBlock privacidad para tu cámara",
      "Prueba militar MIL-STD-810H aprobada, mayor durabilidad"
    ],
    "tags": []
  },
  {
    "id": "411",
    "category": "computadores",
    "name": "Computador All In One LENOVO 23.8\"",
    "image": "images/products/411.avif",
    "price": 2068930,
     "brand": "LENOVO",
    "isEnabled": true,
    "shortdescription": "A100 - Intel N100 - RAM 8GB - Disco SSD 512GB - Gris",
    "description": "El Lenovo A100 AIO es mucho más que un ordenador de sobremesa, es un compañero que transforma tu espacio y tu día a día. Su procesador Intel N100 te permite abordar cada tarea con fluidez, mientras su impresionante pantalla de 23,8″ casi sin bordes convierte recuerdos y momentos en verdaderas obras de arte. Este ordenador no solo embellece cualquier rincón, sino que también se adapta a ti, ofreciéndote comodidad con su soporte ajustable. Perfecto para videollamadas, conexiones sin esfuerzo y multitareas sin límites, el Lenovo A100 AIO une estilo, rendimiento y emoción.",
    "features": [
      "Pantalla 23.8\", ideal para consumo multimedia",
      "Múltiples puertos para mejorar tu conectividad.",
      "Cámara HD para videollamadas mas claras.",
      "Velocidad y capacidad de almacenamiento estado sólido",
      "Wifi 6 Mayor velocidad y menor consumo de energía",
      "No incluye paquete office",
      "Version Sistema Operativo: Windows 11 Home"
    ],
    "tags": []
  },
  {
    "id": "412",
    "category": "computadores",
    "name": "Computador All in One ASUS V400 23.8\"",
    "image": "images/products/412.avif",
    "price": 2183908,
     "brand": "ASUS",
    "isEnabled": true,
    "shortdescription": "V440VAK - Intel Core 3 - RAM 8GB - Disco SSD 512GB - Negro",
    "description": "Un computador que se convierte en el corazón de tu rutina, acompañándote en cada idea y cada proyecto. Su presencia transmite equilibrio y armonía, recordándote que la productividad también puede ser una experiencia placentera.",
    "features": [
      "Diseño minimalista y elegante, Mouse y Teclado inalámbrico",
      "Pantalla FHD: Disfruta cada detalle con claridad",
      "Intel Core 3 : Productividad sin límites en un solo equipo",
      "Audio envolvente para tus tareas diarias",
      "Conectividad moderna y avanzada para el dia a dia",
      "No incluye paquete office"
    ],
    "tags": []
  },
  {
    "id": "413",
    "category": "computadores",
    "name": "Computador All in One HP 23.8\"",
    "image": "images/products/413.avif",
    "price": 2413930,
     "brand": "HP",
    "isEnabled": true,
    "shortdescription": "cr0232la - AMD Ryzen 3 - RAM 8GB - Disco SSD 512GB - Blanco",
    "description": "El HP All in One 24-cr0232la se convierte en el centro de inspiración ideal para tu hogar, permitiendo que cada miembro de la familia realice múltiples tareas simultáneamente, estudie y comparta momentos inolvidables. Este elegante equipo simplifica tus jornadas con un rendimiento fluido que responde a tus necesidades diarias, mientras disfrutas de videollamadas dinámicas y de tus contenidos favoritos con una claridad visual asombrosa.",
    "features": [
      "Pantalla de alta nitidez desde cualquier ángulo",
      "Procesador de gran fluidez para agilizar tus tareas",
      "Innovación eco-amigable hecho con granos de café reciclados",
      "Cámara FHD 1080p para videollamadas nítidas",
      "Escribe en tu PC y cambia a tu móvil fácilmente",
      "No incluye paquete office"
    ],
    "tags": []
  },
  {
    "id": "414",
    "category": "computadores",
    "name": "Computador Portátil ASUS Vivobook 15.6\"",
    "image": "images/products/414.avif",
    "price": 2816408,
     "brand": "ASUS",
    "isEnabled": true,
    "shortdescription": "X1504MA - Intel Core 5 - RAM 8GB - Disco SSD 512GB - Azul",
    "description": "Este Portátil ASUS X1504MA-BQ919W es el aliado ideal para quienes buscan productividad y comodidad en cada jornada. Su diseño ligero y moderno te acompaña sin esfuerzo, mientras su rendimiento confiable te impulsa a superar tareas, aprender más y avanzar hacia tus metas. Con una pantalla amplia que hace brillar tus ideas Y una batería que sigue tu ritmo gracias al Nuevo Procesador Intel® Core™ 5 Serie 3 con Inteligencia Artificial integrada, este portátil convierte la rutina en una experiencia fluida e inspiradora.",
    "features": [
      "Nuevo Procesador Intel Core Serie 3 con motor de IA integrada de hasta 15 TOPS",
      "Fácil de usar, con su bisagra plana de 180°",
      "Teclado ASUS ErgoSense, con retro iluminación.",
      "Cámara de alta claridad con protector de privacidad",
      "Filtro de luz azul para que no se te cansen los ojos",
      "No incluye paquete office"
    ],
    "tags": []
  },
  {
    "id": "415",
    "category": "computadores",
    "name": "Computador Portátil ASUS Vivobook Go 15.6\"",
    "image": "images/products/415.avif",
    "price": 1781408,
     "brand": "ASUS",
    "isEnabled": true,
    "shortdescription": "E1504FA - AMD Ryzen 3 - RAM 8GB - Disco SSD 512GB - Negro",
    "description": "El portátil ASUS E1504FA que combina potencia y practicidad en un diseño moderno y ligero. Ideal para estudiantes y profesionales que buscan un equipo confiable, ofrece velocidad y eficiencia para acompañar cada jornada. Su equilibrio entre rendimiento y estilo lo convierte en un aliado versátil para trabajar, estudiar o disfrutar del entretenimiento sin límites, siempre listo para responder a tus necesidades con seguridad y fluidez.",
    "features": [
      "Perfecto para estudio y tareas basicas",
      "Teclado ASUS ErgoSense, cómoda experiencia de escritura",
      "Pantalla FHD de 15.6\" para una experiencia visual nítida",
      "Mayor vida útil con certificación de grado Militar 810H",
      "Diseño liviano y elegante, perfecto para llevar a diario",
      "No incluye paquete office"
    ],
    "tags": []
  },
  {
    "id": "416",
    "category": "computadores",
    "name": "Computador Portátil HP Omnibook 14\"",
    "image": "images/products/416.avif",
    "price": 1953930,
     "brand": "HP",
    "isEnabled": true,
    "shortdescription": "14-hy0030la - AMD Ryzen 3 - RAM 8GB - Disco SSD 512GB - Plateado",
    "description": "Disfruta sin preocupaciones con el HP Omnibook 3 que te acompaña en cada movimiento, ligero, elegante y lista para abrirse en segundos cuando llega la inspiración o la próxima reunión importante. Su pantalla amplia en formato compacto te invita a crear, estudiar y disfrutar de tu contenido con comodidad, tanto en casa como en la universidad, el trabajo o el café. Disfruta de una experiencia fluida, conectada y práctica, pensada para quienes buscan productividad sin perder movilidad ni estilo.",
    "features": [
      "Potencia eficiente en el procesador para todo tu día",
      "Pantalla 2K antirreflejo con bordes ultrafinos",
      "Diseño ultraligero: menos de 1,5 kg",
      "Disfruta velocidades rápidas con Wi-Fi 6 y Bluetooth 5.4",
      "Disfruta tus videollamadas con la cámara 1080p FHD",
      "No incluye paquete office"
    ],
    "tags": []
  },
  {
    "id": "417",
    "category": "computadores",
    "name": "Computador Portátil ACER ASPIRE 15.6\"",
    "image": "images/products/417.avif",
    "price": 2183884,
     "brand": "ACER",
    "isEnabled": true,
    "shortdescription": "R251 - AMD Ryzen 3 - RAM 8GB - Disco SSD 512GB - Plateado",
    "description": "Tu día merece fluir sin complicaciones y la ACER Aspire está aquí para hacerlo posible. Con ella estudias, trabajas y te diviertes con la potencia y la rapidez que necesitas, sin perder estilo. Su diseño ligero y moderno te acompaña a todas partes, siempre lista para seguir tu ritmo y ayudarte a alcanzar tus metas. Es la herramienta esencial que convierte cada reto en un logro y cada meta en una oportunidad.",
    "features": [
      "Pantalla Full HD con colores vivos y gran detalle",
      "Con tecla Copilot integrada, la IA siempre contigo",
      "Formato portátil y delgado: ideal para uso diario",
      "Diseño ligero (1,45 kg): fácil de transportar",
      "Versátil para todo tipo de trabajo: básico y avanzado",
      "No incluye paquete office"
    ],
    "tags": []
  },
  {
    "id": "418",
    "category": "computadores",
    "name": "Computador Portátil ACER ASPIRE 14\"",
    "image": "images/products/418.avif",
    "price": 2011384,
     "brand": "ACER",
    "isEnabled": true,
    "shortdescription": "30CL - Intel Core 3 - RAM 8GB - Disco SSD 512GB - Plateado",
    "description": "Acer trae para ti su línea de portátiles Aspire, diseñados con tecnología innovadora para la multitarea y la productividad. Gracias a su facilidad de uso, el Aspire es ideal para toda la familia, está enfocado en el rendimiento y en tu día a día. Perfecto para sacar más partido al trabajo y estudio. Con su elegante cubierta metálica, el Aspire es más ligero y delgado que nunca. Además, la batería de larga duración permite que la familia pueda hacer más entre carga y carga.",
    "features": [
      "Sistema térmico mejorado, para sesiones eficientes",
      "Acer BluelightShield, filtra la luz azul y cuida tus ojos",
      "Pantalla WUXGA que muestra imágenes nítidas y detalladas",
      "Accede a Copilot con la tecla especial",
      "Sus puertos proporcionan mayor conectividad y productividad",
      "No incluye paquete office"
    ],
    "tags": []
  },
  {
    "id": "501",
    "category": "electromenores",
    "name": "Freidora de Aire KALLEY 6.3 Litros K-MAF6",
    "image": "images/products/501.webp",
    "price": 327635,
     "brand": "KALLEY",
    "isEnabled": true,
    "specs": { "size_value": 6.3, "unit": "litros" },
    "shortdescription": "La Freidora KALLEY K-MAF6 es el aliado ideal para tu cocina. ",
    "description": "Ahora cocinar sano no es difícil y está al alcance de todos. Puedes cocinar, asar, freír o tostar sin necesidad de aceite y en un tiempo más corto que lo tradicional. Tus alimentos quedarán crujientes por fuera y suaves en el interior gracias a su cocción con aire caliente. Tiene capacidad máxima de 6.3 litros lo que te permite cocinar grandes porciones y una potencia de 1700W para mayor eficiencia. Cuenta con temporizador de 60min y apagado automático, además de temperatura ajustable hasta 200°C. ¡Compra la tuya acá!",
    "features": [
      "Capacidad máx. de 6.3Litros para grandes preparaciones",
      "Temperatura hasta 200°C para variedad en recetas",
      "Cesta con rejilla antiadherente para fácil limpieza",
      "Mango frío al tacto para mayor seguridad"
    ],
    "tags": ["recomendado2"]
  },
  {
    "id": "502",
    "category": "electromenores",
    "name": "Freidora de Aire BLACK+DECKER 4.5L",
    "image": "images/products/502.webp",
    "price": 282785,
     "brand": "BLACK+DECKER",
    "isEnabled": false,
     "specs": { "size_value": 4.5, "unit": "litros" },
    "shortdescription": "Cocina sin culpa y más rápido con La Freidora de Aire Saludable de BLACK+DECKER® HF4004B Negro.",
    "description": "Con capacidad de 4.5 litros, es perfecta para freír y hornear porciones más grandes de tus comidas favoritas en poco tiempo. Con esta revolucionaria manera de cocinar, puedes disfrutar deliciosos alimentos fritos sin grasa y con el mismo sabor.",
    "features": [
      "Capacidad extra grande de 4.5 Litros",
      "Control de temperatura de hasta 200°C",
      "Temporizador de 30 minutos con apagado automático",
      "Cocina tus alimentos 70% más rápido"
    ],
    "tags": ["recomendado2"]
  },
  {
    "id": "503",
    "category": "electromenores",
    "name": "Freidora de aire IMUSA Mega Mecánica 7.5L Negra",
    "image": "images/products/503.webp",
    "price": 459885,
     "brand": "IMUSA",
    "isEnabled": true,
     "specs": { "size_value": 7.5, "unit": "litros" },
    "shortdescription": "EASY FRY MEGA MECÁNICA de 7.5 litros.",
    "description": "Su capacidad XXL permite preparar porciones generosas de manera rápida y eficiente. Con un control preciso del flujo de aire caliente, garantiza resultados dorados y perfectos en cada receta, usando menos aceite para comidas más saludables. Fácil de usar y limpiar, es ideal para quienes buscan combinar practicidad y sabor en un solo equipo. Perfecta para sorprender a todos con platos deliciosos. ¡Adquiere el tuyo aquí! ",
    "features": [
      "Capacidad XXL de 7.5L, perfecto para familias numerosas",
      "",
      "Resultados dorados gracias al control de aire caliente",
      "Mecánica y fácil de usar para todo tipo de recetas",
      "Cocina saludable con menos aceite y máximo sabor"
    ],
    "tags": []
  },
  {
    "id": "601",
    "category": "electromenores",
    "name": "Horno Microondas KALLEY 0.7 Pies",
    "image": "images/products/601.webp",
    "price": 298885,
     "brand": "KALLEY",
    "isEnabled": true,
    "specs": { "size_value": 20, "unit": "litros" },
    "shortdescription": "El Horno Microondas Kalley K-MW07N cuenta con una potencia de 700W que permite cocinar tus alimentos en menor tiempo. ",
    "description": "Sus niveles de potencia son de 0 a 10, ajustable y 6 opciones preprogramadas para que elijas de acuerdo con lo que quieras cocinar\nSu capacidad es de 20L, practico y con el tamaño ideal para que prepares, cocines o calientes tus preparaciones favoritas.\nSu material interno es refractario para facilitar la limpieza y la puerta en acabado de microperforado dan elegancia a tu cocina.",
    "features": [
      "Descongelar por peso o tiempo",
      "Menú con programas prestablecidos para mayor rapidez",
      "Bandeja de vidrio rotatoria y de alta durabilidad",
      "Capacidad 20 Litros",
      "Función de inicio rápido "
    ],
    "tags": ["recomendado2"]
  },
  {
    "id": "602",
    "category": "electromenores",
    "name": "Horno Microondas ELECTROLUX 0.7 Pies EMDO20 Gris",
    "image": "images/products/602.webp",
    "price": 333385,
     "brand": "ELECTROLUX",
    "isEnabled": false,
    "specs": { "size_value": 20, "unit": "litros" },
    "shortdescription": "Con el Horno Microondas de 20 Litros Gris Electrolux calienta y descongela tus recetas favoritas.",
    "description": "La circulación del aire que te entrega la Función Elimina Olor, te permite dejar tu microondas listo para preparar o calentar la siguiente receta. Integrado con opciones funcionales como el Menú para Niños, que viene con tres funciones preprogramadas que favorecen la preparación de sus recetas favoritas como palomitas y quesadillas. Los platos preparados regularmente, como arroz, papas y pastas ahora están preprogramados gracias al Menú Diario. ¡No lo pienses más, adquiere el tuyo ahora!",
    "features": [
      "Descongela tus alimentos fácilmente",
      "Menú Favorito: Programa las recetas más utilizadas",
      "Menú Postre: Prepara galletas, pasteles, flan, etc.",
      "Función bloqueo panel: Evita accidentes"
    ],
    "tags": []
  },
  {
    "id": "603",
    "category": "electromenores",
    "name": "Horno Microondas WHIRLPOOL 0.7 Pies WM1807B Negro",
    "image": "images/products/603.webp",
    "price": 356385,
     "brand": "WHIRLPOOL",
    "isEnabled": true,
    "specs": { "size_value": 20, "unit": "litros" },
    "shortdescription": "Disfruta practicidad y precisión con el microondas WHIRLPOOL WM1807B, diseñado para facilitar tu cocina diaria.",
    "description": "Con 5 niveles de potencia y 12 opciones de auto cocción, adapta el calor a tus platillos favoritos. Cuenta con 4 funciones de descongelado, pantalla con control digital LED y la opción Mantener Caliente, ideal para servir en el momento justo. Su plato giratorio empotrable garantiza un calentado uniforme. Cocina, calienta y descongela con facilidad. ¡Llévalo a casa hoy mismo!",
    "features": [
      "12 opciones de auto cocción: Ideal para todo tipo de recetas",
      "",
      "Función Mantener Caliente: Listo para servir siempre",
      "",
      "4 descongelados: Carne, pollo, pescado y vegetales",
      "",
      "Tiempo extra fácil: Agrega segundos con un botón"
    ],
    "tags": []
  },
  {
    "id": "604",
    "category": "electromenores",
    "name": "Freidora de Aire BLACK+DECKER 8.0 Litros AFBD82-1BDLA Negro",
    "image": "images/products/604.avif",
    "price": 482885,
     "brand": "BLACK+DECKER",
    "isEnabled": true,
    "shortdescription": "Cocina sin culpa y más rápido con La Freidora de Aire Saludable de BLACK+DECKER®.",
    "description": "La freidora de aire Purifry de Black+Decker combina tecnología Airfry con diseño elegante en negro y champagne. Con 9 funciones preprogramadas y pantalla táctil digital, cocina 2 veces más rápido usando 50% menos de energía. Su cesta antiadherente es fácil de limpiar y apta para lavavajillas. Ideal para disfrutar comidas crujientes sin remordimientos, ahorrando tiempo y esfuerzo.",
    "features": [
      "9 funciones preprogramadas: hornear y deshidratar",
      "Notificación para agitar los alimentos",
      "Temporizador de 60 minutos con apagado automático",
      "Alta Potencia de 1,700 watts",
      "Cocción a temperatura hasta 200°C"
    ],
    "tags": ["mas-vendido2"]
  },
  {
    "id": "605",
    "category": "electromenores",
    "name": "Freidora de aire OSTER 3.8 Litros Manual recubrimiento antiadherente Negra",
    "image": "images/products/605.avif",
    "price": 269134,
     "brand": "OSTER",
    "isEnabled": false,
    "shortdescription": "Este es tu aliado en la cocina, para comer saludable, ahorrar tiempo y realizar recetas como profesional sin ser uno.",
    "description": "La freidora de Aire OSTER de 3.8 litros manual con recubrimiento antiadherente, es perfecta para cocinas con poco espacios y familias pequeñas. Cocina alimentos utilizando aire caliente en lugar de aceite, ya que no requiere de este o muy poco. No gastes más, cuida tu bolsillo y a tu familia con alimentos saludables y aparte luce como todo un profesional.",
    "features": [
      "La bandeja de cocción tiene un capacidad de 3.8 lts",
      "Perillas independientes, control de tiempo y temperatura",
      "Controla el tiempo de cocción con el temporizador 60 min",
      "Alcanza una temperatura de 200° C",
      "Canasta con recubrimiento antiadherente"
    ],
    "tags": []
  },
  {
    "id": "606",
    "category": "electromenores",
    "name": "Horno Microondas ELECTROLUX 1.0 Pies EMDO30 Grill Gris",
    "image": "images/products/606.avif",
    "price": 609385,
     "brand": "ELECTROLUX",
    "isEnabled": true,
    "shortdescription": "Con el Horno Microondas de 30 Litros Gris Electrolux calienta y descongela tus recetas favoritas.",
    "description": "La circulación del aire que te entrega la Función Elimina Olor, te permite dejar tu microondas listo para preparar o calentar la siguiente receta. Integrado con opciones funcionales como el Menú para Niños, que viene con tres funciones preprogramadas que favorecen la preparación de sus recetas favoritas como palomitas y quesadillas. Con su Función Grill puedes gratinar y dorar los alimentos en su espacioso interior.",
    "features": [
      "Grill: Gratina y dora los alimentos",
      "Descongela tus alimentos fácilmente",
      "Menú Favorito: Programa las recetas más utilizadas",
      "Capacidad de 30 litros para recipientes más grandes",
      "Función mantener caliente. Temperatura ideal para servir"
    ],
    "tags": []
  },
  {
    "id": "607",
    "category": "electromenores",
    "name": "Horno Microondas HACEB 1.1 Pies AzafránGrill Negro",
    "image": "images/products/607.avif",
    "price": 574885,
     "brand": "HACEB",
    "isEnabled": true,
    "shortdescription": "Nada mejor que darles un toque dorado a nuestras preparaciones favoritas, con el Horno Microondas HACEB HM AZAFRÁN 1.1 GRILL, podrás lograrlo.",
    "description": "Su dorador es uno de los muchos atributos que ofrece. Cuenta con 6 programas predeterminados: palomitas, papas cocidas, pizza congelada, bebidas y carnes. Disminuye olores gracias al desodorizado, te brinda la función ECO para ahorrar energía. Además, su función multi cocción te permite cocinar tus alimentos combinados con la acción Grill y la del microondas.",
    "features": [
      "10 niveles de potencia para cocinar en menos tiempo",
      "Disminuye olores gracias al desodorizado integrado del horno",
      "Permite mayor ahorro de energía con su función especial ECO",
      "Dorador, función que permite darle el dorado a tus recetas",
      "Descongela según el peso de tus alimentos"
    ],
    "tags": []
  },
  {
    "id": "701",
    "category": "linea_blanca",
    "name": "Nevera KALLEY Frost Una Puerta 187 Litros",  
    "image": "images/products/701.webp",
    "price": 1034885,
     "brand": "KALLEY",
    "isEnabled": true,
    "specs": { "size_value": 187, "unit": "litros" },
    "shortdescription": "K-N187L2GO Gris Oscuro",
    "description": "La nevera KALLEY K-N187L2GO de 187 Litros gris cuenta con dispensador de agua manual, removible y fácil de limpiar con capacidad de 1.8 Litros, temperatura ajustable según tus necesidades, compartimiento extra frio para preservar adecuadamente tus alimentos. Además incluye bandeja inferior para vegetales, rejillas de vidrio removibles para adecuarlas como prefieras y compartimientos para botellas. Su garantía es de 1 año en la unidad y 5 años en el compresor ¡No esperes más y lleva la tuya!",
    "features": [
      "Iluminación interna para mejor visualización",
      "Sistema de nivelación ajustable para una buena estabilidad.",
      "Incluye cubeta de hielos y huevos para mejor organización.",
      "Bandeja de vegetales para mejor conservación"
    ],
    "tags": ["mas-vendido"]
  },
  {
    "id": "702",
    "category": "linea_blanca",
    "name": "Nevera HACEB Frost Una Puerta 213 Litros",
    "image": "images/products/702.webp",
    "price": 1379885,
     "brand": "HACEB",
    "isEnabled": true,
    "specs": { "size_value": 213, "unit": "litros" },
    "shortdescription": "N220 Dispensador de agua Titanio",
    "description": "Nevera Frost HACEB N220CETIR2, diseñada para alargar la vida de tus alimentos: frío sectorizado y estable en cada zona, corrientes de frío óptimas, y compartimiento extra-frío para descongelar. Cuenta con bandeja de vegetales con control de humedad para que tus alimentos permanezcan frescos por más tiempo. ¡Lleva la tuya ahora!",
    "features": [
      "Indicador de escarcha, te avisa cuando debes descongelar",
      "Descongelamiento semiautomático fácil, solo con un botón",
      "Amplio espacio interior, para que ordenar sea un placer",
      "Iluminación LED de gran alcance, mayor visual, menos sombras"
    ],
    "tags": ["recomendado2"]
  },
  {
    "id": "703",
    "category": "linea_blanca",
    "name": "Nevera CHALLENGER No Frost 231 Litros",
    "image": "images/products/703.webp",
    "price": 1839885,
     "brand": "CHALLENGER",
    "isEnabled": true,
    "specs": { "size_value": 231, "unit": "litros" },
    "shortdescription": "CR249 Titanium",
    "description": "El mundo necesita que seamos responsables, necesita que evolucionemos, por eso la nueva serie de refrigeración Lúmina de Challenger lo hizo igual que tú. Su diseño moderno, elegante y sobrio proporciona una atractiva apariencia y mayor espacio interno. Lúmina se adapta a todas las necesidades, con la nevera CR249 tienes una nevera No Frost de 231 litros especial para pequeños espacios aprovechando al máximo todas las carácterísticas destacadas de una nevera pensada para ti. Compra ya la tuya!!",
    "features": [
      "Descongelación automática",
      "Control de temperatura electrónico interno",
      "Mayor capacidad de almacentamiento + Smart Pocket",
      "Modos: Congelamiento rápido y ahorro de energía"
    ],
    "tags": ["te-puede-interesar"]
  },
  {
    "id": "704",
    "category": "linea_blanca",
    "name": "Nevera MABE No Frost 394 Litros",
    "image": "images/products/704.webp",
    "price": 2298908,
     "brand": "MABE",
    "isEnabled": true,
    "specs": { "size_value": 394, "unit": "litros" },
    "shortdescription": "RMP415GCG Negro Grafito",
    "description": "Tecnología Home Energy Saver, consume mucho menos gracias al MultiAhorro energético. Sistema Total Fresh flow para mejor distribución de frío y conservación.",
    "features": [
      "Ahorra hasta 67% de energía con Tecnología Home Energy Saver",
      "Con Total Fresh Flow, mantén tus alimentos frescos más tiempo",
      "Diseño discreto y practico",
      "Bebidas refrescantes con Ice Twist",
      "Espacios inteligentes para organización"
    ],
    "tags": ["Nuevo"]
  },
  {
    "id": "705",
    "category": "linea_blanca",
    "name": "Nevera No Frost CHALLENGER 248 Litros",
    "image": "images/products/705.webp",
    "price": 1989385,
     "brand": "CHALLENGER",
    "isEnabled": true,
    "specs": { "size_value": 248, "unit": "litros" },
    "shortdescription": "CR266 Titanium",
    "description": "Nueva serie de refrigeración Lúmina de Challenger. Diseño moderno, elegante y sobrio que proporciona mayor espacio interno. Excelente relación dimensiones/almacenamiento.",
    "features": [
      "Descongelación automática",
      "Control de temperatura electrónico interno",
      "Mayor capacidad de almacentamiento + Smart Pocket",
      "Modos: Congelamiento rápido y ahorro de energía",
      "Empaque magético removible y alarma de puerta abierta"
    ],
    "tags": ["mas-vendido"]
  },
  {
    "id": "706",
    "category": "linea_blanca",
    "name": "Nevecón KALLEY Side by Side 439 Litros",
    "image": "images/products/706.avif",
    "price": 2679385,
    "brand": "KALLEY",
    "isEnabled": true,
    "specs": {
      "size_value": 439,
      "unit": "litros"
    },
    "shortdescription": "K-N439L2 Gris",
    "description": "El nevecón de KALLEY K-N439L2 de 439 litros es ideal para tu hogar, con su sistema inverter no solo ahorra 20% más de energía comparado con un compresor convencional, sino que también mantiene tus alimentos frescos por más tiempo. Su diseño elegante encajará perfectamente en cualquier cocina, añadiendo un toque de sofisticación. Y el sistema de súper congelamiento te permite conservar tus alimentos de forma óptima.",
    "features": [
      "Nevecón 2 puertas Side by side de 439 Litros",
      "Tecnología Inverter que ahorra hasta de un 67% de energía",
      "Cuenta con alarma de puerta abierta y tecnología no frost",
      "12 años de garantía en el compresor",
      "Acabado mate y antihuella"
    ],
    "tags": [
      "disponible"
    ]
  },
  {
    "id": "707",
    "category": "linea_blanca",
    "name": "Nevera KALLEY No Frost Congelador Superior 245 Litros INVERTER",
    "image": "images/products/707.avif",
    "price": 1598385,
    "brand": "KALLEY",
    "isEnabled": true,
    "specs": {
      "size_value": 245,
      "unit": "litros"
    },
    "shortdescription": "K-NT245L Gris",
    "description": "Imagina una cocina fresca y organizada todos los días. Con la nevera KALLEY K-NT245L y su tecnología No Frost, olvídate de descongelar. Su compresor Inverter y eficiencia energética A te permiten ahorrar hasta un 67% de energía, con un funcionamiento silencioso y duradero. Además, su diseño moderno con acabado anti-huella y dispensador de agua la hacen perfecta para tu hogar.",
    "features": [
      "Tecnología No Frost: sin escarcha ni descongelamiento",
      "Compresor Inverter: silencioso, durable y eficiente",
      "Ahorra hasta 67% con eficiencia energética A",
      "Dispensador de agua manual práctico de 2 L",
      "Distribuye el aire frio de manera uniforme"
    ],
    "tags": [
      "disponible"
    ]
  },
  {
    "id": "708",
    "category": "linea_blanca",
    "name": "Nevera KALLEY No Frost Congelador Superior 332 Litros Inverter",
    "image": "images/products/708.avif",
    "price": 1839885,
    "brand": "KALLEY",
    "isEnabled": true,
    "specs": {
      "size_value": 332,
      "unit": "litros"
    },
    "shortdescription": "K-NT332L Gris",
    "description": "Imagina una cocina fresca y organizada todos los días. Con la nevera KALLEY K-NT332A y su tecnología No Frost, olvídate de descongelar. Su compresor Inverter y eficiencia energética A te permiten ahorrar hasta un 67% de energía, con un funcionamiento silencioso y duradero. Además, su diseño moderno con acabado anti-huella y dispensador de agua la hacen perfecta para tu hogar.",
    "features": [
      "Tecnología No Frost: sin escarcha ni descongelamiento",
      "Compresor Inverter: silencioso, durable y eficiente",
      "Ahorra hasta 67% con eficiencia energética A",
      "Dispensador de agua manual práctico de 2 L",
      "Distribuye el aire frio de manera uniforme"
    ],
    "tags": [
      "disponible"
    ]
  },
  {
    "id": "801",
    "category": "linea_blanca",
    "name": "Lavadora KALLEY 12 Kilos",
    "image": "images/products/801.webp",
    "price": 1138385,
     "brand": "KALLEY",
    "isEnabled": true,
    "specs": { "size_value": 12, "unit": "kg" },
    "shortdescription": "K-LD12GE Gris. Con 12 kilos de capacidad y un diseño compacto, es perfecta para espacios reducidos. ",
    "description": "Su panel digital y 8 ciclos de lavado garantizan un rendimiento personalizado y eficiente. La tapa con control de caída evita accidentes, y su manejo es intuitivo para tu comodidad. Aprovecha esta combinación de gran capacidad y tamaño reducido. ¡Lleva la tecnología y conveniencia a tu casa hoy mismo!",
    "features": [
      "Garantía 3 años en el motor,5 años en panel,1 año en la unidad",
      "Más ahorro, menos consumo y excelente rendimiento.",
      "Gran variedad de funciones que se ajustan a tus necesidades"
    ],
    "tags": ["mas-vendido"]
  },
  {
    "id": "802",
    "category": "linea_blanca",
    "name": "Lavadora KALLEY 18 Kilos K-LD18GB2 Blanca",
    "image": "images/products/802.webp",
    "price": 1723908,
     "brand": "KALLEY",
    "isEnabled": false,
    "specs": { "size_value": 18, "unit": "kg" },
    "shortdescription": "La Lavadora Digital K-LD18B2 KALLEY de 18 kg combina capacidad y eficiencia. ",
    "description": "Con su panel LED con 10 programas preestablecidos, ajustes de temperatura, nivel de agua y suciedad, y funciones como bloqueo para niños y enjuague extra. Cuenta con tina de acero inoxidable y puerta de vidrio, garantizando durabilidad. Es práctica y resistente, con una capacidad capacidad de 18 kg es perfecta para cuidar todas tus prendas, desde las más delicadas hasta las toallas más grandes. ideal para cualquier hogar. Lo mejor de todo: ¡la tienes al mejor precio del mercado!",
    "features": [
      "Panel digital con programas preestablecidos y luces LED",
      "Selecciona automáticamente el nivel de agua óptimo",
      "10 Ciclos que se ajustan a tus necesidades",
      "Garantía de 3 años en el motor"
    ],
    "tags": [""]
  },
  {
    "id": "803",
    "category": "linea_blanca",
    "name": "Lavadora WHIRLPOOL 20 Kilos",
    "image": "images/products/803.webp",
    "price": 2275908,
     "brand": "WHIRLPOOL",
    "isEnabled": true,
    "specs": { "size_value": 20, "unit": "kg" },
    "shortdescription": "WW20NNAHLA. Ahorra agua y energía con Xpert Eco, reduciendo hasta 125L y 30% de consumo por carga. ",
    "description": "Su sistema Smart Action combina 3 tecnologías para un lavado potente y delicado, mientras que el Ciclo Ropa de Mascotas elimina hasta 68% más pelo. Con 3 Xpert Cycles, remueve las manchas más difíciles y elimina 4 veces más residuos de jabón, ideal para pieles sensibles. Lava edredones King sin esfuerzo, optimiza el uso de detergente con su multidispensador automático y evita manchas con su llenado inteligente. ¡Potencia y cuidado en cada lavado!",
    "features": [
      "Xpert Eco: Ahorra 125L de agua y 30% de energía.",
      "Smart Action: 3 tecnologías para lavado potente y suave.",
      "Ciclo Mascotas: Elimina hasta 68% más pelo.",
      "Xpert Cycles: Máxima limpieza y cuidado de prendas."
    ],
    "tags": ["recomendado1"]
  },
  {
    "id": "804",
    "category": "linea_blanca",
    "name": "Lavadora LG 16 Kilos",
    "image": "images/products/804.webp",
    "price": 1912508,
     "brand": "LG",
    "isEnabled": false,
    "specs": { "size_value": 16, "unit": "kg" },
    "shortdescription": "WT16MVTB. Lavadora LG Carga Superior 16KG color Negro Medio.",
    "description": "Motor Smart Inverter proporciona un lavado silencioso y potente. Tres movimientos de lavado que se adaptan a cada tipo de tejido. Diseño delgado y duradero.",
    "features": [
      "TurboDrum™ proporciona un lavado potente",
      "Smart Motion 3 movimientos Smart Inverter para optimizar lavado",
      "Motor Smart Inverter Ajusta la energía según velocidad y fuerza",
      "Puerta con Cierre Suave",
      "Filtro atrapa motas de gran tamaño"
    ],
    "tags": [""]
  },
  {
    "id": "805",
    "category": "linea_blanca",
    "name": "Lavadora ELECTROLUX 22 Kilos",
    "image": "images/products/805.webp",
    "price": 2137908,
     "brand": "ELECTROLUX",
    "isEnabled": true,
    "specs": { "size_value": 22, "unit": "kg" },
    "shortdescription": "LP22I Negra. Lleva eficiencia, cuidado y estilo a tu hogar con la Lavadora ELECTROLUX LP22I.",
    "description": "Lava hasta edredones King Size con su gran capacidad. Disfruta ciclos rápidos, lavado silencioso y 11 programas. Tecnología Jet&Clean para limpieza profunda sin manchas.",
    "features": [
      "Tapa de Cierre Suave",
      "Diluye hasta el 100% del detergente y suavizante",
      "Control y adaptación del tiempo de lavado",
      "Adelanta la programación con un solo botón",
      "Función reutilizar agua"
    ],
    "tags": ["te-puede-interesar"]
  },
  {
    "id": "901",
    "category": "linea_blanca",
    "name": "Estufa de Piso HACEB 4 Puestos Con Horno",
    "image": "images/products/901.webp",
    "price": 885385,
     "brand": "HACEB",
    "isEnabled": true,
    "shortdescription": "Gas Natural Romero 50-Torre Gris",
    "description": "La estufa Romero HACEB Torre plata gas natural, logra recetas más rápidas con su fogón 35% más potente y de manera segura con sus parrillas antideslizantes. Cocinar en el horno ahora será mejor gracias a su visor 65% más amplio y hazlo de forma segura evitando la fuga de gas. ¡Elígela!",
    "features": [
      "Ahorra tiempo cocinando. Fogón 35% más potente",
      "Parrilla antideslizante, mayor estabilidad en recipientes.",
      "Visor del horno 65% más amplio para seguir tus recetas",
      "Encendido eléctrico de las fuentes de calor"
    ],
    "tags": ["mas-vendido2","te-puede-interesar"]
  },
  {
    "id": "902",
    "category": "linea_blanca",
    "name": "Estufa de Piso SUPERIOR 4 Puestos",
    "image": "images/products/902.jfif",
    "price": 989948,
     "brand": "SUPERIOR",
    "isEnabled": true,
    "shortdescription": "Gas Natural Con Horno AXXIS Gris",
    "description": "Esta línea de estufa superior te brinda comodidad y practicidad a la hora de preparar los alimentos. Cuenta con tres quemadores semi- rápidos y uno rápido, amplio horno con aislamiento en fibra de vidrio interno, que genera una cocción uniforme, válvula de seguridad y muchos más beneficios que aportan seguridad y tranquilidad.",
    "features": [
      "Estufa de empotrar en acero inoxidable",
      "Válvula de seguridad",
      "Tapa de vidrio templado, grosor 4mm",
      "Dorador en el horno"
    ],
    "tags": [""]
  },
  {
    "id": "903",
    "category": "linea_blanca",
    "name": "Estufa de Piso ABBA 4 Puestos Con Horno",
    "image": "images/products/903.jfif",
    "price": 851058,
     "brand": "ABBA",
    "isEnabled": true,
    "shortdescription": "Gas Natural AT101-5 Negro",
    "description": "Diseño recto moderno, mesa firme en acero inoxidable, horno a gas con protección termoeléctrica para total seguridad. Práctico encendido electrónico.",
    "features": [
      "Moderno diseño recto",
      "Superficie en acero inoxidable de alta resistencia",
      "Horno a gas para cocinar y calentar alimentos",
      "Mesa con niveles antiderrame para fácil limpieza"
    ],
    "tags": ["Nuevo"]
  },
  {
    "id": "904",
    "category": "linea_blanca",
    "name": "Estufa de Piso HACEB 4 Puestos Con Horno",
    "image": "images/products/904.webp",
    "price": 1114408,
     "brand": "HACEB",
    "isEnabled": true,
    "shortdescription": "Gas Natural Romero Reflex 50-Vidrio Negro",
    "description": "Contraste único de colores y acabados. Cocina con gratinador para toques crujientes y dorados. Fogón 35% más potente y sistema de termoseguridad.",
    "features": [
      "Ahorra tiempo cocinando. Fogón 35% más potente",
      "Parrilla antideslizante, mayor estabilidad de recipientes",
      "Gratinador en curvas, para recetas crocantes y doradas",
      "Quemador ABC para fácil conversión entre gases",
      "Evita fugas de gas gracias al sistema de termoseguridad"
    ],
    "tags": ["Nuevo"]
  },
  {
    "id": "905",
    "category": "linea_blanca",
    "name": "Estufa de Piso ABBA 4 Puestos Con Gabinete",
    "image": "images/products/905.webp",
    "price": 669358,
     "brand": "ABBA",
    "isEnabled": false,
    "shortdescription": "Gas Natural Con Gabinete Negro",
    "description": "Encuentra todo lo necesario para cocinar con comodidad: quemadores rápidos y ultra rápidos, mesón en acero inoxidable y un práctico gabinete multiusos.",
    "features": [
      "Amplio gabinete para almacenar mercado o utensilios",
      "4 puestos para preparar varios alimentos a la vez",
      "Mesa en Acero inoxidable de alta resistencia",
      "Mesa con niveles antiderrame para fácil limpieza",
      "Tres quemadores Rápidos y uno Ultrarrápido"
    ],
    "tags": ["Nuevo"]
  },
  {
    "id": "806",
    "category": "linea_blanca",
    "name": "Lavadora MABE 24 Kilos",
    "image": "images/products/806.avif",
    "price": 2644885,
     "brand": "MABE",
    "isEnabled": true,
    "specs": { "size_value": 24, "unit": "kg" },
    "shortdescription": "LMC74215WDAB0 Gris. La lavadora MABE es ideal para ayudarte a ahorrar tiempo y esfuerzo, gracias a sus 11 ciclos automáticos e inicio programado.",
    "description": "Cuenta con tecnología aqua saver green que ahorra hasta 76% de agua y 55% de energía. Cuida tu salud y la de tu familia gracias a su ciclo de sanitizado, que elimina el 99.9% de las bacterías. Su sistema de lavado con agitador Hybrid Washing, elimina los residuos con un lavado profundo y eficiente.",
    "features": [
      "Ciclo Sanitizado, cuida tu salud.",
      "Muy fácil de manejar, gracias a los ciclos automáticos",
      "Inicio retardado, mayor independencia",
      "Programa tu lavadora para que prenda automaticamente",
      "Panel de control con perillas"
    ],
    "tags": []
  },
  {
    "id": "807",
    "category": "linea_blanca",
    "name": "Lavadora LG 25 Kilos",
    "image": "images/products/807.avif",
    "price": 3047385,
     "brand": "LG",
    "isEnabled": true,
    "specs": { "size_value": 25, "unit": "kg" },
    "shortdescription": "WT25MT6HK Negro. Selecciona un programa de lavado y la tecnología 6 Motion Direct Drive moverá la tina en varias direcciones, dándole a las telas el cuidado apropiado mientras deja la ropa ultra limpia.",
    "description": "Lavadora LG carga superior con excelente capacidad 25 Kg, exclusiva tecnología 6 Motion que te permite tener un lavado más profundo para cada tipo de prenda, permite un proceso de lavado más potente, eliminando la suciedad más difícil gracias al sistema de lavado TurboDrum™, con los potentes chorros de agua con JetSpray obtienes un enjuague eficaz y una limpieza total, gracias al motor Direct Drive opten Mayor eficiencia energética.",
    "features": [
      "6 Motion DD™, Óptimo lavado de las prendas",
      "TurboDrum, Lavado poderoso",
      "Turbo Wash 3D, Lavado poderoso en menor tiempo",
      "Jet Spray, enjuague rápido y eficaz",
      "Smart Diagnosis™, Diagnostico inteligente de tu producto"
    ],
    "tags": []
  },
  {
    "id": "808",
    "category": "linea_blanca",
    "name": "Lavadora CHALLENGER 11 Kilos",
    "image": "images/products/808.avif",
    "price": 735885,
     "brand": "CHALLENGER",
    "isEnabled": true,
    "specs": { "size_value": 11, "unit": "kg" },
    "shortdescription": "CW 4711 Blanca. La lavadora CHALLENGER CW4711 facilita el cuidado de tu ropa con un lavado práctico, eficiente y pensado para tu día a día.",
    "description": "Su sistema de impulsor genera movimientos que mejoran la limpieza de las prendas, mientras su centrifugado optimiza el tiempo de secado para que tu ropa esté lista más rápido. Su diseño funcional y fácil manejo te brinda comodidad en cada uso y un desempeño confiable en tu hogar.",
    "features": [
      "Capacidad 11 kg ideal para el lavado diario",
      "Sistema de lavado por impulsor más eficiente",
      "Centrifugado Air-Flux: ropa más seca",
      "2 ciclos de lavado: normal y pesado",
      "Filtro atrapa pelusas para mayor limpieza"
    ],
    "tags": ["recomendado1"]
  },
  {
    "id": "809",
    "category": "linea_blanca",
    "name": "Lavadora KALLEY Carga Superior 14 Kilos K-LD14GE Gris",
    "image": "images/products/809.avif",
    "price": 1379885,
    "brand": "KALLEY",
    "isEnabled": true,
    "specs": {
      "size_value": 14,
      "unit": "kg"
    },
    "shortdescription": "¡Descubre la lavadora ideal para tu hogar! Con 14 kilos de capacidad y un diseño compacto, es perfecta para espacios reducidos.",
    "description": "Su panel digital y 8 ciclos de lavado garantizan un rendimiento personalizado y eficiente. La tapa con control de caída evita accidentes, y su manejo es intuitivo para tu comodidad. Aprovecha esta combinación de gran capacidad y tamaño reducido.",
    "features": [
      "Garantía 5 años en el motor",
      "Más ahorro, menos consumo y excelente rendimiento.",
      "Gran variedad de funciones que se ajustan a tus necesidades"
    ],
    "tags": [
      "disponible"
    ]
  },
  {
    "id": "810",
    "category": "linea_blanca",
    "name": "Lavadora KALLEY Carga Superior 18 Kilos K-LD18G2 Gris",
    "image": "images/products/810.avif",
    "price": 1724885,
    "brand": "KALLEY",
    "isEnabled": true,
    "specs": {
      "size_value": 18,
      "unit": "kg"
    },
    "shortdescription": "La Lavadora Digital K-LD18G2 KALLEY de 18 kg combina capacidad y eficiencia.",
    "description": "Con su elegante color gris y panel LED con 10 programas preestablecidos, ajustes de temperatura, nivel de agua y suciedad, y funciones como bloqueo para niños y enjuague extra. Cuenta con tina de acero inoxidable y puerta de vidrio, garantizando durabilidad. Es práctica y resistente, con una capacidad capacidad de 18 kg es perfecta para cuidar todas tus prendas, desde las más delicadas hasta las toallas más grandes. ideal para cualquier hogar.",
    "features": [
      "Panel digital con programas preestablecidos y luces LED",
      "Selecciona automáticamente el nivel de agua óptimo",
      "10 Ciclos que se ajustan a tus necesidades",
      "Garantía de 5 años en el motor",
      "Mayor capacidad y eficiencia para el cuidado de tu ropa"
    ],
    "tags": [
      "disponible"
    ]
  },
  {
    "id": "811",
    "category": "linea_blanca",
    "name": "Lavadora KALLEY Carga Superior 22 Kilos K-LD22G Gris",
    "image": "images/products/811.avif",
    "price": 1874385,
    "brand": "KALLEY",
    "isEnabled": true,
    "specs": {
      "size_value": 22,
      "unit": "kg"
    },
    "shortdescription": "La Lavadora Digital KALLEY de 22 kg ofrece gran capacidad y control total para el cuidado de tu ropa.",
    "description": "Su panel digital LED integra 10 programas de lavado y múltiples funciones como ajuste de temperatura, nivel de agua y suciedad, temporizador, enjuague extra, remojo, bloqueo para niños y sistema de limpieza de tambor Klean+. Diseñada para adaptarse a todo tipo de prendas, desde delicadas hasta cargas pesadas, combina practicidad y eficiencia en cada ciclo. Cuenta con 1 año de garantía en la unidad, 5 años en el motor y 3 años en el panel.",
    "features": [
      "Lavadora automática digital de 22 kg",
      "Panel LED con 10 programas de lavado",
      "Ajuste de temperatura, agua y suciedad",
      "Garantías en años: 1a unidad, 5a motor y 3a panel",
      "Función Klean+ y bloqueo para niños"
    ],
    "tags": [
      "disponible"
    ]
  },
  {
    "id": "812",
    "category": "linea_blanca",
    "name": "Lavadora KALLEY Semi automática Carga Superior 10,1 Kilos K-LDT10B1 Blanca",
    "image": "images/products/812.avif",
    "price": 666885,
    "brand": "KALLEY",
    "isEnabled": true,
    "specs": {
      "size_value": 10.1,
      "unit": "kg"
    },
    "shortdescription": "Si buscas una lavadora práctica, económica y eficiente, la lavadora KALLEY semi automática de 10,1 Kilos de capacidad es para ti.",
    "description": "Es ideal para tu ropa, de uso sencillo y un diseño que te va a encantar! Además, su doble tina te permite lavar y secar al mismo tiempo, lo que te ahorrará tiempo y esfuerzo.",
    "features": [
      "Apagado automático",
      "Filtro de limpieza (atrapa motas)",
      "Lavado y centrifugado programable",
      "Garantía de un año, respaldo Kalley"
    ],
    "tags": [
      "disponible"
    ]
  },
  {
    "id": "1001",
    "category": "bicicletas",
    "name": "KTM Ultra Ride Talla M/43",
    "image": "images/products/1001.webp",
    "price": 4460679,
     "brand": "KTM",
    "isEnabled": true,
    "shortdescription": "Bicicleta ideal para recorridos largos con comodidad y eficiencia.",
    "description": "La KTM Ultra Ride Talla M/43 está diseñada para ofrecer un rendimiento superior en recorridos largos, gracias a su ergonomía avanzada y componentes de alta calidad. Su cuadro en aluminio 6061 proporciona ligereza y resistencia, mientras que su transmisión SRAM Eagle SX 1x12 asegura suavidad y precisión en cada cambio. Equipada con frenos hidráulicos Shimano y llantas Schwalbe Rapid Rob 29'', esta bicicleta es perfecta para usuarios que buscan un producto confiable, cómodo y eficiente.",
    "features": [
      "Cuadro: Aluminio 6061 con diseño ergonómico",
      "Transmisión: SRAM Eagle SX 1x12 velocidades",
      "Suspensión: Horquilla Suntour XCM",
      "Frenos: Shimano MT200 hidráulicos",
      "Llantas: Schwalbe Rapid Rob 29''",
      "Color: Azul petróleo con detalles naranja"
    ],
    "tags": ["recomendado2"]
  },
  {
    "id": "1002",
    "category": "bicicletas",
    "name": "KTM Ultra Sport Talla M/43",
    "image": "images/products/1002.webp",
    "price": 5185911,
    "brand": "KTM",
    "isEnabled": true,
    "shortdescription": "Bicicleta montaña aluminio 6061 con geometría deportiva.",
    "description": "Diseñada para quienes desean avanzar al siguiente nivel con una horquilla RockShox y geometría deportiva, ideal para rutas exigentes y ciclistas que buscan mejor rendimiento.",
    "features": [
      "Cuadro: Aluminio 6061 con geometría deportiva",
      "Transmisión: SRAM Eagle SX 1x12 velocidades",
      "Suspensión: Horquilla RockShox Judy",
      "Frenos: Shimano MT200 hidráulicos",
      "Llantas: Schwalbe Rapid Rob 29\"",
      "Color: Naranja con detalles gris oscuro"
    ],
    "tags": ["te-puede-interesar"]
  },
  {
    "id": "1003",
    "category": "bicicletas",
    "name": "KTM Ultra Fun 29  Tallas M/43, L/48, XL/53",
    "image": "images/products/1003.webp",
    "price": 4216140,
    "brand": "KTM",
    "isEnabled": true,
    "shortdescription": "Bicicleta de montaña ideal para equilibrio entre rendimiento y confort.",
    "description": "Pensada para ciclistas que buscan un equilibrio entre rendimiento, confort y eficiencia en rutas de montaña. Su cuadro ligero y componentes confiables la hacen ideal para entrenamientos y travesías.",
    "features": [
      "Cuadro: Aluminio ligero 6061",
      "Transmisión: SRAM Eagle SX 1x12 velocidades",
      "Suspensión: Horquilla Suntour XCR 32",
      "Frenos: Discos hidráulicos Shimano MT200",
      "Ruedas: 29\" con llantas MAXXIS RECON RACE",
      "Color: Negro con detalles naranja"
    ],
    "tags": ["recomendado1"]
  },
  {
    "id": "1004",
    "category": "bicicletas",
    "name": "KTM Ultra Fun Talla M/43 (Azul)",
    "image": "images/products/1004.webp",
    "price": 3367862,
    "brand": "KTM",
    "isEnabled": true,
    "shortdescription": "Una bicicleta accesible y confiable para disfrutar del ciclismo en senderos y rutas urbanas.",
    "description": "La KTM Ultra Fun está diseñada para ciclistas que buscan versatilidad. Su combinación de un cuadro resistente de aluminio 6061 con una geometría cómoda la convierte en la opción ideal tanto para iniciarse en senderos de montaña como para recorridos urbanos diarios.",
    "features": [
      "Cuadro: Aluminio 6061",
      "Transmisión: Shimano Deore 2x9 velocidades",
      "Suspensión: Horquilla Suntour XCR",
      "Frenos: Shimano MT200 hidráulicos",
      "Llantas: Schwalbe Rapid Rob 29\"",
      "Color: Azul con detalles en negro"
    ],
    "tags": [""]
  },
  {
    "id": "1005",
    "category": "bicicletas",
    "name": "KTM Ultra Fun Talla M/43 (Negro)",
    "image": "images/products/1005.webp",
    "price": 3367862,
    "brand": "KTM",
    "isEnabled": true,
    "shortdescription": "Una bicicleta accesible y confiable para disfrutar del ciclismo en senderos y rutas urbanas.",
    "description": "La KTM Ultra Fun en su versión negra ofrece elegancia y rendimiento. Diseñada para ciclistas que buscan versatilidad, su cuadro de aluminio 6061 y componentes Shimano garantizan durabilidad y confort en cualquier terreno.",
    "features": [
      "Cuadro: Aluminio 6061",
      "Transmisión: Shimano Deore 2x9 velocidades",
      "Suspensión: Horquilla Suntour XCR",
      "Frenos: Shimano MT200 hidráulicos",
      "Llantas: Schwalbe Rapid Rob 29\"",
      "Color: Negro con detalles en gris"
    ],
    "tags": [""]
  }
];