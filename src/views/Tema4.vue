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
                p.mb-4 Esta es la tarifa que se asigna a intermediarios como agencias de viaje, bancos de camas y plataformas de #[em marketing], sobre la cual ellos pueden generar su utilidad o #[em #[b markup]].
              .col-lg-4.col-md-7.col-10.mb-4
                img.img-a.img-t(src='@/assets/curso/tema4/3.png')
            .row.justify-content-center.align-items-center
              .col-lg-7
                h4.mb-4 Tarifa confirmada
                p.mb-4 Es la tarifa que se le informa al cliente al momento de la reserva. Si al llegar el huésped no hay disponible una habitación acorde a la tarifa confirmada, se suele dar otra de mejor categoría por el mismo precio, lo que significa hacer un #[em #[b upgrade.]]
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
    
    .row.justify-content-center(data-aos="zoom-in-left")
      .col-lg-10
        .tabla-a.tabla-mod
          table(alt='Tabla de ejemplo que muestra tarifas públicas de un hotel en pesos colombianos. Incluye los precios por tipo de habitación (Estándar, Deluxe, Junior Suite y Suite). También presenta variaciones según temporadas. La sugerencia es tener hasta 12 niveles tarifarios, promociones y tarifas descontadas.')  
            thead
              th(colspan="6") 
                .row
                  .col-lg             
                    h4.mb-2 Estructura tarifas públicas hotel - ejemplo
                    h4.mb-0 Tarifas en pesos colombianos (COP)
            tbody
              tr
                td.iz(data-aos="fade-left").bt1 Precio base estándar de habitación $299.000
                td.text-center(data-aos="fade-right") Variación por tipo habitación
                td.text-center(data-aos="fade-left").bt2 ESTÁNDAR
                td.text-center(data-aos="fade-right").bt2 #[em DELUXE]
                td.text-center(data-aos="fade-left").bt2 #[em JUNIOR SUITE]
                td.text-center(data-aos="fade-right").bt2 #[em SUITE]
              tr
                td.iz(data-aos="fade-left")(rowspan="2").bt3 Persona adicional $30.000
                td.text-center(data-aos="fade-right") 
                td.text-center(data-aos="fade-left") $0
                td.text-center(data-aos="fade-right") $30.000
                td.text-center(data-aos="fade-left") $50.000
                td.text-center(data-aos="fade-right") $100.000
              tr.bt4
                td(data-aos="fade-left") Nivel
                td.text-center(data-aos="fade-right") 2 PAX
                td.text-center(data-aos="fade-left") 2 PAX
                td.text-center(data-aos="fade-right") 2 PAX
                td.text-center(data-aos="fade-left") 2 PAX
              tr
                td.iz(data-aos="fade-left") #[em Rack rate] 100 %
                td.text-center(data-aos="fade-right") #[em Rack]
                td.text-center(data-aos="fade-left") $299.000
                td.text-center(data-aos="fade-right") $329.000
                td.text-center(data-aos="fade-left") $349.000
                td.text-center(data-aos="fade-left") $399.000
              tr
                td.iz(data-aos="fade-left")
                  .row
                    .col-lg
                      p.mb-0 #[em High season] 
                      p.mb-0 (71 % - 99 %)
                td.text-center(data-aos="fade-right") A
                td.text-center(data-aos="fade-left") $279.000
                td.text-center(data-aos="fade-right") $309.000
                td.text-center(data-aos="fade-left") $329.000
                td.text-center(data-aos="fade-left") $379.000
              tr
                td.iz(data-aos="fade-left")
                  .row
                    .col-lg
                      p.mb-0 #[em Mid season] 
                      p.mb-0 (31 % - 70 %)
                td.text-center(data-aos="fade-right") B
                td.text-center(data-aos="fade-left") $259.000
                td.text-center(data-aos="fade-right") $289.000
                td.text-center(data-aos="fade-left") $309.000
                td.text-center(data-aos="fade-left") $359.000

              tr
                td.iz(data-aos="fade-left") 
                  .row
                    .col-lg
                      p.mb-0 #[em Low season] 
                      p.mb-0 (0 % - 30 %)
                td.text-center(data-aos="fade-right") C
                td.text-center(data-aos="fade-left") $239.000
                td.text-center(data-aos="fade-right") $269.000
                td.text-center(data-aos="fade-left") $289.000
                td.text-center(data-aos="fade-left") $339.000
              tr.bt5
                td.text-center(data-aos="fade-left")(colspan="6") #[b La sugerencia es tener hasta 12 niveles tarifarios (con base en el movimiento y mercado del hotel).]
              tr
                td.iz(data-aos="fade-left") Corporativo y planes
                td.text-center(data-aos="fade-right") A
                td.text-center(data-aos="fade-left") $169.000
                td.text-center(data-aos="fade-right") $199.000
                td.text-center(data-aos="fade-left") $229.000
                td.text-center(data-aos="fade-left") $259.000
              tr
                td.iz(data-aos="fade-left") Corporativo y planes #[em long stay]
                td.text-center(data-aos="fade-right") B
                td.text-center(data-aos="fade-left") $149.000
                td.text-center(data-aos="fade-right") $179.000
                td.text-center(data-aos="fade-left") $209.000
                td.text-center(data-aos="fade-left") $239.000
              tr
                td(data-aos="fade-left") 
                td(data-aos="fade-right")(colspan="5").bt5 #[b Promociones y tarifas descontadas]
              tr
                td.iz(data-aos="fade-left") Valor base de BAR para calcular los descuentos
                td.text-center(data-aos="fade-right") B
                td.text-center(data-aos="fade-left") $259.000
                td.text-center(data-aos="fade-right") $289.000
                td.text-center(data-aos="fade-left") $309.000
                td.text-center(data-aos="fade-left") $359.000
              tr
                td(data-aos="fade-left") 
                td.text-center(data-aos="fade-right").bt1 Descuento
                td.text-center(data-aos="fade-left").bt1 ESTÁNDAR
                td.text-center(data-aos="fade-right").bt1 #[em DELUXE]
                td.text-center(data-aos="fade-left").bt1 #[em JUNIOR SUITE]
                td.text-center(data-aos="fade-left").bt1 #[em SUITE]
              tr
                td.iz(data-aos="fade-left") No reembolsable
                td.text-center(data-aos="fade-right") 35 %
                td.text-center(data-aos="fade-left") $168.350
                td.text-center(data-aos="fade-right") $187.850
                td.text-center(data-aos="fade-left") $200.850
                td.text-center(data-aos="fade-left") $233.350
              tr
                td.iz(data-aos="fade-left") (de 0 a 29 días)
                td.text-center(data-aos="fade-right") 
                td.text-center(data-aos="fade-left") 
                td.text-center(data-aos="fade-right") 
                td.text-center(data-aos="fade-left") 
                td.text-center(data-aos="fade-left") 
              tr
                td.iz(data-aos="fade-left") Promoción compra anticipada +30 (más de 30 días anticipación)
                td.text-center(data-aos="fade-right") 25 %
                td.text-center(data-aos="fade-left") $194.250
                td.text-center(data-aos="fade-right") $216.750
                td.text-center(data-aos="fade-left") $231.750
                td.text-center(data-aos="fade-left") $269.250
              tr
                td.iz(data-aos="fade-left") Promoción #[em long stay] 4+ (más de 5 días consecutivos)
                td.text-center(data-aos="fade-right") 40 %
                td.text-center(data-aos="fade-left") $155.400
                td.text-center(data-aos="fade-right") $173.400
                td.text-center(data-aos="fade-left") $185.400
                td.text-center(data-aos="fade-left") $215.400

   
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
