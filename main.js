let parrafo;


class Persona{
    constructor(id,nombre, edad, direccion) {
        this.id = id;
        this.nombre = nombre;
        this.edad   = edad;
        this.direccion  = direccion;
    }
}
const arrayA = [];

    const getValueP = () =>{
    let monto = parseInt( document.getElementById("montoSolicitar").value); 
    let cuotas = parseInt( document.getElementById("cantidadCuotas").value);
        if(cuotas<=12){
            parrafo=(monto*1.3)/cuotas;

        }
        if(cuotas<=24 && cuotas>12){
            parrafo=(monto*1.5)/cuotas;

        }
        if(cuotas<=36 && cuotas>24){
            parrafo=(monto*2)/cuotas;

        }

    
    document.getElementById("valorCuota").innerHTML = parrafo; 
    }
const getPersona = () =>{
    let id = arrayA.length;
    let nombre = document.getElementById("nombre").value
    let edad = document.getElementById("edad").value
    let direccion = document.getElementById("direccion").value
    arrayA.push(new Persona(id,nombre,edad,direccion));
    console.log(arrayA);




}
for (const Persona of arrayA) {
    let alerta = alert("  Nombre:  " + Persona.nombre + ".  Edad:  " + Persona.edad + ".  Direccion:  "+ Persona.calle + "\n");
   
    
}
function Insert_Data() {
    var table = document.getElementById("datas");
    table.innerHTML="";
    var tr="";
    for (const Persona of arrayA) {
       tr+='<tr>';
       tr+='<td>'+Persona.id+'</td>'+'<td>'+Persona.nombre+'</td>'+'<td>'+Persona.edad+'</td>'+'<td>'+Persona.direccion+'</td>'
       tr+='</tr>'
  
    }
    table.innerHTML+=tr;
    //Help......  
  }

