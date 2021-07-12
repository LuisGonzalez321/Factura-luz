const dataListText = [
    {
      id: "six six-1",
      info: "1) Empresa a la que pertenece",
      img: './img/factura-1.png'
    },
    {
      id: "six six-2",
      info: "Datos generales del cliente: Nombre y dirección",
      img: './img/factura-2.png'
    },
    {
      id: "six six-3",
      info: "Fecha de entrega de su factura",
      img: './img/factura-3.png'
    },
    {
        id: "six six-4",
        info: "Datos relevantes en la gestión comercial",
        img: './img/factura-4.png'
    },
    {
        id: "six six-5",
        info: "C.A.C (Centro de atención al cliente \n que gestiona el suministro",
        img: './img/factura-5.png'
    },
    {
        id: "six six-6",
        info: "Detalles de conceptos facturables acorde el pliego tarifario vigente",
        img: './img/factura-5.1.png'
    },
    {
        id: "six six-7",
        info: "Cálculos conceptos de energía",
        img: './img/factura-6.png'
    },
    {
        id: "six six-8",
        info: "Espacio para detallar los consumos e importes de energía y potencias facturados por rangos de consumo",
        img: './img/factura-7.png'
    },
    {
        id: "six six-9",
        info: "Detalle de importes adeudados incluyendo el recibo actual",
        img: './img/factura-8.png'
    },
    {
        id: "six six-10",
        info: "Importe facturado en el período actual",
        img: './img/factura-9.png'
    },
]

const loadData = () => {

    $('.button').click(function(){
        var buttonId = $(this).attr('id');
        $('#modal-container').removeAttr('class').addClass(buttonId);
        $('body').addClass('modal-active');

        var element = dataListText.filter(item=>(item.id === buttonId)? item.info.toString():null);
        $('.text-facture').text(element[0].info);

        $('.modal').append(`
                            <img 
                                class="img-element-facture" 
                                src=${element[0].img}
                            />`)
    })

    $('#modal-container').click(function(){
        $(this).addClass('out');
        $('body').removeClass('modal-active');

        $('.img-element-facture').remove()
    });
};
