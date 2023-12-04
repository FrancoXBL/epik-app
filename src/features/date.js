export function date() {
    const fecha = new Date();
    const dia = String(fecha.getDate()).padStart(2, '0');
    const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11, por eso se suma 1
    const anio = String(fecha.getFullYear()).slice(-0); // Obtiene los últimos dos dígitos del año
  
    return `${anio}-${mes}-${dia}`;
  }