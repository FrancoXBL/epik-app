export default function printTicket(id) {
  const root = document.getElementById("root");
  // Obtener todos los elementos del cuerpo
  const elementosDelBody = root.children;

  // Iterar sobre los elementos y ocultarlos excepto el elemento deseado
  for (let i = 0; i < elementosDelBody.length; i++) {
    const elemento = elementosDelBody[i];
    if (elemento.id !== id) {
      elemento.style.display = "none";
    } else {
      elemento.style.display = "block"; // o el valor que desees para mostrar el elemento específico
    }
  }

  window.print();

  // Iterar sobre los elementos y ocultarlos excepto el elemento deseado
  for (let i = 0; i < elementosDelBody.length; i++) {
    const elemento = elementosDelBody[i];
    if (elemento.id !== id) {
      elemento.style.display = "block";
    } else {
      elemento.style.display = "none"; // o el valor que desees para mostrar el elemento específico
    }
  }
}
