<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Organización de un banquete

    .row
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema3/1.png")
      .col-lg-9(data-aos="zoom-in-up")
        p Uno de los aspectos fundamentales en la organización de un banquete es la gestión del personal. Es crucial asignar la cantidad adecuada de personal para cada tarea, en función del número total de clientes. 
        .row.mt-4
          .col-lg-7.pe-lg-0
            .h-100.p-4.p-xl-5.d-flex.align-content-center.flex-wrap(style="background-color:#D8E9FF;")
              p.mb-0 En algunas ocasiones, debido a la naturaleza del trabajo, se puede asignar a los dependientes más de una tarea. Por ejemplo, pueden encargarse de platear los alimentos, servirlos, recoger el servicio usado y limpiar los ceniceros. 
          .col-lg-5.mb-4.mb-lg-0.ps-lg-0.d-none.d-lg-block
            figure.m-auto.col-9.col-md-8.col-lg-12 
              img(src="@/assets/curso/tema3/2.png")
    
    .cont_3_1.mt-4
      p(data-aos="fade-in") Tareas básicas que debe realizar el personal de servicio durante un banquete: 
      .col-xl-10.m-auto.mt-4
        .p-4(style="background-color:#FFCD80;")
          .row
            .col-lg-7(data-aos="fade-up")
              .bg-white.p-3.mb-2(style="border-radius:5px;")
                .d-flex
                  i.fas.fa-check-circle.mt-1(style="color:#FF7630;")
                  span.ps-2 Pasar las bebidas en bandejas.
              .bg-white.p-3.mb-2(style="border-radius:5px;")
                .d-flex
                  i.fas.fa-check-circle.mt-1(style="color:#FF7630;")
                  span.ps-2 Atender los bares fijos o carros bares.
              .bg-white.p-3.mb-2(style="border-radius:5px;")
                .d-flex
                  i.fas.fa-check-circle.mt-1(style="color:#FF7630;")
                  span.ps-2 Pasar los alimentos en bandejas.
              .bg-white.p-3.mb-2(style="border-radius:5px;")
                .d-flex
                  i.fas.fa-check-circle.mt-1(style="color:#FF7630;")
                  span.ps-2 Platear los alimentos y servirlos.
              .bg-white.p-3.mb-2(style="border-radius:5px;")
                .d-flex
                  i.fas.fa-check-circle.mt-1(style="color:#FF7630;")
                  span.ps-2 Ayudar a los clientes y servirles en la mesa.
              .bg-white.p-3.mb-2(style="border-radius:5px;")
                .d-flex
                  i.fas.fa-check-circle.mt-1(style="color:#FF7630;")
                  span.ps-2 Recoger el servicio usado y las servilletas; limpiar ceniceros.
              .bg-white.p-3.mb-2(style="border-radius:5px;")
                .d-flex
                  i.fas.fa-check-circle.mt-1(style="color:#FF7630;")
                  span.ps-2 Trabajar como surtidores.
            .col-lg-5.d-none.d-lg-block(style="place-self:center;" data-aos="fade-down")
              figure
                img(src="@/assets/curso/tema3/3.png")
      
      p.mt-4(data-aos="fade-right") Recomendaciones para el personal de servicio que pasa bebidas y alimentos en bandejas durante un banquete:
    
    .cont_1_3.mt-4.pt-4.pb-4.pb-xl-5.pt-xl-5
      .tarjeta.bg-white.p-4.p-lg-5.pb-lg-4
        SlyderA(tipo="b")
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              ol.lista-ol--cuadro
                li.d-flex.mb-4
                  .lista-ol--cuadro__vineta(style="background-color:#FF7630;")
                    span.fw-bold(style="color:#12263F;") 1
                  span No llenar los recipientes en exceso para evitar derrames. 
                li.d-flex.mb-4
                  .lista-ol--cuadro__vineta(style="background-color:#FF7630;")
                    span.fw-bold(style="color:#12263F;") 2
                  span Sostener la bandeja con ambas manos para prevenir accidentes. 
                li.d-flex
                  .lista-ol--cuadro__vineta(style="background-color:#FF7630;")
                    span.fw-bold(style="color:#12263F;") 3
                  span Ingresar al centro de los grupos por el área más despejada, para minimizar molestias y evitar percances al acercarse por la parte posterior de las personas. 
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema3/4.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              ol.lista-ol--cuadro
                li.d-flex.mb-4
                  .lista-ol--cuadro__vineta(style="background-color:#FF7630;")
                    span.fw-bold(style="color:#12263F;") 4
                  span No ofrecer la bebida directamente con la mano, sino presentar la bandeja para que el invitado tome el recipiente. El mismo procedimiento aplica para los que pasan entremeses; los que distribuyen alimentos plateados deben entregar el plato con el tenedor encima y la servilleta. 
                li.d-flex.mb-4
                  .lista-ol--cuadro__vineta(style="background-color:#FF7630;")
                    span.fw-bold(style="color:#12263F;") 5
                  span Ofrecer constantemente bebidas y entremeses para que ningún invitado se quede sin bebida o bocadillo durante el evento. 
                li.d-flex
                  .lista-ol--cuadro__vineta(style="background-color:#FF7630;")
                    span.fw-bold(style="color:#12263F;") 6
                  span Si se colocan recipientes vacíos en las bandejas, deben situarse en la parte más cercana al servidor, separados de los que están siendo distribuidos. 
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema3/5.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              ol.lista-ol--cuadro
                li.d-flex.mb-4
                  .lista-ol--cuadro__vineta(style="background-color:#FF7630;")
                    span.fw-bold(style="color:#12263F;") 7
                  span Al pasar por primera vez con las bebidas, distribuir también servilletas de papel en la misma bandeja, lo mismo al servir los primeros alimentos. 
                li.d-flex.mb-4
                  .lista-ol--cuadro__vineta(style="background-color:#FF7630;")
                    span.fw-bold(style="color:#12263F;") 8
                  span En las fuentes con entremeses, colocar grupos de palillos en puntos accesibles para que los invitados puedan pinchar la pieza deseada si los palillos están en las piezas superiores. 
                li.d-flex
                  .lista-ol--cuadro__vineta(style="background-color:#FF7630;")
                    span.fw-bold(style="color:#12263F;") 9
                  span Presentar siempre la parte de la fuente con más alimentos; si quedan pocos, retirar la fuente y completarla antes de presentarla nuevamente. 
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema3/6.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              ol.lista-ol--cuadro
                li.d-flex.mb-4
                  .lista-ol--cuadro__vineta(style="background-color:#FF7630;")
                    span.fw-bold(style="color:#12263F;") 10
                  span En los bares fijos, situar un cantinero (barman) cada cuatro o cinco metros, además de asignar uno en cada carro bar. 
                li.d-flex.mb-4
                  .lista-ol--cuadro__vineta(style="background-color:#FF7630;")
                    span.fw-bold(style="color:#12263F;") 11
                  span Designar surtidores para reponer los artículos utilizados y retirar las botellas y otros objetos de los bares. 
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema3/7.png')
    
    p.mt-5(data-aos="fade-up") Algunas referencias que se deben utilizar para dividir el personal de servicio que pasa bandejas, trabaja con carros bares y recoge las estaciones son las siguientes:

    .col-xl-10.m-auto.mt-4
      .row
        .col-lg(data-aos="zoom-in")
          .p-3.mb-2(style="border-radius:5px;background-color:#FFEACB;")
            .d-flex
              i.fas.fa-check-circle.mt-1(style="color:#FF7630;")
              span.ps-2 Los cuartos en que está dividida el área de servicio.
          .p-3.mb-2(style="border-radius:5px;background-color:#FFEACB;")
            .d-flex
              i.fas.fa-check-circle.mt-1(style="color:#FF7630;")
              span.ps-2 Las franjas del piso.
          .p-3.mb-2(style="border-radius:5px;background-color:#FFEACB;")
            .d-flex
              i.fas.fa-check-circle.mt-1(style="color:#FF7630;")
              span.ps-2 Las divisiones, lámparas y otras referencias del techo.
          .p-3.mb-2(style="border-radius:5px;background-color:#FFEACB;")
            .d-flex
              i.fas.fa-check-circle.mt-1(style="color:#FF7630;")
              span.ps-2 Columnas, muebles, plantas ornamentales, espejos, entre otros.
          .p-3(style="border-radius:5px;background-color:#FFEACB;")
            .d-flex
              i.fas.fa-check-circle.mt-1(style="color:#FF7630;")
              span.ps-2 Mesas, grupos de sillas, sofás y butacas dispuestos en el área
        .col-lg.d-none.d-lg-block(data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema3/8.png")
    
    .p-3.mt-5(data-aos="fade-up" style="background-color:#FFE4D6;border-radius:15px;")
      .row
        .col-auto.d-none.d-md-block(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema3/9.svg")
        .col(style="place-self:center;")
          p.fw-bold.mb-0 Importante:
          p.mb-0 El trabajo específico de recoger el servicio usado no se realiza frecuentemente, ya que normalmente lo hace el propio personal de servicio que distribuye bebidas y alimentos cuando regresa al #[em stewart]. Los recogedores de servicio usado también se colocan por estaciones, encargándose de llevar todo el servicio usado al #[em stewart]. 
    
    .cont_3_2.mt-5
      .row.justify-content-center
        .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema3/10.png")
        .col-lg-3.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
          .cont_3_3.h-100.p-4
            figure.mb-4
              img(src="@/assets/curso/tema3/11.svg")
            p.fw-bold Recoger vasos vacíos y limpiar el salón
            .d-flex.mt-3
              i.fas.fa-check-circle.mt-1(style="color:#FF7630;")
              span.ps-2 El personal debe encargarse de recoger los vasos vacíos de las mesas, aparadores y de las manos de los clientes, además de limpiar los ceniceros y recoger las servilletas usadas para mantener el salón en orden.
        .col-lg-3.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
          .cont_3_3.h-100.p-4
            figure.mb-4
              img(src="@/assets/curso/tema3/12.svg")
            p.fw-bold Responsabilidades del #[em Stewart]
            .d-flex.mt-3
              i.fas.fa-check-circle.mt-1(style="color:#FF7630;")
              span.ps-2 El #[em stewart] se encarga de la limpieza del menaje (platos, vasos, cubiertos, bandejas, etc.).
            .d-flex.mt-3
              i.fas.fa-check-circle.mt-1(style="color:#FF7630;")
              span.ps-2 Debe manejar la máquina lavavajillas, asegurando la cantidad adecuada de jabón y la temperatura correcta del agua.
        .col-lg-3.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
          .cont_3_3.h-100.p-4
            figure.mb-4
              img(src="@/assets/curso/tema3/13.svg")
            p.fw-bold Manejo de desperdicios en banquetes grandes
            .d-flex.mt-3
              i.fas.fa-check-circle.mt-1(style="color:#FF7630;")
              span.ps-2 En banquetes con servicio en cajitas, se colocan cestos para los desperdicios y se asigna personal para recoger botellas y otros residuos.
            .d-flex.mt-3
              i.fas.fa-check-circle.mt-1(style="color:#FF7630;")
              span.ps-2 En #[em buffets] de gran tamaño, se utiliza un colillero para limpiar ceniceros y recoger desperdicios del suelo.
      
      p.mt-4(data-aos="fade-right") La presentación y servicio en un buffet-cena:

      .p-4.mt-4.p-xl-5.pb-xl-4.pt-xl-4(style="background-color:#E2DACC;")
        .row
          .col-lg-7(data-aos="fade-up")
            .bg-white.p-3.mb-2(style="border-radius:5px;")
              .d-flex
                i.fas.fa-check-circle.mt-1(style="color:#FF7630;")
                span.ps-2 Los alimentos deben colocarse en la mesa antes de la llegada de los clientes.
            .bg-white.p-3.mb-2(style="border-radius:5px;")
              .d-flex
                i.fas.fa-check-circle.mt-1(style="color:#FF7630;")
                span.ps-2 Agrupar los alimentos por variedades para facilitar que los clientes seleccionen lo que desean sin recorrer toda la mesa.
            .bg-white.p-3.mb-2(style="border-radius:5px;")
              .d-flex
                i.fas.fa-check-circle.mt-1(style="color:#FF7630;")
                span.ps-2 Colocar un trabajador de servicio cada dos o tres metros para asistir a los clientes.
            .bg-white.p-3.mb-2(style="border-radius:5px;")
              .d-flex
                i.fas.fa-check-circle.mt-1(style="color:#FF7630;")
                span.ps-2 El personal encargado de trinchar deberá servir en pequeñas cantidades, con una adecuada distribución en los platos.
            .bg-white.p-3.mb-2(style="border-radius:5px;")
              .d-flex
                i.fas.fa-check-circle.mt-1(style="color:#FF7630;")
                span.ps-2 Las fuentes vacías deben ser repuestas o retiradas, y las que permanezcan deben colocarse en la parte más visible de la mesa.
            .bg-white.p-3.mb-2(style="border-radius:5px;")
              .d-flex
                i.fas.fa-check-circle.mt-1(style="color:#FF7630;")
                span.ps-2 Retirar cualquier alimento que caiga sobre el mantel para mantener la presentación impecable.
          .col-lg-5.d-none.d-lg-block(style="place-self:center;" data-aos="fade-down")
            figure
              img(src="@/assets/curso/tema3/15.png")

      





</template>

<script>
export default {
  name: 'Tema3',
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
