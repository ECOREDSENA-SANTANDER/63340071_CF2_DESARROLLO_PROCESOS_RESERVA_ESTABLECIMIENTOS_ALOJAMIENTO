<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Disponibilidad hotelera

      .row.justify-content.align-items-center.mb-0(data-aos="fade-left")
        .col-lg-5
          .bg2.p-4.mb-4 
            p.mb-0.my-lg-4 La disponibilidad hotelera se refiere al número de habitaciones que un establecimiento tiene libres para asignar en un momento determinado. Es un indicador clave para la gestión operativa, ya que permite optimizar la ocupación, ajustar tarifas según la demanda y planificar tareas como limpieza y mantenimiento.
        .col-lg-3 
          img.mb-4.d-none.d-lg-block(src='@/assets/curso/tema1/1.png' alt="")
        .col-lg-4
          img.mb-3.d-none.d-lg-block.img-t(src='@/assets/curso/tema1/2.svg' alt="")
          p.mb-lg-4.mb-0 Una correcta gestión de la disponibilidad, apoyada en sistemas como el #[em room rack], permite al personal del hotel tomar decisiones rápidas y precisas. Además, es fundamental que esta información esté sincronizada en tiempo real con los canales de reserva para evitar sobreventas o pérdida de oportunidades.

    
      separador
      #t_1_1.titulo-segundo.mb-lg-5.mb-3
        h2 1.1 #[em Planning] de habitaciones o #[em room rack]
 
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-lg-5.mb-4(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema1/3.png')})`}"
        )
        .bloque-texto-g__texto.p-lg-5.p-4.my-lg-5.my-2
          p.mb-0 Es el panel en el que se representan todas las habitaciones del establecimiento, sirve para controlar permanentemente el estado de cada una (libre, ocupada, bloqueada, sucia, etc.).
          br
          br
          p.mb-0 El #[em rack] de habitaciones es una interfaz visual dentro de un #[em software] hotelero que muestra el estado de todas las habitaciones. Proporciona una descripción general rápida de la disponibilidad de habitaciones, la ocupación y el estado de servicio de limpieza, lo que permite administrar de manera eficiente el hotel o propiedad de alquiler vacacional.

      .bg1.p-4(data-aos="fade-right")
        .row.justify-content-center.align-items-center
          .col-lg-1
            img.mb-0.d-none.d-lg-block.img-t(src='@/assets/curso/tema1/4.svg' alt="")
          .col-lg-11
            p.mb-0 El #[em room rack] ayuda al personal del hotel a gestionar de manera eficiente el inventario de habitaciones, asignar habitaciones a los huéspedes y tomar decisiones en tiempo real con respecto a las asignaciones y los precios de las habitaciones; además permite identificar con facilidad la disponibilidad de las habitaciones.  


      separador
      #t_1_2.titulo-segundo.mb-lg-5.mb-3
        h2 1.2 Estado de las habitaciones

      p.mb-4(data-aos="fade-left") Los estados de las habitaciones muestran cómo se encuentra la habitación en el momento para poder darla en reserva a un cliente y/o huésped o si se está presentando una eventualidad con la habitación.
      p.mb-5(data-aos="fade-right") Los estados comunes que se pueden presentar en el servicio de las habitaciones son los siguientes:

      .row.fondo1.p-4.p-lg-5.p-md-3.mb-0(data-aos="fade-left")
        .col-lg-12
           
          .row.justify-content-center.align-items-end.mb-0(data-aos="fade-left")
            .col-lg-4.col-md-5.col-7.mb-4
              img.img-a.img-t(src='@/assets/curso/tema1/5.svg', alt='')
            .col-lg-8.mb-lg-0.mb-0
              SlyderF(columnas="col-lg-6 col-md-6 col-xl-6")
                .tarjeta.tarjeta--slyder.b2.p-3.p-lg-4.p-md-3
                  .row.justify-content-center.mb-3
                    .col-9.my-4
                      img.img-a.img-t.mb-4(data-aos="zoom-in-left")(src='@/assets/curso/tema1/6.svg' alt='AvatarTop')
                      .bg3.p-1.mb-0
                        h5.text-center.mb-0.my-1.ps-2.pe-2 Disponible
                  p.mb-4.text-center(data-aos="fade-right") La habitación está lista para ser asignada a un huésped o reserva.
                .tarjeta.tarjeta--slyder.b2.p-3.p-lg-4.p-md-3
                  .row.justify-content-center.mb-3
                    .col-9.my-4
                      img.img-a.img-t.mb-4(data-aos="zoom-in-left")(src='@/assets/curso/tema1/7.svg' alt='AvatarTop')
                      .bg3.p-1.mb-0
                        h5.text-center.mb-0.my-1.ps-2.pe-2 Ocupado
                  p.mb-4.text-center(data-aos="fade-right") La habitación está siendo utilizada actualmente por un huésped.
                .tarjeta.tarjeta--slyder.b2.p-3.p-lg-4.p-md-3
                  .row.justify-content-center.mb-3
                    .col-9.my-4
                      img.img-a.img-t.mb-4(data-aos="zoom-in-left")(src='@/assets/curso/tema1/8.svg' alt='AvatarTop')
                      .bg3.p-1.mb-0
                        h5.text-center.mb-0.my-1.ps-2.pe-2 Sucio
                  p.mb-4.text-center(data-aos="fade-right") La habitación necesita limpieza antes de poder ser asignada nuevamente.
                .tarjeta.tarjeta--slyder.b2.p-3.p-lg-4.p-md              
                  .row.justify-content-center.mb-3
                    .col-9.my-4
                      img.img-a.img-t.mb-4(data-aos="zoom-in-left")(src='@/assets/curso/tema1/9.svg' alt='AvatarTop')
                      .bg3.p-1.mb-0
                        h5.text-center.mb-0.my-1.ps-2.pe-2 Limpio
                  p.mb-4.text-center(data-aos="fade-right") La habitación ha sido aseada y está en condiciones para recibir un huésped.
                .tarjeta.tarjeta--slyder.b2.p-3.p-lg-4.p-md-3
                  .row.justify-content-center.mb-3
                    .col-9.my-4
                      img.img-a.img-t.mb-4(data-aos="zoom-in-left")(src='@/assets/curso/tema1/10.svg' alt='AvatarTop')
                      .bg3.p-1.mb-0
                        h5.text-center.mb-0.my-1.ps-2.pe-2 Fuera de servicio
                  p.mb-4.text-center(data-aos="fade-right") La habitación no está disponible debido a mantenimiento o una falla.
                .tarjeta.tarjeta--slyder.b2.p-3.p-lg-4.p-md-3
                  .row.justify-content-center.mb-3
                    .col-9.my-4
                      img.img-a.img-t.mb-4(data-aos="zoom-in-left")(src='@/assets/curso/tema1/11.svg' alt='AvatarTop')
                      .bg3.p-1.mb-0
                        h5.text-center.mb-0.my-1.ps-2.pe-2 Reservada
                  p.mb-4.text-center(data-aos="fade-right") La habitación ha sido asignada a una reserva futura y no puede ocuparse por otro huésped.



  </template>

<script>
export default {
  name: 'Tema1',
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
