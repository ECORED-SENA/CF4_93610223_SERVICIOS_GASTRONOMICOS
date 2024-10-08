<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Tipos de menú

    .cont_2_1
      .row
        .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema2/1.png")
        .col-lg-9(data-aos="fade-up")
          p La selección del menú en un banquete es esencial para garantizar una experiencia adecuada a la naturaleza del evento. Existen varias opciones como el buffet, el menú emplatado y el de bocadillos, cada uno con características que se ajustan a diferentes tipos de celebraciones y preferencias de los invitados. La elección debe considerar tanto el estilo del evento como las necesidades dietéticas de los comensales. 
          .row.justify-content-center.mt-4
            .col-xl.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
              .crd_hover_txt(data-aos="flip-left" @mouseover="indicadorTarjetaFlip = false")
                .crd_hover_txt--img
                  figure
                    img(src="@/assets/curso/tema2/2.png")
                .crd_hover_txt--body
                  h5.mb-3 Entradas
                  p.mb-0 Para abrir el apetito, comenzar un menú requiere cierta dosis de ingenio. No debe ser algo tan elaborado que compita con el plato principal, pero sí lo suficientemente sabroso como para dejar ganas de seguir comiendo.
            .col-xl.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
              .crd_hover_txt(data-aos="flip-left" @mouseover="indicadorTarjetaFlip = false")
                .indicador--hover(v-if="indicadorTarjetaFlip")
                .crd_hover_txt--img
                  figure
                    img(src="@/assets/curso/tema2/3.png")
                .crd_hover_txt--body
                  h5.mb-3 Platos fuertes
                  p.mb-0 Es la parte más importante del menú. La carne, el pescado y los mariscos son excelentes fuentes de proteína.
            .col-xl.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
              .crd_hover_txt(data-aos="flip-left" @mouseover="indicadorTarjetaFlip = false")
                .crd_hover_txt--img
                  figure
                    img(src="@/assets/curso/tema2/4.png")
                .crd_hover_txt--body
                  h5.mb-3 Postres
                  p.mb-0 Los postres enriquecen la experiencia de la comida. Para mantener una mejor nutrición, es recomendable optar por selecciones basadas en frutas o productos lácteos, reservando los postres cremosos para ocasiones especiales. Elegir postres bajos en grasa y azúcar también contribuye a un menú más nutritivo.
      
      p.mt-4(data-aos="fade-right") Las entradas son pequeños bocados, que pueden ser calientes o fríos, y se sirven antes de comenzar las comidas. Actualmente, las entradas han ganado un lugar relevante en cualquier menú. Dependiendo del evento, es posible diseñar un menú completo compuesto solo por pequeños bocados.

      .row.mt-4
        .col-lg-4.d-none.d-lg-block(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema2/5.png")
        .col-lg-8(data-aos="fade-up")
          .p-4(style="background-color:#FFE4D6;")
            .row
              .col-lg-7
                p Ejemplos:
                .bg-white.p-3.mb-2(style="border-radius:5px;")
                  .d-flex
                    i.fas.fa-check-circle.mt-1(style="color:#FF7630;")
                    span.ps-2 Tomates rellenos.
                .bg-white.p-3.mb-2(style="border-radius:5px;")
                  .d-flex
                    i.fas.fa-check-circle.mt-1(style="color:#FF7630;")
                    span.ps-2 Albóndigas de atún o carne.
                .bg-white.p-3.mb-2(style="border-radius:5px;")
                  .d-flex
                    i.fas.fa-check-circle.mt-1(style="color:#FF7630;")
                    span.ps-2 Brochetas de vegetales con salsa de quesos.
                .bg-white.p-3.mb-2(style="border-radius:5px;")
                  .d-flex
                    i.fas.fa-check-circle.mt-1(style="color:#FF7630;")
                    span.ps-2 Champiñones rellenos.
                .bg-white.p-3(style="border-radius:5px;")
                  .d-flex
                    i.fas.fa-check-circle.mt-1(style="color:#FF7630;")
                    span.ps-2 Canapés de camarones al ajillo.
              .col-lg-5.d-none.d-lg-block(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema2/6.png")
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0.ps-lg-3(style="place-self:start;")
          figure
            img(src="@/assets/curso/tema1/8.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4.pt-lg-3 Composición del menú
    
    p(data-aos="fade-left") La confección de menús para banquetes es uno de los aspectos más importantes a considerar, ya que su composición y precio son factores clave para el éxito de la contratación del servicio.
    p(data-aos="fade-right") A continuación, se detallan las diferentes alternativas de menús:

    .cont_1_3.mt-4.pt-4.pb-4.pb-xl-5.pt-xl-5
      .tarjeta.bg-white.p-4.p-lg-5.pb-lg-4
        SlyderA(tipo="b")
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 #[em Coffee breaks]
              p Todos los #[em coffee breaks] incluyen café y pan, con opciones adicionales como jugos, leche, frutas, pastelería, refrescos, limonadas, sándwiches, galletas y bizcochos. 
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/7.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Desayuno continental 
              p Zumo, café, pan tostado, mermelada y mantequilla (también conocido como desayuno europeo). 
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/8.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Desayuno americano 
              p Incluye lo mismo que el continental, además de huevos fritos, revueltos o pasados. 
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/9.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Desayuno del país o región  
              p Varía según las tradiciones locales o regionales. 
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/10.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Desayuno tradicional 
              p Compuesto por café, jugo, pan, huevos acompañados de embutidos, carnes o tubérculos. 
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/11.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Menú #[em buffet] 
              p Muy solicitado en banquetes, ofrece una variedad de platos fríos y calientes, permitiendo al comensal elegir a su gusto y cantidad. 
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/12.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Menú de bocadillos (Picada) 
              p Compuesto de bocadillos fríos y calientes, con entre 8 y 10 unidades variadas, ideal para opciones simples, económicas y no muy abundantes. 
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/13.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Menús temáticos 
              p Diseñados alrededor de un tema especial, como fiestas conmemorativas o con referencia a un país o región. 
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/14.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Menú #[em buffet] (económico) 
              p Platos fríos y calientes, donde el éxito depende de la presentación. Planificado correctamente, puede ser de bajo costo. 
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/15.png')
    
    .row.mt-4
      .col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema2/16.png")
      .col-lg-8(data-aos="fade-up")
        p Composición de un menú tipo buffet:
        .p-4(style="background-color:#D8E9FF;")
          .row
            .col-lg-7
              p Ejemplos:
              .bg-white.p-3.mb-2(style="border-radius:5px;")
                .d-flex
                  i.fas.fa-check-circle.mt-1(style="color:#FF7630;")
                  span.ps-2 Tomates rellenos.
              .bg-white.p-3.mb-2(style="border-radius:5px;")
                .d-flex
                  i.fas.fa-check-circle.mt-1(style="color:#FF7630;")
                  span.ps-2 Albóndigas de atún o carne.
              .bg-white.p-3.mb-2(style="border-radius:5px;")
                .d-flex
                  i.fas.fa-check-circle.mt-1(style="color:#FF7630;")
                  span.ps-2 Brochetas de vegetales con salsa de quesos.
              .bg-white.p-3.mb-2(style="border-radius:5px;")
                .d-flex
                  i.fas.fa-check-circle.mt-1(style="color:#FF7630;")
                  span.ps-2 Champiñones rellenos.
              .bg-white.p-3(style="border-radius:5px;")
                .d-flex
                  i.fas.fa-check-circle.mt-1(style="color:#FF7630;")
                  span.ps-2 Canapés de camarones al ajillo.
            .col-lg-5.d-none.d-lg-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema2/17.png")




</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    indicadorTarjetaFlip: true,
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
