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
    "category": "audio_video",
    "name": "TV TCL 32\" Smart TV Google",
    "image": "images/products/101.webp",
    "price": 669977,
    "isEnabled": true,
    "shortdescription": "TV TCL serie S5K: Este TV combina la tecnología de imagen QLED con FHD. 32S5K.",
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
    "category": "audio_video",
    "name": "TV KALLEY 40\"",
    "image": "images/products/103.webp",
    "price": 878977,
    "isEnabled": true,
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
    "category": "audio_video",
    "name": "TV PANASONIC 43\"",
    "image": "images/products/102.webp",
    "price": 1153977,
    "isEnabled": true,
    "shortdescription": "La serie de TV NS600 de PANASONIC te brinda una imagen de alta calidad.43NS600.",
    "description": "Su tecnología Vivid Digital Pro, está diseñada para mejorar tu experiencia visual brindando tonos de piel naturales, mejorando el brillo y agudizando los detalles de las imágenes. Agrega esto con la capacidad de disfrutar todo tu contenido favorito gracias al sistema operativo Google TV, y ¡Tendrás un televisor de alta tecnología japonesa que se adapta a las preferencias de toda la familia! ¡Compra el tuyo ya!",
    "features": [
      "Google TV: Streaming, música y mas Organizado para tu hogar",
      "Vivid Digital Pro tonos naturales, brillo y detalles agudos",
      "Chromecast & Airplay:Transmite desde otros dispositivos al Tv",
      "Bluetooth AudioLink: amplifica fácilmente el sonido de tu Tv"
    ],
    "tags": ["te-puede-interesar"]
  },
  {
    "id": "104",
    "category": "audio_video",
    "name": "TV CHALLENGER 43\"",
    "image": "images/products/104.webp",
    "price": 988977,
    "isEnabled": false,
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
    "category": "audio_video",
    "name": "TV HYUNDAI 43\" Sistema Operativo Roku",
    "image": "images/products/105.webp",
    "price": 933977,
    "isEnabled": false,
    "shortdescription": "Referencia: HYLED4325RiM",
    "description": "Hyundai Electronics trae para ti un sistema operativo que pone a tu alcance más de 5,000 apps, ademas inteligencia artifical integrada para una busqueda más personalizada y acertada. Resolucion HD,conectividad WIFI.Usa tu celular como control, activa la escucha privada- transmite el audio del tv a tu celular sin generar molestias y activa la busqueda inteligente ¡Compra el tuyo ahora!",
    "features": [
      "Sistema Operativo Roku",
      "Actualización periodica desde casa matriz",
      "Buscador con inteligencia artificial",
      "Transmite el audio de tu tv directamente a tu celular"
    ],
    "tags": ["recomendado1"]
  },
  {
    "id": "106",
    "category": "audio_video",
    "name": "TV SAMSUNG 43\"",
    "image": "images/products/106.webp",
    "price": 1538977,
    "isEnabled": true,
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
    "id": "150",
    "category": "audio_video",
    "name": "TV TCL 43\"",
    "image": "images/products/150.webp",
    "price": 1043977,
    "isEnabled": true,
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
    "id": "151",
    "category": "audio_video",
    "name": "TV TCL 50\"",
    "image": "images/products/151.webp",
    "price": 1483977,
    "isEnabled": true,
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
    "id": "152",
    "category": "audio_video",
    "name": "TV TCL 55\"",
    "image": "images/products/152.webp",
    "price": 1593977,
    "isEnabled": true,
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
    "id": "107",
    "category": "audio_video",
    "name": "Torre de Sonido PANASONIC 300 Watts.",
    "image": "images/products/107.jfif",
    "price": 757977,
    "isEnabled": true,
    "shortdescription": "Medidas del Equipo de Audio (Ancho x Alto x Fondo) En Cm 26,5 x 60,6 x 27,2 Centímetros.",
    "description": "Al heredar el concepto de audio urbano, el SC-UA30 tiene un tamaño más compacto y permite una mayor libertad de transporte. A pesar de su tamaño, el UA30 cuenta con un sonido potente y claro más allá de su imaginación. La conexión a través de un teléfono inteligente mejora aún más la experiencia musical avanzada del SC-UA30. Conectar dos micrófonos permite a los usuarios disfrutar de Karaoke en casa.",
    "features": [
      "Full Karaoke con dos entradas para micrófono y puede disfrutarlo",
      "La aplicación MAX Juke Solicite canciones desde teléfono inteligente",
      "Sistema de audio compacto de alta potencia con sonido expansivo"
    ],
    "tags": ["mas-vendido", "recomendado1"]
  },
  {
    "id": "108",
    "category": "audio_video",
    "name": "Torre de Sonido SAMSUNG 500 Watts",
    "image": "images/products/108.webp",
    "price": 768977,
    "isEnabled": true,
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
    "id": "109",
    "category": "audio_video",
    "name": "Minicomponente PANASONIC 650 Watts",
    "image": "images/products/109.jfif",
    "price": 801977,
    "isEnabled": true,
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
    "id": "110",
    "category": "audio_video",
    "name": "Torre de Sonido LG 500 Watts",
    "image": "images/products/110.webp",
    "price": 878977,
    "isEnabled": true,
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
    "id": "111",
    "category": "audio_video",
    "name": "Torre de Sonido SONY 200 Watts",
    "image": "images/products/111.webp",
    "price": 1087874,
    "isEnabled": false,
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
    "id": "112",
    "category": "audio_video",
    "name": "Torre de Sonido LG 1000 Watts",
    "image": "images/products/112.webp",
    "price": 1131977,
    "isEnabled": true,
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
    "id": "113",
    "category": "celulares",
    "name": "Celular SAMSUNG Galaxy A17 256GB 4G",
    "image": "images/products/113.webp",
    "price": 955955,
    "isEnabled": true,
    "shortdescription": "Tamaño Pantalla: 6.7 Pulgadas, Memoria Interna: 256 GB, Memoria RAM: 8 GB, Color: Azul. ",
    "description": "Disfruta el SAMSUNG Galaxy A17 LTE con un diseño moderno y delgado con cámaras que capturan cada detalle con brillo y nitidez. Su potente procesador y pantalla fluida te permiten sumergirte en juegos y contenido sin pausas. Cuenta con protección contra rayones, polvo y salpicaduras. ¡Lleva ahora mismo un equipo diseñado para durar, rendir y acompañarte a donde vayas!",
    "features": [
      "Procesador G99 para alto rendimiento diario",
      "Cámaras 50MP con mayor brillo y nitidez",
      "Proteccion IP54 y vidrio templado duradero"
    ],
    "tags": ["mas-vendido"]
  },
  {
    "id": "114",
    "category": "celulares",
    "name": "Celular REDMI 15 256GB 4G Negro",
    "image": "images/products/114.webp",
    "price": 878955,
    "isEnabled": true,
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
    "id": "115",
    "category": "celulares",
    "name": "Celular SAMSUNG Galaxy A36 256GB 5G",
    "image": "images/products/115.webp",
    "price": 1648955,
    "isEnabled": true,
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
    "id": "116",
    "category": "celulares",
    "name": "Celular MOTOROLA Edge 50 Fusion 5G",
    "image": "images/products/116.webp",
    "price": 1538955,
    "isEnabled": false,
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
    "id": "117",
    "category": "celulares",
    "name": "Celular POCO X7 256GB 5G Plateado",
    "image": "images/products/117.webp",
    "price": 1204390,
    "isEnabled": true,
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
    "id": "118",
    "category": "celulares",
    "name": "Celular REALME 12+ 256GB 5G Verde",
    "image": "images/products/118.webp",
    "price": 1538955,
    "isEnabled": true,
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
    "id": "119",
    "category": "celulares",
    "name": "Celular HONOR X8c 256GB 5G Gris",
    "image": "images/products/119.webp",
    "price": 1648955,
    "isEnabled": false,
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
    "id": "120",
    "category": "celulares",
    "name": "Celular VIVO Y21D 256GB 4G Morado",
    "image": "images/products/120.webp",
    "price": 989890,
    "isEnabled": true,
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
    "id": "121",
    "category": "celulares",
    "name": "Celular TECNO Spark 40Pro+ 256GB 4G",
    "image": "images/products/121.webp",
    "price": 989890,
    "isEnabled": true,
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
    "id": "122",
    "category": "celulares",
    "name": "Celular TECNO Spark 40Pro+ 256GB 4G",
    "image": "images/products/122.webp",
    "price": 989890,
    "isEnabled": true,
    "shortdescription": "Tamaño Pantalla\n6.78 Pulgadas\nMemoria Interna\n256 GB\nMemoria RAM\n8 GB",
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
    "id": "123",
    "category": "celulares",
    "name": "Celular MOTOROLA G86 5G 256GB AZUL",
    "image": "images/products/123.webp",
    "price": 988955,
    "isEnabled": true,
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
    "id": "124",
    "category": "celulares",
    "name": "Celular SAMSUNG Galaxy A17 256GB 5G",
    "image": "images/products/124.webp",
    "price": 955955,
    "isEnabled": true,
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
    "id": "125",
    "category": "computadores",
    "name": "Computador Portátil HP 14\"",
    "image": "images/products/125.webp",
    "price": 1318933,
    "isEnabled": true,
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
    "id": "126",
    "category": "computadores",
    "name": "Computador Portátil ASUS 15.6\"",
    "image": "images/products/126.webp",
    "price": 1648977,
    "isEnabled": true,
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
    "id": "127",
    "category": "computadores",
    "name": "Computador Portátil LENOVO 15.6\"",
    "image": "images/products/127.webp",
    "price": 1648977,
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
    "id": "128",
    "category": "computadores",
    "name": "Computador Portátil ACER ASPIRE 14\"",
    "image": "images/products/128.webp",
    "price": 1758933,
    "isEnabled": true,
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
    "id": "129",
    "category": "computadores",
    "name": "Computador Portátil ASUS 15.6\"",
    "image": "images/products/129.webp",
    "price": 1868977,
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
    "id": "130",
    "category": "computadores",
    "name": "Computador Portátil MSI Modern 13.3\"",
    "image": "images/products/130.webp",
    "price": 1868933,
    "isEnabled": true,
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
    "id": "131",
    "category": "electromenores",
    "name": "Freidora de Aire KALLEY 6.3 Litros K-MAF6",
    "image": "images/products/131.webp",
    "price": 285890,
    "isEnabled": true,
    "shortdescription": "La Freidora KALLEY K-MAF6 es el aliado ideal para tu cocina. ",
    "description": "Ahora cocinar sano no es difícil y está al alcance de todos. Puedes cocinar, asar, freír o tostar sin necesidad de aceite y en un tiempo más corto que lo tradicional. Tus alimentos quedarán crujientes por fuera y suaves en el interior gracias a su cocción con aire caliente. Tiene capacidad máxima de 6.3 litros lo que te permite cocinar grandes porciones y una potencia de 1700W para mayor eficiencia. Cuenta con temporizador de 60min y apagado automático, además de temperatura ajustable hasta 200°C. ¡Compra la tuya acá!",
    "features": [
      "Capacidad máx. de 6.3Litros para grandes preparaciones",
      "Temperatura hasta 200°C para variedad en recetas",
      "Cesta con rejilla antiadherente para fácil limpieza",
      "Mango frío al tacto para mayor seguridad"
    ],
    "tags": ["mas-vendido"]
  },
  {
    "id": "132",
    "category": "electromenores",
    "name": "Freidora de Aire BLACK+DECKER 4.5L",
    "image": "images/products/132.webp",
    "price": 270490,
    "isEnabled": true,
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
    "id": "133",
    "category": "electromenores",
    "name": "Freidora de aire IMUSA Mega Mecánica 7.5L Negra",
    "image": "images/products/133.webp",
    "price": 439890,
    "isEnabled": true,
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
    "id": "134",
    "category": "electromenores",
    "name": "Horno Microondas KALLEY 0.7 Pies",
    "image": "images/products/134.webp",
    "price": 280390,
    "isEnabled": true,
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
    "id": "135",
    "category": "electromenores",
    "name": "Horno Microondas ELECTROLUX 0.7 Pies EMDO20 Gris",
    "image": "images/products/135.webp",
    "price": 318890,
    "isEnabled": false,
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
    "id": "136",
    "category": "electromenores",
    "name": "Horno Microondas WHIRLPOOL 0.7 Pies WM1807B Negro",
    "image": "images/products/136.webp",
    "price": 313445,
    "isEnabled": true,
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
    "id": "137",
    "category": "linea_blanca",
    "name": "Nevera KALLEY Frost Una Puerta 187 Litros",
    "image": "images/products/137.webp",
    "price": 1098955,
    "isEnabled": true,
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
    "id": "138",
    "category": "linea_blanca",
    "name": "Nevera HACEB Frost Una Puerta 213 Litros",
    "image": "images/products/138.webp",
    "price": 1318955,
    "isEnabled": true,
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
    "id": "139",
    "category": "linea_blanca",
    "name": "Nevera CHALLENGER No Frost 231 Litros",
    "image": "images/products/139.webp",
    "price": 1637955,
    "isEnabled": true,
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
    "id": "141",
    "category": "linea_blanca",
    "name": "Lavadora KALLEY 12 Kilos K-LD12GE Gris",
    "image": "images/products/141.webp",
    "price": 1208955,
    "isEnabled": true,
    "shortdescription": "Con 12 kilos de capacidad y un diseño compacto, es perfecta para espacios reducidos. ",
    "description": "Su panel digital y 8 ciclos de lavado garantizan un rendimiento personalizado y eficiente. La tapa con control de caída evita accidentes, y su manejo es intuitivo para tu comodidad. Aprovecha esta combinación de gran capacidad y tamaño reducido. ¡Lleva la tecnología y conveniencia a tu casa hoy mismo!",
    "features": [
      "Garantía 3 años en el motor,5 años en panel,1 año en la unidad",
      "Más ahorro, menos consumo y excelente rendimiento.",
      "Gran variedad de funciones que se ajustan a tus necesidades"
    ],
    "tags": ["te-puede-interesar"]
  },
  {
    "id": "142",
    "category": "linea_blanca",
    "name": "Lavadora KALLEY 18 Kilos K-LD18GB2 Blanca",
    "image": "images/products/142.webp",
    "price": 1483955,
    "isEnabled": true,
    "shortdescription": "La Lavadora Digital K-LD18B2 KALLEY de 18 kg combina capacidad y eficiencia. ",
    "description": "Con su panel LED con 10 programas preestablecidos, ajustes de temperatura, nivel de agua y suciedad, y funciones como bloqueo para niños y enjuague extra. Cuenta con tina de acero inoxidable y puerta de vidrio, garantizando durabilidad. Es práctica y resistente, con una capacidad capacidad de 18 kg es perfecta para cuidar todas tus prendas, desde las más delicadas hasta las toallas más grandes. ideal para cualquier hogar. Lo mejor de todo: ¡la tienes al mejor precio del mercado!",
    "features": [
      "Panel digital con programas preestablecidos y luces LED",
      "Selecciona automáticamente el nivel de agua óptimo",
      "10 Ciclos que se ajustan a tus necesidades",
      "Garantía de 3 años en el motor"
    ],
    "tags": []
  },
  {
    "id": "144",
    "category": "linea_blanca",
    "name": "Lavadora WHIRLPOOL 20 Kilos WW20NNAHLA",
    "image": "images/products/144.webp",
    "price": 1978955,
    "isEnabled": true,
    "shortdescription": "Ahorra agua y energía con Xpert Eco, reduciendo hasta 125L y 30% de consumo por carga. ",
    "description": "Su sistema Smart Action combina 3 tecnologías para un lavado potente y delicado, mientras que el Ciclo Ropa de Mascotas elimina hasta 68% más pelo. Con 3 Xpert Cycles, remueve las manchas más difíciles y elimina 4 veces más residuos de jabón, ideal para pieles sensibles. Lava edredones King sin esfuerzo, optimiza el uso de detergente con su multidispensador automático y evita manchas con su llenado inteligente. ¡Potencia y cuidado en cada lavado!",
    "features": [
      "Xpert Eco: Ahorra 125L de agua y 30% de energía.",
      "Smart Action: 3 tecnologías para lavado potente y suave.",
      "Ciclo Mascotas: Elimina hasta 68% más pelo.",
      "Xpert Cycles: Máxima limpieza y cuidado de prendas."
    ],
    "tags": []
  },
  {
    "id": "147",
    "category": "linea_blanca",
    "name": "Estufa de Piso HACEB 4 Puestos Con Horno",
    "image": "images/products/147.webp",
    "price": 740355,
    "isEnabled": true,
    "shortdescription": "Gas Natural Romero 50-Torre Gris",
    "description": "La estufa Romero HACEB Torre plata gas natural, logra recetas más rápidas con su fogón 35% más potente y de manera segura con sus parrillas antideslizantes. Cocinar en el horno ahora será mejor gracias a su visor 65% más amplio y hazlo de forma segura evitando la fuga de gas. ¡Elígela!",
    "features": [
      "Ahorra tiempo cocinando. Fogón 35% más potente",
      "Parrilla antideslizante, mayor estabilidad en recipientes.",
      "Visor del horno 65% más amplio para seguir tus recetas",
      "Encendido eléctrico de las fuentes de calor"
    ],
    "tags": []
  },
  {
    "id": "148",
    "category": "linea_blanca",
    "name": "Estufa de Piso SUPERIOR 4 Puestos",
    "image": "images/products/148.jfif",
    "price": 876755,
    "isEnabled": true,
    "shortdescription": "Gas Natural Con Horno AXXIS Gris",
    "description": "Esta línea de estufa superior te brinda comodidad y practicidad a la hora de preparar los alimentos. Cuenta con tres quemadores semi- rápidos y uno rápido, amplio horno con aislamiento en fibra de vidrio interno, que genera una cocción uniforme, válvula de seguridad y muchos más beneficios que aportan seguridad y tranquilidad.",
    "features": [
      "Estufa de empotrar en acero inoxidable",
      "Válvula de seguridad",
      "Tapa de vidrio templado, grosor 4mm",
      "Dorador en el horno"
    ],
    "tags": []
  },
  {
    "id": "201",
    "category": "bicicletas",
    "name": "KTM Ultra Ride Talla M/43",
    "image": "images/products/201.webp",
    "price": 4460679,
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
    "id": "202",
    "category": "bicicletas",
    "name": "KTM Ultra Sport Talla M/43",
    "image": "images/products/202.webp",
    "price": 5185911,
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
    "id": "203",
    "category": "bicicletas",
    "name": "KTM Ultra Fun 29  Tallas M/43, L/48, XL/53",
    "image": "images/products/203.webp",
    "price": 4216140,
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
    "id": "204",
    "category": "bicicletas",
    "name": "KTM Ultra Fun Talla M/43 (Azul)",
    "image": "images/products/204.webp",
    "price": 3367862,
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
    "id": "205",
    "category": "bicicletas",
    "name": "KTM Ultra Fun Talla M/43 (Negro)",
    "image": "images/products/205.webp",
    "price": 3367862,
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