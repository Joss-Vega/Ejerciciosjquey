$("#myTable").hide(); // lo primero a suceder
function ShowHideElement(){
    let text = "";
    if($("#myButton").text() === "Show form"){
        $("#myTable").fadeIn(800);
        text= "Hide form";
    }else{
        $("#myTable").slideToggle(900);
        text= "Show form";
    }//prueba y error pero lo logre
    $("#myButton").html(text);
    
}
$(document).ready(function(){     
    $("#myTable").dynamicTable({
          //columnas iniciales    
          columns: [{
                text: "Nombre",
                key: "name"
            },
            {
                text: "Camiseta",
                key: "camiseta"
            },
            {
                text: "Género",
                key: "gender"
            },
            {
                text: "País",
                key: "pais"
            },        
          ],
   
          //jugadores de la seleccion
          data: [{
                name: 'Christian Cueva',
                camiseta: 08,
                gender: 'M',
                pais: 'Perú'    
            },
            {
                name: 'Luis Advincula',
                camiseta: 17,
                gender: 'M',
                pais: 'Perú'
            },
            {
                name: 'Paolo Guerrero',
                camiseta: 09,
                gender: 'M',
                pais: 'Perú'
            }
          ],
  
          //botones
          buttons: {
              addButton: '<input type="button" value="Nuevo" class="btn btn-success" />',
              editButton: '<input type="button" value="Editar" class="btn btn-info" />',
              cancelButton: '<input type="button" value="Cancelar" class="btn btn-primary" />',
              deleteButton: '<input type="button" value="Borrar" class="btn btn-warning" />',
          },
          showActionColumn: true,         
  
      });	    
  });    
$('.card-grid').flip({trigger:'hover'});