<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row
      .col-lg
        .row
          .col-lg-5.mb-4.mb-lg-0.pe-lg-0(data-aos="fade-down")
            figure.m-auto.col-9.col-md-8.col-lg-12 
              img(src="@/assets/curso/intro1.svg")
          .col-lg-7.ps-lg-0(data-aos="fade-up")
            .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#D8E9FF;")
              p.mb-0 La prestación del servicio en el ámbito gastronómico es un aspecto clave para asegurar la satisfacción del cliente y el éxito de cualquier evento. En un mercado cada vez más competitivo, los consumidores buscan experiencias integrales que combinen calidad en los alimentos con una atención impecable y personalizada. Por ello, es fundamental que los profesionales del sector comprendan los elementos esenciales para ofrecer un servicio gastronómico de alto nivel.  
        p.mt-4.mb-0 Este componente formativo explora los distintos tipos de servicios que pueden implementarse, desde la organización de banquetes hasta la elección adecuada de menús. Cada evento requiere una atención cuidadosa a los detalles, desde el montaje de mesas hasta la coordinación del personal encargado de servir alimentos y bebidas. Al dominar estas habilidades, se garantiza una experiencia satisfactoria para los comensales y se refuerza la reputación de los organizadores. 
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/intro2.png")
    
    .cont_intro.mt-4
      .col-xl-10.m-auto
        .p-4(style="background-color:#FFCD80;border-radius:16px;" data-aos="zoom-in")
          .row
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src="@/assets/curso/intro4.png")
            .col-lg
              p.mb-0(style="color:#FF7630;font-size:35px;") #[i.fas.fa-angle-right] #[i.fas.fa-angle-right] #[i.fas.fa-angle-right] #[i.fas.fa-angle-right]
              p.mb-0 Además, se proporcionan recomendaciones prácticas para la correcta gestión de cada etapa del servicio, promoviendo la eficiencia y la excelencia en la atención. Al finalizar el componente formativo, los participantes estarán mejor preparados para enfrentar los desafíos del sector, aplicando conocimientos que les permitirán elevar la calidad de sus eventos y aumentar la satisfacción de sus clientes. 
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
