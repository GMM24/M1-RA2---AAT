class SueldoLiquido{
    private salario : number ;
    private bonificacion : number ;
    private comisiones : number ;
    private ahorro : number ;
    private igss: number ;
    private prestamos : number ;
    private resultado:number ;


    public asignarSalario(valor:number){
        this.salario = valor;
    }
    public asignarBonificacion(valor:number){
        this.bonificacion = valor;
    }
    public asignarComision(valor:number){
        this.comisiones = valor;
    }
    public asignarAhorros(valor:number){
        this.ahorro = valor;
    }
    public asignarIgss(){
        this.igss = this.salario * 0.0483;

    }
    public asignarPrestamos(valor:number){
        this.prestamos = valor;
    }
    public Ganado(){
        this.resultado = this.salario +this.comisiones + this.bonificacion;
        return "Total Ganado: " + this.resultado.toFixed(2);
    }
    public Descuentos(){
        this.resultado = this.ahorro + this.igss + this.prestamos;
        return "Total descuentos: " + this.resultado.toFixed(2);
    }
    public  obtenerSueldoLiquido(){
        this.resultado = (this.salario +this.comisiones + this.bonificacion)  - (this.ahorro + this.igss + this.prestamos);
        return "Sueldo líquido: " + this.resultado.toFixed(2);
    }
    public OperacionIgss(){
        this.resultado = this.salario * 0.0483;
        return "IGSS: " + this.resultado.toFixed(2);
    }
}
const sueldoLiquido = new SueldoLiquido();
let divResultado = document.getElementById('resultado') as HTMLParagraphElement;
const ganado = document.getElementById('totalGanado') as HTMLParagraphElement;
const descuento = document.getElementById('totalDescuentos') as HTMLParagraphElement;
const calculoigss= document.getElementById('igss') as HTMLParagraphElement;
const btnTotales = document.getElementById ('btnCalcular') as HTMLButtonElement;
btnTotales.addEventListener('click', Totales);

function obtenerDatos(){
    sueldoLiquido.asignarIgss();
    sueldoLiquido.asignarSalario(parseFloat((document.getElementById('salario') as HTMLInputElement).value));
    sueldoLiquido.asignarBonificacion(parseFloat((document.getElementById('bonificacion') as HTMLInputElement).value));
    sueldoLiquido.asignarComision(parseFloat((document.getElementById('comisiones') as HTMLInputElement).value));
    sueldoLiquido.asignarAhorros(parseFloat((document.getElementById('ahorro') as HTMLInputElement).value));
    sueldoLiquido.asignarPrestamos(parseFloat((document.getElementById('prestamos') as HTMLInputElement).value));
}

function Totales(){
    obtenerDatos();
    ganado.textContent = sueldoLiquido.Ganado();
    calculoigss.textContent = sueldoLiquido.OperacionIgss();
    descuento.textContent = sueldoLiquido.Descuentos();
    divResultado.textContent = sueldoLiquido.obtenerSueldoLiquido();



}

