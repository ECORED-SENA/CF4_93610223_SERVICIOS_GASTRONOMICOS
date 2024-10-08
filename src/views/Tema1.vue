<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Prestación del servicio 
    
    .row
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema1/1.png")
      .col-lg-9(data-aos="fade-up")
        p Se debe tener en cuenta que el servicio es el conjunto de prestaciones que el cliente espera, además del producto o servicio principal. Va más allá de la amabilidad y cortesía, constituyendo un valor agregado para el cliente, quien se muestra cada vez más exigente en este aspecto. 
        .row.mt-4
          .col-lg-5.mb-4.mb-lg-0.pe-lg-0(data-aos="fade-down")
            figure.m-auto.col-9.col-md-8.col-lg-12 
              img(src="@/assets/curso/tema1/2.png")
          .col-lg-7.ps-lg-0(data-aos="fade-up")
            .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#FFF2EB;")
              p.mb-0 El servicio requiere supervisión constante. Antes de iniciar cualquier evento, es fundamental reunir a todo el equipo para impartir las instrucciones necesarias y asegurar la coherencia en la prestación del servicio, especialmente si se cuenta con personal temporal (extras). Las indicaciones deben abarcar aspectos como la presentación personal, el servicio de los platos, el servicio de los vinos, la retirada de los servicios y, finalmente, la recolección del material y el mobiliario.
        p.mt-4.mb-0 En la actualidad, se observa un notable avance en los contactos humanos y las relaciones comerciales, lo que ha provocado un aumento significativo en la frecuencia de grandes reuniones.
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_1 1.1	Servicio de alimentos
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/3.png')})`}"
      )
      .bloque-texto-g__texto.p-4.p-xl-5
        p.mb-0 El servicio de alimentos en un banquete es clave para asegurar una buena experiencia culinaria. Existen diferentes formas de servir, como el #[em buffet] o el emplatado, que se adaptan a las necesidades del evento. La calidad y presentación de los platillos, así como la atención del personal, son esenciales para el éxito del servicio.
      
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0.ps-lg-3(style="place-self:start;")
          figure
            img(src="@/assets/curso/tema1/8.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4.pt-lg-3 Servicio: empacados en cajas de cartón individuales
    
    p(data-aos="fade-left") Este tipo de servicio se utiliza en eventos masivos donde se requiere rapidez, como en fiestas infantiles, donde las condiciones no permiten ofrecer otras formas de servicio.

    .cont_1_1.mt-4
      .row
        .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema1/4.png")
        .col-lg-9(data-aos="fade-left")
          .row
            .col-lg-7.pe-lg-0(data-aos="fade-up")
              .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#FFF2EB;")
                p.mb-0 Las cajas se preparan con antelación, incluyendo en su interior alimentos que pueden servirse a temperatura ambiente y que son lo suficientemente resistentes para soportar el movimiento y las condiciones a las que estarán expuestos durante un tiempo. Algunos ejemplos son pasteles, carnes empanadas, bocadillos, croquetas, galletas dulces, entre otros.
            .col-lg-5.mb-4.mb-lg-0.ps-lg-0.d-none.d-lg-block(data-aos="fade-left")
              figure.m-auto.col-9.col-md-8.col-lg-12 
                img(src="@/assets/curso/tema1/5.png")

      p.mt-4(data-aos="fade-right") Las ventajas de este tipo de servicio son:

      .col-xl-10.m-auto.mt-4
        .p-4(style="background-color:#FFCD80;")
          .row
            .col-lg-7(data-aos="fade-up")
              .bg-white.p-3.mb-2(style="border-radius:5px;")
                .d-flex
                  i.fas.fa-check-circle.mt-1(style="color:#FF7630;")
                  span.ps-2 Con empacadores rápidos, es posible preparar cientos de cajas en poco tiempo, siendo esta la forma más eficiente de disponer los alimentos.
              .bg-white.p-3.mb-2(style="border-radius:5px;")
                .d-flex
                  i.fas.fa-check-circle.mt-1(style="color:#FF7630;")
                  span.ps-2 Al ser colocadas en cajas mayores, se facilita su transporte, lo que también ahorra espacio en el vehículo.
              .bg-white.p-3.mb-2(style="border-radius:5px;")
                .d-flex
                  i.fas.fa-check-circle.mt-1(style="color:#FF7630;")
                  span.ps-2 El control de la distribución es más sencillo mediante fichas.
              .bg-white.p-3.mb-2(style="border-radius:5px;")
                .d-flex
                  i.fas.fa-check-circle.mt-1(style="color:#FF7630;")
                  span.ps-2 Los alimentos dentro de las cajas se conservan en un ambiente más higiénico y de fácil manipulación.
              .bg-white.p-3.mb-2(style="border-radius:5px;")
                .d-flex
                  i.fas.fa-check-circle.mt-1(style="color:#FF7630;")
                  span.ps-2 Se incluye un tenedor desechable y una servilleta de papel en cada caja.
            .col-lg-5.d-none.d-lg-block(data-aos="fade-left" style="place-self:center;")
              figure
                img(src="@/assets/curso/tema1/6.png")
      
      .col-xl-10.m-auto.mt-4
        .p-3(style="background-color:#99471D;border-radius:12px;" data-aos="fade-up")
          .row
            .col-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema1/7.svg")
            .col(style="place-self:center;")
              p.fw-bold.mb-0.text-white Nota
              p.mb-0.text-white A pesar de todas sus ventajas, este tipo de servicio es considerado de categoría inferior, por lo que su uso está limitado a ocasiones que lo justifiquen.
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0.ps-lg-3(style="place-self:start;")
          figure
            img(src="@/assets/curso/tema1/8.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4.pt-lg-3 Servicio de platos a la inglesa
    
    .row
      .col-lg-9
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="flip-up")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/9.png')})`}"
          )
          .bloque-texto-g__texto.p-4.p-xl-5
            p.mb-0 En este servicio, los platos son servidos a la inglesa, es decir, los alimentos se sirven directamente de la fuente al plato. Solo en casos de pescados enteros u otros manjares delicados se utiliza un gueridón.
      .col-lg-3.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/10.png")

    .cont_titulo3.mt-5.mb-4(data-aos="fade-up")
      span.mb-0.fw-bold Gueridón
    
    p(data-aos="fade-right") El gueridón es una mesa de servicio móvil o carrito, donde la comida puede trincharse, cortarse en filetes, flamearse, prepararse o recalentarse antes de servirse. Funciona como un aparador móvil que mantiene a la mano el equipo necesario para la operación directa, sea cual sea, junto con utensilios adicionales para emergencias. El gueridón puede ser de varios tipos: un carrito con lámpara de gas especialmente diseñado para este propósito, un carrito sencillo o incluso una pequeña mesa.
    p(data-aos="fade-left") En este servicio:

    .row.mt-4.justify-content-center
      .col-lg-3.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
        .cont_1_2.h-100.p-4.pb-xl-5.pt-xl-5
          figure.mb-2
            img(src="@/assets/curso/tema1/11.svg")
          p.mb-0 Todos los camareros deben presentarse en la cocina al mismo tiempo.
      .col-lg-3.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
        .cont_1_2.h-100.p-4.pb-xl-5.pt-xl-5
          figure.mb-2
            img(src="@/assets/curso/tema1/12.svg")
          p.mb-0 Todos ingresan al salón en fila, uno detrás de otro.
      .col-lg-3.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
        .cont_1_2.h-100.p-4.pb-xl-5.pt-xl-5
          figure.mb-2
            img(src="@/assets/curso/tema1/13.svg")
          p.mb-0 Los platos o fuentes deben ser presentados por los camareros simultáneamente en todas las mesas.
      .col-lg-3.d-none.d-lg-block(data-aos="fade-left")
        .h-100.d-flex.align-content-center.flex-wrap(style="background-color:#FFCD80;border-radius:11px;")
          figure
            img(src="@/assets/curso/tema1/14.png")
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0.ps-lg-3(style="place-self:start;")
          figure
            img(src="@/assets/curso/tema1/8.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4.pt-lg-3 Servicio colocado en plato individual: #[em buffet] plateado
    
    p(data-aos="fade-left") El #[em buffet] plateado tiene un uso bastante limitado, debido a la forma en que se distribuyen los alimentos.

    .row.mt-4
      .col-lg-6.mb-4.mb-lg-0(data-aos="zoom-in")
        .p-4(style="background-color:#FFF2EB;border-radius:11px;")
          .row
            .col-lg.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema1/15.png")
            .col-lg
              p.fw-bold ¿Cómo se distribuyen los alimentos?
              p Se organizan de manera adecuada en el plato, evitando llenarlo demasiado o dejarlo muy vacío. Los alimentos se montan en un espacio destinado para ello. Los auxiliares pasan los platos previamente montados, junto con los tenedores y servilletas.
      .col-lg-6.mb-4.mb-lg-0(data-aos="zoom-in")
        .p-4(style="background-color:#FFF2EB;border-radius:11px;")
          .row
            .col-lg.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema1/16.png")
            .col-lg
              p.fw-bold ¿Cuándo se emplea este servicio?
              p Se utiliza principalmente en ocasiones donde se busca un reparto organizado, equitativo y rápido, como despedidas de soltera, bodas, entre otros eventos. Aunque no es considerado un servicio de clase A, tampoco es un servicio ordinario; en la escala de categorías, ocupa un lugar superior al servicio empacado en cajitas.

    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0.ps-lg-3(style="place-self:start;")
          figure
            img(src="@/assets/curso/tema1/8.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4.pt-lg-3 Servicio situado en fuentes para pasar: #[em buffet]
    
    p(data-aos="fade-left") Esta es posiblemente la forma más original y práctica de ofrecer un #[em buffet] y es la más utilizada actualmente en eventos de relevancia.

    .cont_1_3.mt-4.pt-4.pb-4.pb-xl-5.pt-xl-5
      .tarjeta.bg-white.p-4.p-lg-5.pb-lg-4
        SlyderA(tipo="b")
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Alimentos en pequeños bocados 
              p Los alimentos se cortan en bocados pequeños y se disponen en fuentes decoradas. 
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema1/18.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Canapés y palillos
              p  Algunos alimentos se sirven sobre pan como canapés, mientras que otros se ensartan en palillos para facilitar su consumo. 
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema1/19.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Distribución de bandejas
              p Los alimentos se distribuyen pasando bandejas entre los invitados.  
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema1/20.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Secuencia de servicio
              p Se sigue una secuencia similar a la de un menú: primero alimentos fríos, luego calientes y finalmente dulces.  
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema1/21.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Combinación en fuentes 
              p En las fuentes se pueden combinar alimentos similares, como croquetas y salchichas, o cuadritos de queso con aceitunas.  
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema1/22.png')
    
    .col-xl-10.m-auto.mt-4
      .p-3(style="background-color:#E2DACC;border-radius:12px;" data-aos="fade-up")
        .row
          .col-auto.d-none.d-md-block(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema1/23.svg")
          .col(style="place-self:center;")
            p.mb-0 Las variaciones de estos bocadillos no se limitan a los diferentes tipos de alimentos, sino también a la forma en que se cortan, montan y decoran, los métodos de cocción utilizados, las salsas, especias y sazonadores empleados.
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0.ps-lg-3(style="place-self:start;")
          figure
            img(src="@/assets/curso/tema1/8.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4.pt-lg-3 Servicio #[em buffet] puesto sobre mesa
    
    .row
      .col-lg-7(data-aos="fade-right")
        p Un #[em buffet] de grandes proporciones, montado sobre una mesa, es un espectáculo en el que se despliega todo el arte culinario, y suele ser el centro de atención en este tipo de eventos.
        .row
          .col-auto.d-none.d-md-block(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema1/24.svg")
          .col(style="place-self:center;")
            p.mb-0 El #[em buffet] servido de esta forma se presenta en una mesa, generalmente decorada con una variedad de alimentos expuestos de manera artística. Estos pueden estar adornados con fuentes, espejos, candelabros, esculturas de hielo, figuras de porcelana, cristal, plata, arreglos florales, entre otros elementos decorativos.
      .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/25.png")
    
    .row.mt-4
      .col-lg-9(data-aos="zoom-in")
        AcordionA(tipo="a" clase-tarjeta="tarjeta")
          .row.col-xl-11.m-auto(titulo="Juegos de cucharas y tenedores de servicio ")
            .col-lg-7.mb-4.mb-lg-0
              p En cantidad suficiente, colocando las cucharas sobre los tenedores boca abajo, situándolos cerca de los alimentos. 
            .col-lg-5
              figure.m-auto.col-8.col-md-7.col-lg-12
                img(src="@/assets/curso/tema1/26.png")
          .row.col-xl-11.m-auto(titulo="Juegos de trinchantes ")
            .col-lg-7.mb-4.mb-lg-0
              p Se colocan al lado de las piezas que deben cortarse, con cucharones pequeños para las salsas y uno grande para la coctelera de frutas. Incluye pinzas para pastelería y otros alimentos. 
            .col-lg-5
              figure.m-auto.col-8.col-md-7.col-lg-12
                img(src="@/assets/curso/tema1/27.png")
          .row.col-xl-11.m-auto(titulo="Platos para asados, pescados y postres ")
            .col-lg-7.mb-4.mb-lg-0
              p Se organizan según la variedad y cantidad necesarias, colocados en diferentes puntos de la mesa en pilas de no más de 12 a 15 unidades. El resto se coloca en el área de servicio y montaje. 
            .col-lg-5
              figure.m-auto.col-8.col-md-7.col-lg-12
                img(src="@/assets/curso/tema1/28.png")
      .col-lg-3.d-none.d-lg-block(data-aos="fade-left")
        figure 
          img(src="@/assets/curso/tema1/29.png")
    
    .row.mt-4
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        figure 
          img(src="@/assets/curso/tema1/30.png")
      .col-lg-9(data-aos="zoom-in")
        AcordionA(tipo="a" clase-tarjeta="tarjeta")
          .row.col-xl-11.m-auto(titulo="Tenedores y servilletas ")
            .col-lg-7.mb-4.mb-lg-0
              p Colocados junto a los platos, con servilletas dobladas en forma rectangular, en igual número que los platos. 
            .col-lg-5
              figure.m-auto.col-8.col-md-7.col-lg-12
                img(src="@/assets/curso/tema1/31.png")
          .row.col-xl-11.m-auto(titulo="Platos base preparados con paños o servilletas")
            .col-lg-7.mb-4.mb-lg-0
              p Se disponen para realzar los boles con diferentes ensaladas que se colocan sobre dichos platos. 
            .col-lg-5
              figure.m-auto.col-8.col-md-7.col-lg-12
                img(src="@/assets/curso/tema1/32.png")
          .row.col-xl-11.m-auto(titulo="Fuentes, espejos y baños maría ")
            .col-lg-7.mb-4.mb-lg-0
              p Se organizan de manera que, desde cualquier extremo de la mesa, los mismos artículos puedan servirse sin recorrer toda la mesa. 
            .col-lg-5
              figure.m-auto.col-8.col-md-7.col-lg-12
                img(src="@/assets/curso/tema1/33.png")
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0.ps-lg-3(style="place-self:start;")
          figure
            img(src="@/assets/curso/tema1/8.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4.pt-lg-3 ¿Cómo montar la mesa?
    
    p(data-aos="fade-left") Las mesas más fastuosas se preparan con doble ancho (tableros unidos) y se colocan en el centro del salón, con una iluminación adecuada para resaltar los alimentos expuestos. En este caso, los dependientes trabajan alrededor de la mesa.

    .row.mt-4
      .col-lg-8(data-aos="fade-up")
        .row
          .col-lg-5.mb-4.mb-lg-0.pe-lg-0(data-aos="fade-down")
            figure.m-auto.col-9.col-md-8.col-lg-12 
              img(src="@/assets/curso/tema1/34.png")
          .col-lg-7.ps-lg-0(data-aos="fade-up")
            .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#EBF4FF;")
              p.mb-0 Cuando no se busca destacar las mesas, se utilizan tableros sencillos (no dobles) y se colocan en un extremo o en una esquina del salón, cercanas a la pared. Estas mesas funcionan principalmente como un mostrador, donde los dependientes se sitúan detrás para asistir a los clientes en el autoservicio.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/35.png")
    
    p.mt-4(data-aos="fade-right") Si las mesas son grandes, se pueden montar por secciones separadas y luego unirlas una vez finalizada esta labor.

    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0.ps-lg-3(style="place-self:start;")
          figure
            img(src="@/assets/curso/tema1/8.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4.pt-lg-3 ¿Cómo usar el mantel?
    
    p(data-aos="fade-left") Es fundamental que, una vez extendidos, los manteles cubran la superficie de la mesa sin arrugas y en perfecto estado de limpieza.

    .row.mt-4
      .col-lg-8(data-aos="fade-up")
        .p-4(style="background-color:#FFF2EB;border-radius:11px;")
          .row
            .col-lg-5.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema1/36.png")
            .col-lg-7
              .d-flex.mb-3
                i.fas.fa-check-circle.mt-1(style="color:#FF7630;")
                span.ps-2 El mantel debe cubrir la mesa hasta caer a media pulgada del piso, independientemente de si es liso, sencillo o decorado con motivos como hojas o flores.
              .d-flex
                i.fas.fa-check-circle.mt-1(style="color:#FF7630;")
                span.ps-2 No debe quedar ninguna parte lateral sin cubrir, ya que una mesa de #[em buffet] se aprecia desde todos los ángulos.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        figure 
          img(src="@/assets/curso/tema1/37.png")

    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_2 1.2  Servicio de bebidas
    
    .row(data-aos="fade-up")
      .col-auto.d-none.d-md-block(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/38.svg")
      .col(style="place-self:center;")
        p.mb-0 En los servicios gastronómicos, las bebidas resultan en un motivo imprescindible, y al igual que en la comida, en la bebida se puede servir desde lo más sencillo y conocido hasta lo más complejo, exótico y extraño, ampliando en la pasada en bandejas su variedad y calidad.
    
    .cont_1_3.mt-4.pt-4.pb-4.pb-xl-5.pt-xl-5
      .tarjeta.bg-white.p-4.p-lg-5.pb-lg-4
        SlyderA(tipo="b")
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Pasando bandejas
              p Las bandejas de bebidas y alimentos se pasan entre los asistentes que permanecen de pie o sentados. La duración es limitada. 
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema1/39.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Servicio de champaña o bebidas
              p Se prepara champaña, cócteles u otras bebidas y bocadillos, servidos al finalizar el acto. Para eventos cortos, solo se sirve una copa de champaña por persona, sin alimentos.  
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema1/40.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Carros bares y bandejas 
              p Bebidas se pasan en bandejas o carros, mientras que los entremeses se colocan en mesas dispersas.  
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema1/41.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Servicio a la mesa
              p Comida y bebida se sirven en bandejas a los clientes sentados o de pie, con sillas dispersas.  
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema1/42.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Mesas preparadas
              p Se preparan mesas con tenedor, cuchillo, servilleta y cenicero, donde se colocan platos montados y una bebida.  
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema1/43.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Mesa central decorada
              p Alimentos se colocan en una gran mesa central decorada, donde los asistentes se sirven con ayuda del personal, mientras que las bebidas se pasan en bandejas o desde el bar.  
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema1/44.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Carros circulantes
              p Bebidas se ofrecen desde carros que circulan por el salón y las bandejas se pasan entre los asistentes.  
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema1/45.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Mesas repartidas
              p Alimentos se colocan en mesas distribuidas por el salón o en una mesa central, donde los invitados se sirven con ayuda del personal.  
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema1/46.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Alimentos divididos 
              p Una parte de los alimentos se coloca en una mesa decorada y otra parte se sirve plateada. 
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema1/47.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Kioscos y mostradores 
              p #[em Buffet] se distribuye desde kioscos con mostradores, donde se ofrecen alimentos en cajitas, cervezas, maltas y otras bebidas.  
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema1/48.png')


      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
