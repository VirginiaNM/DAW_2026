const inputs = document.querySelectorAll("input");
const form = document.querySelector("#form");
const title = document.querySelector("#title");


const validar = {

nombre:v =>/^[A-Za-zÁÉÍÓÚáéíóúÑñ ]{7,}$/.test(v) && v.includes(" ") || "Ingrese nombre y apellido",

email:v =>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || "Email inválido",

password:v =>/^(?=.*[A-Za-zÁÉÍÓÚáéíóúÑñ])(?=.*\d).{8,}$/.test(v) || "Debe tener letras y números",

password2:v =>v == password.value || "Las contraseñas no coinciden",

edad:v =>v >= 18 || "Debe ser mayor de edad",

telefono:v =>/^\d{7,}$/.test(v) || "Teléfono inválido",

direccion:v =>/^(?=.*[A-Za-zÁÉÍÓÚáéíóúÑñ])(?=.*\d)(?=.* ).{5,}$/.test(v) || "Dirección inválida",

ciudad:v =>v.length >=3 || "Ciudad inválida",

postal:v =>v.length >=3 || "Código postal inválido",

dni:v =>/^\d{7,8}$/.test(v) || "DNI inválido"

};

function revisar(input){

    let resultado = validar[input.id](input.value.trim());
    input.nextElementSibling.innerText = resultado === true ? "" : resultado;
    input.className = resultado === true ? "ok" : "error";
    return resultado === true;

}

inputs.forEach(input=>{
    input.addEventListener("blur",()=>{
        revisar(input);

    });

    input.addEventListener("focus",()=>{
        input.nextElementSibling.innerText="";
        input.className="";

    });

});

nombre.addEventListener("keydown", () => {
    setTimeout(() => {
        title.innerText =
            nombre.value
                ? "HOLA " + nombre.value.toUpperCase()
                : "HOLA";
    });

});

form.addEventListener("submit", e => {
    e.preventDefault();


    let correcto = true;
    let datos = "";


    inputs.forEach(input => {

        if (!revisar(input)) {
            correcto = false;
        }

        datos += `${input.placeholder}: ${input.value}\n`;

    });


    alert(
        correcto
            ? datos
            : "Hay errores en el formulario"
    );


});