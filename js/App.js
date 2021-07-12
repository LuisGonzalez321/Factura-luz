const dataListText = [
    {
      id: "six six-1",
      info: "1) Empresa a la que pertenece",
      img: './img/factura-1.png'
    },
    {
      id: "six six-2",
      info: "2) Datos generales del cliente: Nombre y dirección",
      img: './img/factura-2.jpg'
    },
    {
      id: "six six-3",
      info: "3) Fecha de entrega de su factura",
      img: './img/factura-3.jpg'
    },
    {
        id: "six six-4",
        info: "4) Datos relevantes en la gestión comercial",
        img: './img/factura-4.jpg'
    },
    {
        id: "six six-5",
        info: "5) C.A.C (Centro de atención al cliente \n que gestiona el suministro",
        img: './img/factura-5.jpg'
    },
    {
        id: "six six-6",
        info: "6) Detalles de conceptos facturables acorde el pliego tarifario vigente",
        img: './img/factura-6.jpg'
    },
    {
        id: "six six-7",
        info: "7) Cálculos conceptos de energía",
        img: './img/factura-7.jpg'
    },
    {
        id: "six six-8",
        info: "8) Espacio para detallar los consumos e importes de energía y potencias facturados por rangos de consumo",
        img: './img/factura-8.jpg'
    },
    {
        id: "six six-9",
        info: "9) Detalle de importes adeudados incluyendo el recibo actual",
        img: './img/factura-9.jpg'
    },
    {
        id: "six six-10",
        info: "10) Importe facturado en el período actual",
        img: './img/factura-10.jpg'
    },
]

const loadData = () => {

    $('.button').click(function(){
        var buttonId = $(this).attr('id');
        $('#modal-container').removeAttr('class').addClass(buttonId);
        $('body').addClass('modal-active');

        var element = dataListText.filter(item=>(item.id === buttonId)? item.info.toString():null);
        $('.text-facture').text(element[0].info);

        $('.modal').append(`<img 
                                class="img-element-facture" 
                                src=${element[0].img}/>`)
    })

    $('#modal-container').click(function(){
        $(this).addClass('out');
        $('body').removeClass('modal-active');

        $('.img-element-facture').remove()
    });

    $('.btn-close').click(()=>{
        $(this).addClass('out');
        $('body').removeClass('modal-active');
        $('.img-element-facture').remove()
    })
};
