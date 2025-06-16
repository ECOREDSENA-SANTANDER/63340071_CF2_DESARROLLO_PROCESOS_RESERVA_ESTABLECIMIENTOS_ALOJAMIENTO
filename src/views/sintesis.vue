<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4 A través del tiempo la hotelería ha evolucionado con cambios significativos en la mejora de su infraestructura, sus procedimientos y sus servicios. En los últimos años, la hotelería se ha visto marcada con procesos más eficientes y eficaces para lograr una mejor experiencia al cliente. 
    p.mb-4 De este modo, en el siguiente mapa conceptual se puede apreciar la facilidad con la que se lleva la información de la disponibilidad hotelera a través del #[em planning] de ocupación, que muestra el estado en que se encuentran las habitaciones en tiempo real para facilitar al personal de reservas dar una información más precisa al cliente y saber que se le puede ofrecer al momento de solicitar una reserva.
    p.mb-4 Igualmente, dentro del mapa se encuentran relacionados los tipos de reservas y los mecanismos con los que se manejan, teniendo en cuenta las normas técnicas sectoriales que nos indican el procedimiento a seguir. Las diferentes políticas son claves en este proceso con el fin de que al cliente se le otorgue una información clara y transparente al momento de reservar. Las tarifas hoteleras y el contrato de reservas son parte fundamental de un proceso de reservas. Y el conocimiento de los servicios turísticos dentro del establecimiento y alrededor de él, permiten al turista tener una perspectiva más clara del lugar donde van a pernoctar, de la experiencia a disfrutar dentro del establecimiento y fuera de él.

    .row.justify-content-center
      .col-lg-12.mb-5.p-4
        figure
          img(src="@/assets/curso/sintesis.png", alt='Esta síntesis, titulada "Tu reserva... nuestra prioridad", desglosa los elementos de la gestión de reservas hoteleras. El diagrama se divide en seis áreas principales: disponibilidad hotelera, el proceso de reservas, las políticas, las tarifas, el contrato y los servicios turísticos. En conjunto, el esquema presenta los componentes esenciales para priorizar y manejar eficientemente la reserva de un huésped.')
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
