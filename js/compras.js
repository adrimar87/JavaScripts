$(".logo").animate({  left:'300px',
                        //opacity:'0.7',
                        height:'120px',
                        width:'150px'   }, //1er parámetro propiedades
                        "slow",            //2do parámetro duración 
                        );
            

var precio=0;
var totalCompra=0;
var MontoCompra=0;
let totalimp=0;
var paint=0;
const impuesto=21/100;
const descuento=15/100;
var contador=0;
var miNombre = [];
var miPrecio = [];
var miMedida = [];
var tamanio=0;
var tamanio2=0;
var tamanio3=0;
var tamanio4=0;
var totale=0;
var promo=0;
 
  
//asocio precio pintura 

const pinturas = [{ id: 1,  nombre: "Volcano", precio: 1000, medida:"Mediano" },
{  id: 2,  nombre: "La playa", precio: 2500 , medida:"Mediano"},
{  id: 3,  nombre: "El camino"  , precio: 5400, medida:"Grande"},
{  id: 4,  nombre: "Atardecer" , precio: 3200, medida:"Pequeño"},
{  id: 5,  nombre: "Luna enramada" , precio: 2700, medida:"Mediano"},
{  id: 6,  nombre: "Desierto" , precio: 3300, medida:"Pequeño"}];
// Recorremos el array con for..of


for (const pintura of pinturas) {
    //Por cada producto además de los datos agregamos un botón 
    $("#selectPaint").append(`<div>                
                        <h4 style="font-family:cursive;  color: teal" ;>  Producto: ${pintura.nombre}</h4>
                        <b style="font-family:cursive;  color: teal" ;> $ ${pintura.precio}</b>
                        <button id="btn${pintura.id}">Comprar</button>
                        </div>`);
                    
    //Asociamos el evento a botón recién creado.
    $(`#btn${pintura.id}`).on('click', function () {
      
        paint=pintura.nombre;
        price=pintura.precio;
      
       paint.textcontent=contador;//guardo los clicks de compra
       contador++;
              
       miNombre.push(paint);
       miPrecio.push(price); 
       miMedida.push(pintura.medida);        
    });
}

//calculo impuesto
 function calImpuesto(totalimp)
{   
    totalimp=parseInt((totale))*impuesto;
    return totalimp;
}  
//cantidad y nombre de la pintura
function nomePaint()
{   
    let txt = miNombre.filter((item,index)=>{
        return miNombre.indexOf(item) === index;
      })
    
    let nome=("Compraste "+ contador+" pinturas Arte ECO: "+ txt);
    localStorage.setItem("nome",JSON.stringify(txt));
    $('#nome').html(nome); 
    
}

 //verifico si clasifica para descuento
function promoPaint()
{  
    tamanio4=miMedida.length ;
   
    for (i=0;i<tamanio4;i++){ 
         if(miMedida[i]=="Grande" || miMedida[i]=="Pequeño")
         { 
           promo=totale*descuento   ;
           let promocion=("Felicitaciones !!! por la comprar de arte tamaño "+miMedida[i]+ " te ganas $"+promo+" de descuento");
           localStorage.setItem("descu",JSON.stringify(promo));
           $('#descu').html(promocion);
         }        
     }
     
}

//calcula la compra total
function compra()
    {   
         tamanio=miPrecio.length ;
    
        //sumarizo compra
        for (i=0;i<tamanio;i++){ 
            totale=totale+ miPrecio[i]     
         }
        tamanio4=miMedida.length ;
        for (i=0;i<tamanio4;i++){ 
            if(miMedida[i]=="Grande" || miMedida[i]=="Pequeño")
            { 
            promo=totale*descuento   ;
            }  
         }

        totalCompra=totale+calImpuesto(totalimp)-promo;
        let info=("Total compra: $"+totalCompra);
        localStorage.setItem("totales",JSON.stringify(totalCompra));
        $('#totales').html(info);
    }


//detalle de la compra
function detalle(){
    let total=("Total pintura: $"+totale);
    let imp=("Total impuestos: $"+calImpuesto());
   
    localStorage.setItem("totalPin",JSON.stringify(total));
    localStorage.setItem("imposto",JSON.stringify(imp));
    $('#totalPin').html(total);
    $('#imposto').html(imp);
}   

//muestro total compra y detalle
$(document).ready(function(){
    $("p").fadeOut(); 
   });
   
$('#boton').prepend('<button id="btnjQuery">Click</button>');

$('#btnjQuery').click(function()
{    
    nomePaint();
    compra();
    detalle();
    promoPaint();
    $("p").slideDown(1000);
    $("p").delay(25000)
    $("p").slideUp(1000);

     //vacio el array asi cuando de click de nuevo no sumarice
    tamanio=miPrecio.length ;
        for (i=0;i<tamanio;i++){ 
            miPrecio.pop(i);         
         }
    tamanio2=miNombre.length ;
        for (i=0;i<tamanio;i++){    
            miNombre.pop(i); 
            miMedida.pop(i);        
         }
    totalCompra=0;
    totale=0;
    contador=0;
    promo=0;
        
}

);
 

//tomo los datos cliente
var datosCliente=function()
{
    var nombre=document.getElementById("nombre").value;
    if(nombre=="" || nombre.length <5){alert("Ingrese un Nombre")
    }else{localStorage.setItem("nombre",JSON.stringify(nombre));}

    var correo=document.getElementById("correo").value;
    if(correo=="" || (!correo.includes("@"))){alert("Ingrese un e-Mail" )
    }else{localStorage.setItem("correo",JSON.stringify(correo));} 

    var phone=parseInt(document.getElementById("phone").value);
    if(isNaN (phone) ){
        alert("El telefono debe ser numeros o esta vacio")
    }else{localStorage.setItem("phone",phone);}

    var metodoPago=document.getElementById("pago").value;
    localStorage.setItem("metodoPago",JSON.stringify(metodoPago));

   
    factura.reset();
    
}



//localStorage.clear();


