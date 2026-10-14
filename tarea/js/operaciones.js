// Cálculo dinámico del promedio usando el operador rest (...)
export const calcularPromedio = (...notas) => {
    const sumatoria = notas.reduce((acumulador, notaActual) => acumulador + notaActual, 0);
    return sumatoria / notas.length;
  };
  
  // Evaluación de estado con parámetro por defecto
  export const evaluarEstado = (promedio, notaMinima = 13) => 
    promedio >= notaMinima ? "Aprobado" : "Desaprobado";
  
  // Función exportada por defecto encargada de armar el reporte individual
  const generarReporteIndividual = (estudiante) => {
    const { nombre, notas } = estudiante;
    const promedioFinal = calcularPromedio(...notas);
    return `${nombre}: ${promedioFinal.toFixed(1)} - ${evaluarEstado(promedioFinal)}`;
  };
  
  export default generarReporteIndividual;