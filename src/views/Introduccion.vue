<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-lg-5.mb-4
      .col-lg-9
        p.mb-4(data-aos="fade-left") La reserva es un procedimiento clave de un establecimiento de alojamiento. Es el medio por el cual una persona se comunica desde otro lugar por un canal específico y da a conocer sus expectativas, sus intereses de viaje y sus necesidades. 
        .bg1.p-lg-5.p-4
          p.mb-4.mb-lg-4(data-aos="fade-right") Es un momento de verdad donde en pocos minutos o segundos una persona puede vivir una experiencia positiva o negativa de acuerdo a la atención que obtenga por parte de la persona encargada que lo recibe, lo orienta y da respuesta a sus requerimientos.
          p.mb-0(data-aos="fade-left") No se puede olvidar que todo proceso de reserva encierra hasta los más mínimos detalles pudiendo trasladar al cliente desde su imaginación al establecimiento sin haber llegado ahí, por tal razón se presenta una guía de apoyo, la cual le permitirá conocer los diferentes procedimientos técnicos para realizar una reserva con éxito.  
      .col-lg-3.col-7.col-md-6
        img.d-none.d-lg-block(src='@/assets/curso/intro/1.png' alt="")

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Tu reserva… nuestra prioridad

</template>

<script>
export default {
  name: 'Introduccion',
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
