export function HistorialVentasAddGastos({ gastos }){
    return (
        <div>
            <label htmlFor="">Ingresar Gastos:</label>
            <input type="number" />
            <button>Sumar Gasto</button>

            <p>Gastos Totales diarios: {gastos}</p>
        </div>
    )
}