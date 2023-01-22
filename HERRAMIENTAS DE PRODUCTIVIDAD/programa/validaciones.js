$("input.contra").on("click", function validate(){

if ($("#inputPassword").val().length < 1  )
{
    $("p.imformacion").addClass("alert alert-danger");
    $("p.imformacion").html("debe de rellenar el campo del contraseña");

     return false;

}
if ($("#inputPassword").val().length < 9  )
{
    $("p.imformacion").addClass("alert alert-danger");
    $("p.imformacion").html("la contraseña solo debe contener 8 coracteres");

     return false;

}
if($("#inputPassword").val().indexOf(" ") !== -1)
{

    $("p.imformacion").addClass("alert alert-danger");
    $("p.imformacion").html("la contraseña no puede tener caracteres en blanco");
    
    return false;
}

let  m = $("#inputPassword").val();
var n = m.includes("*" );
var n2 = m.includes("+" );



if(n == false  && n2 == false)
{

    $("p.imformacion").addClass("alert alert-danger");
    $("p.imformacion").html("la contraseña debe terner (* , +)  al menos");
    
    return false;
  
}

})
