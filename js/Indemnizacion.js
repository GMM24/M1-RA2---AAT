// class Empleado {
//     constructor(
//         public sueldoBase: number,
//         public aniosTrabajados: number,
//         public mesesTrabajados: number,
//         public salarioPendiente: number,
//         public deudas: number
//     ) {}
//     calcularIndemnizacion(): number {
//         const bono14Proporcional = this.sueldoBase / 12 * this.mesesTrabajados;
//         const aguinaldoProporcional = this.sueldoBase / (12 * this.mesesTrabajados);
//         const indemnizacionBruta = (this.sueldoBase * this.aniosTrabajados) + bono14Proporcional + aguinaldoProporcional + this.salarioPendiente;
//         const indemnizacionNeta = indemnizacionBruta - this.deudas;
//         return indemnizacionNeta;
//     }
// }
// const formulario = document.getElementById('formularioIndemnizacion') as HTMLFormElement;
// const resultado = document.getElementById('resultado') as HTMLDivElement;
// formulario.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const sueldoBase = parseFloat(document.getElementById('sueldoBase').value);
//     const aniosTrabajados = parseFloat(document.getElementById('aniosTrabajados').value);
//     const mesesTrabajados = parseFloat(document.getElementById('mesesTrabajados').value);
//     const salarioPendiente = parseFloat(document.getElementById('salarioPendiente').value);
//     const deudas = parseFloat(document.getElementById('deudas').value);
//     const empleado = new Empleado(sueldoBase, aniosTrabajados, mesesTrabajados, salarioPendiente, deudas);
//     const indemnizacion = empleado.calcularIndemnizacion();
//     resultado.textContent = `La indemnización neta es de: ${indemnizacion.toFixed(2)}`;
// });
var Indemnizacion = /** @class */ (function () {
    function Indemnizacion() {
    }
    Indemnizacion.prototype.asignarSueldo = function (valor) {
        this.sueldo = valor;
    };
    Indemnizacion.prototype.asignarTiempo = function (valor) {
        this.tiempotrabajado = valor;
    };
    Indemnizacion.prototype.asignarMeses = function (valor) {
        this.mesestrabajados = valor;
    };
    Indemnizacion.prototype.asignarBono = function (valor) {
        this.bono = valor;
    };
    Indemnizacion.prototype.asignarAguinaldo = function (valor) {
        this.aguinaldo = valor;
    };
    Indemnizacion.prototype.asignarSalario = function (valor) {
        this.salariopendiente = valor;
    };
    Indemnizacion.prototype.asignarDeudas = function (valor) {
        this.deudasocobros = valor;
    };
    Indemnizacion.prototype.obtenerIndemnizacion = function () {
        this.resultado = (this.sueldo * this.tiempotrabajado) + (this.bono) + (this.aguinaldo) + (this.salariopendiente) - (this.deudasocobros);
        return "Indemnización: " + this.resultado.toFixed(2);
    };
    return Indemnizacion;
}());
var indemnizacion = new Indemnizacion();
var divResultado = document.getElementById('resultado');
var btnResultados = document.getElementById('btnCalcular');
btnResultados.addEventListener('click', Datos);
function obtenerDatos() {
    indemnizacion.asignarSueldo(parseFloat(document.getElementById('sueldo-base').value));
    indemnizacion.asignarTiempo(parseFloat(document.getElementById('tiempo-trabajando').value));
    indemnizacion.asignarMeses(parseFloat(document.getElementById('meses-trabajando').value));
    indemnizacion.asignarBono(parseFloat(document.getElementById('bonoProporcional').value));
    indemnizacion.asignarAguinaldo(parseFloat(document.getElementById('aguinaldoProporcional').value));
    indemnizacion.asignarSalario(parseFloat(document.getElementById('salarioPendiente').value));
    indemnizacion.asignarDeudas(parseFloat(document.getElementById('deudas-cobros').value));
}
function Datos() {
    obtenerDatos(),
        divResultado.textContent = indemnizacion.obtenerIndemnizacion();
}
