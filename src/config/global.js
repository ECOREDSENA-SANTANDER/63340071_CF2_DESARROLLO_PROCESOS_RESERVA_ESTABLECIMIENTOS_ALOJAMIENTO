export default {
  global: {
    Name: 'Tu reserva… nuestra prioridad',
    Description:
      'El objetivo principal de este componente es dar a conocer una guía de apoyo en donde encontrará el proceso para realizar una reserva en un establecimiento de alojamiento; igualmente identificar los tipos de reserva que se pueden presentar, los formatos utilizados en este proceso, las políticas, tarifas hoteleras y servicios turísticos que se requieren para ofrecer a un cliente una experiencia positiva en el servicio.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Disponibilidad hotelera',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: '<em>Planning</em> de habitaciones o <em>room rack</em>',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Estado de las habitaciones',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Reservas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos de reservas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Mecanismo de reservas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Norma Técnica Sectorial NTSH – 003. Establecimientos de alojamiento y hospedaje. Norma de competencia laboral. Prestación de servicio de recepción y reservas conforme a manuales existentes',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Procesos de reservaciones',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Vocabulario técnico',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Políticas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Política de cancelación del hotel',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Tarifas hoteleras',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Contrato de reservas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Servicios turísticos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Políticas.',
      referencia:
        'Jacidi. (2024). Ficha de Registro de Huéspedes en un Hotel. <em>eRoom Suite:</em> Sistema <em>Omnicanal</em> de Comunicación Hotelera.',
      tipo: 'Blog',
      link: 'https://www.eroomsuite.com/ficha-registro-huespedes-hotel/',
    },
    {
      tema: 'Reservas.',
      referencia:
        'VIDEOTECA SECAP. (2015, 25 mayo). Proceso de reservas paso a paso [Vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-CLCwIBzBbs',
    },
  ],
  glosario: [
    {
      termino: 'A&B',
      significado: 'Alimentos y bebidas.',
    },
    {
      termino: '<em>Available rate</em>',
      significado: 'Tarifa disponible.',
    },
    {
      termino: 'Conserjeria',
      significado:
        'Departamento ubicado en la recepción o próximo a ésta, desde el que se coordinan y proveen los servicios de atención al cliente.',
    },
    {
      termino: 'Chatbots',
      significado:
        '<em>software</em> basado en inteligencia artificial capaz de mantener una conversación en tiempo real por texto o por voz.',
    },
    {
      termino: '<em>Check-in</em>',
      significado: 'Registro de entrada.',
    },
    {
      termino: '<em>Check-out</em>',
      significado: 'Registro de salida.',
    },
    {
      termino: '<em>Dynamic pricing</em>',
      significado:
        'Fijación dinámica de precios. Estrategia que ajusta los precios de los productos o servicios en función de la demanda, la oferta y otros factores.',
    },
    {
      termino: 'Huésped',
      significado: 'Persona que se aloja en un establecimiento.',
    },
    {
      termino: '<em>No show</em>',
      significado: 'No se presenta. Anulación de una reserva confirmada.',
    },
    {
      termino: '<em>Overbooking</em>',
      significado: 'Sobreventa.',
    },
    {
      termino: 'PAX',
      significado: 'Pasajero, cliente o huésped.',
    },
    {
      termino: 'Penalización',
      significado:
        'Tarifa que un hotel cobra a un huésped que cancela su reserva después de un plazo establecido.',
    },
    {
      termino: '<em>Planning</em> de habitaciones',
      significado:
        'Panel o casillero físico o digital en el que están representadas todas las habitaciones de un establecimiento alojativo y que sirve para gestionar el estado en se encuentran (libre, ocupada, bloqueada, etc.).',
    },
    {
      termino: '<em>Rooming list</em>',
      significado:
        'Relación de habitaciones asignadas a personas o grupos, elaborado en recepción.',
    },
    {
      termino: '<em>Stock</em>',
      significado: 'Inventario que tiene un negocio tiene a su disposición.',
    },
    {
      termino: '<em>Upgrade</em>',
      significado: 'Mejora.',
    },
    {
      termino: 'VIP <em>(Very Important Person).</em>',
      significado: 'Persona muy importante.',
    },
  ],
  referencias: [
    {
      referencia:
        'Calle, M., Lazo, A., & Granados, M. (2018). Gestión del sector alojamiento-Hotel. Machala: UTMACH.',
      link: '',
    },
    {
      referencia:
        'Canal IPE. (2022). ¿Qué es el turismo y por qué es importante? [Vídeo]. YouTube.',
      link: 'https://www.youtube.com/watch?v=7e3Zht_Hf3E',
    },
    {
      referencia:
        'Cañellas, A. M. (2019). Los contratos de reserva de plazas de alojamiento hotelero en régimen de contingente: su naturaleza y clausulado típico. CEFLegal. Revista práctica de derecho, 39-86.',
      link: '',
    },
    {
      referencia:
        'Casanova, Y. (2014). Reservas hoteleras. [Diapositivas]. SlideShare.',
      link: 'https://es.slideshare.net/yeseniasaraicasanova/reservas-hoteleras',
    },
    {
      referencia:
        'García Luengo, R. B. (2001). El contrato de hospedaje: especial referencia al alojamiento turístico hotelero.',
      link: '',
    },
    {
      referencia: 'Luque, A. (2024). Rack de habitaciones. HELP ALOSUITE.',
      link:
        'https://help.alosuite.com/baseconocimiento/rack-de-habitaciones/#:~:text=Es%20el%20panel%20en%20el,de%20ocupaci%C3%B3n%20o%20Room%20rack',
    },
    {
      referencia:
        'Marrero, M. (2016). Glosario de términos hoteleros, turísticos y relacionados. España: Copyright. Obtenido de',
      link: 'https://www.hosteltur.com/files/web/templates/term/wikitur.pdf',
    },
    {
      referencia: 'Roomer Travel. (s.f.). Guía de cancelación del hotel.',
      link:
        'https://es.roomertravel.com/cancellation/hotel_cancellation_policies',
    },
    {
      referencia:
        'Sola Cruz, I. (2014). Contrato de reserva de plazas de alojamiento en régimen de contingente.',
      link: '',
    },
    {
      referencia:
        'Ulyses Cloud. (2020). Ulyses Cloud | Rooming list en reservas de grupo. [Vídeo]. YouTube.',
      link: 'https://www.youtube.com/watch?v=wG3QboXEX4g',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Aurora Milena Parada Ortega',
          cargo: 'Experta temática',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth González Quintero',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
