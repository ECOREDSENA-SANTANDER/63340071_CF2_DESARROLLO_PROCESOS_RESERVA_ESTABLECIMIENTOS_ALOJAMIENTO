<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Tarifas hoteleras     

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-5
        img.d-none.d-lg-block(src='@/assets/curso/tema4/1.png' alt='')     
      .col-lg-7
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-2
            img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema2/26.svg' alt='')     
          .col-lg-10
            p.mb-0 El surgimiento de nuevos canales de distribución trajo consigo una modificación de las tarifas que manejan los hoteles. Tan especializado se ha vuelto el tema, que se ha creado una nueva disciplina cuya función es solo la de gestionar los ingresos del hotel, hablamos del #[b #[em Revenue Management.]] 
        p.mb-3 Gracias a ello, el manejo de las tarifas hoy se realiza de forma dinámica (#[em #[b Dynamic Pricing]]). Los tiempos donde se tenía una tarifa de temporada alta, media y baja han pasado ya, otorgando a este apartado un manejo especial y la aplicación de diferentes tipos de tarifas, como son: 
        img.mb-0.img-a.img-t(src='@/assets/curso/tema2/10.svg' alt="")

    .row.fondo6.p-4.p-lg-5.p-md-4.mb-5(data-aos="fade-down")
      .col-lg-12
        .tarjeta.tarjeta--gris.ul.p-lg-4.p-3.mb-0(data-aos="fade-right")
          PasosB.color-acento-contenido
            .row.justify-content-center.align-items-center
              .col-lg-7
                h4.mb-4 Tarifa #[em rack]
                p.mb-4 Es la tarifa oficial que cobra el hotel, a la cual no se aplica ningún descuento. Sirve de referencia para el manejo de tarifas.  
              .col-lg-4.col-md-7.col-10.mb-4
                img.img-a.img-t(src='@/assets/curso/tema4/2.png')
            .row.justify-content-center.align-items-center
              .col-lg-7
                h4.mb-4 Tarifa neta o de piso
                p.mb-4 Esta es la tarifa que se asigna a intermediarios como agencias de viaje, bancos de camas y plataformas de #[em marketing], sobre la cual ellos pueden generar su utilidad o #[em markup.]
              .col-lg-4.col-md-7.col-10.mb-4
                img.img-a.img-t(src='@/assets/curso/tema4/3.png')
            .row.justify-content-center.align-items-center
              .col-lg-7
                h4.mb-4 Tarifa confirmada
                p.mb-4 Es la tarifa que se le informa al cliente al momento de la reserva. Si al llegar el huésped no hay disponible una habitación acorde a la tarifa confirmada, se suele dar otra de mejor categoría por el mismo precio, lo que significa hacer un #[em upgrade.]
              .col-lg-4.col-md-7.col-10.mb-4
                img.img-a.img-t(src='@/assets/curso/tema4/4.png')
            .row.justify-content-center.align-items-center
              .col-lg-7
                h4.mb-4 Tarifa negociada
                p.mb-4 Esta tiene un descuento sobre la tarifa #[em rack], y unas condiciones en su otorgamiento. Por lo general, se da solo en negociaciones con empresas, agencias y asociaciones, entre otras, con base en una producción mínima de noches por mes. 
              .col-lg-4.col-md-7.col-10.mb-4
                img.img-a.img-t(src='@/assets/curso/tema4/5.png')
            .row.justify-content-center.align-items-center
              .col-lg-7
                h4.mb-4 Tarifa #[em complimentary]
                p.mb-4 Son las tarifas que otorgan a determinadas entidades o personas que representan algún interés para el hotel. Por ejemplo: otros hoteles, asociaciones, conglomerados con condiciones delimitadas, empleados del hotel, amigos y familiares, etc. 
              .col-lg-4.col-md-7.col-10.mb-4
                img.img-a.img-t(src='@/assets/curso/tema4/6.png')
            .row.justify-content-center.align-items-center
              .col-lg-7
                h4.mb-4 Tarifas promocionales
                p.mb-4 Son descuentos, que se aplican para fines de promoción del hotel, siguiendo unas políticas y restricciones, ejemplo: tarifas no reembolsables, menores de 12 años no pagan, pague 3 noches y hospédese 4.  
              .col-lg-4.col-md-7.col-10.mb-4
                img.img-a.img-t(src='@/assets/curso/tema4/7.png')
            .row.justify-content-center.align-items-center
              .col-lg-7
                h4.mb-4 Tarifa BAR
                p.mb-4 Con el aumento de canales de distribución, hubo un momento en que el hotelero perdió el control sobre su precio, era usual que llegaran clientes al hotel que habían encontrado una tarifa inferior a través de un intermediario, que directamente con el hotel. Para dar solución a esta problemática y fortalecer la venta directa y aumentar la transparencia de las tarifas, los hoteleros comenzaron a publicar en sus webs la BAR (#[b #[em Best Available Rate]], por su sigla en inglés) por su acrónimo en inglés. La mejor tarifa disponible garantiza que no se va a encontrar una tarifa inferior en ningún canal de distribución.
                p.mb-4 El manejo de este tipo de tarifas no tiene que ver sólo con el precio, sino con el valor de la tarifa. 
              .col-lg-4.col-md-7.col-10.mb-4
                img.img-a.img-t(src='@/assets/curso/tema4/8.png')
            .row.justify-content-center.align-items-center
              .col-lg-7
                h4.mb-4 Tarifa grupo o evento
                p.mb-4 Estas tarifas se crean con base en la disponibilidad y las condiciones de mercado del momento en que se pide la cotización. Y aplican para grupos o eventos especiales, por ejemplo, ferias, conciertos, congresos. 
              .col-lg-4.col-md-7.col-10.mb-4
                img.img-a.img-t(src='@/assets/curso/tema4/9.png')
            .row.justify-content-center.align-items-center
              .col-lg-7
                h4.mb-4 Tarifa larga estadía
                p.mb-4 Aplica para un número mínimo de noches al mes, incluso con alguna frecuencia hay personas que deciden vivir en los hoteles, por las ventajas que ello les proporciona y se catalogan como huéspedes permanentes. 
              .col-lg-4.col-md-7.col-10.mb-4
                img.img-a.img-t(src='@/assets/curso/tema4/10.png')
            .row.justify-content-center.align-items-center
              .col-lg-7
                h4.mb-4 Paquetes o planes hoteleros
                p.mb-4 Los paquetes son una forma de comercializar productos hoteleros, para brindar a los clientes más servicios, por precios más atractivos. Se puede empaquetar con productos propios o de terceros. Ejemplo: plan noche de bodas, paquete con alimentación y #[em tours] incluidos. 
              .col-lg-4.col-md-7.col-10.mb-4
                img.img-a.img-t(src='@/assets/curso/tema4/11.png')



    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.color-secundario.mb-2
          h5 Tabla 2. 
          | Ejemplo de tarifa de hotel
    .row.justify-content-center.align-items-center
      .col-lg-10
        img.mb-0(src='@/assets/curso/tema4/12.svg', alt='Tabla de ejemplo que muestra tarifas públicas de un hotel en pesos colombianos. Incluye los precios por tipo de habitación (Estándar, Deluxe, Junior Suite y Suite). También presenta variaciones según temporadas. La sugerencia es tener hasta 12 niveles tarifarios, promociones y tarifas descontadas.')

</template>

<script>
export default {
  name: 'Tema4',
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
