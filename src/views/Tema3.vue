<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Políticas 
    
    p.mb-4(data-aos="fade-left") Consiste en una descripción minuciosa de los lineamientos a seguir en el desarrollo de las actividades y la toma de decisiones para el logro de los objetivos empresariales, de tal forma se busca agilizar los procesos decisión, atención y venta de habitaciones. 
    
     .bg7.p-2.mb-4(data-aos="fade-right")
      h3.mb-0.ps-4.pe-4 Como ejemplo, se puede revisar el siguiente proceso

    p.mb-4(data-aos="fade-left") Requisitos para realizar una reservación en temporada baja: 

    .row.justify-content-center.mb-0(data-aos="fade-left")
      .col-lg-12.position-relative
        .avatar
          figure
            img.mb-4(src="@/assets/curso/tema3/1.svg", alt="alt").img250
        
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema3/2.svg", alt="alt").img100
            .col
              p #[b Proporcionar los datos] (nombre, domicilio, fecha de llegada y salida, tipo de habitación, número de habitación, número de personas, etc.). 
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema3/3.svg", alt="alt").img100
            .col
              p #[b Tarjeta de crédito] (número, fecha de vencimiento, dígitos de seguridad) o realizar un depósito en efectivo a la cuenta del hotel.  
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema3/4.svg", alt="alt").img100
            .col
              p La tarjeta de crédito #[b solo quedará en garantía] y no se realizará ningún cargo, hasta su salida.
    
    
    separador
    #t_3_1.titulo-segundo.mb-lg-5.mb-3
      h2 3.1 Política de cancelación del hotel 

    .bloque-texto-g.color-secundario.t3.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/5.png')})`}"
      )
      .bloque-texto-g__texto.p-lg-5.p-4.my-lg-5.my-2
        p.mb-0 La política de cancelación de las reservas de hotel, pueden depender de varios factores, como la tarifa de reserva o la fecha #[em #[b check-in.]] Los establecimientos de alojamiento definen sus políticas.
    
    p.mb-4 Entre las políticas de cancelación encontramos las siguientes:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-md-5.col-8.mb-4
        img.d-none.d-lg-block(src='@/assets/curso/tema3/6.png', alt='')
      .col-lg-9.mb-0
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-0(data-aos="fade-right")
          .row.justify-content-center.align-items-center.col-xl-11.m-auto(titulo="La política de cancelar hasta cierta fecha")
            .col-lg-12.mb-0
              p.mb-4 Este tipo de política de cancelación da a los viajeros la opción de cancelar las reservas de hotel sin gastos hasta cierta fecha. Una vez que esta pase, las políticas de cancelación pueden ser: 
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 Cobro de una tarifa estándar de cancelación.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 Requerir el pago total de la reserva.   
          .row.justify-content-center.align-items-center.col-xl-11.m-auto(titulo="Política de penalización de una noche")
            .col-lg-12.mb-0
              p.mb-0 Para este tipo de política de cancelación de la habitación del hotel, el hotel cobra una tarifa de cancelación equivalente a una noche de estancia en el hotel. 
          .row.justify-content-center.align-items-center.col-xl-11.m-auto(titulo="El prepago, política de reserva de hotel no reembolsable")
            .col-lg-12.mb-0
              p.mb-0 Este tipo de reserva de hotel requiere el prepago de la reserva total en el momento de la reserva y no es reembolsable. 

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        .bg8.p-lg-5.p-3
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-12
              .bg9.p-lg-5.p-3
                .row.justify-content-center.align-items-center.mb-0
                  .col-lg-12
                    p.mb-0 En caso de #[em overbooking] el hotel debe solucionar los inconvenientes presentados con el huésped, otorgándole algún beneficio en su próxima estadía y debe cancelar los gastos en que incurra el huésped.








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
