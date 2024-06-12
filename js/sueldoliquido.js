var SueldoLiquido = /** @class */ (function () {
    function SueldoLiquido() {
    }
    SueldoLiquido.prototype.asignarSalario = function (valor) {
        this.salario = valor;
    };
    SueldoLiquido.prototype.asignarBonificacion = function (valor) {
        this.bonificacion = valor;
    };
    SueldoLiquido.prototype.asignarComision = function (valor) {
        this.comisiones = valor;
    };
    SueldoLiquido.prototype.asignarAhorros = function (valor) {
        this.ahorro = valor;
    };
    SueldoLiquido.prototype.asignarIgss = function () {
        this.igss = this.salario * 0.0483;
    };
    SueldoLiquido.prototype.asignarPrestamos = function (valor) {
        this.prestamos = valor;
    };
    SueldoLiquido.prototype.Ganado = function () {
        this.resultado = this.salario + this.comisiones + this.bonificacion;
        return "Total Ganado: " + this.resultado.toFixed(2);
    };
    SueldoLiquido.prototype.Descuentos = function () {
        this.resultado = this.ahorro + this.igss + this.prestamos;
        return "Total descuentos: " + this.resultado.toFixed(2);
    };
    SueldoLiquido.prototype.obtenerSueldoLiquido = function () {
        this.resultado = (this.salario + this.comisiones + this.bonificacion) - (this.ahorro + this.igss + this.prestamos);
        return "Sueldo líquido: " + this.resultado.toFixed(2);
    };
    SueldoLiquido.prototype.OperacionIgss = function () {
        this.resultado = this.salario * 0.0483;
        return "IGSS: " + this.resultado.toFixed(2);
    };
    return SueldoLiquido;
}());
var sueldoLiquido = new SueldoLiquido();
var divResultado = document.getElementById('resultado');
var ganado = document.getElementById('totalGanado');
var descuento = document.getElementById('totalDescuentos');
var calculoigss = document.getElementById('igss');
function obtenerDatos() {
    sueldoLiquido.asignarIgss();
    sueldoLiquido.asignarSalario(parseFloat(document.getElementById('salario').value));
    sueldoLiquido.asignarBonificacion(parseFloat(document.getElementById('bonificacion').value));
    sueldoLiquido.asignarComision(parseFloat(document.getElementById('comisiones').value));
    sueldoLiquido.asignarAhorros(parseFloat(document.getElementById('ahorro').value));
    sueldoLiquido.asignarPrestamos(parseFloat(document.getElementById('prestamos').value));
}
function Totales() {
    obtenerDatos();
    ganado.textContent = sueldoLiquido.Ganado();
    calculoigss.textContent = sueldoLiquido.OperacionIgss();
    descuento.textContent = sueldoLiquido.Descuentos();
    divResultado.textContent = sueldoLiquido.obtenerSueldoLiquido();
}
