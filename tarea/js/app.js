import { curso, estudiantes } from "./datos.js";
import reporte, { promedio } from "./calculos.js";

const nuevo = { ...estudiantes[0], nombre: "Ana María" };
const todos = [...estudiantes, nuevo];

console.log(`Curso: ${curso}`);
document.querySelector("#curso-nombre").textContent = curso;

const ul = document.querySelector("#reportes");

todos.forEach((est) => {
  const repTexto = reporte(est);
  console.log(repTexto);
  
  const li = document.createElement("li");
  li.textContent = repTexto;
  ul.appendChild(li);
});
