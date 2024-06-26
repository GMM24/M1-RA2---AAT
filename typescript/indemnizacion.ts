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

class Indemnizacion {
    private sueldo: number;
    private tiempotrabajado: number;
    private mesestrabajados: number;
    private bono: number;
    private aguinaldo: number;
    private salariopendiente: number;
    private deudasocobros: number;
    private resultado: number;


    public asignarSueldo(valor: number) {
        this.sueldo = valor;
    }
    public asignarTiempo(valor: number){
        this.tiempotrabajado = valor;
    }
    public asignarMeses(valor: number){
        this.mesestrabajados = valor;  
    }
    public asignarBono(valor: number){
        this.bono = valor;
    }
    public asignarAguinaldo(valor: number) {
        this.aguinaldo = valor;
    }
    public asignarSalario(valor: number){
        this.salariopendiente = valor;
    }
    public asignarDeudas(valor: number){
        this.deudasocobros = valor;
    }
    public obtenerIndemnizacion(){
        this.resultado = (this.sueldo * this.tiempotrabajado) + (this.bono) + (this.aguinaldo) + (this.salariopendiente) - (this.deudasocobros);
        return "Indemnización: " + this.resultado.toFixed(2);
    }
    
}
const indemnizacion = new Indemnizacion();
let divResultado = document.getElementById('resultado') as HTMLInputElement;
const btnResultados = document.getElementById('btnCalcular') as HTMLButtonElement;
btnResultados.addEventListener('click', Datos);

function obtenerDatos(){
    indemnizacion.asignarSueldo(parseFloat((document.getElementById('sueldo-base') as HTMLInputElement).value));
    indemnizacion.asignarTiempo(parseFloat((document.getElementById('tiempo-trabajando') as HTMLInputElement).value));
    indemnizacion.asignarMeses(parseFloat((document.getElementById('meses-trabajando') as HTMLInputElement).value));
    indemnizacion.asignarBono(parseFloat((document.getElementById('bonoProporcional') as HTMLInputElement).value));
    indemnizacion.asignarAguinaldo(parseFloat((document.getElementById('aguinaldoProporcional') as HTMLInputElement).value))
    indemnizacion.asignarSalario(parseFloat((document.getElementById('salarioPendiente') as HTMLInputElement).value));
    indemnizacion.asignarDeudas(parseFloat((document.getElementById('deudas-cobros') as HTMLInputElement).value));

}
function Datos(){
    obtenerDatos(),
    divResultado.textContent = indemnizacion.obtenerIndemnizacion();
}


