export default {
  global: {
    componenteFormativo: 'Prestación del servicio',
    descripcionCurso:
      'El componente formativo aborda la organización y ejecución de servicios gastronómicos, incluyendo tipos de menús, montaje de mesas, y atención en banquetes. Detalla roles del personal, formas de servir alimentos y bebidas, y recomendaciones para asegurar calidad y eficiencia, con el objetivo de satisfacer a los clientes y mejorar la experiencia gastronómica.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        titulo: 'Prestación del servicio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Servicio de alimentos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Servicio de bebidas',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Tipos de menú',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Organización de un banquete',
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
        download: 'downloads/prueba.pdf',
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
      tema: 'Prestación del servicio ',
      referencia:
        'Educaton Colombia. (2019). ¿Cómo Organizar un Buffet Perfecto? Descubre los Secretos de este Servicio de Comida Libre. [Archivo de video] Youtube.   ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=iczugtjrbQA  ',
    },
    {
      tema: 'Servicio de alimentos ',
      referencia:
        'Human Sciences Extension and Outreach. (2018).Tiempo y temperatura - servicio de comida.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=GhVrByGbvZY  ',
    },
    {
      tema: 'Servicio de bebidas ',
      referencia:
        'INA VIRTUAL. (2023). Técnicas de montaje en el servicio de alimentos y bebidas - VÍDEO 4 - Tipos de montaje. [Archivo de video] Youtube.   ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ITyxVG3zKto  ',
    },
    {
      tema: 'Tipos de menú ',
      referencia:
        'Jericksa Atencio ().10 cosas que NO PUEDEN FALTAR en la carta o MENÚ de un restaurante / #gastronomía #comida #ingresos. [Archivo de video] Youtube.   ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=OfkfZ7gNb5I  ',
    },
    {
      tema: 'Organización de un banquete ',
      referencia:
        'INA VIRTUAL. (2023).Técnicas de montaje en el servicio de alimentos y bebidas - VÍDEO 6 - Técnicas de montaje. [Archivo de video] Youtube.    ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=MHaksU3uPWM  ',
    },
  ],
  glosario: [
    {
      termino: '<em>Barman</em>',
      significado:
        'cantinero encargado de servir las bebidas en bares fijos o móviles durante un evento. ',
    },
    {
      termino: '<em>Buffet</em>',
      significado:
        'servicio de autoservicio en el que los alimentos se disponen en una mesa y los comensales eligen lo que desean. ',
    },
    {
      termino: 'Cantinero',
      significado:
        'persona encargada de servir bebidas, generalmente en bares fijos o carros bares. ',
    },
    {
      termino: 'Carro bar',
      significado: 'mueble móvil desde el cual se sirven bebidas en eventos. ',
    },
    {
      termino: '<em>Coffee Break</em>',
      significado:
        'pausa breve en la que se sirven café, pan y otras opciones como jugos, frutas, pastelería, etc. ',
    },
    {
      termino: 'Entremés',
      significado:
        'pequeño bocado o aperitivo que se sirve antes del plato principal. ',
    },
    {
      termino: 'Menú de bocadillo',
      significado:
        'menú compuesto por pequeños bocados, generalmente servidos en eventos informales o de corta duración. ',
    },
    {
      termino: 'Menú emplatado',
      significado:
        'tipo de servicio en el que los alimentos se presentan previamente en platos individuales antes de ser servidos. ',
    },
    {
      termino: '<em>Stewarts</em>',
      significado:
        'persona encargada de la limpieza del menaje (platos, vasos, cubiertos, etc.) y del manejo de la máquina lavavajillas. ',
    },
    {
      termino: 'Trinchar',
      significado:
        'cortar alimentos, como carnes, en porciones más pequeñas para ser servidos a los comensales. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Barceló, C. (2018). Protocolo y organización de celebraciones y banquetes. Asociación Española de Protocolo.',
      link:
        'https://www.aeprotocolo.org/protocolo-y-organizacion-de-celebraciones-y-banquetes-parte-iii/ ',
    },
    {
      referencia:
        'Gestión Gastronómica. (2020). Control de costes y márgenes en banquetes.',
      link: '',
    },
    {
      referencia:
        'Muñoz, E. (2013). Gestión de servicios de alimentos y bebidas. McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Reserva Grupos. (2016.). El protocolo y el ceremonial: Cómo organizar un banquete (parte I). ',
      link:
        'https://www.reserva-grupos.com/el-protocolo-y-el-ceremonial-como-organizar-un-banquete-parte-i/ ',
    },
    {
      referencia:
        'Unilever Food Solutions. (s.f.). Gestión de banquetes y eventos "Catering".',
      link:
        'https://www.unileverfoodsolutions.com.ar/inspiracion-para-chefs/banquetes-y-celebraciones-/gestion-de-banquetes-y-eventos-catering.html ',
    },
    {
      referencia: 'Weezevent. (2023). Organizar un banquete en 9 pasos. ',
      link: 'https://weezevent.com/es/blog/organizar-banquete/ ',
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
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Roberto Bernal Duque',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
