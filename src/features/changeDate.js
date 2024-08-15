export function modificarFecha(fechaStr) {
    // Convertir la cadena de fecha en un objeto Date
    const fecha = new Date(fechaStr);
    // Restar 1 día
    fecha.setDate(fecha.getDate() - 1);

    // Formatear el día, mes y año
    const dia = String(fecha.getDate()).padStart(2, '0');
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const anio = String(fecha.getFullYear());

    // Devolver la fecha en formato YYYY-MM-DD
    return `${anio}-${mes}-${dia}`;
}