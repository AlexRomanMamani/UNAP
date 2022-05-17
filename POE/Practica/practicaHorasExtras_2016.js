var salarioSemanal= 0;
var pagoHorasExtras= 0;
var pagoNormal= 0;
var horasTrabajadas= 0;
var horasExtras= 0;
const JornadaDeTrabajo= 45;
const ValorHoraExtra= 120;
const ValorHoraNormal= 100

function myFunction() {
    var horasTrabajadas = prompt("Ingrese el total de sus horas trabajadas esta semana", "45");

    if (horasTrabajadas != null & horasTrabajadas > JornadaDeTrabajo) {
        horasExtras= horasTrabajadas-JornadaDeTrabajo;
        pagoHorasExtras= horasExtras*ValorHoraExtra;
        pagoNormal= JornadaDeTrabajo*ValorHoraNormal;
        salarioSemanal= pagoHorasExtras+pagoNormal;
        document.getElementById("demoHoras").innerHTML =
        "Horas Trabajadas: " + horasTrabajadas;
        document.getElementById("demoSalario").innerHTML =
        "Salario Semanal: " + salarioSemanal;       
    } else {
        salarioSemanal= horasTrabajadas*ValorHoraNormal;
        document.getElementById("demoHoras").innerHTML =
        "Horas Trabajadas: " + horasTrabajadas;
        document.getElementById("demoSalario").innerHTML =
        "Salario Semanal: " + salarioSemanal;  
    }
}

