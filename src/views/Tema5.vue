<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Contrato de reservas
    
    p.mb-4(data-aos="fade-left") El contrato de hospedaje se probará mediante la tarjeta de registro hotelero, en la cual se identificará el huésped y sus acompañantes quienes responderán solidariamente de sus obligaciones. 
    
    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5(data-aos="fade-right") 
      .row.m-0.align-items-center.justify-content-center
        .col-lg-8.com.mb-0.mb-lg-0
          .bloque-texto-a__texto.p-lg-5.p-4.my-lg-5.my-2
            p.mb-4 Las facturas expedidas por los prestadores de servicios turísticos debidamente firmadas por el cliente o usuario se asimilarán a la factura cambiaria.
            p.mb-lg-4.mb-0 Un contrato de reserva de alojamiento es un acuerdo legal entre un establecimiento (hotel, hostal, etc.) y un cliente, donde el establecimiento se compromete a proporcionar alojamiento y servicios relacionados durante un período específico, a cambio de un pago.   
        .col-lg-4.col-md-6.mb-0
          img.enc1(src='@/assets/curso/tema5/1.png', alt='')

    
    p.mb-4(data-aos="fade-left") Este contrato establece los términos y condiciones de la estancia, incluyendo: 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-6
        .bg4.p-2
          .bgw.p-1.mb-2.my-1
            ul.lista-ul.mb-0
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 #[b Fechas de la estancia:] Llegada y salida.
          .bgw.p-1.mb-2
            ul.lista-ul.mb-0
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 #[b Tipo de alojamiento:] Habitación, suite, etc.
          .bgw.p-1.mb-2
            ul.lista-ul.mb-0
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 #[b Servicios incluidos:] Desayuno, limpieza, etc.
          .bgw.p-1.mb-2
            ul.lista-ul.mb-0
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Precio y forma de pago.
          .bgw.p-1.mb-2
            ul.lista-ul.mb-0
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Políticas de cancelación. 
      .col-lg-6
        img.d-none.d-lg-block(src="@/assets/curso/tema5/2.png")

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        TabsB.color-acento-contenido.mb-0
          .py-4.py-md-5(titulo="Elementos clave de un contrato de reserva" :icono="require('@/assets/curso/tema5/3.svg')")
            .row.justify-content-center.align-items-center
              .col-lg-8
                h4 Elementos clave de un contrato de reserva
                ul.lista-ul.mb-0
                  li.d-flex.mb-2
                    i.fas.fa-circle-check
                    p.mb-0 Identificación de las partes: Nombres y datos de contacto del establecimiento y del cliente.
                  li.d-flex.mb-2
                    i.fas.fa-circle-check
                    p.mb-0 Descripción del servicio: Detalles del alojamiento y servicios ofrecidos.
                  li.d-flex.mb-2
                    i.fas.fa-circle-check
                    p.mb-0 Precio y condiciones de pago: Monto total, depósito, plazos, etc.
                  li.d-flex.mb-2
                    i.fas.fa-circle-check
                    p.mb-0 Política de cancelación: Condiciones y cargos por cancelación o modificación.
                  li.d-flex.mb-2
                    i.fas.fa-circle-check
                    p.mb-0 Duración de la estancia: Fechas de llegada y salida.
                  li.d-flex.mb-2
                    i.fas.fa-circle-check
                    p.mb-0 Condiciones adicionales: Normas del establecimiento, políticas de mascotas, etc.
              .col-lg-4.col-md-7.col-10.ps-lg-0
                figure
                  img.d-none.d-lg-block(src='@/assets/curso/tema5/5.svg', alt='Texto que describa la imagen')
          .py-4.py-md-5(titulo="Consideraciones adicionales" :icono="require('@/assets/curso/tema5/3.svg')")
            .row.justify-content-center.align-items-center
              .col-lg-8
                h4 Consideraciones adicionales
                ul.lista-ul.mb-0
                  li.d-flex.mb-2
                    i.fas.fa-circle-check
                    p.mb-0 Es importante que el contrato sea claro y detallado, para evitar malentendidos.
                  li.d-flex.mb-2
                    i.fas.fa-circle-check
                    p.mb-0 Los contratos de reserva pueden variar según el tipo de establecimiento y las leyes locales.
                  li.d-flex.mb-2
                    i.fas.fa-circle-check
                    p.mb-0 En muchos casos, la reserva se realiza de forma electrónica, a través de plataformas en línea. En estos casos, los términos y condiciones suelen estar disponibles en la página web del establecimiento o de la plataforma de reservas.
                  li.d-flex.mb-2
                    i.fas.fa-circle-check
                    p.mb-0 Los contratos de reserva de alojamiento en régimen de contingente se realizan entre agencias de viaje y hoteles, en donde el hotelero pone a disposición de la agencia, una cantidad de plazas durante un determinado periodo de tiempo. 
              .col-lg-4.col-md-7.col-10
                figure
                  img.d-none.d-lg-block(src='@/assets/curso/tema5/6.svg', alt='Texto que describa la imagen')
    



</template>

<script>
export default {
  name: 'Tema5',
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
