$(".logo").animate({  left:'300px',
                        //opacity:'0.7',
                        height:'120px',
                        width:'150px'   }, //1er parámetro propiedades
                        "slow",            //2do parámetro duración 
                        );



function Pintura(nombre, precio)
{
    this.nombre=nombre;
    this.precio=precio;
}
const pint1= new Pintura("volcano",1000);
const pint2= new Pintura("la playa",2500);
const pint3= new Pintura("el camino",5400);
const pint4= new Pintura("atardecer",3200);
const pint5= new Pintura("luna enramada",2700);
const pint6= new Pintura("desierto",3300);



const tamanio=["Grande","Mediano","Pequeño"];
const diametro=[15,12.5,11];

const mesure=[
              {id:1,md:tamanio[1],cm:diametro[1],name:pint1.nombre},
              {id:2,md:tamanio[1],cm:diametro[1],name:pint2.nombre},
              {id:3,md:tamanio[0],cm:diametro[0],name:pint3.nombre}];
mesure.push({id:4,md:tamanio[2],cm:diametro[2],name:pint4.nombre});
mesure.push({id:5,md:tamanio[1],cm:diametro[1],name:pint5.nombre});
mesure.push({id:6,md:tamanio[2],cm:diametro[2],name:pint6.nombre});






 let boton =document.getElementById("btnMedida")
 boton.onclick = () =>{for (const producto of mesure) {



    let contenedor = document.createElement("div");
    //Definimos el innerHTML del elemento con una plantilla de texto
    contenedor.innerHTML = `<p style="font-family:cursive; margin-left: 200px; color: teal" ;>  Nombre: ${producto.name}</p>
              <p style="font-family:cursive; margin-left: 200px ; color: teal" >  Medida: ${producto.md}  ${producto.cm} cm </p>
              `;
    document.body.appendChild(contenedor);

    $("p").delay(6000)
    $("p").slideUp(1000);
    }} 

   