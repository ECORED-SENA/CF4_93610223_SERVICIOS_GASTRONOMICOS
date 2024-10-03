<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5(data-aos="fade-down") A continuación, se presenta una síntesis de la temática estudiada en el componente formativo. 

    .row.justify-content-center.p-4(style="background-color:#FFF9F1;border-radius:20px;")
      .col-lg-10.mb-5
        figure(data-aos="zoom-in-up")
          img(src="@/assets/curso/sintesis.svg", alt="La síntesis enseña  la prestación del servicio gastronómico, dividido en cuatro áreas: tipos de servicio, organización de banquetes, composición de menús y recomendaciones.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
