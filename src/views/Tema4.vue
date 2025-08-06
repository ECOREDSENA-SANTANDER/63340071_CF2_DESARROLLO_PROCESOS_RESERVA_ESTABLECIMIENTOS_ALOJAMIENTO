<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Tarifas hoteleras     

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-4
        img.d-none.d-lg-block(src='@/assets/curso/tema4/1.png' alt='')     
      .col-lg-5
        p.mb-3 El surgimiento de nuevos canales de distribución trajo consigo una modificación de las tarifas que manejan los hoteles. Tan especializado se ha vuelto el tema, que se ha creado una nueva disciplina cuya función es solo la de gestionar los ingresos del hotel, hablamos del #[b #[em Revenue Management.]] 
        p.mb-lg-0.mb-4 Gracias a ello, el manejo de las tarifas hoy se realiza de forma dinámica (#[em #[b Dynamic Pricing]]). Los tiempos donde se tenía una tarifa de temporada alta, media y baja han pasado ya, otorgando a este apartado un manejo especial y la aplicación de diferentes tipos de tarifas, como son: 
      .col-lg-3.col-10.col-md-7
        img.mb-0(src='@/assets/curso/tema4/00.svg' alt="")

    .row.fondo6.p-4.p-lg-5.p-md-4.mb-5(data-aos="fade-down")
      .col-lg-12
        .tarjeta.tarjeta--grisr.ul.p-lg-4.p-3.mb-0(data-aos="fade-right")
          PasosB.color-acento-contenido
            .row.justify-content-center.align-items-center
              .col-lg-7
                h4.mb-4 Tarifa #[em rack]
                p.mb-4 Es la tarifa oficial que cobra el hotel, a la cual no se aplica ningún descuento. Sirve de referencia para el manejo de tarifas.  
              .col-lg-4.col-md-7.col-10
                img.img-a.img-t(src='@/assets/curso/tema4/2.png')
            .row.justify-content-center.align-items-center
              .col-lg-7
                h4.mb-4 Tarifa neta o de piso
                p.mb-4 Esta es la tarifa que se asigna a intermediarios como agencias de viaje, bancos de camas y plataformas de #[em marketing], sobre la cual ellos pueden generar su utilidad o #[em #[b markup]].
              .col-lg-4.col-md-7.col-10
                img.img-a.img-t(src='@/assets/curso/tema4/3.png')
            .row.justify-content-center.align-items-center
              .col-lg-7
                h4.mb-4 Tarifa confirmada
                p.mb-4 Es la tarifa que se le informa al cliente al momento de la reserva. Si al llegar el huésped no hay disponible una habitación acorde a la tarifa confirmada, se suele dar otra de mejor categoría por el mismo precio, lo que significa hacer un #[em #[b upgrade.]]
              .col-lg-4.col-md-7.col-10
                img.img-a.img-t(src='@/assets/curso/tema4/4.png')
            .row.justify-content-center.align-items-center
              .col-lg-7
                h4.mb-4 Tarifa negociada
                p.mb-4 Esta tiene un descuento sobre la tarifa #[em rack], y unas condiciones en su otorgamiento. Por lo general, se da solo en negociaciones con empresas, agencias y asociaciones, entre otras, con base en una producción mínima de noches por mes. 
              .col-lg-4.col-md-7.col-10
                img.img-a.img-t(src='@/assets/curso/tema4/5.png')
            .row.justify-content-center.align-items-center
              .col-lg-7
                h4.mb-4 Tarifa #[em complimentary]
                p.mb-4 Son las tarifas que otorgan a determinadas entidades o personas que representan algún interés para el hotel. Por ejemplo: otros hoteles, asociaciones, conglomerados con condiciones delimitadas, empleados del hotel, amigos y familiares, etc. 
              .col-lg-4.col-md-7.col-10
                img.img-a.img-t(src='@/assets/curso/tema4/6.png')
            .row.justify-content-center.align-items-center
              .col-lg-7
                h4.mb-4 Tarifas promocionales
                p.mb-4 Son descuentos, que se aplican para fines de promoción del hotel, siguiendo unas políticas y restricciones, ejemplo: tarifas no reembolsables, menores de 12 años no pagan, pague 3 noches y hospédese 4.  
              .col-lg-4.col-md-7.col-10
                img.img-a.img-t(src='@/assets/curso/tema4/7.png')
            .row.justify-content-center.align-items-center
              .col-lg-7
                h4.mb-4 Tarifa BAR
                p.mb-4 Con el aumento de canales de distribución, hubo un momento en que el hotelero perdió el control sobre su precio, era usual que llegaran clientes al hotel que habían encontrado una tarifa inferior a través de un intermediario, que directamente con el hotel. Para dar solución a esta problemática y fortalecer la venta directa y aumentar la transparencia de las tarifas, los hoteleros comenzaron a publicar en sus sitios oficiales (#[em #[b Best Available Rate]],  por su sigla en inglés). La mejor tarifa disponible garantiza que no se va a encontrar una tarifa inferior en ningún canal de distribución. 
                p.mb-4 El manejo de este tipo de tarifas no tiene que ver sólo con el precio, sino con el valor de la tarifa. 
              .col-lg-4.col-md-7.col-10
                img.img-a.img-t(src='@/assets/curso/tema4/8.png')
            .row.justify-content-center.align-items-center
              .col-lg-7
                h4.mb-4 Tarifa grupo o evento
                p.mb-4 Estas tarifas se crean con base en la disponibilidad y las condiciones de mercado del momento en que se pide la cotización. Y aplican para grupos o eventos especiales, por ejemplo, ferias, conciertos, congresos. 
              .col-lg-4.col-md-7.col-10
                img.img-a.img-t(src='@/assets/curso/tema4/9.png')
            .row.justify-content-center.align-items-center
              .col-lg-7
                h4.mb-4 Tarifa larga estadía
                p.mb-4 Aplica para un número mínimo de noches al mes, incluso con alguna frecuencia hay personas que deciden vivir en los hoteles, por las ventajas que ello les proporciona y se catalogan como huéspedes permanentes. 
              .col-lg-4.col-md-7.col-10
                img.img-a.img-t(src='@/assets/curso/tema4/10.png')
            .row.justify-content-center.align-items-center
              .col-lg-7
                h4.mb-4 Paquetes o planes hoteleros
                p.mb-4 Los paquetes son una forma de comercializar productos hoteleros, para brindar a los clientes más servicios, por precios más atractivos. Se puede empaquetar con productos propios o de terceros. Ejemplo: plan noche de bodas, paquete con alimentación y #[em tours] incluidos. 
              .col-lg-4.col-md-7.col-10
                img.img-a.img-t(src='@/assets/curso/tema4/11.png')

    p.mb-4 A continuación, se presenta un ejemplo de la estructura de tarifas públicas de un hotel, con todos los valores expresados en pesos colombianos (COP). La tabla ilustra cómo los precios de las habitaciones (Estándar, Deluxe, Junior suite y Suite) varían en función de dos factores clave: el tipo de habitación y la temporada, la cual está definida por los niveles de ocupación del hotel. 

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-10
        .titulo-sexto.color-secundario.mb-0
          h5 Tabla 2. 
          | Ejemplo de tarifas por temporada y tipo de habitación 

    .row.justify-content-center.mb-2(data-aos="zoom-in-left")
      .col-lg-10
        .tabla-a.tabla-mod1.mb-3
          table(alt='Tabla con tarifas hoteleras según tipo de habitación y nivel de ocupación por temporada: rack rate, alta, media y baja.')
            tbody
              tr.bt5
                td.text-center(data-aos="fade-left") Temporada
                td.text-center(data-aos="fade-left") Nivel / ocupación
                td.text-center(data-aos="fade-left") Estándar
                td.text-center(data-aos="fade-left") #[em Deluxe]
                td.text-center(data-aos="fade-left") #[em Junior suite]
                td.text-center(data-aos="fade-left") #[em Suite]
              tr
                td.text-center(data-aos="fade-left") #[em Rack rate]
                td.text-center(data-aos="fade-left") 100 % 
                td.text-center(data-aos="fade-left") $299.000 
                td.text-center(data-aos="fade-left") $329.000 
                td.text-center(data-aos="fade-left") $349.000 
                td.text-center(data-aos="fade-left") $399.000 
              tr
                td.text-center(data-aos="fade-left") #[em High season] 
                td.text-center(data-aos="fade-left") A (71 % - 99 %) 
                td.text-center(data-aos="fade-left") $279.000 
                td.text-center(data-aos="fade-left") $309.000 
                td.text-center(data-aos="fade-left") $329.000 
                td.text-center(data-aos="fade-left") $379.000 
              tr
                td.text-center(data-aos="fade-left") #[em Mid season] 
                td.text-center(data-aos="fade-left") B (31 % - 70 %) 
                td.text-center(data-aos="fade-left") $259.000 
                td.text-center(data-aos="fade-left") $289.000 
                td.text-center(data-aos="fade-left") $309.000 
                td.text-center(data-aos="fade-left") $359.000 
              tr
                td.text-center(data-aos="fade-left") #[em Low season]
                td.text-center(data-aos="fade-left") C (0 % - 30 %)
                td.text-center(data-aos="fade-left") $239.000
                td.text-center(data-aos="fade-left") $269.000
                td.text-center(data-aos="fade-left") $289.000
                td.text-center(data-aos="fade-left") $339.000
        figcaption.mb-4 Fuente: elaborada por el experto SENA
        
        p.mb-0 #[b Precio base habitación Estándar:] $299.000 COP 
        p.mb-0 #[b Costo por persona adicional:] $30.000 COP 
        p.mb-4 #[b Nota:] todas las tarifas están calculadas para una ocupación base de 2 personas (2 Pax).
        
    p.mb-4 Además de las tarifas de temporada que se ofrecen al público general, la estructura de precios de un hotel suele incluir tarifas negociadas para segmentos específicos del mercado. A continuación, se detallan ejemplos de estas tarifas especiales, como las corporativas y las de larga estadía (#[em long stay]), así como la base de cálculo utilizada para aplicar promociones y descuentos. 
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-10
        .titulo-sexto.color-secundario.mb-0
          h5 Tabla 3. 
          | Ejemplo de tarifas corporativas y planes especiales 
        
    .row.justify-content-center.mb-4(data-aos="zoom-in-left")
      .col-lg-10
        .tabla-a.tabla-mod1.mb-3
          table(alt='Tabla con tarifas corporativas y plan especial Long Stay, diferenciadas por nivel y tipo de habitación.')
            tbody
              tr.bt5
                td.text-center(data-aos="fade-left") Plan
                td.text-center(data-aos="fade-left") Nivel 
                td.text-center(data-aos="fade-left") Estándar
                td.text-center(data-aos="fade-left") #[em Deluxe]
                td.text-center(data-aos="fade-left") #[em Junior suite]
                td.text-center(data-aos="fade-left") #[em Suite]
              tr
                td.text-center(data-aos="fade-left") Corporativo 
                td.text-center(data-aos="fade-left") A
                td.text-center(data-aos="fade-left") $169.000 
                td.text-center(data-aos="fade-left") $199.000 
                td.text-center(data-aos="fade-left") $229.000 
                td.text-center(data-aos="fade-left") $259.000 
              tr
                td.text-center(data-aos="fade-left") Corporativo #[em Long Stay]
                td.text-center(data-aos="fade-left") B
                td.text-center(data-aos="fade-left") $149.000
                td.text-center(data-aos="fade-left") $179.000
                td.text-center(data-aos="fade-left") $209.000
                td.text-center(data-aos="fade-left") $239.000

        figcaption.mb-0 Fuente: elaborada por el experto SENA
    
    p.mb-4 Para el cálculo de promociones y otras tarifas con descuento, se establece un valor de referencia conocido como BAR (#[em Best Available Rate] o mejor tarifa disponible). En este ejemplo, la tarifa base para calcular los descuentos corresponde a los precios del Nivel B, que son los siguientes: 

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-10
        .titulo-sexto.color-secundario.mb-0
          h5 Tabla 4. 
          | Ejemplo de base para promociones y tarifas descontadas 
    .row.justify-content-center.mb-4(data-aos="zoom-in-left")
      .col-lg-10
        .tabla-a.tabla-mod1.mb-3
          table(alt='Tabla con valores base de tarifa BAR nivel B para calcular descuentos en habitaciones Estándar, Deluxe, Junior Suite y Suite.')
            tbody
              tr.bt5
                td.text-center(data-aos="fade-left") Detalles
                td.text-center(data-aos="fade-left") Nivel 
                td.text-center(data-aos="fade-left") Estándar
                td.text-center(data-aos="fade-left") Deluxe
                td.text-center(data-aos="fade-left") Junior suite
                td.text-center(data-aos="fade-left") Suite
              tr
                td.text-center(data-aos="fade-left") Valor base de BAR para calcular los descuentos.
                td.text-center(data-aos="fade-left") B
                td.text-center(data-aos="fade-left") $259.000 
                td.text-center(data-aos="fade-left") $289.000 
                td.text-center(data-aos="fade-left") $309.000 
                td.text-center(data-aos="fade-left") $359.000 
              
        figcaption.mb-0 Fuente: elaborada por el experto SENA
    p.mb-4 Una vez establecida la tarifa base para descuentos (BAR), se pueden estructurar diferentes ofertas especiales para incentivar la reserva. La siguiente tabla ejemplifica cómo se aplican estos porcentajes para crear tarifas promocionales, detallando el precio final para el cliente según el tipo de habitación y la condición de la oferta.

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-10
        .titulo-sexto.color-secundario.mb-0
          h5 Tabla 5. 
          | Ejemplo de promociones

        
    .row.justify-content-center.mb-0(data-aos="zoom-in-left")
      .col-lg-10
        .tabla-a.tabla-mod1.mb-3
          table(alt='Tabla con ejemplos de promociones y descuentos aplicados a tarifas de habitaciones según tipo y política de reserva.')
            tbody
              tr.bt5
                td.text-center(data-aos="fade-left") Detalle de la promoción 
                td.text-center(data-aos="fade-left") Descuento 
                td.text-center(data-aos="fade-left") Estándar
                td.text-center(data-aos="fade-left") Deluxe
                td.text-center(data-aos="fade-left") Junior suite
                td.text-center(data-aos="fade-left") Suite
              tr
                td.text-center(data-aos="fade-left") No reembolsable (0 a 29 días) 
                td.text-center(data-aos="fade-left") 35 %
                td.text-center(data-aos="fade-left") $168.350 
                td.text-center(data-aos="fade-left") $187.850 
                td.text-center(data-aos="fade-left") $200.850 
                td.text-center(data-aos="fade-left") $233.350 
              tr
                td.text-center(data-aos="fade-left") Compra anticipada (+30 días) 
                td.text-center(data-aos="fade-left") 25 %
                td.text-center(data-aos="fade-left") $194.250 
                td.text-center(data-aos="fade-left") $216.750 
                td.text-center(data-aos="fade-left") $231.750 
                td.text-center(data-aos="fade-left") $269.250 
              tr
                td.text-center(data-aos="fade-left") Larga estadía / #[em Long stay] (4+ noches)
                td.text-center(data-aos="fade-left") 40 % 
                td.text-center(data-aos="fade-left") $155.400 
                td.text-center(data-aos="fade-left") $173.400
                td.text-center(data-aos="fade-left") $185.400
                td.text-center(data-aos="fade-left") $215.400
        figcaption.mb-0 Fuente: elaborada por el experto SENA
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
