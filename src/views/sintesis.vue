<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4 La hotelería ha evolucionado significativamente en su infraestructura, procesos y servicios, adoptando herramientas más eficientes para mejorar la experiencia del cliente. Un ejemplo de ello es el #[em planning] de ocupación, que permite conocer en tiempo real la disponibilidad de habitaciones y brindar información precisa durante el proceso de reserva. 
    p.mb-5 Además, es clave considerar los tipos de reservas, las políticas aplicables, las tarifas y el contrato de reserva, elementos que aseguran claridad y confianza al huésped. El conocimiento de los servicios turísticos dentro y fuera del hotel complementa la experiencia, ajustándola a las expectativas del cliente. 
    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/sintesis.png", alt='Mapa conceptual sobre la gestión de reservas hoteleras: disponibilidad, políticas, tarifas, contrato y servicios turísticos.')
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
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
