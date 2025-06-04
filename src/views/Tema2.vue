<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Reservas 

    p.mb-4(data-aos="fade-left") La empresa hotelera capta sus ingresos en los productos y servicios que genera para vender, la venta de habitaciones es la razón de ser del hotel, así como también el área que mayores ganancias genera. 
    p.mb-5(data-aos="fade-right") Una reservación es un acuerdo, verbal o escrito, que se establece entre el hotel y una persona natural o jurídica, donde el primero se compromete a realizar una prestación de alojamiento y demás servicios en una fecha preestablecida y por un periodo determinado; y el segundo, a recibir la prestación del servicio en la fecha reservada y a realizar el pago del servicio, con consecuencia de penalización por cancelación. 


    .titulo.mb-5.ps-5.pe-2(data-aos="fade-right")
      img(src='@/assets/curso/tema2/sub.png', alt='Imagen decorativa')
      h3.mb-0.mx-4 Objetivo de la gestión de reservas 
    
    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-0(data-aos="fade-right") 
      .row.m-0.align-items-center.justify-content-center
        .col-lg-8.com.mb-0.mb-lg-0
          .bloque-texto-a__texto.p-lg-5.p-md-4.p-3
            p.mb-4 La gestión de reservas tiene como objetivo llevar un control permanente y actualizado de la ocupación del establecimiento hotelero, teniendo en cuenta las entradas del día, habitaciones ocupadas, las salidas, cancelaciones de reservas, clientes #[em no show], entre otros.  
            p.mb-0 Requiere de acciones que permitan promover la venta de habitaciones y conocer el comportamiento de la ocupación en el transcurso de un año, mediante la elaboración de gráficas de ocupación mensual, con el fin de implementar las estrategias de ventas en determinados periodos. Para lo cual, es necesario el manejo de un sistema de reservaciones y el conocimiento del servicio, la disponibilidad, tarifas, paquetes y promociones; también depende de la habilidad del agente de reservas, para lograr atraer al cliente y efectuar la venta. 
        .col-lg-4.col-md-6.mb-0
          img.enc(src='@/assets/curso/tema2/1.png', alt='')


    separador
    #t_2_1.titulo-segundo.mb-lg-5.mb-3
      h2 2.1 Tipos de reservas

    
    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-3.col-md-5.col-8.mb-4
        img.d-none.d-lg-block(src='@/assets/curso/tema2/3.png', alt='')
      .col-lg-9.mb-0
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-0(data-aos="fade-right")
          .row.justify-content-center.align-items-center.col-xl-11.m-auto(titulo="Confirmada")
            .col-lg-12.mb-4
              p.mb-0 Es también conocida como no garantizada ya que no hay un pago de por medio. Cuando una reservación se confirma, los huéspedes deben proporcionar ciertos datos y estos se deben integrar al sistema de reservas del hotel.
          .row.justify-content-center.align-items-center.col-xl-11.m-auto(titulo="Garantizada")
            .col-lg-12.mb-4
              p.mb-0 En este tipo de reservas hay pagos de por medio, son reservaciones contactadas a través de una agencia de viajes, líneas aéreas, asesorías de grupos o directamente por el cliente, ya que están garantizadas por medio de un cupón u orden de cambio, o la transacción hecha por el cliente a la cuenta directa del hotel. 
          .row.justify-content-center.align-items-center.col-xl-11.m-auto(titulo="Provisionales")
            .col-lg-12.mb-4
              p.mb-0 Tiene una fecha y hora límite de viaje. En su mayoría es para las agencias de viajes. Se les marca una hora límite de llegada teniendo el hotel la libertad de acortarlo o alargarlo según las necesidades. Estas reservas no tienen garantía o depósito. 
          .row.justify-content-center.align-items-center.col-xl-11.m-auto(titulo="En lista de espera")
            .col-lg-12.mb-4
              p.mb-0 Este tipo de reservas se da cuando hay muchas reservaciones dentro de un hotel. Por lo cual es la suma de reservaciones provisionales y confirmadas. 
          .row.justify-content-center.align-items-center.col-xl-11.m-auto(titulo="Denegadas")
            .col-lg-12.mb-4
              p.mb-0 Es cuando no se puede aceptar una reserva, se le dan las disculpas al PAX (término utilizado en turismo para referirse a un pasajero o a las personas incluidas en una reserva) y se le recomienda un hotel que tenga las condiciones que piden. 
          .row.justify-content-center.align-items-center.col-xl-11.m-auto(titulo="Cancelada")
            .col-lg-12.mb-4
              p.mb-0 Por el cliente o por el hotel (este último debe dar una solución inmediata).  


    separador
    #t_2_2.titulo-segundo.mb-lg-5.mb-3
      h2 2.2 Mecanismo de reservas
    
    p.mb-4(data-aos="fade-left") El mecanismo de reservas en un establecimiento de alojamiento se lleva de manera manual o sistematizada. 

    .tit.p-2.mb-4(data-aos="fade-left")
      h3.mb-0.ps-4.pe-4 Reserva manual

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-lg-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/4.png')})`}"
      )
      .bloque-texto-g__texto.p-lg-5.p-4.my-lg-5.my-2
        p.mb-0 Los hoteles que no cuentan con #[em software] hoteleros, las reservas las realizan por medio de Excel o en una planilla. Las planillas que se manejan de manera manual se pueden trabajar con resaltadores de colores indicando la ocupación. También se puede trabajar en formato Excel. 

    .bg1.p-4.mb-lg-5.mb-4(data-aos="fade-left")
      .row.justify-content-center.align-items-center
        .col-lg-4
          .row.justify-content-center.align-items-center
            .col-3
              img.mb-0.img-a.img-t(src='@/assets/curso/tema1/2.svg' alt="")
            .col-9
              h5.mb-0 Ejemplo de formato para reservas manuales 
          
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.color-secundario.mb-2
          h5 Figura 1. 
          | Ejemplo de formato manual para el #[em planning] de habitaciones o #[em chart] 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        img.mb-2(src='@/assets/curso/tema2/6.svg', alt='El formato planning por número de habitaciones permite llevar un control visual y ordenado de la ocupación diaria de cada habitación durante el mes. Cada fila representa una habitación y cada columna un día del mes.')
        figcaption Fuente: http://yise1994.blogspot.com/2017/05/ano-del-buen-servicio-al-ciudadano.html.

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.color-secundario.mb-2
          h5 Figura 2. 
          | Ejemplo de formato manual de #[em planning] de habitaciones ocupadas y reservadas 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-11
        img.mb-2(src='@/assets/curso/tema2/7.svg', alt='El formato manual representa las habitaciones ocupadas con una marca o señal específica que indica que ya están siendo utilizadas, mientras que las habitaciones reservadas garantizadas se identifican con otra marca que señala que ya se ha recibido un pago o garantía. Si se registra una reserva que aún no ha sido garantizada, esta puede anotarse con lápiz, de modo que, si el cliente no confirma la reserva dentro del tiempo establecido, se pueda borrar y liberar la habitación para volver a ponerla a la venta en esa fecha.')
        figcaption Fuente: https://slideplayer.es/slide/1032953/ 

    .tit.p-2.mb-lg-5.mb-4(data-aos="fade-left")
      h3.mb-0.ps-4.pe-4 Reserva sistematizada

    .row.justify-content-center.align-items-center.mb-lg-5.mb-4(data-aos="fade-right")
      .col-lg-5
        img.mb-0.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema2/8.png' alt="")
      .col-lg-7
        p.mb-3 Los sistemas hoteleros, que forman parte de un #[em software] creado a medida según las necesidades del hotel, de acuerdo con los tipos de servicios que ofrecen.
        .row.justify-content-center.align-items-center.mb-lg-3.mb-0
          .col-lg-2
            img.mb-0.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema2/9.svg' alt="")
          .col-lg-10
            p.mb-0 En estos #[em software], tanto uno como otro, se encuentra la pantalla de reservas, pantalla de caja, de restaurante, de #[em stock] de insumos, de administración. A la pantalla de reservas tendrán acceso las personas encargadas del sector, recepción/conserjería, caja, administración y la gerencia.
        img.mb-0.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema2/10.svg' alt="")
        
    .bg1.p-4.mb-4(data-aos="fade-left")
      .row.justify-content-center.align-items-center
        .col-lg-1
          img.mb-0.d-none.d-lg-block.img-t(src='@/assets/curso/tema2/11.svg' alt="")
        .col-lg-11
          p.mb-4 Se trabajan con colores para que con una vista se pueda ver el estado de ocupación del hotel.
          h5.mb-0.pri Por ejemplo, azul para las reservas tentativas, rojos para las confirmadas, o verde para las que se desocupan. Se realiza de acuerdo el criterio y la comodidad quien las usa. 

    p.mb-4 Como ejemplo los invito a revisar el siguiente video: 

    .tarjeta.color-acento-contenido.p-4.mb-0(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema2/12.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-2 Admintour - ¿Cómo se usa el #[em plannig] de habitaciones?
              p.mb-0 Lo invitamos a visitar el siguiente video, donde podrá conocer el funcionamiento del #[em planning] de habitaciones 
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=uVBlwXI9RGQ" target="_blank")
                span Ir al sitio 
                i.fas.fa-file-download


    separador
    #t_2_3.titulo-segundo.mb-lg-5.mb-3
      h2 2.3 Norma Técnica Sectorial NTSH – 003. Establecimientos de alojamiento y hospedaje. Norma de competencia laboral. Prestación de servicio de recepción y reservas conforme a manuales existentes
    
    p.mb-4(data-aos="fade-left") Esta norma define que para el registro de reservas se deben tener en cuenta los siguientes aspectos tales como:
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-7
        .bg4.p-3
          .bgw.p-1.mb-2
            ul.lista-ul.mb-0
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 La solicitud del cliente debe ser atendida de conformidad con el protocolo de servicios. 
          .bgw.p-1.mb-2
            ul.lista-ul.mb-0
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0.ft La disponibilidad de habitaciones debe ser verificada de acuerdo con la solicitud del cliente.
          .bgw.p-1.mb-2
            ul.lista-ul.mb-0
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Las garantías para la reserva se solicitan de acuerdo con el manual de procedimientos. 
          .bgw.p-1.mb-2
            ul.lista-ul.mb-0
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Las habitaciones se pre-asignan o bloquean conforme a los procedimientos.
          .bgw.p-1.mb-2
            ul.lista-ul.mb-0
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Las reservas se confirman siguiendo procedimientos establecidos. 
          .bgw.p-1.mb-2
            ul.lista-ul.mb-0
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Los reportes se elaboran conforme al manual de procedimientos. 
          .bgw.p-1.mb-2
            ul.lista-ul.mb-0
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 La información del área se actualiza de acuerdo con los requisitos del establecimiento. 
          .bgw.p-1.mb-0
            ul.lista-ul.mb-0
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Las tarifas se aplican conforme a políticas establecidas.  
      .col-lg-5
        img.d-none.d-lg-block(src="@/assets/curso/tema2/13.svg")
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-4
        img.d-none.d-lg-block(src="@/assets/curso/tema2/14.png")
      .col-lg-8
        .bg1.p-lg-5.p-4
          h5.mb-4.my-2 Se invita a revisar la norma NTSH-003.Establecimientos de alojamiento y hospedaje. Norma de competencia laboral. Prestación de servicios de recepción y reservas. En el numeral 4.3. Requisitos para reservar habitaciones conforme al manual de procedimientos.
          h5.mb-4.pri Norma Técnica Sectorial Colombiana NTSH 003. Establecimientos de alojamiento y hospedaje. Norma de competencia laboral. Prestación de servicio de recepción y reservas conforme a manuales existentes, 2003. 
          .bg5.p-2.mb-2
            h4.mb-0 Tomado de la pág. Ministerio de comercio, industria y turismo. 

    .tarjeta.color-acento-contenido.p-4.mb-0(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema2/12.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-2 Norma Técnica Colombiana NTSH 003 de 2003.
              p.mb-0 Lo invitamos a visitar el siguiente PDF, donde aprenderá los requisitos para ofrecer productos y servicios, dando respuesta al cliente, realizar #[em check-in] y #[em check-out] de huéspedes y reservar habitaciones de acuerdo con procedimientos definidos en los establecimientos de alojamiento y hospedaje.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.mincit.gov.co/getattachment/minturismo/calidad-y-desarrollo-sostenible/calidad-turistica/normas-tecnicas-sectoriales/nts-alojamiento-y-hospedaje-1/norma-tecnica-sectorial-colombiana-ntsh-003-establ/norma-tecnica-sectorial-colombiana-ntsh-003.pdf.aspx" target="_blank")
                span Descargar
                i.fas.fa-file-download


    separador
    #t_2_4.titulo-segundo.mb-lg-5.mb-3
      h2 2.4 Procesos de reservaciones   

    p.mb-4(data-aos="fade-left") Dentro de un proceso de reservación tener en cuenta lo siguiente:


    .row.fondo2.p-4.p-lg-5.p-md-4.mb-lg-5.mb-4(data-aos="fade-left")
      .col-lg-12

        .row.mb-0
          .col-lg-12.mb-0(data-aos="fade-right")
            TabsA.color-acento-botones
              .tarjeta.colorac.p-4(titulo="Depósitos")
                .row.justify-content-center
                  .col-lg-8
                    h4.mb-4 Depósitos
                    p.mb-4 Son las reservaciones en las cuáles el huésped garantiza su llegada mediante el pago de una cantidad de dinero que generalmente es el precio de la habitación que él desea; sin embargo, si por alguna circunstancia el huésped no llega #[em (no show)], se abre una cuenta aplicándole el depósito.
                    h4.pri.mb-0 Las habitaciones que sean pagadas por una agencia de viajes (cupón de agencias), también entran en el grupo de depósitos, al igual que las reservaciones que están garantizadas por medio de una carta de una empresa que se hace responsable de la cuenta del huésped (Báez, 2009).
                  .col-lg-4
                    img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema2/15.png', alt='')
              .tarjeta.colorac.p-4(titulo="Límites")
                .row.justify-content-center
                  .col-lg-8
                    h4.mb-4.my-4 Límites
                    p.mb-0 Son aquellas que no están garantizadas de ninguna manera. En el caso de estas reservaciones el hotel no tiene la obligación de guardarlas después de las 18:00 h, en caso de #[em no show] del cliente, las habitaciones se venderán a otra persona (Báez, 2009). 
                  .col-lg-4
                    img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema2/16.png', alt='')
              .tarjeta.colorac.p-4(titulo="Especiales")
                .row.justify-content-center
                  .col-lg-8
                    h4.mb-4.my-4 Especiales
                    p.mb-0 Son aquellas en las cuales los huéspedes tienen un pase de cortesías o son ejecutivos de la compañía hotelera, entre otras. Estas reservaciones se deben guardar y solo deben cancelarse mediante la autorización del gerente (Báez, 2009). 
                  .col-lg-4
                    img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema2/17.png', alt='')
              .tarjeta.colorac.p-4(titulo="Huéspedes VIP <em>(Very Important Person)</em>")
                .row.justify-content-center
                  .col-lg-8
                    h4.mb-4.my-4 Huéspedes VIP #[em (Very Important Person)]
                    p.mb-0 Aunque todas las personas son importantes a este tipo de personas se les ofrece un tratamiento especial, ya que los huéspedes VIP por su influencia en el medio donde se desarrollan pueden ayudar al hotel a incrementar sus ventas.
                  .col-lg-4
                    img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema2/18.png', alt='')
                  

    p.mb-4(data-aos="fade-left") Algunas de estas personas son: 

    .row.fondo3.p-4.p-lg-4.p-md-3.mb-5(data-aos="fade-left")
      .col-lg-12
        
        .row.justify-content-center.align-items-center.mb-0.my-4
          .col-lg-3.col-md-6
            .tarjeta-avatar-b.mb-4
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/19.svg' alt='')          
              .tarjeta.color-primario
                .p-3
                  h5.mb-0.text-white.my-1.lp Agentes de viajes.
          .col-lg-3.col-md-6
            .tarjeta-avatar-b.mb-4
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/20.svg' alt='')          
              .tarjeta.color-primario
                .p-3
                  h5.mb-0.text-white.lp Dueños de medios de difusión.
          .col-lg-3.col-md-6
            .tarjeta-avatar-b.mb-4
              .tarjeta-avatar-b__img.wid
                img(src='@/assets/curso/tema2/21.svg' alt='')          
              .tarjeta.color-primario
                .p-2
                  h5.mb-0.text-white.mx-1.my-1.lp Organizadores de convenciones futuras.
          .col-lg-3.col-md-6
            .tarjeta-avatar-b.mb-4
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/22.svg' alt='')          
              .tarjeta.color-primario
                .p-3
                  h5.mb-0.text-white.lp Dueños de líneas aéreas.
        
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-3.col-md-6
            .tarjeta-avatar-b.mb-lg-2.mb-4
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/23.svg' alt='')          
              .tarjeta.color-primario
                .p-2
                  h5.mb-0.text-white.mx-1.lp Funcionarios gubernamentales importantes.
          .col-lg-3.col-md-6
            .tarjeta-avatar-b.mb-lg-2.mb-4
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/24.svg' alt='')          
              .tarjeta.color-primario
                .p-3
                  h5.mb-0.text-white.my-1.lp Deportistas.
          .col-lg-3.col-md-6
            .tarjeta-avatar-b.mb-lg-2.mb-4
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/25.svg' alt='')          
              .tarjeta.color-primario
                .p-3
                  h5.mb-0.text-white.my-1.lp Artistas.


    .row.justify-content-center.align-items-center.mb-lg-5.mb-4(data-aos="fade-left")
      .col-lg-9
        .bg6.p-4.mb-lg-0.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-2
              img.d-none.d-lg-block(src='@/assets/curso/tema2/26.svg' alt='')     
            .col-lg-10
              .bg7.p-2.mb-4.my-2
                h3.mb-0.ps-4.pe-4 Manejo de grupos
              p.mb-3 Para lograr el buen manejo de los grupos que llegan al hotel, se debe considerar los siguientes aspectos como: contratación, preparativos, llegada del grupo, servicios y salida del grupo. 
      .col-lg-3.col-md-8.col-10
        img(src='@/assets/curso/tema2/27.png' alt='')     
    
    p.mb-4(data-aos="fade-left") El departamento de ventas o reservaciones; enviará al jefe de recepción con anticipación la notificación del grupo que está por llegar, debe incluir el listado de personas que se alojarán, además de la siguiente información:
    
    
    .row.fondo4.p-4.p-lg-4.p-md-3.mb-5(data-aos="fade-right")
      .col-lg-12
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-8
            .row.justify-content-center.align-items.mb-3
              .col-lg-4.col-md-6.o1
                ul.lista-ul.lista-ul--separador.mb-0
                  li.d-flex.mb-3
                    i.fas.fa-circle-check
                    p.mb-0 Nombre del grupo.
                  li.d-flex.mb-3
                    i.fas.fa-circle-check
                    p.mb-0 Fecha de llegada. 
                  li.d-flex.mb-3
                    i.fas.fa-circle-check
                    p.mb-0 Hora de llegada.
                  li.d-flex.mb-3
                    i.fas.fa-circle-check
                    p.mb-0 Fecha de salida.
                  li.d-flex.mb-3
                    i.fas.fa-circle-check
                    p.mb-md-4.mb-lg-0.mb-4 Hora de salida.
              .col-lg-4.o3
                img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema2/28.svg' alt='')     
              .col-lg-4.col-md-6.o2
                ul.lista-ul.lista-ul--separador.mb-0
                  li.d-flex.mb-3
                    i.fas.fa-circle-check
                    p.mb-0 Eventos en el hotel.
                  li.d-flex.mb-3
                    i.fas.fa-circle-check
                    p.mb-0 Manejo de cuentas. 
                  li.d-flex.mb-3
                    i.fas.fa-circle-check
                    p.mb-0 Pago de las cuentas.
                  li.d-flex.mb-3
                    i.fas.fa-circle-check
                    p.mb-md-4.mb-lg-0.mb-4 Indicadores especiales. 
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-5
                ul.lista-ul.lista-ul--separador.mb-0.mx-lg-4
                  li.d-flex.mb-3
                    i.fas.fa-circle-check
                    p.mb-0 Número de habitaciones reservadas.
                  li.d-flex.mb-3
                    i.fas.fa-circle-check
                    p.mb-0 Depósito entregado. 
                  li.d-flex.mb-3
                    i.fas.fa-circle-check
                    p.mb-0 Persona responsable o conductor.
                  li.d-flex.mb-3
                    i.fas.fa-circle-check
                    p.mb-0 VIPs en el grupo.
                  li.d-flex.mb-3
                    i.fas.fa-circle-check
                    p.mb-0 Programación en toda la estancia.
    
    
    .bloque-texto-g.color-sec.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/29.png')})`}"
      )
      .bloque-texto-g__texto.p-lg-5.p-4.my-lg-5.my-2
        p.mb-4 Con esta información se procederá hacer el pre-registro; así el huésped al llegar solo registrará su firma o algún otro dato faltante. En el manejo de cuentas es importante solicitar un respaldo para cargos extras y/o en caso de tener una cuenta maestra, conocer muy bien la firma de la persona autorizada.
        br
        br
        h5.mb-0.pri Para la salida del grupo se deben revisar los siguientes aspectos como: pago de cuentas, entrega de llaves, revisión de habitaciones y reportar alguna novedad en caso de presentarse (Báez, 2009).  
    
    .bg7.p-2.mb-4
      h3.mb-0.ps-4.pe-4 #[em No show]

    p.mb-5 El reporte de huéspedes #[em no show], es elaborado desde el área de recepción y consiste en la relación de las reservas confirmadas y garantizadas por el huésped, que no se presentó al hotel y no realizó el proceso de #[em check-in] en la fecha y hora establecida; este debe ser enviado al área de reservas o #[em revenue] para que se pueda actualizar el #[em planning]. 
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .bg8.p-lg-5.p-3
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-12
              .bg9.p-lg-5.p-3
                .row.justify-content-center.align-items-center.mb-0
                  .col-lg-12
                    p.mb-0 En la práctica, la garantía de una reserva hotelera se realiza mediante pago anticipado de la misma y cuando el huésped es un #[em no show] y no canceló con anticipación, el hotel aplica una tarifa #[em no show], que es definida según políticas del establecimiento, a la que se le realiza el proceso de #[em check-in] y #[em check-out.] 

    p.mb-4 De acuerdo con lo anterior, para un hotel un pasajero #[em no show], no genera pérdidas en la venta de habitaciones. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-4
        img.d-none.d-lg-block(src='@/assets/curso/tema2/31.png' alt='')  
      .col-lg-8
        .bg10.p-4.mb-4
          .row.justify-content-center.align-items-center.my-2
            .col-lg-2
              img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema2/26.svg' alt='')  
            .col-lg-10
              p.mb-1 Una de las responsabilidades del área de reservas es el control de la disponibilidad de habitaciones, por ello, la elaboración de #[em planning] o los diferentes reportes, se convierte en una herramienta esencial para dar cumplimiento a la previsión de ocupación en determinadas fechas y evitar incurrir en sobreventas. 
        .bg10.p-4
          .row.justify-content-center.align-items-center.my-2
            .col-lg-2
              img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema2/26.svg' alt='')  
            .col-lg-10
              p.mb-1 Estos reportes muestran el estado real de las reservaciones, mediante la previsión de llegadas individuales y particulares, emisión del #[em rooming list] para llegadas de grupos, información del #[em planning] de reservas garantizadas y confirmadas, tratamiento de las modificaciones y cancelaciones, tratamiento de pasajeros #[em no show,] información de pasajeros en lista de espera y manejo de #[em overbooking] o sobreventa. 

    .bg7.p-2.mb-4(data-aos="fade-left")
      h3.mb-0.ps-3.pe-3.ps-lg-4.pe-lg-4 Asignación de habitaciones

    h5.mb-4(data-aos="fade-right") Una buena asignación al cliente se ahorra tiempo y trabajo, ya que se evitarán cambios de habitaciones y el cliente se sentirá más satisfecho (Báez, 2009). 

    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-8
        .bg6.p-3.mb-4
          .row.justify-content-center.align-items-center
            .col
              img.img-t.d-none.d-lg-block(src='@/assets/curso/tema2/33.svg' alt='')  
            .col-lg-11
              p.mb-1 Algunas de las siguientes normas son recomendadas al asignar habitaciones a los huéspedes:
        ul.lista-ul.lista-ul--separador.mb-0
          li.d-flex.mb-2
            i.fas.fa-circle-check
            p.mb-0 Preguntar al huésped el tipo de habitación que desea. 
          li.d-flex.mb-2
            i.fas.fa-circle-check
            p.mb-0 Si el establecimiento cuenta con departamento de A&B (alimentos y bebidas), tratar de asignar la habitación cerca del restaurante, para que el huésped consuma con frecuencia.
          li.d-flex.mb-2
            i.fas.fa-circle-check
            p.mb-0 Procurar ir llenando el hotel por áreas, pisos o edificios.
          li.d-flex.mb-2
            i.fas.fa-circle-check
            p.mb-0 Tener cuidado al hacer una buena asignación en el caso de personas que presenten algún impedimento físico.
          li.d-flex.mb-2
            i.fas.fa-circle-check
            p.mb-0 Asignar las habitaciones de grupos en una misma área del hotel.  
      .col-lg-4
        img.d-none.d-lg-block(src='@/assets/curso/tema2/32.png' alt='')  
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.color-secundario.mb-2
          h5 Figura 3. 
          | Ejemplo de formato de reserva
    .row.justify-content-center.align-items-center
      .col-lg-9
        img.mb-4(src='@/assets/curso/tema2/34.svg', alt='El formulario recoge los datos necesarios para hacer una reserva en el hotel. Incluye: • Información del cliente (nombre, contacto, empresa). • Fechas de entrada y salida, número de noches. • Tipo y cantidad de habitaciones, número de personas, tarifa y si incluye desayuno. • Medio de pago y si la reserva es directa o por agencia. Ayuda a organizar y confirmar reservas de manera clara y eficiente.')
        figcaption.mb-lg-5.mb-4 Tomado de la publicación Gestión del sector alojamiento hotel. Calle, M., Lazo, A., & Granados, M. (2018). Gestión del sector alojamiento-Hotel. #[em Machala]: UTMACH.  
    
    .bg7.p-2.mb-4
      h3.mb-0.ps-4.pe-4 #[em Rooming list]
    
    p.mb-4(data-aos="fade-left") El #[em rooming list] es el listado de reservas que llegan en un día determinado. Pueden ser reservas de grupo o individuales y también se pueden llamar #[em “reservation list”], donde se relacionan los siguientes datos: 
    
    .row.fondo5.p-4.p-lg-5.p-md-3.mb-5(data-aos="fade-left")
      .col-lg-12
         
        .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
          .col-lg-4.col-md-5.col-7
            img.d-none.d-lg-block(src='@/assets/curso/tema2/35.png', alt='')
          .col-lg-8.mb-lg-0.mb-0
            SlyderF(columnas="col-lg-6 col-md-6 col-xl-6")
              .tarjeta.tarjeta--slyder.b2.p-3.p-lg-4.p-md-3
                .row.justify-content-center.mb-3
                  .col-9.my-4
                    img.img-a.img-t.mb-4(data-aos="zoom-in-left")(src='@/assets/curso/tema2/36.svg' alt='AvatarTop')
                p.mb-4.text-center(data-aos="fade-right") Número de habitaciones (individuales, dobles, triples) asignadas para el grupo. 
              .tarjeta.tarjeta--slyder.b2.p-3.p-lg-4.p-md-3
                .row.justify-content-center.mb-3
                  .col-9.my-4
                    img.img-a.img-t.mb-4(data-aos="zoom-in-left")(src='@/assets/curso/tema2/37.svg' alt='AvatarTop')
                p.mb-4.text-center(data-aos="fade-right") Fecha de llegada y salida.
              .tarjeta.tarjeta--slyder.b2.p-3.p-lg-4.p-md-3
                .row.justify-content-center.mb-3
                  .col-9.my-4
                    img.img-a.img-t.mb-4(data-aos="zoom-in-left")(src='@/assets/curso/tema2/38.svg' alt='AvatarTop')
                p.mb-4.text-center(data-aos="fade-right") Nombre de los huéspedes.
              .tarjeta.tarjeta--slyder.b2.p-3.p-lg-4.p-md-3
                .row.justify-content-center.mb-3
                  .col-9.my-4
                    img.img-a.img-t.mb-4(data-aos="zoom-in-left")(src='@/assets/curso/tema2/39.svg' alt='AvatarTop')
                p.mb-4.text-center(data-aos="fade-right") Número de personas que ocupan la habitación.
              .tarjeta.tarjeta--slyder.b2.p-3.p-lg-4.p-md-3
                .row.justify-content-center.mb-3
                  .col-9.my-4
                    img.img-a.img-t.mb-4(data-aos="zoom-in-left")(src='@/assets/curso/tema2/40.svg' alt='AvatarTop')
                p.mb-4.text-center(data-aos="fade-right") Plan de alimentación.
              .tarjeta.tarjeta--slyder.b2.p-3.p-lg-4.p-md-3
                .row.justify-content-center.mb-3
                  .col-9.my-4
                    img.img-a.img-t.mb-4(data-aos="zoom-in-left")(src='@/assets/curso/tema2/41.svg' alt='AvatarTop')
                p.mb-4.text-center(data-aos="fade-right") #[em Tour conductor] (responsable del grupo).  

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.color-secundario.mb-2
          h5 Tabla 1. 
          | Ejemplo de formato de #[em rooming list] manual 
    .row.justify-content-center.align-items-center
      .col-lg-9
        img.mb-5(src='@/assets/curso/tema2/42.svg', alt='Este ejemplo de tabla organiza la información de los huéspedes de un grupo. Incluye columnas para: • Número de habitación • Fechas de ingreso y salida • Nombre y apellido del huésped • Número de personas (pax) • Plan de alimentación • Observaciones • Nombre del guía o responsable del grupo • Confirmación de ingreso al hotel. Se usa para coordinar la llegada y estancia de grupos en el hotel.')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .bg8.p-lg-5.p-3
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-12
              .bg9.p-lg-5.p-3
                .row.justify-content-center.align-items-center.mb-0
                  .col-lg-12
                    p.mb-0 Generalmente este listado de huéspedes está sujeto a modificaciones de último momento, lo cual retrasa los procesos de check-in en el área de recepción. Los sistemas de gestión de propiedad o PMS, traen un módulo de manejo de grupos, que al ser alimentado con las reservas de un grupo automáticamente genera los listados del rooming list como se puede apreciar en el siguiente video.


    .bg11.p-lg-5.p-4.mb-5(data-aos="fade-left")
      .row.justify-content-center.align-items-center
        .col-lg-12
          p.mb-2 Se invita a ir al siguiente video como ejemplo de #[em rooming list] sistematizado
          h5.mb-4.pri Nombre: #[em rooming list] en reservas de grupo

          .tarjeta.color-acento-contenido.p-4.mb-0(data-aos="fade-right")
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/tema2/12.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h4.mb-2 #[em Ulyses Cloud | Rooming list] en reservas de grupo.
                    p.mb-0 Lo invitamos a visitar el siguiente video, donde aprenderás a construir la #[em rooming list] en tus reservas de grupo en el #[em software] hotelero #[em Ulyses Cloud.] 
                  .col-sm-auto
                    a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=wG3QboXEX4g" target="_blank")
                      span Ir al sitio
                      i.fas.fa-file-download

    .bg7.p-2.mb-5(data-aos="fade-left")
      h3.mb-0.ps-4.pe-4 Procedimientos técnicos  

    .bg12.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-5.col-md-8.col-12.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/tema2/43.png', alt='')
        .col-lg-7(data-aos="fade-left")
          .p-4
            .br1.mb-3
            p.mb-4(data-aos="fade-left") A través del departamento de reservaciones del hotel, un pasajero (PAX) o huésped puede hacer una solicitud de reserva de habitación, en una fecha específica y por un tiempo de estadía o permanencia determinado. Este proceso consiste en que el establecimiento hotelero asume el compromiso de separar una habitación para uno o varios huéspedes, lo cual requiere de un depósito o pago anticipado por parte del huésped como garantía de la reserva a favor del hotel (Ateortua, 2013).

    p.mb-4(data-aos="fade-left") Existen procedimientos técnicos para la realización de reservaciones: 

    .row.fondo6.p-4.p-lg-5.p-md-4.mb-0(data-aos="fade-down")
      .col-lg-12
        
        .tarjetaf.p-4.mb-2
          SlyderA(tipo="b").slider-a-custom(data-aos="zoom-in-left")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-7
                h4.mb-4 Confirmación
                p.mb-4 Para el procedimiento de confirmación de una reserva se tendrá en cuenta la secuencia o paso a paso para la realización:
                ol.lista-ol--cuadro
                  li.d-flex
                    .lista-ol--cuadro__vineta
                      span 1
                    p.mb-0 El agente de reservaciones recibe la solitud de reserva ya sea por solicitud directa, telefónica, correo electrónico, página web, mensajería y chatbots, redes sociales, etc.
                  li.d-flex 
                    .lista-ol--cuadro__vineta
                      span 2
                    p.mb-0 Procede a la toma de los datos para la reserva (fecha de llegada, número de personas, número de habitaciones que requiere).
                  li.d-flex 
                    .lista-ol--cuadro__vineta
                      span 3
                    p.mb-0 Verifica la disponibilidad de habitaciones. 
                  li.d-flex 
                    .lista-ol--cuadro__vineta
                      span 4
                    p.mb-0 Informa las tarifas disponibles, los tipos de habitaciones e impuestos. 
                  li.d-flex 
                    .lista-ol--cuadro__vineta
                      span 5
                    p.mb-0 Pregunta si el cliente desea hacer la reservación y garantizarla.
                  li.d-flex 
                    .lista-ol--cuadro__vineta
                      span 6
                    p.mb-0 Informa sobre políticas, cancelaciones y pasajeros #[em no show.] 
                  li.d-flex 
                    .lista-ol--cuadro__vineta
                      span 7
                    p.mb-0 El agente de reservas pide el nombre del huésped y el número de contacto. 
                  li.d-flex 
                    .lista-ol--cuadro__vineta
                      span 8
                    p.mb-0 Suministra la información al cliente de los detalles de la reserva y verifica que sea correcta.
                  li.d-flex 
                    .lista-ol--cuadro__vineta
                      span 9
                    p.mb-0 Al finalizar se indica el récord o número de reserva.  
                p.mb-0 Es importante recordar que, para poder garantizar la habitación reservada, es necesario la solicitud de un depósito o pago anticipado. Hoy en día estos procesos se encuentran automatizados, de manera que, por ejemplo, un cliente puede reservar en línea y el sistema hace las verificaciones y reservas de forma automática. Para que esto suceda, se requiere una configuración previa y una sincronización de los sistemas. De todas formas, aunque en el proceso automático no hay intervención humana, esta es requerida para verificar que todo esté acorde a las políticas del hotel y la verificación del funcionamiento adecuado de los sistemas.    
              .col-lg-5.col-md-7
                img.d-none.d-lg-block(alt="" src="@/assets/curso/tema2/44.png")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-7
                h4.mb-4 Modificación
                p.mb-4 A partir del momento en que es confirmada una reserva como se indica en los pasos anteriores, el cliente podrá modificarla, es decir, realizar cambios de fechas de llegada y salida, tipo de habitación, número de personas y tipo de tarifa. Para cualquier caso, es necesario dejar evidencias de los cambios solicitados y proceder a la confirmación de la reserva, esto con el fin de evitar que se presenten situaciones de sobreventa de habitaciones. El procedimiento para la modificación de reservas es igual al de una reserva nueva. 
              .col-lg-5.col-md-7
                img(alt="" src="@/assets/curso/tema2/45.png")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-7
                h4.mb-4 Cancelación
                p.mb-4 El procedimiento de la cancelación de reservas hoteleras es de mucho cuidado, dado que genera consecuencias porque puede afectar la relación del huésped con el hotel. 
                p.mb-4 Por lo general, una reserva es cancelada por el hotel cuando no se solicitó anticipo como garantía y cuando es el huésped quien cancela, el hotel podrá cobrar una penalidad, que equivale a un porcentaje de la tarifa según la hora de cancelación. 
                p.mb-4 El huésped puede cancelar la reservación entre 72 a 48 horas antes de la fecha de la llegada al hotel, sin ningún recargo.  
              .col-lg-5.col-md-7
                img(alt="" src="@/assets/curso/tema2/46.png")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-7
                h4.mb-4 Anulación
                p.mb-4 Por último, puede darse el caso de anulación de reservas, cuando un cliente realiza una devolución de cupos, por lo general, estas reservas que son liberadas, son tomadas por pasajeros en lista de espera. Este procedimiento de reservas anuladas casi nunca tiene recargo. 
                p.mb-4 Garantizar la reserva de habitación a un huésped, es uno de los factores más complejos tanto para el área de reservaciones, como para el departamento de recepción; cuando se confirma una reserva es necesario exigir el pago anticipado como garantía de la habitación; en ocasiones la modificación de una reserva por cambio de fecha de ingreso o salida puede tener una penalidad, dependiendo de la política del establecimiento. 
                p.mb-4 Para el caso de las cancelaciones, se realizan cargos siempre que sea una reserva garantizada, si el huésped solo confirmó sin ningún tipo de garantía y si se trata de un cliente corporativo o VIP, se realiza el cargo a la cuenta de la empresa, si se trata de un cliente particular se maneja como pasajero #[em no show]. 
              .col-lg-5.col-md-7
                img(alt="" src="@/assets/curso/tema2/47.png")


    separador
    #t_2_5.titulo-segundo.mb-lg-5.mb-3
      h2 2.5 Vocabulario técnico

    p.mb-4(data-aos="fade-left") Aunque al cliente y/o huésped se le debe hablar con un lenguaje claro y preciso y con un tono amable y cordial, en el servicio de la hostelería se emplea un vocabulario técnico enlazado con cada área del establecimiento, por ello, es importante que las personas que desarrollan esta actividad se familiaricen con los términos hoteleros y turísticos que se puedan presentar en el ejercicio de la actividad.  

    .bg11.p-lg-5.p-4.mb-0(data-aos="fade-right")
      .row.justify-content-center.align-items-center
        .col-lg-12
          p.mb-4 Por lo anterior se invita a ir al siguiente enlace donde encontrará un diccionario con vocabulario técnico hotelero y turístico relacionado.
          h5.mb-3.pri Tomado de la pag.
          h5.mb-4.pri Marrero, M. (2016). Glosario de términos hoteleros, turísticos y relacionados. #[em España: Copyright. Obtenido de https://www. hosteltur. com/files/web/templates/term/wikitur. pdf.]

          .tarjeta.color-acento-contenido.p-4.mb-0(data-aos="fade-right")
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/tema2/12.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h4.mb-2 Glosario de términos hoteleros, turísticos y relacionados.
                    p.mb-0 Lo invitamos a visitar el siguiente PDF, donde aprenderás términos acordes al sector hotelero y turístico.
                  .col-sm-auto
                    a.boton.color-acento-botones(href="https://www.hosteltur.com/files/web/templates/term/wikitur.pdf" target="_blank")
                      span Descargar
                      i.fas.fa-file-download



</template>

<script>
export default {
  name: 'Tema2',
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
