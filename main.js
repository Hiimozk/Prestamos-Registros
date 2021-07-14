let parrafo;


class Persona{
    constructor(id,nombre, edad, direccion) {
        this.id = id;
        this.nombre = nombre;
        this.edad   = edad;
        this.direccion  = direccion;
    }
}
function deleteRow(btn) {
    
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
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
    let id = arrayA.length+1;
    let nombre = document.getElementById("nombre").value
    let edad = document.getElementById("edad").value
    let direccion = document.getElementById("direccion").value
    arrayA.push(new Persona(id,nombre,edad,direccion));
    console.log(arrayA);




}
for (const Persona of arrayA) {
    let alerta = alert("  Nombre:  " + Persona.nombre + ".  Edad:  " + Persona.edad + ".  Direccion:  "+ Persona.calle + "\n");
   
    
}
/* function Insert_Data() {
    var table = document.getElementById("datas");
    table.innerHTML="";
    var tr="";
    for (const Persona of arrayA) {
       tr+='<tr>';
       tr+='<td>'+Persona.id+'</td>'+'<td>'+Persona.nombre+'</td>'+'<td>'+Persona.edad+'</td>'+'<td>'+Persona.direccion+'</td>'+'<td>'+'<button type="button" class="btn btn-danger" value="Delete" onclick="deleteRow(this)" >Eliminar</button>' +'</td>'
       tr+='</tr>'
  
    }
    table.innerHTML+=tr;
    //Help......  
  } */

  const mostrarinfo =() =>{
    $('#info').fadeToggle(1000);

  }
  $(document).ready(function(){
    $("#myTable").dynamicTable({
    columns: [{
            text: "Nombre",
            key: "name"
        },
        {
            text: "Edad",
            key: "age"
        },
        {
            text: "Genero",
            key: "gender"
        },
    ],
    data: [{
            name: 'Oscar Nilson',
            age: 30,
            gender: 'M',
        },
        {
            name: 'Juana del Monte',
            age: 24,
            gender: 'F',
        },
    ],
        getControl: function (columnKey) {
            if (columnKey == "age") {
                return '<input type="number" class="form-control" />';
            }
      
            if (columnKey == "gender") {
                return '<select class="form-control"><option value="M">Male</option><option value="F">Female</option></select>';
            }
      
            return '<input type="text" class="form-control" />';
        },
      

      
        showActionColumn: true,
      
      
        buttons: {
          addButton: '<button type="button" value="Add" class="btn btn-primary" style="background-color: #0d6efd;">Agregar</button>',
          cancelButton: '<button type="button" value="Cancel" class="btn btn-primary" style="background-color: #dc3545;">Cancelar</button>',
          deleteButton: '<button type="button" value="Delete" class="btn btn-danger" style="background-color: #dc3545;">Borrar</button>',
          editButton: '<button type="button" value="Edit" class="btn btn-primary" style="background-color: #0d6efd;">Editar</button>',
          saveButton: '<button type="button" value="Save" class="btn btn-success" style="background-color: #198754;">Guardar</button>',
        },
     
      
    });
});
let data = $("#myTable").getTableData();

    

